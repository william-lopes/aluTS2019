import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController{

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor(){        
        this.negociacoesView.update(this.negociacoes);       
    }

    adiciona(event: Event) {

        event.preventDefault();
        
        let data = new Date(this._inputData.val().replace(/-/g,','));

        if(this.VerificaDia(data)){
            this.mensagemView.update('Somente em dias úteis');
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this.negociacoes.adiciona(negociacao);
        
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Salva');
    
    }
    
    VerificaDia(data: Date){
        return data.getDay() != DiaSemana.Sabado && data.getDay() != DiaSemana.Domingo;
    }
}

enum DiaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado       
}