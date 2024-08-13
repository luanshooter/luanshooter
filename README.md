<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora BRATVA</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator-container">
        <header class="calculator-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Logo BRATVA" class="logo">
            <h1>Calculadora BRATVA</h1>
        </header>
        <div class="calculator">
            <div class="product-selection">
                <label for="product">Selecione o Produto:</label>
                <select id="product">
                    <option value="15660" data-name="Algemas">Algemas - R$ 15.660</option>
                    <option value="32190" data-name="C4">C4 - R$ 32.190</option>
                    <option value="15660" data-name="Capuz">Capuz - R$ 15.660</option>
                    <option value="13050" data-name="Colete">Colete - R$ 13.050</option>
                    <option value="19140" data-name="Asa de Anjo">Asa de Anjo - R$ 19.140</option>
                    <option value="15660" data-name="Key Card">Key Card - R$ 15.660</option>
                    <option value="13050" data-name="LocPick">LocPick - R$ 13.050</option>
                    <option value="15660" data-name="Masterpick">Masterpick - R$ 15.660</option>
                    <option value="22620" data-name="Mochila Reforçada">Mochila Reforçada - R$ 22.620</option>
                    <option value="19140" data-name="Pendrive">Pendrive - R$ 19.140</option>
                    <option value="5220" data-name="Ticket">Ticket - R$ 5.220</option>
                    <option value="63000" data-name="Hk P7M10">Hk P7M10 - R$ 63.000</option>
                    <option value="3500" data-name="Mini de Hk P7M10 (20 unidades)">Mini de Hk P7M10 (20 unidades) - R$ 3.500</option>
                </select>
                <label for="quantity">Quantidade:</label>
                <input type="number" id="quantity" value="1" min="1">
                <button onclick="addProduct()">Adicionar Produto</button>
                <button class="clear-btn" onclick="clearCalculation()">Limpar Cálculo</button>
            </div>
            <div class="result">
                <h2>Itens Selecionados:</h2>
                <ul id="product-list"></ul>
                <h3>Total: R$ <span id="total">0</span></h3>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
