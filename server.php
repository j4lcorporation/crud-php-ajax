<?php

require_once 'functions/helper.php';

//On etablit la connexion a la BDD MariaDB
$connexion = db_connexion();

if (!empty($_GET["all"])) {
    $requete = "select * from stagiaire";
    try {
        $stagiaires = $connexion->query($requete)->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stagiaires, JSON_THROW_ON_ERROR);
    } catch (PDOException|JsonException $e) {
        $e->getMessage();
    }
}