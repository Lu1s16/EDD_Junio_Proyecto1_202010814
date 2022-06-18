class Nodo{
    constructor(_nombre_libro, _cantidad, _categoria, _x, _y){
        this.valor = _nombre_libro;
        this.cantidad = _cantidad;
        this.categoria = _categoria
        this.x = _x;
        this.y = _y;
        this.abajo= null
        this.siguiente = null

    }
}


class Lista{
    constructor(){
        this.raiz = null;  //inicio
        this.ultimo = null;  //final

        this.filas = 0

    }

    insertarLista(_valor, _cantidad, _categoria, _x){ //x porque se llenara horizontalemente
        var temporal = new Nodo(_valor, _cantidad, _categoria, _x, 0);
        if(this.raiz == null){//si esta llena 
            
            this.raiz = temporal
            this.ultimo = temporal
            
        } else{
            //ya hay un nodo
            
            this.ultimo.siguiente = temporal
            this.ultimo = temporal
        }

        //empiezo a llenar todo para abajo
        //por cada posicion en x creo mi lista en y

        var temp = this.ultimo
        for(let cordy = 25; cordy >= 2; cordy--){
            var nuevo_nodo = new Nodo(_valor, _cantidad, _categoria, _x, cordy)
            var auxanterior = this.ultimo.abajo
            temp.abajo = nuevo_nodo
            nuevo_nodo.abajo = auxanterior
            
        }
        this.filas+=1

    }

    buscarlistsa(_buscar){ //lo busca en x
        var temporal = this.raiz
        while(temporal != null){
            
            if(temporal.x == _buscar){
                return temporal
            }

            temporal = temporal.siguiente
        }

        return null
    }


}


class Matriz{
    constructor(){
        //la lista ya estara llena
        this.listahorizontal = new Lista();
        this.columnas = 0
        
    }

    llenarmatrizortogonal(){
        for(let index = 1; index <= 25; index++){
            this.columnas+=1
            this.listahorizontal.insertarLista("", "", "", index)
        }
    }

    mostrar_matriz(){
        var numx = 0
        var cabecerax = this.listahorizontal.buscarlistsa(numx)
        while(cabecerax != null){ //recorre en x
            console.log("********* x="+ numx+"***********")
            
            //recorre en y
            var numy = 0
            var tempy = cabecerax.abajo

            while(tempy != null){
                console.log(tempy.valor+"("+tempy.x+","+tempy.y+")")
                tempy = tempy.abajo
            }

            numx++;
            cabecerax = cabecerax.siguiente

        }
    }

    graficar_matriz(){

        var inicio = 'digraph G {\n \
            bgcolor="none"; \n \
            '
            

        var nodos = ""
        
        let i = 1
        var n = 1
        
        
        var tmpx = this.listahorizontal.raiz
        var objeto = this.listahorizontal
        
        
        
        
        
        while (i <= this.columnas && tmpx != null) {
            n = i
            
            var string_i = String(i)
            var label = String(tmpx.valor)
            nodos+= string_i + '[shape = box label="' + label + '" style=filled]; \n'

            var temp_y = tmpx.abajo
            
            for (var c = 1; c < objeto.filas; c++) {
                  
                n+= objeto.filas
                //console.log("----"+ i.toString(10) +"------")
                //console.log(n)
                var string_n = String(n)
                label = String(temp_y.valor)

                nodos+= string_n + '[shape = box label="' + label + '" style=filled]; \n'
                temp_y = temp_y.abajo
                
            }

            tmpx = tmpx.siguiente //en x
            i++;
        }

        //console.log(nodos)

        var uniones = ""

        var j = 1
        while(j<=this.columnas){
            n=j
            for (let c = 0; c < objeto.filas-1; c++) {
                var actual = String(n)
                n+=objeto.filas
                var abajo = String(n)

                uniones+= actual + "->" + abajo + "\n"
                
            }
            j++

        }

        //console.log(uniones)

        var rank = ""
        
        var extra = 0
        


        var k = 0
        while(k<= this.columnas-1){
            var n = 1
            var same = "{ rank = same \n"
            
            
            n = extra+n
            var siguiente = 0
            
            for(let c = 0; c < objeto.filas-1; c++){
                

                var string_primero = String(n)
                siguiente = n+1
                
                var string_siguiente = String(siguiente)
                same+= string_primero + "->" + string_siguiente + "\n"
                n++
                extra = siguiente
                
            }
            k++;
            same+="} \n"
            rank+=same
        }

     

        inicio+=nodos+uniones+rank + "\n }"

        //console.log(inicio)


        d3.select("#libros_fantasia").graphviz()
            .width(1900)
            .height(1900) //altura
            .renderDot(inicio)

    }

    Insertar_dato(_valor, _cantidad, _categoria, _posx, _posy){



        var tempx = this.listahorizontal.buscarlistsa(_posx)
        
        console.log(tempx)

        if(_posy == 1){
            tempx.valor = _valor
            tempx.cantidad = _cantidad
            tempx.categoria = _categoria
            tempx.cantidad = _cantidad
            return

        } else{
            var tempy = tempx.abajo
            while(tempy != null){
                console.log(_posy)
                //console.log(tempy.y)
                if(tempy.y == _posy){
                    tempy.valor = _valor
                    tempy.cantidad = _cantidad
                    tempy.categoria = _categoria
                    console.log("------")
                    console.log(tempy.cantidad)
                    console.log(tempy.valor)
                    console.log("------")
                    return
                }
                tempy = tempy.abajo
        }

        }

        
    }
}


var matriz = new Matriz();

export{Matriz}