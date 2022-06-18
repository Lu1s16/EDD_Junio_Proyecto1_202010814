class Nodo_cabecera_fila{
    constructor(_id){
        this.id = _id
        this.abajo = null
        this.arriba = null
        this.acceso = null

    }
}

class Lista_filas{
    constructor(_){
        this.primero = null
        this.ultimo = null
        this.size = 0
    }

    Insertar_cabecera_fila(_id){
        var nueva_fila = new Nodo_cabecera_fila(_id)
        if(nueva_fila.primero == null){
            this.primero = nueva_fila
            this.ultimo = nueva_fila
        }
        else{

            if(nueva_fila.id < this.primero.id){
                console.log("xd")
                nueva_fila.abajo = this.primero
                this.primero.arriba = nueva_fila
                this.primero = nueva_fila
            }
            else if(nueva_fila.id > this.ultimo.id){
                this.ultimo.abajo = nueva_fila
                nueva_fila.arriba = this.ultimo
                this.ultimo = nueva_fila


            }
            else{
                var actual = this.primero
                while(actual != null){
                    if(nueva_fila.id < actual.id){
                        nueva_fila.abajo = actual
                        nueva_fila.abajo = actual.abajo
                        actual.arriba.abajo = nueva_fila
                        actual.abajo = nueva_fila
                        break

                    }
                    else if(nueva_fila.id > actual.id){
                        actual = actual.abajo
                        
                    }
                    else{
                        break
                    }
                }
            }
        }

    }

    buscar_cabecera_fila(_id){
        var actual = this.primero
        while(actual != null){
            
            if(_id == actual.id){
                console.log("encontrado")
                return actual
            }
            actual = actual.abajo
        }
        console.log("no encontrado")
        return null
    }

}


class Nodo_cabecera_columna{
    constructor(){
        this.id = _id
        this.derecha = null
        this.izquierda = null
        this.acceso = null
    }
}

class Lista_columnas{
    constructor(){
        this.primero = null
        this.ultimo = null
        this.size = 0

    }
}

class Nodo_matriz{
    constructor(){

    }
}

class matriz{
    constructor(){

    }
}

var list = new Lista_filas()
list.Insertar_cabecera_fila(1)
list.Insertar_cabecera_fila(5)
list.Insertar_cabecera_fila(4)
list.Insertar_cabecera_fila(6)
list.Insertar_cabecera_fila(3)

list.buscar_cabecera_fila(3)