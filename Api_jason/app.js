function loaddata2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayusers(data));
}







function displayusers(data) {
  console.log(data);
}
