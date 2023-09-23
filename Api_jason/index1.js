function loaddata3() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => displayusers2(data));
  }


//   function displayusers2(data)
//   {
    // for (const user of data) {
        // console.log(user.name);
        // 
        // 
    // }
//   }

  function displayusers2(data)
  {

    const ul=document.getElementById('users-list')

    for (const user of data) {
        const li =document.createElement('li');
        li.innerText=user.name;
        ul.append(li);

        
        
    }
  }

