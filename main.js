document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';

    var table = document.querySelector('table');
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;
});