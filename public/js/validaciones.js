'use strict'

function camposVacios(form)
{
    var d = document.getElementById(form).getElementsByClassName('noVacio');
    var confirm = false;
    for(var x=0; x<d.length; x++)
    {
        if(d[x].value == "")
        {
            document.getElementById(d[x].id).className = String("form-control obligatorio noVacio emptyAlert")
            confirm = true;
        }
         else
         document.getElementById(d[x].id).className = String("form-control obligatorio noVacio");
    }
    return confirm;
}