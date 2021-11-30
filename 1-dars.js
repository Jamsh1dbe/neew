// var let const
// var title='Hello Js'
//Number
//String
//boolean
//null
//undefined
//Symbol

//Object
//Array
//Function 

// console.log(title);
// console.log(title);
////////////////////////////////////////
// number.parseInt()
// parseFloat

// var a=10; 
// var a=a+10// var a+=10
// a++ 
// ++a
// let b=21;
// var a;
// var c=null
// console.log(`${c}+${a}`,a+c);
// console.log(a,b);
// console.log(a+b);
// console.log(b%a);
// console.log(Number.parseInt(b/a));
// console.log(parseFloat(121,321));
// console.log((b/a).toFixed(10));


// 2-dars/////////////////////////////

// Stringlar
// length
// slice
// subString
// padEnd
// padStart
// indexOf
// lastIndexOf, search
// replace 
// split , repeat
// startsWith , endsWith
// toLowerCase , toUpperCase, trim

////////////////////////////////////////////////////

// var str ='webba academy'
// console.log(str.length);
// console.log(str.slice(0,5));
// console.log(str.substring(0,5));
// console.log(str.substr(3,5));
// var str='2'
// console.log(str.padEnd(3,4));
// console.log(str.padStart(6,0));
// string yozilish turlari
// ``, '', ""
// var tr=`loj"jds"fqwef`
// console.log(tr);

// var str= '     wbba Academy log'
// console.log(str.replace("wbba","return"));
// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf('b'));
// console.log(str.search('b'));
// console.log(str.split(''));
// console.log(str.repeat(5));
// console.log(str.startsWith('w'));
// console.log(str.endsWith('log'));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());

// 3-dars

// concat
// console.log(" lj\"log\" dw");
// ${}
// replace /nom/gi => shunda ishlaydi
// includes() true, false
// eval() string ichida gi ammallani bajaradi
// function get(){
// console.log('');
// }
// get()
// function hello(name, sur='yosh kirit'){
//     console.log(`hello ${name} ${sur}`);
// }
// hello('elbek')
// round , ceil, floor, abs, sqrt, cbrt, pow
// function pow(a,b){
//     return a**b
// }
// console.log(pow(2)*3);


// ==, ===, <,>, <=, >=, !, &&, ||, !=,!==

// if(condition){

// }else if(condition){

// }else{

// }
// if (10==10) console.log('false');
// havo = 'quyosh'
// switch (havo) {
//     case 'quyosh':
//         console.log('issiq');
        
//         break;
//     case 'yomgir':
//         console.log('sovuq');
//         break
//     default:
//         console.log('i don`t know');
//         break;
// }

// title='webbrain weacademy'.repeat(5)
// console.log(title.match(/we/g).length);
// for (let i = 0; i < 100; i++) {
//     // const i=0
//     for (let j = 1; j < 100; j++) {
//         i%2===0 ?console.log(i,'juft'):console.log(i,'toq'); 
        
//     }
// }
// let i=0
// let j=0

// while(i<5){
//     i++
    // j=0;
    // while (j<5) {
    //     console.log(j, 'index j');
    //     console.log(i, 'index i');
    //     j++
    // }

//     console.log(i);
// }
// i=0
// while (i<0) {
//     i++
//     console.log(i);
    
// }
// i=0
// do {
//     console.log(i);
//     i++
// } while (i<0);
// for (let i = 0; i < 0; i++) {
//     console.log(i);    
// }
// var a= ['@','@','@','@',].join('')
// var b=every(a)

// for (let i = 2; i < 100; i++) {
//     var caunt =0;
//     for (let j = 2; j < i; j++) {
//         i%j===0 && caunt++        
//     }  
//     caunt===0?console.log(i, 'tub'):console.log(i, 'tubmas');
// }

// for (let i = 0; i < 100; i++) {
//     i%2===0?console.log(i, 'juft'):console.log(i,'toq');    
// }
// var a='123'
//  var a=  ('122.12'+3);
//  console.log(a);
// console.log(eval('12+3'));
// console.log(ar.sort((a,b)=>b-a));
// ar.pop()
// ar.push(12,33)
// ar.shift()
// ar.unshift(12)
// var arr = arr.unshift(ar)
// console.log(ar.map((value, index)=>value=arr.unshift(value[index])))
// for (let i = 0; i < ar.length; i++) {
//     console.log(arr.unshift(ar[i]));    
// }
// var fruit=['olma', 'ananas', 12,'12','kiwi',]
// let res=fruit.filter((value)=>{
    //     return typeof value===typeof'number'; 
    // });console.log(res);


// var ar =[1,0,2,3,'12','olma',4,'ananas',5,3,6,7 ]
// var a=ar.filter((value)=>value>=0||value<=0).sort((a,b)=>a-b);

