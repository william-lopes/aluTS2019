class Negociacao {
    constructor(_data, _qtde, _valor) {
        this._data = _data;
        this._qtde = _qtde;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._qtde;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._qtde * this._valor;
    }
}
