'use strict'

function probaFunc(nekiObj: {
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

niz.forEach(
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
}