// Make a function to detect when something is submitted and have it post it in the console
const uploadPost = document.querySelector(`#uploadPost`)
const transferPosts = document.querySelector(`#goToBlog`)
let userPosts = [];

const transferPostFunc = function (){
    let blogPostData = JSON.stringify(userPosts);
    localStorage.setItem("blogData", blogPostData);
    console.log("Item's packed, ready to ship.");
    console.log(blogPostData);
}





uploadPost.addEventListener(`click`, function(event){
    event.preventDefault();
    let newUser = {};
    // Collects data from form on Index
    const username = document.getElementById("fname");
    const password = document.getElementById("pass");
    const postText = document.getElementById("textStuff");
    // Figures out the value of the responses (what's actually in the box.)
    const userValue = username.value;
    const passValue = password.value;
    const postValue = postText.value;
    // Assigns new users info and post text
    newUser.Username = userValue;
    newUser.Title = passValue;
    newUser.Post = postValue;
    // Add to userbase
    userPosts.push(newUser);
    console.log(userPosts);
    transferPostFunc(userPosts);
})
