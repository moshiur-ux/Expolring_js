const loadphone =async(searchtext='13',isShowAll)=>{

    const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext }`);
    const data =await res.json();
    const phones =data.data;
    console.log(phones)
    displayPhones(phones,isShowAll)

}

const displayPhones=(phones,isShowAll )=>{

    
    const phonecontainer =document.getElementById('phone-container');
   phonecontainer.textContent=' '

   const showAllContainer=document.getElementById('show-all-container');

   if(phones.length>12 && !isShowAll)
   {
    showAllContainer.classList.remove('hidden');

   }

   else{
    showAllContainer.classList.add('hidden');

   }

//    console.log("is show all",isShowAll);

   if(!isShowAll)
   {
    phones=phones.slice(0,12);

   }

   else
   {

   }


  


    phones.forEach(phone=> {
        console.log(phone);

        // 1 create a div 
        const phoneCard = document.createElement('div')
        // set inner html

        phoneCard.classList=`card w-96 bg-base-100 p-4 shadow-xl`
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
              <button onclick=" handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
          </div>


        `
        // append child

        phonecontainer.appendChild(phoneCard);


    });

    toggleLoadingSpinner(false);


}

const handleShowDetails= async(id)=>
{

    console.log('show the detials' ,id)
    const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      const data=await res.json();
      const phone =data.data;


      showPhoneDetails(phone);


}

const showPhoneDetails=(phone)=>
{
    console.log(phone)
    const phoneName=document.getElementById('show-detail-phone-name');
    phoneName.innerText=phone.name

  const showDetailsContainer =document.getElementById('show-detail-container')
  showDetailsContainer.innerHTML=`
  <img src="${phone.image}" alt="">
  <p><span> Storage: </span> ${phone?.mainFeatures?.storage}</p>
      <p><span>GPS:</span>${phone?.others?.GPS}</p>



  
  `
    show_details_modal.showModal();
}




// handle search button
const hadleSearch=(isShowAll)=>
{
    toggleLoadingSpinner(true);
  const searchField=document.getElementById('search-field');

  const searchtext=searchField.value;
  console.log(searchtext);

  loadphone(searchtext,isShowAll)
  
}

const toggleLoadingSpinner=(isLodding)=>
{
    const toggleLoadingSpinner=document.getElementById('loading-spinner');
    if(isLodding)
    {
        toggleLoadingSpinner.classList.remove('hidden');
    } 
    else{
        toggleLoadingSpinner.classList.add('hidden');

    }


}


const handleShowAll=()=>
{
    hadleSearch(true)


}

 loadphone()
