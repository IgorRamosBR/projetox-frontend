function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="inline-block";
  
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
 var modelo=document.getElementById("modelo_row"+no);
  
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
 var modelo_data=modelo.innerHTML;
  
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
 modelo.innerHTML="<input type='text' id='modelo_text"+no+"' value='"+modelo_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;
 var modelo_val=document.getElementById("modelo_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;
 document.getElementById("modelo_row"+no).innerHTML=modelo_val;

 document.getElementById("edit_button"+no).style.display="inline-block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
 var new_modelo=document.getElementById("new_modelo").value;
  
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td id='modelo_row"+table_len+"'>"+new_modelo+"</td><td><button type='button' id='edit_button"+table_len+"' value='Editar' class='edit button button-primary button-square button-small' onclick='edit_row("+table_len+")'><i class='fa fa-pencil-square-o'></i></button> <button type='button' id='save_button"+table_len+"' value='Salvar' class='save button-primary button-square button-small' onclick='save_row("+table_len+")'><i class='fa fa-floppy-o'></i></button> <button type='button' value='Excluir' class='delete button button-primary button-square button-small' onclick='delete_row("+table_len+")'><i class='fa fa-trash'></i></button</td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
 document.getElementById("new_modelo").value="";
}