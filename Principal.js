//---------------------------------------------importaciones e inicializaciones-----------------------------
import { Lista_Admin } from "./Estructuras.js"

var list = new Lista_Admin()


//-----------------------------------------------------Pagina home--------------------------------------------
document.getElementById("ingresar_admin").onclick = Ingresar;


function Ingresar(){
        list.InsertarAlFinal("Luis", "3045", "guicho", "123", "6636")
        list.Imprimir()

        document.getElementById("options").style.display = "none"
        document.getElementById("Menu").style.display = "block"
        document.getElementById("login").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("admin").style.display = "none"
        document.getElementById("fondo").style.display = "none"
        document.getElementById("top").style.display = "none"

        document.getElementById("botones").style.display = "block"
        document.getElementById("cola").style.display = "block"
        document.getElementById("lista").style.display = "block"
        document.getElementById("Menu").style.display = "block"
    

    var user_admin = document.getElementById("usuario_admin").value
    var contra_admin = document.getElementById("contraseña_admin").value
    
    //nueva_lista.Buscar(user_admin, contra_admin)
    

}




//---------------------------------------------------Pagina Administrador-------------------------------

document.getElementById("Menu").onclick = Regresar;

function Regresar(){
    document.getElementById("login").style.display = "block"
    document.getElementById("login").style.display = "block"
    document.getElementById("admin").style.display = "block"
    document.getElementById("fondo").style.display = "block"
    document.getElementById("top").style.display = "block"

    document.getElementById("botones").style.display = "none"
    document.getElementById("cola").style.display = "none"
    document.getElementById("lista").style.display = "none"
    document.getElementById("Menu").style.display = "none"




}