var db = firebase.firestore();


function mostrar(dato) {
 switch(dato) {
    case "ver":
        document.getElementById('form').style.display = "block";
        document.getElementById('visualizar').style.display = "none";
        break;
        case "ocultar":
        document.getElementById('form').style.display = "none";
        document.getElementById('visualizar').style.display = "block";
        document.getElementById('botong').style.display = "block";
        document.getElementById('botone').style.display = "none";

        break; 
 }


}

function guardar() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var empresa = document.getElementById('empresa').value;
    
    var controla = 0;
    var controlb = 0;
    var controlc = 0; 
    var controld = 0;
    var controle = 0;
    
    if (nombre != "") {
    controla = 1;
    document.getElementById('errora').style.display = "none";
    document.getElementById('nombre').style.border = "2px solid #808080"
    }else {
    document.getElementById('errora').style.display = "block";
    document.getElementById('nombre').style.border = "2px solid red"
    }
    
    if (apellido != "") {
        controlb = 1;
        document.getElementById('errorb').style.display = "none";
        document.getElementById('apellido').style.border = "2px solid #808080"
        }else {
        document.getElementById('errorb').style.display = "block";
        document.getElementById('apellido').style.border = "2px solid red"
        }
    
        if (email != "") {
            controlc = 1;
            document.getElementById('errorc').style.display = "none";
            document.getElementById('email').style.border = "2px solid #808080"
            }else {
            document.getElementById('errorc').style.display = "block";
            document.getElementById('email').style.border = "2px solid red"
            }
    
            if (telefono != "") {
                controld = 1;
                document.getElementById('errord').style.display = "none";
                document.getElementById('telefono').style.border = "2px solid #808080"
                }else {
                document.getElementById('errord').style.display = "block";
                document.getElementById('telefono').style.border = "2px solid red"
                }
    
                if (empresa != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('empresa').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('empresa').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){
    
var nombrep = document.getElementById('nombre').value;
var apellidop = document.getElementById('apellido').value;
var emailp = document.getElementById('email').value;
var telefonop = parseFloat(document.getElementById('telefono').value);
var empresap = document.getElementById('empresa').value;

db.collection("proveedor").add({
    nombre: nombrep,
    apellido: apellidop,
    email: emailp,
    telefono: telefonop,
    empresa: empresap
})
.then((docRef) => {
    alert('el proveedor se guardo correctamente');
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    alert('Error');
    console.error("Error adding document: ", error);
});
document.getElementById('form').style.display = "none";
document.getElementById('visualizar').style.display = "block";

document.getElementById('nombre').value = "";
document.getElementById('apellido').value = "";
document.getElementById('email').value = "";
document.getElementById('telefono').value = "";
document.getElementById('empresa').value = "";

    }}


function leerproveedor() {
db.collection("proveedor") .onSnapshot((querySnapshot) => {
    document.getElementById('proveedor').innerHTML = "";
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
       // console.log(`Nombre => ${doc.data().nombre}`);
      document.getElementById('proveedor').innerHTML += `
            <tr>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().apellido}</td>
            <td>${doc.data().email}</td>
            <td>${doc.data().telefono}</td>
            <td>${doc.data().empresa}</td>
            <td></td>
            <td>
            <span class="fas fa-pen" id="iconed" title="Editar" onclick="editar_form('${doc.id}', '${doc.data().nombre}',
            '${doc.data().apellido}', '${doc.data().email}', '${doc.data().telefono}', '${doc.data().empresa}')"></span>
            <span class="fas fa-trash" id="iconbo" title="borrar" onclick="pregunta_el('${doc.id}')"></span>
            </td>
            </tr>
`;

    });
});

}

function pregunta_el(pid){
    if (confirm("Esta seguro de eliminar el registro")){
        eliminar(pid);
}else {
        console.log("no se borro");
    }
}

leerproveedor();

function eliminar(pid) {
    db.collection("proveedor").doc(pid).delete().then(() => {
        alert("se ha eliminado el proveedor")
        console.log("Document successfully deleted!");
    }).catch((error) => {
        alert("error");
        console.error("Error removing document: ", error);
    });
}

function editar_form(pid, nombre, apellido, email, telefono, empresa) {
    document.getElementById('pid').value = pid;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('email').value = email;
    document.getElementById('telefono').value = telefono;
    document.getElementById('empresa').value = empresa;
mostrar('ver');
document.getElementById('botong').style.display = "none";
document.getElementById('botone').style.display = "block";


}   

function validar(){

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var empresa = document.getElementById('empresa').value;
    
    var controla = 0;
    var controlb = 0;
    var controlc = 0; 
    var controld = 0;
    var controle = 0;
    
    if (nombre != "") {
    controla = 1;
    document.getElementById('errora').style.display = "none";
    document.getElementById('nombre').style.border = "2px solid #808080"
    }else {
    document.getElementById('errora').style.display = "block";
    document.getElementById('nombre').style.border = "2px solid red"
    }
    
    if (apellido != "") {
        controlb = 1;
        document.getElementById('errorb').style.display = "none";
        document.getElementById('apellido').style.border = "2px solid #808080"
        }else {
        document.getElementById('errorb').style.display = "block";
        document.getElementById('apellido').style.border = "2px solid red"
        }
    
        if (email != "") {
            controlc = 1;
            document.getElementById('errorc').style.display = "none";
            document.getElementById('email').style.border = "2px solid #808080"
            }else {
            document.getElementById('errorc').style.display = "block";
            document.getElementById('email').style.border = "2px solid red"
            }
    
            if (telefono != "") {
                controld = 1;
                document.getElementById('errord').style.display = "none";
                document.getElementById('telefono').style.border = "2px solid #808080"
                }else {
                document.getElementById('errord').style.display = "block";
                document.getElementById('telefono').style.border = "2px solid red"
                }
    
                if (empresa != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('empresa').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('empresa').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){


    
    var pid = document.getElementById('pid').value;
    var nombrep = document.getElementById('nombre').value;
    var apellidop = document.getElementById('apellido').value;
    var emailp = document.getElementById('email').value;
    var telefonop = parseFloat(document.getElementById('telefono').value);
    var empresap = document.getElementById('empresa').value;

var productoref = db.collection("proveedor").doc(pid);
// set the "capital" fieldof the city 'DC'
    return productoref.update({
        nombre: nombrep,
        apellido: apellidop,
        email : emailp,
        telefono: telefonop,
        empresa: empresap

    })
    .then(function() {
     console.log("document successfully updated!");
        document.getElementById('botone').style.display = "block";

        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefono').value = "";
        document.getElementById('empresa').value = "";
                     mostrar('ocultar');
         
        
    
    })
        .catch(function(error){
            
          
});

    }
    }