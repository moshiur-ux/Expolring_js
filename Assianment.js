// function cubeNumber(number) {
//     if( typeof number !=="number")
//     {
//         return "please give me a number";

//     }

//     return number**3;



// }

// function matchFinder(string1, string2) {

//     if( typeof string1 !=="string" && string2 !=="string")
//     {
//         return "please provide me a string"

//     }

//     if(string1.includes(string2))
//     {
//         return true
//     }
//     else
//     {
//         return false

//     }
// }


// function canPay(changeArray, totalDue) {


//     if(changeArray.length==0)
//     {
//         return "Give me an element"

//     }

//     let sum=0;
//     for(let item of changeArray)
//     {
      
//         sum= sum+item;   
//     }

//     if(sum >= totalDue)
//     {
//         return true;

//     }
//     else
//     {
//         return false;
//     }


// }

function findAddress(obj){
    if(typeof obj !== "object"){
        return "please provide me a valid object"
    }else{
        

        const  street=obj.street || "__";
        const house= obj.house || "__";
        const  society = obj.society || "__";
      
        return " "+obj.street+", "+obj.house+", "+obj.society;
        

    
       
    }
    

}

const person = {
    street:10,
    house: 25,
    society: "Rajshahi",
    
}

console.log(findAddress(person))


// function sortMaker(arr) {

//     for(let i=0;i<arr.length;i++)
//     {
//       if(arr[i]<0)
//       {
//        return "invalid input"
//       }
//     }
  
//       let largest=arr[0]
  
//       for(let i=1;i<arr.length;i++)
//       {
//           let currentLarge=arr[i]
//           if(currentLarge==largest)
//           {
//               return "equal"
  
//           }
//           if(currentLarge>largest)
//           {
//               let temp =largest
//               largest=currentLarge
//               currentLarge=temp
//               return [largest,temp];
  
//           }
  
//           else{
//               return arr
//           }
//       }
  
   
     
//   }
  
//   console.log(sortMaker([7,9]))







