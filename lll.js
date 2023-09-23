// function addarry(arr)
// {
//     let sum=0;
//     for (const iterator of arr) {

//          sum+=iterator;
        
//     }
//     return sum
// }

// console.log(addarry([1,2,3,4]))


const products =[
    {id:1 ,name:'xiami Phone One night', price:19000},
    {id:2 ,name:'Iphone', price:19000},
    {id:3 ,name:'mac book air', price:19000},
    {id:4 ,name:'lenevo yoga laptop 2025', price:19000},
    {id:5 ,name:'Dell inspiration laptop', price:19000},
    {id:6 ,name:'Samsung phone note7', price:19000},
    {id:7 ,name:'Nokia old age phone gone', price:19000},
    {id:8 ,name:'phone one', price:19000},
    {id:9 ,name:'my phone', price:19000},


]

for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
        const element = products[key];
        console.log(element)
        
    }
}


// function matchproducts(products,search)
// {
//     const matched=[];
//     for(const product of products )
//     {
//        if(product.name.toLowerCase().includes(search.toLowerCase()))
//        {
//         matched.push(product);


//        }
//     }
//     return matched;
// }

//     const result =matchproducts(products ,'laptop')

//     console.log(result)