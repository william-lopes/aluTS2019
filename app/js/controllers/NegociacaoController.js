class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update();
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ',')), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
    }
}
