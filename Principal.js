//---------------------------------------------importaciones e inicializaciones-----------------------------
import { Lista_Admin } from "./Estructuras.js"
import { ListaCircular_usuarios } from "./Estructuras.js";
import { Matriz } from "./Matriz_ortogonal.js";
import { Arbol } from "./Arbol_binario.js";
import { lista_libros } from "./Lista_Libros.js";
import { Top } from "./lista_top.js";
import { Cola } from "./Cola_pendientes.js";

console.log("si funciona")
var arbol_autores = new Arbol()



var list_books = new lista_libros()

var matriz_ortogonal = new Matriz()
matriz_ortogonal.llenarmatrizortogonal()
matriz_ortogonal.graficar_matriz()

//var prueba = new Matriz_d()
//prueba.Insertar(3,2, "hola")
//prueba.Insertar(4,1, "Luis")
//prueba.Insertar(4,10, "Pedro")
//prueba.Insertar(15,2, "Jorge")
//prueba.Insertar(4,2, "Ale")

var lista_top = new Top()
var cola_pendientes = new Cola()

var list = new Lista_Admin()
list.InsertarAlFinal("Wllfred Perez", "2354168452525", "Wilfred", "123", "+502 (123) 123-4567")

var lista_usuarios = new ListaCircular_usuarios()


//---------------------------------Login-----------------------------------------

document.getElementById("Login_To_Home").onclick = back

function back(){
    document.getElementById("options").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"
    document.getElementById("grafica_top").style.display = "block"

    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("Login_To_Home").style.display = "none"

}



//-----------------------------------------------------Pagina home--------------------------------------------
document.getElementById("ingresar_admin").onclick = Ingresar_admin;
document.getElementById("ingresar_usuario").onclick = Ingresar_usuario;

document.getElementById("Login").onclick = Ingresar_Login;

function Ingresar_Login(){
    document.getElementById("options").style.display = "none"
    document.getElementById("Menu").style.display = "none"
    document.getElementById("fondo").style.display = "none"
    document.getElementById("top").style.display = "none"
    document.getElementById("grafica_top").style.display = "none"

    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("Login_To_Home").style.display = "block"
}

document.getElementById("Libros").onclick = Libros;
document.getElementById("Autores").onclick = Autores;

function Libros(){
    document.getElementById("options").style.display = "none"
    document.getElementById("Menu").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "none"
    document.getElementById("top").style.display = "none"
    document.getElementById("grafica_top").style.display = "none"

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
    document.getElementById("grafica_top").style.display = "none"

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
        //nodo usuario que ingreso al sistema
        
        document.getElementById("options").style.display = "none"
        document.getElementById("Menu").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("admin").style.display = "none"
        document.getElementById("fondo").style.display = "none"
        document.getElementById("top").style.display = "none"
        document.getElementById("grafica_top").style.display = "none"
        document.getElementById("Login_To_Home").style.display = "none"

        document.getElementById("libros_fantasia").style.display = "block"
        document.getElementById("libros_thriller").style.display = "block"
        document.getElementById("Home").style.display = "block"
        document.getElementById("disponibilidad").style.display = "block"
        document.getElementById("Cantidad_libros").style.display ="block"



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
        document.getElementById("grafica_top").style.display = "none"
        document.getElementById("Login_To_Home").style.display = "none"

        document.getElementById("botones").style.display = "block"
        document.getElementById("cola_pendiente").style.display = "block"
        document.getElementById("lista").style.display = "block"
        document.getElementById("Menu").style.display = "block"
        document.getElementById("grafica_lista_listas").style.display = "block"
        document.getElementById("grafica_cola").style.display = "block"

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

                list_books.insertarAlFinal(item.nombre_libro, item.isbn, item.nombre_autor, item.categoria, item.paginas)

                if(item.categoria == "Fantasia"){
    
                    //meto a lista para vista libros
    
                    //meto a matriz ortogonal
                    //console.log(typeof(item.columna))
                    matriz_ortogonal.Insertar_dato(item.nombre_libro, item.cantidad, item.categoria, item.columna, item.fila)
                    
    
                }
    
            }

            var tarjeta_libro = document.getElementById("lista_libros")

            
            var tarjeta_individual_libro = list_books.Recorrer()
    
            tarjeta_libro.innerHTML = tarjeta_individual_libro
            matriz_ortogonal.graficar_matriz()
            alert("Se cargaron los libros correctamente")

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
    document.getElementById("grafica_top").style.display = "block"

    document.getElementById("botones").style.display = "none"
    document.getElementById("cola_pendiente").style.display = "none"
    document.getElementById("lista").style.display = "none"
    document.getElementById("Menu").style.display = "none"
    document.getElementById("grafica_lista_listas").style.display = "none"
    document.getElementById("grafica_cola").style.display = "none"
    document.getElementById("Login_To_Home").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"





}

