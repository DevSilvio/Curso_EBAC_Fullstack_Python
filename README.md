<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    <div class="container">
        <h1>Formulário HTML</h1>
        <h2>Validação JavaScript</h2>
        <form id="formulario">
            <input type="number" id="campoA" required placeholder="Campo A">
            <input type="number" id="campoB" required placeholder="Campo B">
            <button type="submit" id="validar">Validar</button>
        </form>
        <p id="message"></p>
    </div>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        .container {
            max-width: 650px;
            width: 50%;
            margin: 20vh auto;
        }
        h1,h2 {
            margin-bottom: 5px;
            text-align: center;
        }
        form {
            margin-top: 12px;
            margin-left: 28vh;
        }
        input, button {
            display: block;
            margin-bottom: 8px;
            padding: 8px;
            width: 61%;
        }
        button {
            background-color: rgb(101, 151, 245);
            border: none;
            width: 61%;
        }
        button:hover {
            background-color: rgb(38, 104, 228);
            color: #fff;
            border: none;
        }
    </style>
</body>
</html>