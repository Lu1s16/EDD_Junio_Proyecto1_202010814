class Nodo{
    constructor(_nombre, _total_libros, _usuario){
        this.nombre = _nombre
        this.total = _total_libros
        this.usuario = _usuario
        this.siguiente = null
        this.anterior = null
    }
}

class Top{
    constructor(){
        this.primero = null
        this.ultimo = null
        this.size = 0
    }


    InsertarAlFinal(_nombre, _total_libros, _usuario){
        var Nuevo_cliente = new Nodo(_nombre, _total_libros, _usuario)
        if(this.primero == null){
            this.primero = Nuevo_cliente;
            this.ultimo = Nuevo_cliente;
            this.size++
        } else{
            var actual = this.primero
            while(actual.siguiente != null){
                actual = actual.siguiente

            }
            actual.siguiente = Nuevo_cliente
            Nuevo_cliente.anterior = actual
            this.ultimo = Nuevo_cliente

            this.size++;
        }
    }

    Agregar(_nombre, _cantidad, _usuario){
        //verificar si ya existe el cliente en el top
        var existe = this.Verificar_existencia(_usuario)

        if(existe){
            this.Actualizar_datos(_usuario, _cantidad)
        } else{
            this.InsertarAlFinal(_nombre, _cantidad, _usuario)
        }
    }

    Verificar_existencia(_usuario){
        var actual = this.primero
        while(actual != null){
            if(actual.usuario == _usuario){
                return true

            }
            actual = actual.siguiente

        }
        return false
    }

    Actualizar_datos(_usuario, _cantidad){
        var actual = this.primero
        while(actual != null){
            if(actual.usuario == _usuario){
                actual.total+= _cantidad
            }
            actual = actual.siguiente

        }


    }

    Ordenar(){
        var i, k, aux_nombre, aux_cantidad, aux_usuario
        var actual
        for(k = 1; k<this.size; k++){
            actual = this.primero
            for(i=0; i<(this.size-k); i++){
                if(actual.total < actual.siguiente.total){
                    aux_nombre = actual.nombre
                    actual.nombre = actual.siguiente.nombre
                    actual.siguiente.nombre = aux_nombre

                    aux_cantidad = actual.total
                    actual.total = actual.siguiente.total
                    actual.siguiente.total = aux_cantidad

                    aux_usuario = actual.usuario
                    actual.usuario = actual.siguiente.usuario
                    actual.siguiente.usuario = aux_usuario
                }
                actual = actual.siguiente
            }
        }

    }

    Imprimir(){
        var actual = this.primero
        var tarjeta = ""
        var cont = 0
        while(actual != null && cont < 3){
            console.log("-------")
            console.log(actual.nombre)
            console.log(actual.usuario)
            console.log(actual.total)
            tarjeta+=`
            <div id="tarjeta_cliente_top">
               <div id="imagen_usuario">
               
               </div>
               
               <center><p>Nombre: ${actual.nombre} </p></center>
               <center><p>Usuario: ${actual.usuario}</p></center>
               <center><p>Compras: ${actual.total}</p></center>
            </div> \n
            `

            actual = actual.siguiente
            cont++
        }
        return tarjeta

    }

    graficar(){
        var codigo ='digraph G { \n \
            \n'

        var nodos = ""
        var actual = this.primero
        var cont = 1

        while(actual != null){
            var string_cont = String(cont)
            var string_nombre = String(actual.nombre)
            var string_total = String(actual.total)

            nodos+= string_cont + '[shape=box, label="' + string_nombre + "\n" + string_total + '", style=filled]\n\n'


            actual = actual.siguiente
            cont++

        }

        var actual2 = this.primero

        if(this.size == 1){
            codigo+=nodos + "}"
            console.log(codigo)

            d3.select("#grafica_top").graphviz()
                .height(400)
                .width(600)
                .renderDot(codigo)

        } else{
            var uniones = "{rank=same \n"
            var cont = 1

            while(actual2.siguiente != null){
                actual2 = actual2.siguiente
                var primero = String(cont)
                var segundo = String(cont+1)
                uniones+= primero + "->" + segundo +  "[dir=both, arrowsize=0.5];\n"         
                cont++
            
            }
            codigo+=nodos + uniones + "} \n }"

            d3.select("#grafica_top").graphviz()
                .height(400)
                .width(700)
                .renderDot(codigo)



        }

        

    }
}

export{Top}