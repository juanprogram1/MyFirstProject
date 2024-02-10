var db = firebase.firestore();

var producto = {};
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
    var proveedor = document.getElementById('proveedor').value;
    
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
    
                if (proveedor != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('proveedor').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('proveedor').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){


var nombrep = document.getElementById('nombre').value;
var marcap = document.getElementById('marca').value;
var preciop = parseFloat(document.getElementById('precio').value);
var stockp = parseFloat(document.getElementById('stock').value);
var proveedorp = document.getElementById('proveedor').value;

db.collection("producto").add({
    nombre: nombrep,
    marca: marcap,
    precio: preciop,
    stock: stockp,
    proveedor: proveedorp
})
.then((docRef) => {
    alert('el producto se guardo correctamente');
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
document.getElementById('proveedor').value = "";

    }   
     }

function selproducto() {    

    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var proveedor = document.getElementById('proveedor').value;
    
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
    
                if (proveedor != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('proveedor').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('proveedor').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){


    
        

this.producto = {

nombre: nombre,
marca: marca,
precio: precio,
stock: stock,
proveedor: proveedor,
subtotal: (precio * stock)



}

//console.log(this.producto)  


this.pedido.push(this.producto);

this.producto = {};

document.getElementById('nombre').value = "";
document.getElementById('marca').value = "";
document.getElementById('precio').value = "";
document.getElementById('stock').value = "";
document.getElementById('proveedor').value = "";    

console.log(this.pedido)

db.collection("producto").add({
    nombre: nombre,
    marca: marca,
    precio: precio,
    stock: stock,
    proveedor: proveedor,
    subtotal: (precio * stock)
})
.then((docRef) => {
    alert('el producto se guardo correctamente');
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
document.getElementById('proveedor').value = "";

}}


function leerproducto() {
db.collection("producto") .onSnapshot((querySnapshot) => {
    document.getElementById('conproducto').innerHTML = "";
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
       // console.log(`Nombre => ${doc.data().nombre}`);
      document.getElementById('conproducto').innerHTML += `
            <tr>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().marca}</td>
            <td>${doc.data().precio}</td>
            <td>${doc.data().stock}</td>
            <td>${doc.data().proveedor}</td>
            <td>${doc.data().subtotal}</td>
            <td></td>   
            <td>
            <span class="fas fa-pen" id="iconed" title="Editar" onclick="editar_form('${doc.id}', '${doc.data().nombre}',
            '${doc.data().marca}', '${doc.data().precio}', '${doc.data().stock}', '${doc.data().proveedor}')"></span>
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
    db.collection("producto").doc(pid).delete().then(() => {
        alert("se ha eliminado el producto")
        console.log("Document successfully deleted!");
    }).catch((error) => {
        alert("error");
        console.error("Error removing document: ", error);
    });
}

function editar_form(pid, nombre, marca, precio, stock, proveedor) {
    document.getElementById('pid').value = pid;
    document.getElementById('nombre').value = nombre;
    document.getElementById('marca').value = marca;
    document.getElementById('precio').value = precio;
    document.getElementById('stock').value = stock;
    document.getElementById('proveedor').value = proveedor;
mostrar('ver');
document.getElementById('botong').style.display = "none";
document.getElementById('botone').style.display = "block";


}   

function validar(){
    var nombre = document.getElementById('nombre').value;
    var marca = document.getElementById('marca').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var proveedor = document.getElementById('proveedor').value;
    
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
    
                if (proveedor != "") {
                    controle = 1;
                    document.getElementById('errore').style.display = "none";
                    document.getElementById('proveedor').style.border = "2px solid #808080"
                    }else {
                    document.getElementById('errore').style.display = "block";
                    document.getElementById('proveedor').style.border = "2px solid red"
                    }
    
    if (controla == 1 && controlb == 1 && controlc == 1 && controld == 1 && controle == 1){


    


    var pid = document.getElementById('pid').value;
    var nombrep = document.getElementById('nombre').value;
    var marcap = document.getElementById('marca').value;
    var preciop = parseFloat(document.getElementById('precio').value);
    var stockp = parseFloat(document.getElementById('stock').value);
    var proveedorp = document.getElementById('proveedor').value;

var productoref = db.collection("producto").doc(pid);
// set the "capital" fieldof the city 'DC'
    return productoref.update({
        nombre: nombrep,
        marca: marcap,
        precio: preciop,
        stock: stockp,
        proveedor: proveedorp,
        subtotal: (preciop * stockp)


    })
    .then(function() {
        console.log("document successfully updated!");
        document.getElementById('botone').style.display = "block";

        document.getElementById('nombre').value = "";
        document.getElementById('marca').value = "";
        document.getElementById('precio').value = "";
        document.getElementById('stock').value = "";
        document.getElementById('proveedor').value = "";
                     mostrar('ocultar');
         
        
    
    })
        .catch(function(error){
            
          
});

        }   
    }