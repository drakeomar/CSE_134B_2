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

    localStorage.setObj('count', 0);

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
    const newPostDialog = document.getElementById('new-post-dialog');
    const titleInput = document.getElementById('title-input');
    const dateInput = document.getElementById('date-input');
    const summaryInput = document.getElementById('summary-text');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancel-button');
    const outputBox = document.getElementById('output-box');

    cancelBtn.addEventListener('click', ()=>{
        titleInput.required = false;
        dateInput.required = false;
        summaryInput.required = false;
    });
    let newPost = "";
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    confirmBtn.addEventListener('click', () => {


            if(titleInput.value && dateInput.value && summaryInput.value ){

                //increment count of posts
                localStorage.setObj("count", localStorage.getObj("count")+1);

                newPost = `
                        <div style="display:flex; border:solid black 1px">
                            <div id="post-${localStorage.getObj("count")-1}" style="display:inline">
                                <h1>${titleInput.value}:</h1>
                                <p>${dateInput.value}</p>
                                <p>${summaryInput.value}</p>
                                <button id="edit-button-${localStorage.getObj("count")-1}" onclick="updateBlogPost()">Edit</button>
                                <button id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                            </div>
                        </div>
                        `;
                outputBox.innerHTML += newPost;
                document.getElementById(`delete-button-${localStorage.getObj("count")-1}`).addEventListener('click', ()=>{
                    deleteBlogPost();
                });
            }

    });
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
    const cancelBtn = document.getElementById('cancel-button');
    const outputBox = document.getElementById('output-box');
    let newPost = "";

    /**clear inputs and show dialog for new post*/
    titleInput.value = "";
    titleInput.required = true;
    dateInput.value = "";
    dateInput.required = true;
    summaryInput.value = "";
    summaryInput.required = true;
    newPostDialog.show();

    /*Change return value on confirm button
    titleInput.addEventListener('change', (e) => {
        confirmBtn.value = titleInput.value;
    });

     */

}

function deleteBlogPost(){

    let posts = localStorage.getObj("posts");
    posts.splice(this.id.slice(-1));
    document.getElementById(`post-${this.id.slice(-1)}`).display = "none";
    //decrement count of posts
    localStorage.setObj("count", localStorage.getObj("count")-1);
}
function updateBlogPost(){

}
export {blogMain, createBlogPost, deleteBlogPost, updateBlogPost}