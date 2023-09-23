// const student={
//     name:"Anni",
//     class:12

// }
// student.name ='Moshiur'
// console.log(student)

// let sum =0;
// for (let i =0; i<10; i++)
// {
//     sum=sum+i;
//     console.log(sum)


// }
// console.log(sum);

//  default value
// function add(num1,num2=0)
// {
//     const result =num1+num2;
//     console.log(num1,num2,result);
//     return result;

// }
// const sum=add(5,7)

// function fullName(first ,last=" ")
// {
//     const full =first + " " +last;
//     return full;

// }

//  const name= fullName('moshiur')

// console.log(name);

// const a=2;
// const b=3;
// let result =`The sum of ${a} and ${b} is ${a+b}`
// console.log(result)

// let result ="The sum of " +a+ " and " +b+ " is " +(a+b);

// console.log(result)

// const numbers =[45,48,98,78]
// const student ={name:'moshiur rahman' ,age:5}
// const math =`The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
// console.log(math)



// function expreseeion

// const add2 =function(a,b)
// {
//     return a+b;

// }

// arrow function

// const add3= (a,b)=> a+b

// const sum =add3(3,4)
// console.log(sum)

// const multiply =(num1,num2)=>num1*num2
// const mult =multiply(3,12)
// console.log(mult)

// const getage =(person)=>person.Age;
// const student ={name:'moshiur' ,Age:4}
// const age =getage(student)
// console.log(age)

// const getThird =numbers =>numbers[3];
// const third =getThird([1,2,3,4])
// console.log(third)

// no parameter

// const getPI =()=>Math.PI
// console.log(getPI())

// large arrow function

// const domath =(x,y,z) =>
// {
//     const sum =x+y+z;
//     const mult=x*y*z
//     const result =sum+mult;
//     return result
// }
// console.log(domath(2,3,4))

// const max =Math.max(1,2,3,12,13,2)
// const numbers =[1,2,3,4,5,6,6]
// const arrymax=Math.max(...numbers)
// console.log(arrymax)

// use spread operator to copy

// const friends =[4,5,6,7];
// const bondhu =friends;
// const dosto =[...friends]
// console.log(dosto)
// friends.push(100)
// console.log(dosto)
// console.log(friends)

// // advanced
// const sonkha =[...friends,9999]
// console.log(sonkha)

// destructuring
// if right side is an object left side of destructring will be object as well

// const user ={

//     'name': 'mosjiur rahman',
//     'popularity' : "mr ben"
// age:23

// }

// const {phone, age:boyos}=user
// console.log(boyos)

// const {name} =user;
// console.log(name)

// const numbers =[45,99]
// const [first ,second]=numbers;
// const [x,y] =[12,66];



// function doubleThem(a,b)
// {
//     return [a*2 ,b*2];

// }

// const [prothome ,ditiyo] =doubleThem(5,6);
// console.log(prothome,ditiyo);


const glass =
{
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
};

// const keys=Object.keys(glass)
// console.log(keys)
// const keys=Object.values(glass)
// console.log(keys)


// const entries =Object.entries(glass);
// console.log(entries)

// delete glass.isCleaned;

// console.log(glass);

// const {isCleaned,...shortglass}=glass;
// console.log(shortglass);


// Object.freeze(glass)
// Object.seal(glass);
// glass.source='Bangladesh';
// glass.price=5000;
// delete glass.name;
// console.log(glass)

// const object =[1,2,3,4,5];
// for (const iterator of object) {

//     console.log(iterator)


    
// }

// const nobab ='moshiur rahman is  a nabab';
// for (const iterator of nobab) {
//     console.log(iterator)

    
// }

// for (const key in glass) {
//     if (Object.hasOwnProperty.call(glass, key)) {
//         const element = glass[key];
//         console.log(element)
        
//     }
// }

// for (const key in glass) {

//     const value =glass[key];
//     console.log(key ,`:`,value)
// }








 
