//------------------------------lista administradores------------------------------

class Nodo{
    constructor(_nombre, _dpi, _nombre_usario, _contraseña, _telefono){
        this.Nombre = _nombre;
        this.dpi = _dpi;
        this.Nombre_usuario = _nombre_usario;
        this.Contraseña = _contraseña;
        this.Telefono = _telefono;
        this.Siguiente = null
    }
}

class Lista_Admin{
    constructor(){
        this.primero = null;
        this.size = 0;
    }

    InsertarAlFinal(_nombre,_dpi, _nombre_usuario, _contraseña, _telefono){
        var Nuevo_admin = new Nodo(_nombre,_dpi, _nombre_usuario, _contraseña, _telefono);
        
        if(this.primero == null){
            this.primero = Nuevo_admin;     
            this.size++;

        } else{
            var actual = this.primero;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }
            actual.siguiente = Nuevo_admin;
            this.size++;

        }
    }

    Imprimir(){
        var actual = this.primero
        while(actual != null){
            console.log(actual.Nombre_usuario)
            console.log("----------")
            actual = actual.siguiente;

        }

    }

    Buscar(admin_user, admin_contra){
        console.log(admin_user)
        var actual = this.primero;

        while(actual != null){

            if(actual.Nombre_usuario == admin_user && actual.Contraseña == admin_contra){
                var encontrado = true
                break;
            }
            else if(actual.siguiente == null){
                break;
            }
            actual = actual.siguiente;


        }

        if(encontrado){
            window.open("Administrador.html", "_self")
            console.log("Se encontro");
        }
        else{
            console.log("No existe el dato");
        }

    }

}

export{Lista_Admin}

//---------------------------------------Lista usuarios-------------------------------------





//--------------------------------------Arbol Autores-----------------------------------------





//----------------------------------------Matriz dispersa con pila-------------------------------------



//----------------------------------------Matriz ortogonal con pila-------------------------------------




//----------------------------------------Lista de listas----------------------------------------




//-----------------------------------------Lista doble enlzada-----------------------------------




//------------------------------------------Cola--------------------------------------------------





//-----------------------------------------Lista libros--------------------------------------------








