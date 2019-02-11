import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";

export interface MyObject<T> extends Imprimivel, Igualavel<T> {
    
}