/* Msisp.js - by C. Desmarchelier - Nov.2017*/
mdefault = "index.md"   // variable à modifier pour préciser le fichier md affiché par défaut, chemin compris à partir du fichier index.html
basemd = "." ;        // variable à modifier pour préciser le répertoire racine par défaut des fichiers md

titleinit = document.getElementsByTagName("TITLE")[0].innerText ;
baseinit = document.getElementsByTagName("BASE")[0].href ;
function ajax(meth,src,a,init) {  
  var req = new XMLHttpRequest();
  req.open(meth, src, true);
  req.setRequestHeader("Content-type", "text/plain");
  req.onreadystatechange = function() 
  { 
    if (req.readyState == 4) {
      if (req.status == 200) { 
        /*alert(marked(req.responseText));*/
        basemd = req.responseURL ;
		if (init != 1) {
		  window.history.replaceState( {} , '', "#!" + req.responseURL);
		}
		document.getElementById("main").innerHTML=marked(req.responseText);
		idx = -1;
		for (i = 0; i < 3; i++) { 
          idx = req.responseURL.indexOf('/',idx+1);
        }
        file   = req.responseURL.substring(idx);
		folder = file.substring(0,file.lastIndexOf('/'));
		document.getElementById("folder").href = req.responseURL.substring(0,req.responseURL.lastIndexOf('/')) ;
		heads=document.getElementsByTagName("H1");
		if (heads.length == 0) heads=document.getElementsByTagName("H2");
		if (heads.length == 0) heads=document.getElementsByTagName("H3");
		if (heads.length == 0) heads=document.getElementsByTagName("H4");
		if (heads.length == 0) {
		  document.getElementsByTagName("TITLE")[0].innerText = document.getElementById("main").innerText.substring(0,30);
		} else { 
		  document.getElementsByTagName("TITLE")[0].innerText = heads[0].innerText;
		}
		path = document.location.origin + document.location.pathname ;
		if (path.substring(0,path.lastIndexOf('/'))==req.responseURL.substring(0,req.responseURL.lastIndexOf('/'))) {
		    document.getElementById("dropdown").style.display = 'none';
        } else {
		    document.getElementById("dropdown").style.display = 'inline-block';
		}
      } else {
        alert("Erreur http "+req.status); 
      }
    }
  }
  req.send(JSON.stringify(a));
}
function init() {
  doc=document.location.hash;
  if (doc.slice(-1)=="/") doc=doc+"index.md";
  if (doc.length < 3) {
    ajax("GET",mdefault,"",1);
  } else  if (doc.substring(0,2) == '#!') {
    document.getElementsByTagName("BASE")[0].href = basemd ;
    ajax("GET",doc.substring(2),"",0);
    document.getElementsByTagName("BASE")[0].href = baseinit ;
  }
}
