'use strict'

function camposVacios(form)
{
    var d = document.getElementById(form).getElementsByClassName('noVacio');
    var confirm = false;
    for(var x=0; x<d.length; x++)
    {
        if(d[x].value == "")
         document.getElementById(d[x].id).className = String("form-control noVacio emptyAlert")
         else
         document.getElementById(d[x].id).className = String("form-control noVacio");
    }
    return confirm;
}