// b=0
// for (let i = 0; i < a.length; i++) {
//     b+=(a[i]*1)
// }
// console.log(b)
// for (let i = 1; i< 10; i++){
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i}x${j}=${i*j}`); 
//     }
//     console.log('==========');       
// }

// [...new Array(20)].map((index,value)=>{
//     console.log(index,value);
// })

// var fruit=['apple','Ananas',12,'Orange','Banana','kiwi'].join()
// a=0;
// b=0
// for (let i = 0; i < fruit.length; i++) {
//     (fruit[i]==='a'||fruit[i]==='A'  )&&a++  
//     (fruit[i]==='b'||fruit[i]==='B'  )&&b++  
// }
// console.log(a,'=a');
// console.log(b,'=b');
// var ar =[1,0,2,3,'12','olma',4,'ananas',5,3,6,7 ]

// const sum2 = (ar) => {
//     let yigindi=0;
//     ar.forEach(i => {
//     if(Number(i)) yigindi+=Number(i)
//    })
//    console.log(yigindi)
//    }
   
// sum2(ar)

// ar =[1,2,3,3,'12',3,44,'12',4,'ssdd',4,];
// arr=[]
// ar.map((value)=>arr.unshift(value));
// console.log(arr);
// for (let i = ar.length-1; i=0; i--) {
//     arr.push(ar[i])    
// }
// console.log(arr);
// console.log((`${2}+${2}`)*2); 

// var a=10;
// let b=21;
// var a;
// console.log(a,b);

// console.log(`${2}X${2}`*3);


// var a=10;
// let b=21;
// var a;
// console.log(a,b);
// var a 

// var a=0
// function getdata(arr,num){
//     for (let i = 0; i < arr.length; i++) {

        // console.log(a=arr[i]%i===2)
        // console.log(a+=arr[i]%a[i]===2);
        // a++  
        // console.log(a);
        // console.log(a);  
        // (arr[i]%i===num&&a++)?console.log(a):console.log('hato');
//     }
// }
// getdata([1,3,2,2,],2)

// var data=[
//     {
//         id:1,
//         name:'Asad',
//         status:'student',
//         rang:'yashil'

//     },
//     {
//         id:1,
//         name:'Asad',
//         status:'student',
//         rang:'yashil'

//     },
   
// ]
// a=0
// s=0
// data.map((value)=>{

//     var ne=Object.values(value).join();
//     for (let i = 0; i < ne.length; i++) {
//     // (ne[i]=='a'||ne[i]=='A') && a++
//     if(ne[i] == 'a' || ne[i] == 'A'){
//        a++
//     } 
    
//     // (ne[i]=='s'|| ne[i]=='S') && s++ 
// }
// })
// console.log(a);
// // console.log(ne);
// // var ne =Object.values(data).map(([id, value],index)=>
// // {
// //     console.log(value);
// //     // return value
// // })
// // var ne=Object.values(data[0]).join()
// // for (let i = 0; i < ne.length; i++) {
// //     (ne[i]==='a'||ne[i]==='A') && a++ 
// //     (ne[i]==='s'|| ne[i]==='S') && s++ 
// // }
// // console.log(a);
// // console.log(s);
// // console.log(ne);
// // a=0
// // s=0
// // Object.values(data.map((value)=> {
// //     console.log(value);
// // // return value;
// // }))

// // Object.values((data)=>{

// // })

// var ar =[1,2,3,'-11','olma',4,'ananas',5,3,6,7 ]
// console.log(ar.filter((value)=>value>=0&&value<=0));

// var ar =[1,2,3,'-11','olma',4,'ananas',5,3,6,7 ]
// console.log(ar.filter((value)=>value>=0||value<=0));
// ar =[1,2,3,3,4,5,2]
//  console.log(ar.reduce((val,cur) => val + cur));

//    const myobj={
//        name: 'jonh',
//        age: '12',
//        cars: 'wwew'
//    }
// //    console.log(myobj.cars[0].models[2]);
// var a=Object.keys(myobj)
// console.log(a);
// var b=Object.values(myobj)
// console.log(b);

// ar =[
//     {
//         id: 1,
//         year: 2011,
//         name: 'Eshmat',
//         status: 'student',
//         key: 'test',
//     },
//     {
//         id: 2,
//         year: 2010,
//         name: 'Eshmat akasi',
//         status: 'student',
//         key: 'test',
//     },
//     {
//         id: 3,
//         year: 2012,
//         name: 'Toshmat',
//         status: 'student',
//         key: 'test',
//     },
// ];
// const ondelete=(id)=>ar.filter((value)=>value.id!==id)
// console.log(ondelete(2));
////////////////////////////////////////
// const onsort=()=>ar.sort((a,b)=>a.year-b.year)
// console.log(onsort());
// const kk=( key,value)=>{  d
//     const res=[];
//     ar.map((val)=>{
//         if(val[key].includes( value)){
//             for (const kalit in val) {
//                 if(kalit===key){
//                     res.push(val)
//                 }                
//             }
//         }
//         });
//         return res;
//     };
// console.log(kk('name','Eshmat'));


// var  ar =[3,2,3,6,7,2,1].sort()
// var a= parseInt(ar.length/2)
// if (ar.length%2===0) {
//     console.log(ar.splice(a-1,2));
// }else{console.log(ar.splice(a,1));}
// console.log(ar.length);
// console.log(a);

// var ar =[1,23,3,4,4,5,4,5,6,6]

// Object.assign(

// )

