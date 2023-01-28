
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo inform
    var pacienteForm = obtemPacDoForm(form);

//valida paciente
    var erros = validaPaciente(pacienteForm);
    console.log(erros);
    if (erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(pacienteForm)

    form.reset();
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
})

function adicionaPacienteNaTabela(pacienteForm) {
    var pacienteTr = montaTr(pacienteForm);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacDoForm(form){

    var pacienteForm = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return pacienteForm;

}

function montaTr(pacienteForm){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(pacienteForm.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pacienteForm.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pacienteForm.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pacienteForm.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pacienteForm.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(pacienteForm){

    var erros = [];

    if(pacienteForm.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(pacienteForm.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(pacienteForm.altura)) {
        erros.push("Altura é inválida");
    }
    
    if(pacienteForm.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(pacienteForm.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(pacienteForm.altura.length == 0){
        erros.push("O altura não pode ser em branco");
    }

    return erros;
}