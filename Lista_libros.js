class Libro{
    constructor(_nombre, _isbn, _nombre_autor, _categoria, _paginas){
        this.nombre = _nombre
        this.isbn = _isbn
        this.nombre_autor = _nombre_autor
        this.categoria = _categoria
        this.paginas = _paginas
        this.siguiente = null
    }


}


class lista_libros{
    constructor(){
        this.primero = null
        this.size = 0
    }

    insertarAlFinal(_nombre, _isbn, _nombre_autor, _categoria, _paginas){
        var Nuevo_libro = new Libro(_nombre, _isbn, _nombre_autor, _categoria, _paginas)

        if(this.primero == null){
            //console.log("entro al if")
            this.primero = Nuevo_libro
            this.size++;
        }
        else{
            var actual = this.primero;
            while(actual.siguiente != null){
                actual = actual.siguiente
            }
            actual.siguiente = Nuevo_libro
            this.size++;
        }
        //console.log(this.size)

    }

    Recorrer(){
        var tarjeta = ""
        //console.log("entro")
        var actual = this.primero
        console.log(actual)
        while(actual != null){
            tarjeta+=`
            <div id="tarjeta_libro">
               <div id="imagen_libro">
               
               </div>
               <p>Nombre: ${actual.nombre} </p>
               <p>ISBN: ${actual.isbn}</p>
               <p>Autor: ${actual.nombre_autor} </p>
               <p>Categoria: ${actual.categoria}</p>
               <p>Paginas: ${actual.paginas} </p>
               
            </div> \n
            `

            console.log(actual.nombre)
            actual = actual.siguiente
        }
        return tarjeta
    }

    Ordenar_ascendente(){
        //burbuja
        var i, k, aux_nombre, aux_isbn, aux_autor, aux_categoria, aux_paginas
        var actual 
        for(k = 1; k<this.size; k++){
            actual = this.primero
            for(i=0; i<(this.size-k); i++){
                
                if(actual.nombre > actual.siguiente.nombre){
                    //cambio positiones
                    aux_nombre = actual.nombre
                    actual.nombre = actual.siguiente.nombre
                    actual.siguiente.nombre = aux_nombre

                    aux_isbn = actual.isbn
                    actual.isbn = actual.siguiente.isbn
                    actual.siguiente.isbn = aux_isbn

                    aux_autor = actual.nombre_autor
                    actual.nombre_autor = actual.siguiente.nombre_autor
                    actual.siguiente.nombre_autor = aux_autor

                    aux_categoria = actual.categoria
                    actual.categoria = actual.siguiente.categoria
                    actual.siguiente.categoria = aux_categoria

                    aux_paginas = actual.paginas
                    actual.paginas = actual.siguiente.paginas
                    actual.siguiente.paginas = aux_paginas
                }
                actual = actual.siguiente
            }
        }
    }
      
 
  
}





export{lista_libros}