// Make a function to detect when something is submitted and have it post it in the console
const uploadPost = document.querySelector(`#uploadPost`)

uploadPost.addEventListener(`click`, function(event){
    event.preventDefault();
    const username = document.getElementById("fname");
    const password = document.getElementById("pass");
    const contentText = document.getElementById("textStuff");
    const userValue = username.value;
    const passValue = password.value;
    const contentValue = contentText.value;
    console.log(userValue, passValue, contentValue);

})