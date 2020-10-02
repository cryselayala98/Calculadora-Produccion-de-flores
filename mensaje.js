/*
	json={
		tipo="success/warning/danger/dark"
		titulo="Un mensaje"
		cuerpo="Este es un mensajito bonito"
		avatar="random/skeleton/gato/..."
	}
*/
function mostrarMensajito(json) {    
	document.getElementById("mensaje-titulo").innerHTML=json.titulo;
	document.getElementById("mensaje-cuerpo").innerHTML=json.cuerpo;
        if(json.avatar!=null){
            document.getElementById("mensaje-avatar").src="images/"+json.avatar;
            document.getElementById("mensaje-avatar").style.display="initial";
        }else{
            document.getElementById("mensaje-avatar").style.display="none";
        }
	var mensaje=document.getElementById("mensaje");	
	var color="#fff";
	switch(json.tipo){
		case "dark":{
			color="#343a40";
			break;
		}
		case "success":{
			color="#28a745";
			break;
		}
		case "warning":{
			color="#ffc107";
			break;
		}
		case "danger":{
			color="#dc3545";
			break;
		}
		case "info":{
			color="#17a2b8";
			break;
		}
	}
	mensaje.style.backgroundColor=color;
	mensaje.style.opacity=1;
        document.getElementById("mensaje").style.right="20px";
	setTimeout(ocultarMensajito,5000);
}

function ocultarMensajito() {
	document.getElementById("mensaje").style.opacity=0;
        setTimeout(document.getElementById("mensaje").style.right="10000px",2000);
}