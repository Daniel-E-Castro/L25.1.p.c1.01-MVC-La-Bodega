export default class Cl_vArticulo {
  constructor(){
    this.vista = document.getElementById("ArticuloForm");
    this.inCosto = document.getElementById("ArticuloForm_inCosto");
    this.btAceptar = document.getElementById("ArticuloForm_btAceptar");
  }
  get costo() {
    return +this.inCosto.value;
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}