//----------------------------------Pagina cliente--------------------------------

document.getElementById("Home").onclick = Regresar_de_cliente;
document.getElementById("buscar_libro").onclick = Buscar_libro;
var boton = document.getElementById("comprar");
boton.addEventListener("click", Buscar_libro2)
//var boton_de_calcular = document.getElementById("calcular");
//boton_de_calcular.addEventListener("click", total);


function Buscar_libro(){//solamente muestra la cantidad que hay
    var nombre_libro_buscar = document.getElementById("libro").value
    var categoria_libro = document.getElementById("categoria").value
    //console.log(nombre_libro_buscar)
    //console.log(categoria_libro)
    if(categoria_libro == "Thriller"){
        console.log("dispersa")
        //busco en la dispersa
        //graficof
        //document.getElementById("comprar").onclick = Comprar()

    } else if (categoria_libro == "Fantasia"){//ortogonal
        
        console.log("ortogonal")
        var libro_actual = matriz_ortogonal.Buscar_dato(nombre_libro_buscar)
        //console.log(libro_actual)

        if(libro_actual != null){
            var cantidad_de_libros = libro_actual.cantidad
            matriz_ortogonal.graficar_pila(cantidad_de_libros)

        } else{
            alert("libro no existente")
        }
        

        //grafico al encontrarlo

    }
}

function Buscar_libro2(){//busca la cantidad que hay y hace la compra
    var nombre_libro_buscar = document.getElementById("libro").value
    var categoria_libro = document.getElementById("categoria").value
    //console.log(nombre_libro_buscar)
    //console.log(categoria_libro)
    console.log("si entra")
    if(categoria_libro == "Thriller"){
        console.log("dispersa")
        //busco en la dispersa
        //graficof
        document.getElementById("comprar").onclick = Comprar()
        

    } else if (categoria_libro == "Fantasia"){//ortogonal
        
        console.log("ortogonal")
        var libro_actual = matriz_ortogonal.Buscar_dato(nombre_libro_buscar)
        //nodo libro
        if(libro_actual != null){
            var cantidad_de_libros = libro_actual.cantidad
            matriz_ortogonal.graficar_pila(cantidad_de_libros)

            //console.log(libro_actual)
            var cantidad_de_libros = libro_actual.cantidad
            //cantidad de libros existentes
            matriz_ortogonal.graficar_pila(cantidad_de_libros)

            var user_usuario = document.getElementById("usuario_cliente").value
            var contra_usuario = document.getElementById("contraseña_cliente").value

            var usuario_actual = lista_usuarios.Buscar_usuario_actual(user_usuario, contra_usuario)
            //nodo usuario

            var cantidad = document.getElementById("cantidad").value
            //cantidad que se quiere comprar

            document.getElementById("comprar").onclick = Comprar_libro(libro_actual.cantidad, libro_actual, usuario_actual, cantidad)

            //grafico al encontrarlo

        } else{
            alert("libro no existente")
        }

        

    }
}

