<?php

require_once 'functions/helper.php';

//On etablit la connexion a la BDD MariaDB
$connexion = db_connexion();

//On traite la requete : SELECT * FROM Stagiaire
if (!empty($_GET["all"])) {
    $requete = "select * from stagiaire";
    try {
        $stagiaires = $connexion->query($requete)->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stagiaires, JSON_THROW_ON_ERROR);
    } catch (PDOException|JsonException $e) {
        $e->getMessage();
    }
}

//On traite la requete : INSERT
if (!empty($_POST['insert'])) {
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];

    $requete = "insert into stagiaire(prenom, email, ville) VALUES (?, ?, ?)";

    try {
        $requetePreparee = $connexion->prepare($requete);
        $requetePreparee->execute([$prenom, $email, $ville]);
    } catch (Exception $exception) {
        $exception->getMessage();
    }
}

//On traite la requete : UPDATE
if (!empty($_POST['update'])) {
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];
    $id = $_POST['id'];

    $requete = "update stagiaire set prenom = ?, email= ?, ville= ? where id = ?";

    try {
        $requetePreparee = $connexion->prepare($requete);
        $requetePreparee->execute([$prenom, $email, $ville, $id]);
    } catch (Exception $exception) {
        $exception->getMessage();
    }
}

//On traite la requete : DELETE
if (!empty($_POST['delete'])) {
    $id = $_POST['id'];

    $requete = "delete from stagiaire where id = ?";

    try {
        $requetePreparee = $connexion->prepare($requete);
        $requetePreparee->execute([$id]);
    } catch (Exception $exception) {
        $exception->getMessage();
    }
}