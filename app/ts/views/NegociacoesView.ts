class NegociacoesView{

    private elemento: Element;

    constructor(seletor: string){

        this.elemento = document.querySelector(seletor);

    }

    update(): void{

        this.elemento.innerHTML = this.template();
    }

    template(): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

            <tfoot>
            </tfoot>
        </table>`;
    }
}