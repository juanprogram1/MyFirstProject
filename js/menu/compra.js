var db = firebase.firestore();


var compra = {};
var pedido = [];


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

function validar() {

    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var codigo = document.getElementById('codigo').value;
    
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
    
    if (marca != "") {
        controlb = 1;
        document.getElementById('errorb').style.display = "none";
        document.getElementById('marca').style.border = "2px solid #808080"
        }else {
        document.getElementById('errorb').style.display = "block";
        document.getElementById('marca').style.border = "2px solid red"
        }
    
        if (precio != "") {
            controlc = 1;
            document.getElementById('errorc').style.display = "none";
            document.getElementById('precio').style.border = "2px solid #808080"
            }else {
            document.getElementById('errorc').style.display = "block";
            document.getElementById('precio').style.border = "2px solid red"
            }
    
            if (stock != "") {
                controld = 1;
                document.getElementById('errord').style.display = "none";
                document.getElementById('stock').style.border = "2px solid #808080"
                }else {
                document.getElementById('errord').style.display = "block";
                document.getElementById('stock').style.border = "2px solid red"
                }
    
                if (codigo != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('codigo').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('codigo').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){


var nombrep = document.getElementById('nombre').value;
var marcap = document.getElementById('marca').value;
var preciop = parseFloat(document.getElementById('precio').value);
var stockp = parseFloat(document.getElementById('stock').value);
var proveedorp = document.getElementById('codigo').value;

db.collection("compra").add({
    nombre: nombrep,
    marca: marcap,
    precio: preciop,
    stock: stockp,
    codigo: proveedorp
})
.then((docRef) => {
    alert('el compra se guardo correctamente');
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    alert('Error');
    console.error("Error adding document: ", error);
});
document.getElementById('form').style.display = "none";
document.getElementById('visualizar').style.display = "block";

document.getElementById('nombre').value = "";
document.getElementById('marca').value = "";
document.getElementById('precio').value = "";
document.getElementById('stock').value = "";
document.getElementById('codigo').value = "";

    }   
     }

function selcompra() {

    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var codigo = document.getElementById('codigo').value;
    var fecha = document.getElementById('fecha').value;

    var controla = 0;
    var controlb = 0;
    var controlc = 0; 
    var controld = 0;
    var controle = 0;
    var controlf = 0;
    
    if (nombre != "") {
    controla = 1;
    document.getElementById('errora').style.display = "none";
    document.getElementById('nombre').style.border = "2px solid #808080"
    }else {
    document.getElementById('errora').style.display = "block";
    document.getElementById('nombre').style.border = "2px solid red"
    }
    
    if (marca != "") {
        controlb = 1;
        document.getElementById('errorb').style.display = "none";
        document.getElementById('marca').style.border = "2px solid #808080"
        }else {
        document.getElementById('errorb').style.display = "block";
        document.getElementById('marca').style.border = "2px solid red"
        }
    
        if (precio != "") {
            controlc = 1;
            document.getElementById('errorc').style.display = "none";
            document.getElementById('precio').style.border = "2px solid #808080"
            }else {
            document.getElementById('errorc').style.display = "block";
            document.getElementById('precio').style.border = "2px solid red"
            }
    
            if (stock != "") {
                controld = 1;
                document.getElementById('errord').style.display = "none";
                document.getElementById('stock').style.border = "2px solid #808080"
                }else {
                document.getElementById('errord').style.display = "block";
                document.getElementById('stock').style.border = "2px solid red"
                }
    
                if (codigo != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('codigo').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('codigo').style.border = "2px solid red"
                    }
    
                        if (fecha != "") {
                                controlf = 1;
                                document.getElementById('errorf').style.display = "none";
                                document.getElementById('fecha').style.border = "2px solid #808080"
                                }else {
                                document.getElementById('errorf').style.display = "block";
                                document.getElementById('fecha').style.border = "2px solid red"
                                }
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1 && controlf == 1){


    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = parseInt(document.getElementById('precio').value);
    var stock = parseInt(document.getElementById('stock').value);
    var codigo = document.getElementById('codigo').value;
    var fecha = parseInt(document.getElementById('fecha').value);
        

this.compra = {

nombre: nombre,
marca: marca,
precio: precio,
stock: stock,
codigo: codigo,
fecha: fecha,
subtotal: (precio * stock)


}

console.log(this.compra)  


this.pedido.push(this.compra);

this.compra = {};

document.getElementById('nombre').value = "";
document.getElementById('marca').value = "";
document.getElementById('precio').value = "";
document.getElementById('stock').value = "";
document.getElementById('codigo').value = "";    
document.getElementById('fecha').value = ""; 


db.collection("compra").add({
    nombre: nombre,
    marca: marca,
    precio: precio,
    stock: stock,
    codigo: codigo,
    fecha: fecha,
    subtotal: (precio * stock)
})
.then((docRef) => {
    alert ('la compra se guardo correctamente');
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    alert('Error');
    console.error("Error adding document: ", error);
});

//document.getElementById('form').style.display = "none";
//document.getElementById('visualizar').style.display = "block";

document.getElementById('nombre').value = "";
document.getElementById('marca').value = "";
document.getElementById('precio').value = "";
document.getElementById('stock').value = "";
document.getElementById('codigo').value = "";
document.getElementById('fecha').value = "";
}}


