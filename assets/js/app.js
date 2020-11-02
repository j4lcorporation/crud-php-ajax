$(document).ready(function () {
    //ici tout ce est executé par jQuery
    allStagiaires();

    $("#formStagiaire").on('submit', function (e) {
        //Desactive le comportement par defaut du formulaire
        e.preventDefault();
    });

    $("#btn-ajouter").click(function () {
        $("#monForm").show();
    })
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
                    <th scope="row">${stagiaire.id}</th>
                    <td>${stagiaire.prenom}</td>
                    <td>${stagiaire.email}</td>
                    <td>${stagiaire.ville}</td>
                    <td class="h3 text-info text-center">
                        <ion-icon name="create-outline"></ion-icon>
                    </td>
                    <td class="h3 text-danger text-center">
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>
                </tr>
                `
            )
        });
    });
}

