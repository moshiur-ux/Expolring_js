function loadPosts()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => displayPosts(data));


}

// get the container element where you eant to add
// cretae child element
// set innertext or innerHTML
// appendchild

function displayPosts(posts)
{
    const postsContainer =document.getElementById('posts-container')
    for (const post of posts) {
        
        console.log(post)

        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        postdiv.innerHTML=`
         
        <h4>User-${post.userId}</h4>
        <h5>Post:${post.title}</h5>
        <p>Post Description ${post.body}</p>

        
        `;

        postsContainer.appendChild(postdiv);



    }
}

loadPosts()
