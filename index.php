<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Ionic Icons -->
    <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="assets/css/app.css"/>

    <title>CRUD-PHP-AJAX</title>

</head>
<body>

<div class="container">
    <div class="text-center h2 text-uppercase py-5 mt-2 text-white titre-page">crud-php-ajax</div>

    <div id="monForm" class="monForm mx-auto" style="display: none">
        <div class="titreForm">
            gestion stagiaire
        </div>
        <form id="formStagiaire">
            <input type="hidden" id="id"/>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="prenom" name="prenom" placeholder="Entrez votre prénom"/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email"
                       placeholder="Entrez votre email de contact"/>
            </div>
            <div class="form-group">
                <label for="ville">Ville</label>
                <input type="text" class="form-control" id="ville" name="prenom"
                       placeholder="Entrez votre ville de residence"/>
            </div>
            <div>
                <button id="btn-valider" type="submit" class="btn btn-valider">Valider</button>
                <button id="btn-modifier" type="submit" class="btn btn-valider">Modifier</button>
                <button type="reset" class="btn btn-secondary float-right">Reset</button>
            </div>
        </form>
    </div>

    <div id="stagiaires" class="mt-5">
        <button id="btn-ajouter" class="btn btn-valider">
            <ion-icon name="person-add-outline"></ion-icon>
            Ajouter
        </button>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Prénom</th>
                <th scope="col">Email</th>
                <th scope="col">Ville</th>
                <th scope="col" colspan="2">Actions</th>
            </tr>
            </thead>
            <tbody id="stagiaires-body"></tbody>
        </table>
    </div>
</div>


<!-- Optional JavaScript; choose one of the two! -->
<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/app.js" defer></script>
</body>
</html>