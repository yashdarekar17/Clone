let a= 10;
let b=12;
console.log("a= ",a,"& b= ", b);
a--;
console.log("a= ",a);

let i=1;

while(i<=5){
    console.log("i=",i);
    i++;
}

let str = "apna college";
let size=0;

for(let i of str){
    console.log(i);
    size++;
}
console.log(size);


let student={
    fullname:"yash darekar",
    age: 20,
    cgpa:8.2,
    ispass:true,
    };

    for(let key in obj ){
        console.log(key);

    }