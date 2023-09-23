// data access 

// const data =[{id:1,name:'abul',addreess:'kochu khet'}];
// console.log(data[0].id);

// const products ={

//     count:5000,
//     data:[
//         {id:1,name:'lenevo laptop' ,price:5000},
//         {id:2,name:'macbook',price:65000},

//     ]

// }

// This is call optional chaning 
// console.log(products.data[1].name);

// const user ={

//     id:50001,
//     name:'shoriful raj',
//     address:
//     {
//         street:
//         {
//             first:'54/1 uttora side',
//             seconnd:'poribag er goli',
//             third:'no dorai'

//         },
//         city:'dhaka',
       
//     }

        

// }
// const user ={

//     id:50001,
//     name:'shoriful raj',
//     address:
//     {
      
    
//             first:'54/1 uttora side',
//             seconnd:'poribag er goli',
//             third:'no dorai'

     
       
       
//     }

        

// }

// console.log(user.address.street?.first)
 

// const numbers =[2,3,4,5,6,7,8];
// const doubled=[];
// for (const iterator of numbers) {
//     const double =iterator*2;
//     doubled.push(double);

    
// }
// console.log(doubled)
// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result form each operation in an aeeay and finally returns you the array.

//  const numbers =[4,5,6,7,8];
//  function doubleIT(num)
//  {
//     console.log('num now',num);
//     return num*2;

//  }
//  const result=numbers.map(doubleIT)
//  console.log(result)

// const double2=n=>n*2;
// const result =numbers.map(double2)

// console.log(result)

// const output2 =numbers.map(n=>n*2);
// console.log(output2);

// const fiveBouns = numbers.map(num=>num+5);
// console.log(fiveBouns)

// const friends=['todddddddm','tom','tom','tom','tom'];
// const lenghts =friends.map(frend=>frend.length)
// console.log(lenghts)

// const firstletter =friends.map(friend=>friend[0]);
// console.log(firstletter);
// for each and map are same but  foreach return kore na 

// const numbers =[1,2,3,4,5];
// const result =numbers.forEach(n=>console.log(n))

// const result =numbers.forEach(n=>{



// })

// console.log(result);

// const numbers =[1,2,3,4,5];
// const players =[75,76,23,3,4];
// // const selected =players.filter(p=>p>70);
// const selected =players.filter(p=>p%2==1);
// console.log(selected);

// const friends =['tom' ,'jhon' ,'micheal' ,'oliver' ,'Tim']

// const oddFriends =friends.filter(friend =>friend.length>4)
// console.log(oddFriends);


// const players =[75,76,23,3,4];
// const selected =players.find(player=>player>70)
// console.log(selected);

// const numbers =[4,5,6,7,21,23];
// const total =numbers.reduce((previous,current)=>previous+current,0);
// console.log(total);


// const products=[

//     {id:1, name:'lenavo',price:6500},
//     {id:2, name:'dell',price:65300},
//     {id:3, name:'hp',price:632500},
//     {id:4, name:'mac',price:6500},
// ]

// const names =products.map(product =>product.name)
// console.log(names)
// products.forEach(p => console.log(p.id))
// const expensive = products.filter(p =>p.price >500000)
// console.log(expensive);

// const affordabble =products.find( p=> p.price<50000)
// console.log(affordabble);

// const total =products.reduce((accum,cuurent)=>accum+cuurent.price,0)
// console.log(total);

// has some properties and metod also
 
// class Product{
//     country ="Bangladesh";
//     speak(talk)
//     {
//         console.log(`talking about ${talk}`);

//     }

// }

// const lenevo =new Product()
// console.log(lenevo)

// lenevo.speak('oba kita kou')


// class Teacher {

//     constructor(name ,subject)
//     {
//         this.name =name;
//         this.subject=subject;
//     }
//     lecture()
//     {
//         console.log('sir is teaching Mtah');

//     }
// }

// const tapan =new Teacher('Tapon sir' ,'Physics')

// console.log(tapan);

// const rashid =new Teacher('Rashid','English')
// console.log(rashid);

// class Person{

//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age; 

//     }

//     sleep()
//     {
//         console.log(`Sleeping now ${this.name}`)

//     }

//     activity()
//     {
//         this.sleep()

//     }
// }

// const kodom =new Person('moshiur rahman' ,32);
// // console.log(kodom)
// kodom.sleep();

