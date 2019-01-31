export function tempoExecucao(emSeg: boolean = false){
    return function(target: any, propKey: string, descriptor: PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let unidade = 'ms';
            let div = 1;
            if(emSeg){
                unidade = 's';
                div = 1000;
            }

            console.log('-----------');
            console.log(`método inicio ${propKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now(); 
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`método fim ${propKey}: ${JSON.stringify(retorno)}`);
            console.log(`exec ${(t2-t1)/div} ${unidade}`);
            return retorno;
        }

        return descriptor;
    }
}