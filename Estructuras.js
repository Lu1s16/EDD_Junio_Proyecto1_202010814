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

    Buscar(admin_user, admin_contra){
        console.log(admin_user)
        var actual = this.primero;

        while(actual != null){

            if(actual.Nombre_usuario == admin_user && actual.Contraseña == admin_contra){
                return true
            }
            actual = actual.siguiente;

        }

        return false

    }

}

export{Lista_Admin}

//---------------------------------------Lista usuarios-------------------------------------

class Nodo_libro_comprado{
    constructor(_nombre_libro, _cantidad){
        this.nombre_libro = _nombre_libro
        this.cantidad = _cantidad
        this.siguiente = null
    }
}

class Lista_libros_comprados{
    constructor(){
        this.primero = null;
        this.size = 0;
    }

    InsertarAlFinal(_nombre_libro, _cantidad){
        var Nuevo_libro_comprado = new Nodo_libro_comprado(_nombre_libro, _cantidad)

        if(this.primero == null){
            this.primero = Nuevo_libro_comprado
            this.size++;
        } else {
            var actual = this.primero;
            while(actual.siguiente != null){
                actual = actual.siguiente;
            }

            actual.siguiente = Nuevo_libro_comprado
            this.size++;
        }
    }
}



class Nodo_usuario{
    constructor(_nombre, _dpi, _nombre_usario, _contraseña, _telefono){
        this.Nombre = _nombre;
        this.dpi = _dpi;
        this.Nombre_usuario = _nombre_usario;
        this.Contraseña = _contraseña;
        this.Telefono = _telefono;
        this.lista_simple = new Lista_libros_comprados()
        this.Siguiente = null
    }
}

class ListaCircular_usuarios{
    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    InsertarAlFinal(_nombre, _dpi, _nombre_usario, _contraseña, _telefono){
        var Nuevo_usuario = new Nodo_usuario(_nombre, _dpi, _nombre_usario, _contraseña, _telefono)

        if(this.primero == null){
            this.primero = Nuevo_usuario;
            this.ultimo = Nuevo_usuario;
            this.primero.siguiente = this.ultimo;
            this.size++;
        } else {
            var actual = this.primero
            var cont = 1
            while(cont < this.size){
                actual = actual.siguiente;

                cont++;
            }

            actual.siguiente = Nuevo_usuario;
            Nuevo_usuario.siguiente = this.primero;
            this.ultimo = Nuevo_usuario;

            this.size++;

        }
    }

    Imprimir(){
        var actual = this.primero;
        var cont = 0;

        let html = ""

        while(cont < this.size){

            html += `
            <div id="tarjeta">
            <p> ${actual.Nombre} </p>

            </div>\n
            `

            var libros = actual.lista_simple
            var actual_libro = libros.primero

            while(actual_libro != null){
                html+=`
                <p>Libro: ${actual.nombre_libro}</p>
                <p>Libro: ${actual.cantidad}</p>
                <br>
                `
                actual_libro = actual_libro.siguiente
            }

            html+=`
            </div>\n
            `

            console.log(actual.Nombre)
            console.log(actual.Contraseña)
            console.log("-----------")
            actual = actual.siguiente
            cont++;
        }

        return html
    }

    Buscar_usuario(_nombre_usuario, _contraseña){
        var actual = this.primero;
        var cont = 0;

        while(cont < this.size){

            if(actual.Nombre_usuario == _nombre_usuario && actual.Contraseña == _contraseña){
                return true
            }


            actual = actual.siguiente
            cont++;


        }

        return false
    }

    Buscar_usuario_actual(_nombre_usuario, _contraseña){
        var actual = this.primero;
        var cont = 0;

        while(cont < this.size){

            if(actual.Nombre_usuario == _nombre_usuario && actual.Contraseña == _contraseña){
                return actual
            }


            actual = actual.siguiente
            cont++;


        }

        
    }

   

}

export{ListaCircular_usuarios}








