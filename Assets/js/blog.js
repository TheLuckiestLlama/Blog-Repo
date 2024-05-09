// Collect data from the form, stringify to local data, parse and post. GGEZ.

let uploadedInfo = localStorage.getItem("blogData");
let blogPosts = JSON.parse(uploadedInfo);
let postTarget = document.querySelector('.Posts');


console.log(blogPosts);
for (i = 0; i < blogPosts.length; i++){
    // Grab data from user for the post info tab
    let newPostInfoEl = document.createElement('div');
    let newPostEl = document.createElement('div');
    let newPostUser = blogPosts[i].Username;
    let newPostTitle = blogPosts[i].Title;
    // Create poster info titlecard
    newPostInfoEl.textContent = "Username: " + newPostUser + " Title: " + newPostTitle;
    postTarget.appendChild(newPostInfoEl);
    // Get post content
    let newPostText = blogPosts[i].Post;
    newPostEl.textContent = newPostText;
    postTarget.appendChild(newPostEl);
}