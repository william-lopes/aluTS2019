class Negociacao {

    constructor(private _data: Date, private _qtde: number, private _valor: number) {}

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