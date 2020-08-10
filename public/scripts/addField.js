//encontrar o botão
document.querySelector("#add-time").addEventListener("click", cloneField)

//Duplicar os campos de horário
function cloneField(){

    //Seleciona seção a ser duplicada
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)

    //Limpa campos
    const fields = newFieldsContainer.querySelectorAll("input")
    fields.forEach(function(field){
        field.value = ""
    })

    //Exibe na pagina a duplicação
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)

}