class Nodo_Cabecera{
    constructor(_id){
        this.id = _id
        this.siguiente = null
        this.anterior = null
        this.acceso = null

    }

    getAcceso(){
        return this.acceso
    }

    setAcceso(nuevo_acceso){
        this.acceso = nuevo_acceso
    }
}

class Lista_Cabecera{
    constructor(_tipo){
        this.primero = null
        this.ultimo = null
        this.tipo = _tipo
        this.size = 0

    }

    insertar_cabecera(nuevo){
        this.size++;
        if(this.primero == null){
            this.primero = nuevo
            this.ultimo = nuevo
        }
        else{
            if(nuevo.id < this.primero.id){
                nuevo.siguiente = this.primero
                this.primero.anterior = nuevo
                this.primero = nuevo
            }
            else if(nuevo.id > this.ultimo.id){
                this.ultimo.siguiente = nuevo
                nuevo.anterior = this.ultimo
                this.ultimo = nuevo
            }
            else {
                var tmp = this.primero
                while(tmp != null){
                    if(nuevo.id < tmp.id){
                        nuevo.siguiente = tmp
                        nuevo.anterior = tmp.anterior
                        tmp.anterior.siguiente = nuevo
                        tmp.anterior = nuevo
                        break
                    }
                    else if(nuevo.id > tmp.id){
                        tmp = tmp.siguiente
                    }
                    else{
                        break
                    }
                }
            }
        }
    }

    mostrarCabecera(){
        var tmp = this.primero
        while(tmp != null){
            console.log("cabecera " + this.tipo + tmp.id)
            tmp = tmp.siguiente
        }
    }

    getCabecera(_id){
        var tmp = this.primero
        while(tmp != null){
            if(_id == tmp.id){
                return tmp
            }
            tmp = tmp.siguiente
        }

        return null
    }
}


class Nodo_Celda{
    constructor(x, y, valor){
        this.valor = valor
        this.coordenadaX = x //columnas
        this.coordenadaY = y //filas
        this.arriba = null
        this.abajo = null
        this.derecha = null
        this.izquierda = null

    }

    setArriba(arriba){
        this.arriba = arriba
    }
    

    getArriba(){
        return self.arriba
    }

    setAbajo(abajo){
        this.abajo = abajo
    }
    


    getAbajo(){
        return self.abajo

    }
    


    setDerecha( derecha){
        this.derecha = derecha
    }


    getDerecha(){
        return this.derecha

    }

    setIzquierda(izquierda){
        this.izquierda = izquierda
    }
    


    getIzquierda(){
        return this.izquierda
        
    }
 
    
}

class Matriz_d{
    constructor(){
        this.filas = new Lista_Cabecera("fila")
        this.columnas = new Lista_Cabecera("columnas")
    }

    Insertar(pos_x, pos_y, valor){
        var nueva_celda = new Nodo_Celda(pos_x, pos_y, valor)

        var nodo_X = this.columnas.getCabecera(pos_x)
        var nodo_Y = this.filas.getCabecera(pos_y)

        if(nodo_X == null){
            nodo_X = new Nodo_Cabecera(pos_x)
            this.columnas.insertar_cabecera(nodo_X)
        }

        if(nodo_Y == null){
            nodo_Y = new Nodo_Cabecera(pos_y)
            this.filas.insertar_cabecera(nodo_Y)
        }

        //console.log(nodo_X)
        //console.log(nodo_Y)
            /// texto largo de rpureulgjeirjlkjdksjfal
            //para borrar

        //insertar celda en COLUMNA

        if(nodo_Y.getAcceso() == null){
            nodo_Y.setAcceso(nueva_celda)
            //console.log(nodo_X.getAcceso())
        }
        else{
            if(nueva_celda.coordenadaX < nodo_Y.getAcceso().coordenadaX){
                nueva_celda.setDerecha(nodo_Y.getAcceso())
                nodo_Y.getAcceso().setIzquierda(nueva_celda)
                nodo_Y.setAcceso(nueva_celda)
            }
            else{
                var tmp = nodo_Y.getAcceso()
                while(tmp != null){
                    

                    
                    if(nueva_celda.coordenadaX < tmp.coordenadaX){
                        console.log("entrando")
                        nueva_celda.setDerecha(tmp)
                        nueva_celda.setIzquierda(tmp.getIzquierda())
                        tmp.getIzquierda().setDerecha(nueva_celda)
                        tmp.setIzquierda(nueva_celda)
                        break
                    }
                    //else if(nueva_celda.coordenadaY == tmp.coordenadaY && nueva_celda.coordenadaX == tmp.coordenadaX){
                    //    break
                    //}
                    else{
                        if(tmp.getDerecha() == null){
                            tmp.setDerecha(nueva_celda)
                            nueva_celda.setIzquierda(tmp)
                            break
                        
                        }
                        else{
                            tmp = tmp.getDerecha()
                        }
                    }

                    
                }
            
            }

            
        }

        
        
        //Insertar en fila
        if(nodo_X.getAcceso() == null){
            nodo_X.setAcceso(nueva_celda)

        }
        else{
            if(nueva_celda.coordenadaY < nodo_X.getAcceso().coordenadaY){
                nueva_celda.setAbajo(nodo_X.getAcceso())
                nodo_X.getAcceso().setArriba(nueva_celda)
                nodo_X.setAcceso(nueva_celda)
            }
            else{
                var tmp2 = nodo_X.getAcceso()

                while(tmp2 != null){
                    
                    if(nueva_celda.coordenadaY < tmp2.coordenadaY){
                        
                        console.log(nueva_celda.valor)
                        nueva_celda.setAbajo(tmp2)
                        nueva_celda.setArriba(tmp2.getArriba())
                        tmp2.getArriba().setAbajo(nueva_celda)
                        tmp2.setArriba(nueva_celda)
                        break
                    }
                    else if(nueva_celda.coordenadaY == tmp2.coordenadaY && nueva_celda.coordenadaX == tmp2.coordenadaX){
                        
                        break
                    }
                    else{
                        console.log("saliendo")
                        console.log("en y")
                        console.log(tmp2.getAbajo())
                        if(tmp2.getAbajo() == null){
                            tmp2.setAbajo(nueva_celda)
                            nueva_celda.setArriba(tmp2)
                            break
                        }
                        else{
                            tmp2 = tmp2.getAbajo()
                        }
                    }
                }
            }
        }

        //fin insersion
        //console.log(nueva_celda)



    }

}



export{Matriz_d}