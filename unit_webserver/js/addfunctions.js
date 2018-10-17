


var base = {
    "user":"Sami",
    "urls":[]    
};

function add_Url(){  
    base.urls[base.urls.length]=document.getElementById('url').value;
    var f = addLine();
    return false;
}


function addLine(){  
    var befhtml="<li class='list-group-item'>";
    var endhtml="</li>" ;
    var htmltext="";
    var indexy;
    for(indexy=0;indexy<base.urls.length;indexy++){
        htmltext=htmltext+befhtml+base.urls[indexy]+endhtml;
    };
    document.getElementById('plist').innerHTML = htmltext;
    return false;
}

