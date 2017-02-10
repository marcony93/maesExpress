'use strict'
function http(theUrl,data,callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("post", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(data));
}

function httpGet(theUrl,callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open("get", theUrl, true); // true for asynchronous 
    xmlHttp.send();
}