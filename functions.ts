//First function
function hello():string{
    return "Hello";
}
console.log(hello());

//passing single parameter to a function
function hi(name:string):string{
    return "hi "+ name;
}
console.log(hi("Samarth"));

//passing multiple paras to a function
function sum(n1: number,n2: number):number{
    return n1+n2;
}
console.log(sum(2,3));
