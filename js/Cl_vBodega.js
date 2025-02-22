import Cl_vArticulo from "./Cl_vArticulo.js"
import Cl_mArticulo from "./Cl_mArticulo.js"
export default class Cl_vBodega {

    constructor() {
        this.controlador = null;
        this.mArticulo = null;
        this.vArticulo = new Cl_vArticulo();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lbltotalGanancia = document.getElementById("mainForm_lbltotalGanancia");

        this.btAgregar.onclick = () => this.ocultar();
        this.vArticulo.btAceptar.onclick = () => this.controlador.agregarArticulo();
        this.mostrar();
    }

    agregarArticulo() {
        this.mArticulo = new Cl_mArticulo({
            costo: this.vArticulo.costo,
        })
        this.mostrar();
        return this.mArticulo;
    }
    mostrar() {
        this.vista.hidden = false;
        this.vArticulo.ocultar();
    }
    ocultar() {
        this.vista.hidden = true;
        this.vArticulo.mostrar();
    }
    reportarArticulo(totalGanancia) {
        this.tabla.innerHTML += `
    <tr>
        <td>${this.mArticulo.costo}</td>
     </tr>`;
        this.lbltotalGanancia.innerHTML = totalGanancia;
        this.lbltotalGanancia.innerHTML = totalGanancia;
    }
}