//---------------------------------------------importaciones e inicializaciones-----------------------------
import { Lista_Admin } from "./Estructuras.js"
import { ListaCircular_usuarios } from "./Estructuras.js";
import { Matriz } from "./Matriz_ortogonal.js";
import { Matriz_d } from "./matriz_dispersa.js";
import { Arbol } from "./Arbol_binario.js";


console.log("si funciona")
var arbol_autores = new Arbol()

var matriz_ortogonal = new Matriz()
matriz_ortogonal.llenarmatrizortogonal()
matriz_ortogonal.graficar_matriz()

//var prueba = new Matriz_d()
//prueba.Insertar(3,2, "hola")
//prueba.Insertar(4,1, "Luis")
//prueba.Insertar(4,10, "Pedro")
//prueba.Insertar(15,2, "Jorge")
//prueba.Insertar(4,2, "Ale")


var list = new Lista_Admin()
list.InsertarAlFinal("Wllfred Perez", "2354168452525", "Wilfred", "123", "+502 (123) 123-4567")

var lista_usuarios = new ListaCircular_usuarios()

//-----------------------------------------------------Pagina home--------------------------------------------
document.getElementById("ingresar_admin").onclick = Ingresar_admin;
document.getElementById("ingresar_usuario").onclick = Ingresar_usuario;

document.getElementById("Libros").onclick = Libros;
document.getElementById("Autores").onclick = Autores;

function Libros(){
    document.getElementById("options").style.display = "none"
    document.getElementById("Menu").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "none"
    document.getElementById("top").style.display = "none"

    document.getElementById("Botones").style.display = "block"
    document.getElementById("lista_libros").style.display = "block"
    document.getElementById("lista_ascendente").style.display = "block"
    document.getElementById("lista_descendente").style.display = "block"
    document.getElementById("Codigo_Burbuja").style.display = "block"
    document.getElementById("Codigo_Quicksort").style.display = "block"
    document.getElementById("LibrosToHome").style.display ="block"


}


function Autores(){


    document.getElementById("options").style.display = "none"
    document.getElementById("Menu").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "none"
    document.getElementById("top").style.display = "none"

    document.getElementById("Lista_Autores").style.display = "block"
    document.getElementById("Arbol").style.display = "block"
    document.getElementById("Buscador").style.display = "block"
    document.getElementById("autorToHome").style.display = "block"
    document.getElementById("Biografia").style.display = "block"
}

function Ingresar_usuario(){
    var user_usuario = document.getElementById("usuario_cliente").value
    var contra_usuario = document.getElementById("contraseña_cliente").value

    var encontrado = lista_usuarios.Buscar_usuario(user_usuario, contra_usuario)

    if(encontrado){
        document.getElementById("options").style.display = "none"
        document.getElementById("Menu").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("admin").style.display = "none"
        document.getElementById("fondo").style.display = "none"
        document.getElementById("top").style.display = "none"

        document.getElementById("libros_fantasia").style.display = "block"
        document.getElementById("libros_thriller").style.display = "block"
        document.getElementById("Home").style.display = "block"



    } else{
        alert("Usuario no encontrado")
    }

}

function Ingresar_admin(){
    var user_admin = document.getElementById("usuario_admin").value
    var contra_admin = document.getElementById("contraseña_admin").value


    var encontrado = list.Buscar(user_admin, contra_admin)

    if (encontrado){
        document.getElementById("options").style.display = "none"
        document.getElementById("Menu").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("admin").style.display = "none"
        document.getElementById("fondo").style.display = "none"
        document.getElementById("top").style.display = "none"

        document.getElementById("botones").style.display = "block"
        document.getElementById("cola").style.display = "block"
        document.getElementById("lista").style.display = "block"
        document.getElementById("Menu").style.display = "block"

    } else{
        alert("Administrador no encontrado")
    }
    

}




//---------------------------------------------------Pagina Administrador-------------------------------

document.getElementById("Menu").onclick = Regresar;


const Input_usuarios = document.getElementById("Cargar_usuarios");
const Input_libros = document.getElementById("Cargar_libros");
const Input_autores = document.getElementById("Cargar_autores")

