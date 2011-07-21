var elem = $("#online_banking")[0];

elem.setAttribute("onclick", elem.getAttribute("onclick").replace(/window.open/, "document.location.href=") );