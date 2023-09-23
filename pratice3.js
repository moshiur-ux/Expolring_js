
// arrow function

// const  add =(x,y)=>x+y;
// console.log(add(2,3));

// const show=()=>{
//     console.log('hello');

// }
// show()

// const sum=x=>console.log(x)
// sum(30)


// const sum2=(x,y,z)=>{

//     const result =x+y+z;
//     return result;

// }

// console.log(sum2(2,3,4))

//  const arr =[1,2,3];
//  const add1=x=>console.log(x)
//  arr.forEach(add1);

// arr.forEach(x=>console.log(x))

// const fruits =['mango',"conago","pango"];

// fruits.forEach(item=>{
//     console.log(item)

// })

// const arr =[1,2,3];
// let sum =0;

// arr.forEach(iteam=>{
//     sum+=iteam;

// })

// console.log(sum);

    // const fruits=['mango',"conago","pango"];
    // fruits.forEach((item,index,arr)=>console.log(item,index,arr))

    // const y=fruits.find((item)=>item==="mango")
    // console.log(y);


    // const arr=[1,2,3,4]
    // arr.map((item)=>console.log(item*2))
    // console.log(arr)


// const find=(fruits)=>{

//     for(let item of fruits)
//     {
//         if(item==="mango")
//         {
//             return item
//         }
//     }

//     return null

// }

// const x=find(fruits);
// console.log(x);

//  const numbers=[1,2,3,4,5,6,7,8];
//  const filter =numbers=>{
//     const result=[];
//     for(let item of numbers)
//     {
//         if(item%2===0)
//         {
//             result.push(item);

//         }
//     }
//     return result;

//  }

//  const x=filter(numbers)
//  console.log(x);


// const y=numbers.filter((item)=>item%2===0)
// console.log(y);

// const arr=[1,2,3,4,5,6,7,8];

// const sum =arr.reduce((previous,current)=>previous*current,1)
// console.log(sum)


// using spread operator 


 const arr =[3,4,5,4,4,4,4,4,6];
// const arr2=[...arr];


// arr2.push(10);
// arr2.push(20);

// arr.push(30);


// console.log(arr)
// console.log(arr2)


// array distructuring

 const [a,b,c,...rest]=arr
 console.log(a,b,c,rest);


