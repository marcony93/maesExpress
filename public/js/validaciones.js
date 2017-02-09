'use strict'

function camposVacios(form)
{

    var d = document.getElementById(form).getElementsByClassName('noVacio');
    for(var x=0; x<d.length; x++)
    {
            console.log(d[x].id)
        if(d[x].value == "")
         document.getElementById(d[x].id).className = String("form-control noVacio emptyAlert")
         else
         document.getElementById(d[x].id).className = String("form-control noVacio");
    }
}