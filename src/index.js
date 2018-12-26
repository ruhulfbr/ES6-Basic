
// const a = 10;
// const b = 20;

// const sum = (a, b) => a+b;

// console.log(sum(a, b));

// const x = 5;
// x = 10;
// console.log(x);

// const arr = [];
// arr.push(10);
// arr.push(25);
// arr = [];
// console.log(arr);
// var y = 10;
// if(true){
//     var y = 55;
//     console.log(y);
// }
// console.log(y);


// let x = 10;
// if(true){
//     let x = 55;
//     console.log(x);
// }
// console.log(x);

// function demo(){
//     {
//         let x = 10;
//         {
//             const x = 25;
//             console.log(x);
//         }
//         console.log(x);
//     }
// }
// demo();

// const name = 'Ruhul amin';
// const age = 24;
// const email = 'ruhul@gmail.com';
// const arr = [10,20,30]

// // const all = 'Name : ' + name + ' Age : '
// //             + age + ' Email : '+ email;

// const all = `
//     Name : ${name}
//     Age : ${age}  
//     Email : ${email}
//     Result : ${arr}
// `

// console.log(all);

// alert('Its working');


// function bb(){
//     console.log('This is a normal function');
// }

// const ss = (sona) =>{
//     console.log('This is a : ' + sona);
// }
// ss('sona');
// const ss = sona =>{
//     console.log('This is a : ' + sona);
// }
// ss('sona');

// const ss = (name, age) =>{
//     console.log('TMy name is  : ' + name + ' and I am '+ age + ' Years old');
// }

// const addMe = (a,b) => a+b;
//  console.log(addMe(20,50));

//  const squre = x => x*x;
//  console.log(squre(20));

// const obj = {
//     name : 'Ruhulamin',
//     print: function(){
//         setTimeout(function(){
//             console.log(this);
//         }.bind(this), 1000);
        
//     }
// }
// obj.print();

// const obj = {
//     name : 'Ruhulamin',
//     print: function(){
//         setTimeout(()=>{
//             console.log(this.name);
//         }, 1000);
        
//     }
// }
// obj.print();

// let name = 'Ruhul amin'
// let email = 'ruhul11bd@gmail.com'
// const obj = {
//     name,
//     email,
//     print(){
//         console.log(this.name, this.email);
//     }
// }
// obj.print();
// console.dir(obj);

// const arr = [12,14,15];
//  let[a, ,c] = arr;

//  console.log(c);

// const obj = {
//     name: 'Ruhul',
//     email: 'email@gmail.com'
// }
// let { name,email } = obj;
// console.log('My name is '+ name + ' Email ' + email)

// function print({name,email}){
//     console.log(`Email : ${email} , Name : ${name}`)
// }
// print({email,name})


// let add = (a,b) => a+b;

// console.log(add(10))

// let add = (a=20,b=a) => a+b;

// console.log(add())


// Rest operator
// function sum(...num){
//     return num.reduce((a,b) => a+b);
// }

// let xum = sum(10,20,30,40,55)
// console.log(xum)

//Spreed operator
 
// let arr = [1,2,3,4,5]

// arr = [...arr,20,30]

// console.log(arr)
// console.log(...arr)

// let obj = {
//     name: 'ruhul',
//     email: 'email.com'
// }

// let obj2 = {
//     ...obj,
//     name: '01749769449'
// }
// console.log(obj2)

// import {add,mul} from './math';

// console.log(add(10,20))
// console.log(mul(10,2))

// import Student from './Student';

// let st1 = new Student('Ruhul','Ruhul@gmail.com','1701010072');

// st1.info();

// let MyfirstPromis = new Promise((resolve,reject)=>{
//     let name =  'Code Museum';
//     setTimeout(()=>{
//         resolve(name)
//     },3000)
// });


// MyfirstPromis
//     .then((name)=>{
//         console.log(`we are : ${name}`);
//     })
    // .catch((err)=>{

    // });

fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=> response.json())
           .then((body)=>{
               const lis = body.map(data =>{
                    let li = document.createElement('li');
                    let text = `Name : ${data.name} , Email : ${data.email} and Phone : ${data.phone}`;
                    let nodeText = document.createTextNode(text);

                    li.appendChild(nodeText);
                    return li;
               });
               lis.forEach((li)=>{
                   document.getElementById('Mylist').appendChild(li);
               });
           })
           .catch((err)=> console.log(err))







