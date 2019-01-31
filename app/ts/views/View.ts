import { tempoExecucao } from '../helpers/decorators/index';
export abstract class View<T>{

    protected elemento: JQuery;
    private escape: boolean;

    constructor(seletor: string, escapar: boolean = false){
        this.elemento = $(seletor);
        this.escape = escapar;
    }

    @tempoExecucao(true)
    update(model: T){
        let template = this.template(model)
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        this.elemento.html(template);
    }

    abstract template(model: T): string;
}

