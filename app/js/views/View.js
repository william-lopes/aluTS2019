var Views;
(function (Views) {
    class View {
        constructor(seletor) {
            this.elemento = $(seletor);
        }
        update(model) {
            this.elemento.html(this.template(model));
        }
    }
    Views.View = View;
})(Views || (Views = {}));
