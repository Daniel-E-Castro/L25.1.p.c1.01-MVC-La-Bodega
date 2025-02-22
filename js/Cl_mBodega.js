export default class cl_mBodega {

    constructor() {
        this.acumGanancia = 0
    }

    procesar(arti) {
        this.acumGanancia += arti.ganancia()

    }

    totalGanancia() {
        return this.acumGanancia
    }
}