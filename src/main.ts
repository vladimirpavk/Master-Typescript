'use strict'

import { ProbaKlasa, DerivedProba, StaticClass } from './app';

let mojaKlasa=new ProbaKlasa();

let derProba=new DerivedProba();

console.log(derProba.getProbaText());

let prom1=5;

function addition(x:number, y:number):number{
    return x+y+prom1;
}

console.log(addition(3,2));


/*let st1=new StaticClass();
console.log(st1.getCounter());
st1.incrementCounter();
console.log(st1.getCounter());
st1.incrementCounter(5);
console.log(st1.getCounter());

let st2=new StaticClass();
console.log(st2.getCounter());
st2.decrementCounter();
console.log(st1.getCounter());*/

/*function probaFunc(nekiObj: {
    ime?: string,
    label: string
}){
    if(!nekiObj.ime){
        console.log(nekiObj.label);
    }
    else{
        console.log(nekiObj.ime+" - "+nekiObj.label);
    }
}


probaFunc({
    ime: "vladimir",
    label: "neka labela"
});

let broj:string = "3";

console.log(parseInt(broj)+3);

console.log(0b10);

let niz=[];
niz.push(1,2,3,4,5,6,7,8,9);


function nizF(...niz){
    console.log(niz);
}

nizF(1,2,3,4,5,6,8,9,9,0,0,0,0);

let kod = "console.log('Vlada');";

eval(kod);

let map=new Map();
map.set("kljuc1", 10);
map.set("kljuc2", 20);
map.set("kljuc3", 30);

for(let [mapElementKey, mapElementValue] of map){
    console.log(mapElementKey+" - "+mapElementValue);
}

//navigator.geolocation.getCurrentPosition((pos)=>console.log(pos));
let myGeo=navigator;


/*niz.forEach(
    (val, ind)=>
    {
        console.log(val, " - "+ind);
    }
);


let xObj={
    ime: 'Vladimir',
    prezime: 'Pavković',
    zena: 'Nataša'
};

for(let xProp of niz){
    console.log(xProp);
}*/