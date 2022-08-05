var cl = console.log;
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
// const clickbtn = () =>{
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl(n1 + n2)
// }
// btn.addEventListener("click", clickbtn);
// const add = (n1:number,n2:number) =>{
//     return n1+n2;
// }
// btn.addEventListener("click", () =>{
//     cl(add(Number(num1.value), Number(num2.value)));
// })
var Add = function (n1, n2) {
    return n1 + n2;
};
btn.addEventListener("click", function () {
    cl(Add(+num1.value, +num2.value));
});
