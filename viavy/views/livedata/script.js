const convert = require('xml-js');

function getUrl(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

let url1 = "https://api.entur.io/realtime/v1/rest/vm";
let url = getUrl(url1);

let result1 = convert.xml2json(url, {compact: true, spaces: 4});

console.log(result1);