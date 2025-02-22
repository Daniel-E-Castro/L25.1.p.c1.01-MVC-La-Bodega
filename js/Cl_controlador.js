export default class cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }
    agregarArticulo() {
        this.modelo.procesar(this.vista.agregarArticulo())
        this.vista.reportarArticulo(
            this.modelo.totalGanancia()
        )
    }
}