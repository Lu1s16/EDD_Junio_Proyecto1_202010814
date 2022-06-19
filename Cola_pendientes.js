class Nodo{
    constructor(_cantidad, _nombre_libro, nombre_usuario){
        this.nombre = _nombre_libro
        this.cantidad = _cantidad
        this.usuario = nombre_usuario
        this.siguiente = null

    }

}

class Cola{
    constructor(){
        this.primero = null
        this.ultimo = null
        this.size = 0
    }

    InsertarAlFrente(_cantidad, _nombre_libro, nombre_usuario){
        var Nuevo = new Nodo(_cantidad, _nombre_libro, nombre_usuario)
        if(this.primero == null){
            this.primero = Nuevo
            this.ultimo = Nuevo
            this.size++
        }
        else{
            Nuevo.siguiente = this.ultimo
            this.ultimo = Nuevo

            this.size++;
        }
    }

    Imprimir_tarjeta(){
        var tarjeta = ""
        var actual = this.ultimo
        while(actual != null){
            console.log(actual.usuario)
            console.log(actual.nombre) //libro
            console.log(actual.cantidad)
            console.log("--------")
            tarjeta+=`
            <div id="tarjeta_usuario_pendiente">
               
               <center><p>Nombre: ${actual.usuario} </p></center>
               <center><p>Libro: ${actual.nombre}</p></center>
               <center><p>Pendientes: ${actual.cantidad}</p></center>
            </div> \n
            `
            actual = actual.siguiente
        }
        console.log(tarjeta)
        return tarjeta

    }

    graficar_cola(){
        var codigo = "digraph G { \n \
            \n"

        var nodos = ""
        var actual = this.ultimo
        var cont = 1
        while(actual != null ){
            var string_cont = String(cont)
            var string_nombre = String(actual.nombre)
            var string_cantidad = String(actual.cantidad)

            nodos+= string_cont + '[shape=box, label="' + string_nombre + "\n" + string_cantidad + '", style=filled]\n\n'
            actual = actual.siguiente
            cont++
        }

         
        

        if(this.size == 1){
            codigo+= nodos + "}"

            d3.select("#grafica_cola").graphviz()
                .height(200)
                .width(600)
                .renderDot(codigo)
        }
        else{
            var actual2 = this.ultimo
            var uniones = "{rank = same\n"
            var cont = 1
            while(actual2.siguiente != null){
                actual2 = actual2.siguiente
                var primero = String(cont)
                var segundo = String(cont+1)
                uniones+= primero + "->" + segundo + "[arrowsize=0.5];" + "\n"
                
                
                cont++
                
            }

            codigo+= nodos + uniones + "}\n" + "}"

            console.log("------")
            console.log(codigo)
            d3.select("#grafica_cola").graphviz()
                .height(200)
                .width(600)
                .renderDot(codigo)

        }
    }



}

export{Cola}