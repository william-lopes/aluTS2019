System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function tempoExecucao(emSeg = false) {
        return function (target, propKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let div = 1;
                if (emSeg) {
                    unidade = 's';
                    div = 1000;
                }
                console.log('-----------');
                console.log(`método inicio ${propKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`método fim ${propKey}: ${JSON.stringify(retorno)}`);
                console.log(`exec ${(t2 - t1) / div} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("tempoExecucao", tempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
