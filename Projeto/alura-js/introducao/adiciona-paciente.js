
function validaCampo(){
    
  event.preventDefault();

    var campoNome= document.querySelector("#nome");
    var campoPeso= document.querySelector("#peso");
    var campoAltura= document.querySelector("#altura");
    
    if(campoNome.value!="",campoPeso.value!="",campoAltura.value!=""){
    var pacienteNovo = "<tr class='paciente'>"+
    "<td class='info-nome'>"+campoNome.value+"</td>"+
    "<td class='info-peso'>"+campoPeso.value+"</td>"+
    "<td class='info-altura'>"+campoAltura.value+"</td>"+
   " <td class='info-imc'></td>"+
 "</tr>";

 var tabela= document.querySelector("table");
 tabela.innerHTML=tabela.innerHTML+pacienteNovo;
    }
   
 campoNome.value="";
 campoPeso.value="";
campoAltura.value="";

}