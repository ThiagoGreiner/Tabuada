// Seção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicatorNumber) => {
    //Limpando o campo da multiplication-operations
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        //Criando o código HTML
        const template = `
            <div class="row">
                <div class="operation">${number} X ${i} = </div>
                <div class="result">${result}</div>
            </div>
            `;
        
        //Este objeto permite transferir o código acima para HTML
        const parser = new DOMParser();

        //Selecionando o parser e com a ajuda do metodo parseFromString, estamos transformando a string em HTML
        const htmlTemplate = parser.parseFromString(template, "text/html");

        //Selecionando a row criada acima
        const row = htmlTemplate.querySelector(".row");

        //Adicionando a row em todos elementos filhos do loop
        multiplicationTable.appendChild(row);
    }

    //Trazendo em formato de texto o numero multiplicado
    multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    //Previnindo que a página recarregue
    e.preventDefault();

    //Criando uma variavel e trazendo o valor da variavel numberImput para ela, o + serve para deixar o valor inteiro
    const multiplicationNumber = +numberInput.value;

    //Criando uma variavel e trazendo o valor da variavel multiplicationInput para ela, o + serve para deixar o valor inteiro
    const multiplicatorNumber = +multiplicationInput.value;

    //Verificando se ambas variaveis estão retornando o valor como esperado
    if(!multiplicationNumber || !multiplicatorNumber) return;


    createTable(multiplicationNumber, multiplicatorNumber);

})