function LeerJsonUsuarios(){

    var ruta = Input_usuarios.value
    var nombre_archivo_usuarios = ruta.replace(/^.*[\\\/]/, ''); 

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', nombre_archivo_usuarios, true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            //console.log(datos)



            for(let item of datos){  //recorro los datos del json

                if(item.rol == "Administrador"){
                    list.InsertarAlFinal(item.nombre_completo, item.dpi, item.nombre_usuario, item.contrasenia, item.telefono)
                    console.log(item.rol)
                    console.log(item.nombre_usuario)
                    console.log(item.contrasenia)
                    console.log("-----------------")

                }
                else if (item.rol == "Usuario"){
                    lista_usuarios.InsertarAlFinal(item.nombre_completo, item.dpi, item.nombre_usuario, item.contrasenia, item.telefono)
                    console.log(item.rol)
                    console.log(item.nombre_usuario)
                    console.log(item.contrasenia)
                    console.log("-------------")
                }
               
            }

            var tarjeta = document.getElementById("lista")
            

            var contenido = lista_usuarios.Imprimir()

            tarjeta.innerHTML = contenido
        
        }
    }


}

function LeerJsonLibros(){
    var ruta_libros = Input_libros.value
    var nombre_archivo_libros = ruta_libros.replace(/^.*[\\\/]/, '')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', nombre_archivo_libros, true)

    xhttp.send()

    xhttp.onreadystatechange = function(){
        

        if(this.readyState == 4 && this.status == 200){
            let datos_libros = JSON.parse(this.responseText)

            for(let item of datos_libros){

                if(item.categoria == "Fantasia"){
    
                    //meto a lista para vista libros
    
                    //meto a matriz ortogonal
                    //console.log(typeof(item.columna))
                    matriz_ortogonal.Insertar_dato(item.nombre_libro, item.cantidad, item.categoria, item.columna, item.fila)
    
                }
    
            }
    
            matriz_ortogonal.graficar_matriz()

        }

    }


}

function LeerJsonAutores(){
    var ruta = Input_autores.value
    var Nombre_ruta = ruta.replace(/^.*[\\\/]/, '')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', Nombre_ruta)

    xhttp.send()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)

            for(let item of datos){
                //console.log(item.nombre_autor)
                //meto datos al arbol
                arbol_autores.insert(item.nombre_autor, item.dpi, item.biografia)


                //creo tarjetas para meterlas a la pagina
                
                
            }
            var tarjeta_autor = document.getElementById("Lista_Autores")
                
            var contenido_autor = arbol_autores.tarjetas()
            tarjeta_autor.innerHTML = contenido_autor
            arbol_autores.Graficar()
            alert("Autores cargados correctamente")
            
        }
    }

}


Input_usuarios.addEventListener('change', LeerJsonUsuarios)
Input_libros.addEventListener('change', LeerJsonLibros)
Input_autores.addEventListener('change', LeerJsonAutores)


function Regresar(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"

    document.getElementById("botones").style.display = "none"
    document.getElementById("cola").style.display = "none"
    document.getElementById("lista").style.display = "none"
    document.getElementById("Menu").style.display = "none"




}

//-----------------------Pagina cliente-----------------------

document.getElementById("Home").onclick = Regresar_de_cliente;

function Regresar_de_cliente(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"

    document.getElementById("libros_fantasia").style.display = "none"
    document.getElementById("libros_thriller").style.display = "none"
    document.getElementById("Home").style.display = "none"
    
}

//-------------------------Autores---------------------------//

document.getElementById("autorToHome").onclick = Regresar_de_autor;

function Regresar_de_autor(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"

    document.getElementById("Lista_Autores").style.display = "none"
    document.getElementById("Arbol").style.display = "none"
    document.getElementById("Buscador").style.display = "none"
    document.getElementById("autorToHome").style.display = "none"
    document.getElementById("Biografia").style.display = "none"

}

document.getElementById("Buscar_autor").onclick = Buscar_autor;

function Buscar_autor(){
    var nombre_autor = document.getElementById("nombre_autor").value
    var tarjeta_biografia = arbol_autores.Buscar_autor(nombre_autor)
    var tarjeta_dos = document.getElementById("Biografia")

    tarjeta_dos.innerHTML = tarjeta_biografia


}


//------------------------Libros-----------------------

document.getElementById("LibrosToHome").onclick = Regresar_de_libro

function Regresar_de_libro(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"

    document.getElementById("Botones").style.display = "none"
    document.getElementById("lista_libros").style.display = "none"
    document.getElementById("lista_ascendente").style.display = "none"
    document.getElementById("lista_descendente").style.display = "none"
    document.getElementById("Codigo_Burbuja").style.display = "none"
    document.getElementById("Codigo_Quicksort").style.display = "none"
    document.getElementById("LibrosToHome").style.display ="none"

}