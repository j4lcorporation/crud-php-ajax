$(document).ready(function () {
    //ici tout ce est executé par jQuery
    allStagiaires();

    $("#formStagiaire").on('submit', function (e) {
        //Desactive le comportement par defaut du formulaire
        e.preventDefault();
    });

    //Permet d'afficher le formulaire ajout
    $("#btn-ajouter").on('click', function () {
        formAjout();
    });

    //Permet d'ajouter un stagiaire
    $("#btn-valider").on('click', function () {
        addStagiaire();
    });

    //Permet de modifier un stagiaire
    $("#btn-modifier").on('click', function () {
        updateStagiaire();
    });

});

/**
 * Recupere la liste de tous les stagiaires de la BDD
 */
function allStagiaires() {
    $.ajax({
        method: "GET",
        url: "server.php",
        data: {all: 1},
        dataType: "json"
    }).done(function (stagiaires) {
        $("#stagiaires-body").empty();
        stagiaires.forEach(stagiaire => {
            $("#stagiaires-body").append(
                `
                <tr>
                    <th scope="row" class="text-center">${stagiaire.id}</th>
                    <td class="prenom">${stagiaire.prenom}</td>
                    <td class="email">${stagiaire.email}</td>
                    <td class="ville">${stagiaire.ville}</td>
                    <td class="h3 text-info text-center"">
                        <span  id="modifier-${stagiaire.id}" onclick="edit(${stagiaire.id})">
                            <ion-icon name="create-outline"></ion-icon>
                        <span>
                    </td>
                    <td class="h3 text-danger text-center">
                        <span id="supprimer-${stagiaire.id}" onclick="supprimer(${stagiaire.id})">
                            <ion-icon name="trash-outline"></ion-icon>                        
                        </span>
                    </td>
                </tr>
                `
            )
        });
    });
    $("#stagiaires").show();
}

/**
 * Permet d'inserer un nouveau stagiaire en BDD
 */
function addStagiaire() {
    //On recupere les infos saisi par le user
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();

    //On effectue la requete vers le server
    $.ajax({
        method: "POST",
        url: "server.php",
        data: {insert: 1, prenom: prenom, email: email, ville: ville}
    }).done(function () {
        //En cas de succes, On vide les infos du formulaire
        $("#prenom").val('');
        $("#email").val('');
        $("#ville").val('');

        //On appelle la fonction allStagiaires
        allStagiaires();
    });

    //On masque le formulaire d'insertion
    $("#monForm").hide();
}

function formAjout() {
    $("#monForm").show();
    $("#btn-modifier").hide();
    $("#btn-valider").show();
    $("#stagiaires").hide();

    $("#prenom").val('');
    $("#email").val('');
    $("#ville").val('');


}

function formModifier() {
    $("#monForm").show();
    $("#btn-valider").hide();
    $("#btn-modifier").show();
    $("#stagiaires").hide();
}

function edit(id) {
    let prenom = $(`#modifier-${id}`).parent().siblings('.prenom').text();
    let email = $(`#modifier-${id}`).parent().siblings('.email').text();
    let ville = $(`#modifier-${id}`).parent().siblings('.ville').text();

    formModifier();

    $("#id").val(id);
    $("#prenom").val(prenom);
    $("#email").val(email);
    $("#ville").val(ville);
}

/**
 * Permet de mofifier un stagiaire en BDD
 */
function updateStagiaire() {
    //On recupere les infos saisi par le user
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();
    let id = $("#id").val();

    //On effectue la requete vers le server
    $.ajax({
        method: "POST",
        url: "server.php",
        data: {update: 1, prenom: prenom, email: email, ville: ville, id: id}
    }).done(function () {
        //En cas de succes, On vide les infos du formulaire
        $("#prenom").val('');
        $("#email").val('');
        $("#ville").val('');

        //On appelle la fonction allStagiaires
        allStagiaires();
    });

    //On masque le formulaire d'insertion
    $("#monForm").hide();
}

/**
 * Permet de supprimer un stagaire de la BDD
 * @param id
 */
function supprimer(id) {
//On effectue la requete vers le server
    $.ajax({
        method: "POST",
        url: "server.php",
        data: {delete: 1, id: id}
    }).done(function () {
        //En cas de succes, On vide les infos du formulaire
        $("#prenom").val('');
        $("#email").val('');
        $("#ville").val('');

        //On appelle la fonction allStagiaires
        allStagiaires();
    });
}