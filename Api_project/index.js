// const handleCategory = async()=>{
//     // fetch(" https://openapi.programming-hero.com/api/news/categories")
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch((err)=>console.log(err));

//     console.log("hello first");
//     const response=await fetch(" https://openapi.programming-hero.com/api/news/categories") 
//     const data =await response.json();
//     console.log(data);
//     console.log("hello second");



// };

// handleCategory()


const handleCategory=async()=>
{
    const response =await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data =await response.json();
    const tabContainer=document.getElementById("tab-container");
    const trimeData=data.data.news_category.slice(0,3);
    trimeData.forEach((category)=>
    {
        const div =document.createElement("div");
        div.innerHTML=`
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        
        
        `;
        tabContainer.appendChild(div);


    })
    console.log(trimeData);

}

const handleLoadNews= async(categoryId) =>{
    const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data =await response.json();
    const cardContainer =document.getElementById('card-container');

    cardContainer.innerHTML=" ";


    data.data?.forEach((news)=>
    {
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              ${news.title.slice(0.40)}
              <div class="badge badge-secondary">${news.rating?.badge}</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">${news.details.slice(0,15)}</div> 
              <div class="badge badge-outline">Products</div>
              <div>
               <p>
               <h3> Total views:${news.total_view?news.total_view:"no views"}</h3>
               
                
               </p>

               <button onclick=handleModal('${news._id}')>Details</button>
               <img class=" rounded-xl h-10 w-full" src=${news.author?.img}>

              
              </div>
            </div>
          </div>
        </div>

        
        
        `
        cardContainer.appendChild(div);

    })


}

const handleModal =async(newsId)=>
{

    const response=  await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)

    const data =await response.json();
    console.log(data.data[0]);
    
    const modalContainer =document.getElementById('modal-container')
    const div =document.createElement("div");
    div.innerHTML=`

<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
    
    
    `

    modalContainer.appendChild(div)

    const modal=document.getElementById('my_modal_1');
    modal.showModal();



}


handleCategory()

handleLoadNews("01")
