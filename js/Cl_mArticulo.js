export default class cl_mArticulo {

    constructor ({costo}) {
        this.costo = costo
    }
    set costo(costo) {
        this._costo = +costo
    }
    get costo() {
        return this._costo

    }
    ganancia(){
        return this.costo/2

    }
}