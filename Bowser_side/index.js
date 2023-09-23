const inputData=()=>
{
    const inputData1=document.getElementById('input-data1')
    const inputData2=document.getElementById('input-data2')
    const inputDatavalue=inputData1.value
     const inputDatavaue2=inputData2.value
     inputData1.value=" "
     inputData2.value=" "

     console.log(inputDatavalue,inputDatavaue2)

     displayINputData(inputDatavalue,inputDatavaue2)
     saveproductToLocalStorage(inputDatavalue,inputDatavaue2)
}

const displayINputData=(x,y)=>
{
    const ul=document.getElementById('lwqwqi')
    const li =document.createElement('li')
    li.innerText=`${x}: ${y}`

    ul.appendChild(li)

}
const getstoreshoppingcard=()=>
{
    const storedCart =localStorage.getItem('cart')
    let cart={};
    if(storedCart)
    {
        cart=JSON.parse(storedCart)
    }
    return cart;

}

const saveproductToLocalStorage =(product,quantity)=>{

const cart = getstoreshoppingcard();
cart[product]=quantity;
const cartStingified=JSON.stringify(cart);
localStorage.setItem('cart',cartStingified)
console.log(cartStingified);


}

const displayProductFromLocaltoroage=()=>
{
    const saveCart =getstoreshoppingcard();
    console.log(saveCart)
    for(const product in saveCart)
    {
        const quantity=saveCart[product];
        console.log(product.quantity);
        
    }
}