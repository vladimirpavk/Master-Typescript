export class ProbaKlasa{
    constructor(){
        console.log('ProbaKlasa constructor...');
    }

    public getProbaText():string{
        return "getProbaText";
    }
}

export class DerivedProba extends ProbaKlasa{
    constructor(){
        super();
        console.log('DerivedProba constructor...');
    }

    public getProbaText():string{
        super.getProbaText();
        return "getDerivedProbaText2";
    }
}

export class StaticClass{
    public static counter:number = 0;

    public getCounter():number{
        return StaticClass.counter;
    }

    public incrementCounter(increment:number = 1){
        StaticClass.counter+=increment;
    }

    public decrementCounter(decrement:number = 1){
        StaticClass.counter-=decrement;
    }
}

/*export class GenericClass<T>{
    public param1: T;
    public add(x:T, y:T):T{
        return x+y;
    }
}*/