function leerproducto() {
db.collection("compra") .onSnapshot((querySnapshot) => {
    document.getElementById('concompra').innerHTML = "";
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
       // console.log(`Nombre => ${doc.data().nombre}`);
      document.getElementById('concompra').innerHTML += `
            <tr>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().marca}</td>
            <td>${doc.data().precio}</td>
            <td>${doc.data().stock}</td>
            <td>${doc.data().codigo}</td>
            <td>${doc.data().fecha}</td>
            <td>${doc.data().subtotal}</td>
            <td></td>   
            <td>
            <span class="fas fa-pen" id="iconed" title="Editar" onclick="editar_form('${doc.id}', '${doc.data().nombre}',
            '${doc.data().marca}', '${doc.data().precio}', '${doc.data().stock}', '${doc.data().codigo}', '${doc.data().fecha}')"></span>
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

leerproducto();

function eliminar(pid) {
    db.collection("compra").doc(pid).delete().then(() => {
        alert("se ha eliminado el compra")
        console.log("Document successfully deleted!");
    }).catch((error) => {
        alert("error");
        console.error("Error removing document: ", error);
    });
}

function editar_form(pid, nombre, marca, precio, stock, codigo) {
    document.getElementById('pid').value = pid;
    document.getElementById('nombre').value = nombre;
    document.getElementById('marca').value = marca;
    document.getElementById('precio').value = precio;
    document.getElementById('stock').value = stock;
    document.getElementById('codigo').value = codigo;
    document.getElementById('fecha').value = fecha;
mostrar('ver');
document.getElementById('botong').style.display = "none";
document.getElementById('botone').style.display = "block";


}   

function validar(){
    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var codigo = document.getElementById('codigo').value;
    var fecha = document.getElementById('fecha').value;

    var controla = 0;
    var controlb = 0;
    var controlc = 0; 
    var controld = 0;
    var controle = 0;
    var controlf = 0;

    
    if (nombre != "") {
    controla = 1;
    document.getElementById('errora').style.display = "none";
    document.getElementById('nombre').style.border = "2px solid #808080"
    }else {
    document.getElementById('errora').style.display = "block";
    document.getElementById('nombre').style.border = "2px solid red"
    }
    
    if (marca != "") {
        controlb = 1;
        document.getElementById('errorb').style.display = "none";
        document.getElementById('marca').style.border = "2px solid #808080"
        }else {
        document.getElementById('errorb').style.display = "block";
        document.getElementById('marca').style.border = "2px solid red"
        }
    
        if (precio != "") {
            controlc = 1;
            document.getElementById('errorc').style.display = "none";
            document.getElementById('precio').style.border = "2px solid #808080"
            }else {
            document.getElementById('errorc').style.display = "block";
            document.getElementById('precio').style.border = "2px solid red"
            }
    
            if (stock != "") {
                controld = 1;
                document.getElementById('errord').style.display = "none";
                document.getElementById('stock').style.border = "2px solid #808080"
                }else {
                document.getElementById('errord').style.display = "block";
                document.getElementById('stock').style.border = "2px solid red"
                }
    
                if (codigo != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('codigo').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('codigo').style.border = "2px solid red"
                    }
                        if (fecha != "") {
                            controlf = 1;
                            document.getElementById('errorf').style.display = "none";
                            document.getElementById('fecha').style.border = "2px solid #808080"
                            }else {
                            document.getElementById('errorf').style.display = "block";
                            document.getElementById('fecha').style.border = "2px solid red"
                            }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1 && controlf == 1){


    


    var pid = document.getElementById('pid').value;
    var nombrep = document.getElementById('nombre').value;
    var marcap = document.getElementById('marca').value;
    var preciop = parseFloat(document.getElementById('precio').value);
    var stockp = parseFloat(document.getElementById('stock').value);
    var proveedorp = document.getElementById('codigo').value;
    var fechap = parseFloat(document.getElementById('fecha').value);

var productoref = db.collection("compra").doc(pid);
// set the "capital" fieldof the city 'DC'
    return productoref.update({
        nombre: nombrep,
        marca: marcap,
        precio: preciop,
        stock: stockp,
        codigo: proveedorp,
        fecha: fechap,
        subtotal: (preciop * stockp)


    })
    .then(function() {
        console.log("document successfully updated!");
        document.getElementById('botone').style.display = "block";

        document.getElementById('nombre').value = "";
        document.getElementById('marca').value = "";
        document.getElementById('precio').value = "";
        document.getElementById('stock').value = "";
        document.getElementById('codigo').value = "";
        document.getElementById('fecha').value = "";
                     mostrar('ocultar');
         
        
    
    })
        .catch(function(error){
            
          
});

        }   
    }

