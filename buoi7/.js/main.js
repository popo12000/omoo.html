//variable--------
//var scope
var a=10;
console.log(a);

//while(f<10) {


// f++
//}
for (var index=0; index<5;index++){
    console.log(index)
}

console.log(index);//5

// let/ const
let x = 10;
const y = 5;
y += 10;
console.log(y);

//for (let ind = 0; ind < 5; ind++) {
  //  console.log(ind);
  //}
  
  //console.log(ind); // error (not defined)
  //data type
  //string
  let string_example='what\'is your full name?';
  let string_example2="what'is your full name?";
  let code= `<h1>your name is:</h1>`;

  const full_name=prompt("what is your full name")
 //validate
 if (!full_name){
    document.getElementsByName("body")[0].innerHTML+= code;
 }else
 //{
 //   const h2=document.createElement("h2");
 //h2.innerText="Your full name"+full_name;
 //add in body
 //document.getElementsByTagNameNS("body")[0].prepend(h2);
 //}
  //number
//et age=parseInt(prompt("how old are you?"));
  //convert str => number: parseFloat/ parseInt
  //age++
  //console.log("your age in next year is:" +age);
  //document.writeln("your age in next year is:" +age);
  //age;
  //document.writeln("now your age is:"+age);
  //age--;
  //let x=15;
  //if(x % 2 ==0){
    //alert("So chan");
  //}else if (x% 2 == 1)
  //{
    //alert("so le");
  //}
  //operators-----------------

  //function + arrow function-------
  //func
  function sum1 = (x, y)=>{
    return x + y;
  };
  console.log("sum", sum(12, 7));
  
  function sum1 = (x, y)=>{
    return x + y;
  };
  console.log("sum", sum(12, 9));
  
  // arrow func
const sum1 = (x, y) => {
  return x + y;
};

console.log(sum1(12, 9));
// code challenges 
function cutString(str){
    return str.slice(0, 2)
}
const cutStr =(str) => str.slice
  
  
  // array--------------------