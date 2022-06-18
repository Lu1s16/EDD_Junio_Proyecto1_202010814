class Node{
    constructor(_nombre, _dpi, _biografia) {
       this.nombre = _nombre;
       this.dpi = _dpi
       this.biografia = _biografia
       this.left = null;
       this.right = null;
       
    };
 };
 class Arbol{
    constructor(){
       this.root = null;
       this.tarjeta_individual = ""
       this.grafica = ""
       this.biografia = ""
    }
    insert(_nombre, _dpi, _biografia){
       var newNode = new Node(_nombre, _dpi, _biografia);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
    };
    insertNode(node, newNode){
       if(newNode.nombre < node.nombre){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
    };

    PreOrder(nodo){
      
      console.log()
      
      if(!nodo){
         
         return
      }
      
      if(nodo.left != null){
         var actual = nodo.nombre.replace(" ", "_")
         var siguiente = nodo.left.nombre.replace(" ", "_")
         this.grafica+= actual + "->" + siguiente + "\n"
      }
      if(nodo.right != null){
         var actual = nodo.nombre.replace(" ", "_")
         var siguiente = nodo.right.nombre.replace(" ", "_")
         this.grafica += actual + "->" + siguiente + "\n"
      }
      else{
         var extra = nodo
      }
      console.log(nodo.nombre)//imprime algo
      this.PreOrder(nodo.left)
      this.PreOrder(nodo.right)

    }

   tarjetas(){
      this.InOrden(this.root)
      //console.log(this.tarjeta_individual)
      return this.tarjeta_individual

   }

    InOrden(nodo){

      if(nodo!= null){
         this.InOrden(nodo.left)
      
         console.log(nodo.nombre)

         //imprime el dato
         this.tarjeta_individual+=`
         <div id="tarjeta_autor">
            <div id="imagen_autor">
            
            </div>
            
            <center><p> ${nodo.nombre} </p></center>
            <center><p>${nodo.dpi}</p></center>
         </div> \n
         `
         
         this.InOrden(nodo.right)
      }
      
    }


    Graficar(){
      this.grafica = "digraph G {\n \
         "
      this.PreOrder(this.root)
      this.grafica += "}"
      console.log(this.grafica)

      d3.select("#Arbol").graphviz()
         .width(1000)
         .height(500)
         .renderDot(this.grafica)

    }

    Buscar_autor(nombre_autor){
      
      this.En_orden(this.root, nombre_autor)
      
      return this.grafica
      
      

    }

    En_orden(nodo, nombre_autor){
      if(nodo!= null){
         this.En_orden(nodo.left, nombre_autor)
         if(nodo.nombre == nombre_autor){

            this.grafica =`
            <div id="tarjeta_biografia">
               
               <center><p> ${nodo.nombre} </p></center>
               <center><p>${nodo.biografia}</p></center>
            </div> \n
            `
            
            //console.log(nodo.nombre)
            
            //creo tarjeta en la variable this.biografia
            return
         }

         this.En_orden(nodo.right, nombre_autor)
      
      }

    }

 };






export{Arbol}
