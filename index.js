class Nodo {
  constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
      this.raiz = null;
  }

  insertar(valor) {
      const nuevoNodo = new Nodo(valor);
      if (this.raiz === null) {
          this.raiz = nuevoNodo;
      } else {
          this._insertarRecursivo(this.raiz, nuevoNodo);
      }
  }

  _insertarRecursivo(nodoActual, nuevoNodo) {
      if (nuevoNodo.valor < nodoActual.valor) {
          if (nodoActual.izquierda === null) {
              nodoActual.izquierda = nuevoNodo;
          } else {
              this._insertarRecursivo(nodoActual.izquierda, nuevoNodo);
          }
      } else {
          if (nodoActual.derecha === null) {
              nodoActual.derecha = nuevoNodo;
          } else {
              this._insertarRecursivo(nodoActual.derecha, nuevoNodo);
          }
      }
  }
//izquierda a derecha
  enOrden(nodo = this.raiz) {
      if (nodo !== null) {
          this.enOrden(nodo.izquierda);
          console.log(nodo.valor);
          this.enOrden(nodo.derecha);
      }
  }
//de arriba a abajo de cada lado
  preorder(nodo = this.raiz){
    if (nodo === null){
      return;
    }
    console.log(nodo.valor);
    this.preorder(nodo.izquierda);
    this.preorder(nodo.derecha);
  }

  postorder(nodo = this.raiz){
    if (nodo === null){
      return;
    }
    this.postorder(nodo.izquierda);
    this.postorder(nodo.derecha);
    console.log(nodo.valor);
}
}

const arbol = new ArbolBinario();
arbol.insertar(123);
arbol.insertar(101);
arbol.insertar(125);
arbol.insertar(90);
arbol.insertar(124);
arbol.insertar(127);
arbol.insertar(70);
arbol.insertar(130);
arbol.insertar(55);
arbol.insertar(75);
arbol.insertar(150);

console.log("orden")
arbol.enOrden();
console.log("preorden")
arbol.preorder();
console.log("posorden")
arbol.postorder()