/*En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 Ej. Costos varios artículos: 10, 20, 14, 6 y 4
La salida requerida presenta el siguiente formato: 
La ganancia será de Bs.27
*/

import Cl_vBodega from "./Cl_vBodega.js"
import Cl_mBodega from "./Cl_mBodega.js"
import Cl_controlador from "./Cl_controlador.js"

export default class Cl_index {
    constructor() {
        let vista = new Cl_vBodega();
        let modelo = new Cl_mBodega();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}




