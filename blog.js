/**setObj and getObj defined to simplify getting and setting
 * from
 * @param key
 * @param obj
 */
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
/**
 *
 * @param key
 * @returns {any}
 */
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

/**blogMain
 *
 */
function blogMain(){
    let posts = null;

    if (localStorage.getItem("count") === null) {
        localStorage.setObj('count', 0);
    }

    /**TESTING LOCALSTORAGE**
    localStorage.setObj(`post${localStorage.getObj}`, `1`)
    console.log(localStorage.getObj(`test`));
    */
    document.getElementById('add-post').addEventListener('click', () => {
        createBlogPost();
    });

    /** Check if posts variable exists in localStorage, handle it**/
    if (localStorage.getItem("posts") === null) {
        posts = new Array(24);
        posts[0] = "HELLO WORLD"
        posts[1] = "HELLO WORLD"
        posts[2] = "HELLO WORLD"
        posts[3] = "HELLO WORLD"
        localStorage.setObj('posts', posts);
    }else{
        posts = localStorage.getObj(`posts`);
    }
    populateWithBlogs(posts);
}

function populateWithBlogs(posts){
    for(let i = 0; i < posts.length; i++){

    }
}

function createBlogPost(){

    const newPostDialog = document.getElementById('new-post-dialog');
    const titleInput = document.getElementById('title-input');
    const dateInput = document.getElementById('date-input');
    const summaryInput = document.getElementById('summary-text');
    const confirmBtn = document.getElementById('confirmBtn');
    const outputBox = document.getElementById('output-box');

    /*show dialog for new post*/
    newPostDialog.showModal();

    /*Change return value on confirm button
    titleInput.addEventListener('change', (e) => {
        confirmBtn.value = titleInput.value;
    });

     */
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    newPostDialog.addEventListener('close', () => {

        let newPost = `<h1>${titleInput.value}:</h1>
                       <p>${dateInput.value}</p>
                       <p>${summaryInput.value}</p>`;
        outputBox.innerHTML = `NEWPOST: ${newPost}.`;
    });
}
function deleteBlogPost(){

}
function updateBlogPost(){

}
export {blogMain, createBlogPost, deleteBlogPost, updateBlogPost}