function Comprar_libro(total, nodo_libro, nodo_usuario, cantidad){//total, nodo libro, nodo lista y listas
    var cantidad_int = Number(cantidad)
    //console.log(total)
    console.log(nodo_libro)
    console.log(nodo_usuario)
    //
    //
    //console.log(typeof(cantidad_int))
    //console.log(typeof(total))

    var cantidad_libros_por_usuario = 0
    var pendientes = 0
    if(cantidad_int == total){ 
        //se pide misma cantidad existentes
        for(var c = 1; c<=cantidad_int; c++){
            cantidad_libros_por_usuario++;
            nodo_libro.cantidad--
            
            //nodo_usuario.
        }
        lista_top.Agregar(nodo_usuario.Nombre, cantidad_libros_por_usuario, nodo_usuario.Nombre_usuario)
        lista_top.Ordenar()
        //imprimo en html
        var tarjetas_top = document.getElementById("top")
        var tarjetas_usuarios_top = lista_top.Imprimir()
        tarjetas_top.innerHTML = tarjetas_usuarios_top
        lista_top.Imprimir()

        //grafico top
        lista_top.graficar()

        nodo_usuario.lista_simple.InsertarAlFinal(nodo_libro.valor, cantidad_libros_por_usuario)
        lista_usuarios.Imprimir()

    } else if(cantidad_int < total){
        //se piden menor cantidad existentes
        for(var c = 1; c<=cantidad_int; c++){
            cantidad_libros_por_usuario++;
            nodo_libro.cantidad--;
            
            //nodo_usuario.
        }
        lista_top.Agregar(nodo_usuario.Nombre, cantidad_libros_por_usuario, nodo_usuario.Nombre_usuario)
        lista_top.Ordenar()
        //impirmo en html
        var tarjetas_top = document.getElementById("top")
        var tarjetas_usuarios_top = lista_top.Imprimir()
        tarjetas_top.innerHTML = tarjetas_usuarios_top

        //grafico lista
        lista_top.graficar()

        nodo_usuario.lista_simple.InsertarAlFinal(nodo_libro.valor, cantidad_libros_por_usuario)
        //console.log("libro acutalizado")
        console.log(nodo_libro)

        console.log("usuario actualizado")
        console.log(nodo_usuario)

        lista_usuarios.Imprimir()

    } else if (cantidad_int > total){
        //Se pide mayor cantidad existentes
        //habra cola
        var faltantes = cantidad_int-total
        for(var c = 0; c<total; c++){
            cantidad_libros_por_usuario++;
            nodo_libro.cantidad--;
            
            //nodo_usuario.
        }
        lista_top.Agregar(nodo_usuario.Nombre, cantidad_libros_por_usuario, nodo_usuario.Nombre_usuario)
        lista_top.Ordenar()
        //imprimo en html
        var tarjetas_top = document.getElementById("top")
        var tarjetas_usuarios_top = lista_top.Imprimir()
        tarjetas_top.innerHTML = tarjetas_usuarios_top

        for(var k = 0; k<faltantes; k++){
            pendientes++

        }
        
        //grafico lista
        lista_top.graficar()

        //ingreso datos a la cola
        cola_pendientes.InsertarAlFrente(pendientes, nodo_libro.valor, nodo_usuario.Nombre_usuario)

        //imprimo cola en html
        var tarjeta_pendiente = document.getElementById("cola_pendiente")
        var tarjeta_individuales_pendientes = cola_pendientes.Imprimir_tarjeta()
        tarjeta_pendiente.innerHTML = tarjeta_individuales_pendientes


        //grafico cola
        cola_pendientes.graficar_cola()

        nodo_usuario.lista_simple.InsertarAlFinal(nodo_libro.valor, cantidad_libros_por_usuario)
        //console.log("libro acutalizado")

        

        lista_usuarios.Imprimir()
        


        console.log(nodo_libro)

        
        console.log(nodo_usuario)

    }

    matriz_ortogonal.graficar_pila(nodo_libro.cantidad)

    


}


function Regresar_de_cliente(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"
    document.getElementById("grafica_top").style.display = "block"

    document.getElementById("libros_fantasia").style.display = "none"
    document.getElementById("libros_thriller").style.display = "none"
    document.getElementById("Home").style.display = "none"
    document.getElementById("disponibilidad").style.display = "none"
        document.getElementById("Cantidad_libros").style.display ="none"
    
}

//-------------------------Autores---------------------------//

document.getElementById("autorToHome").onclick = Regresar_de_autor;

function Regresar_de_autor(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"
    document.getElementById("grafica_top").style.display = "block"

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
document.getElementById("Ordenar_ascendente").onclick = Ordenar

function Ordenar(){
    list_books.Ordenar_ascendente()
    var tarjeta_libro = document.getElementById("lista_ascendente")
    var contenido = list_books.Recorrer()
    tarjeta_libro.innerHTML = contenido

}


function Regresar_de_libro(){
    document.getElementById("options").style.display = "block"
    document.getElementById("login").style.display = "none"
    document.getElementById("admin").style.display = "none"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"
    document.getElementById("grafica_top").style.display = "block"
    

    document.getElementById("Botones").style.display = "none"
    document.getElementById("lista_libros").style.display = "none"
    document.getElementById("lista_ascendente").style.display = "none"
    document.getElementById("lista_descendente").style.display = "none"
    document.getElementById("Codigo_Burbuja").style.display = "none"
    document.getElementById("Codigo_Quicksort").style.display = "none"
    document.getElementById("LibrosToHome").style.display ="none"

}