
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // extraindo inform
    var pacienteForm = obtemPacDoForm(form)

    //cria a tr e a td do paciente
    var pacienteTr = montaTr(pacienteForm)

    //adicionando o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
})

function obtemPacDoForm(form){

    var pacienteForm = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return pacienteForm

}

function montaTr(pacienteForm){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(pacienteForm.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pacienteForm.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pacienteForm.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pacienteForm.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pacienteForm.imc, "info-imc"));

    return pacienteTr
}

function montaTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}