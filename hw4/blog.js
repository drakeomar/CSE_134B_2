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
function makeDummyPosts(){
    return [["New JS Framework", "01/20/2023","summary"],["Using Bootstrap for Responsive Design", "02/23/2020","summary"],["Hacking 101: Port Sniffing", "2023/20/2", "The basics and fundamentals of networking, ports, and common tools."],[]]
}

/**DOM ELEMENTS*/
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const summaryInput = document.getElementById('summary-text');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancel-button');
const outputBox = document.getElementById('output-box');

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
    /*if (localStorage.getItem("posts") === null) {
        posts = makeDummyPosts();
        localStorage.setObj('posts', posts);
    }else{
        posts = localStorage.getObj(`posts`);
    }*/

    posts = makeDummyPosts();
    localStorage.setObj('posts', posts);

    const newPostDialog = document.getElementById('new-post-dialog');

    /** if user cancels their new post, then set all required input to not required and allow dialog to close*/
    cancelBtn.addEventListener('click', ()=>{
        titleInput.required = false;
        dateInput.required = false;
        summaryInput.required = false;
    });

    let newPost = "";
    //listen for click of confirm button, and check if input is filled in,
    // if whitespace only, then dialoag will close as required will be satisifed
    // in the form inputs, but it will not make a new post, as the inputs are trimmed
    // for excess whitespace in the if statement check
    confirmBtn.addEventListener('click', () => {


            if(titleInput.value.trim() && dateInput.value.trim() && summaryInput.value.trim() ){

                //increment count of posts
                localStorage.setObj("count", localStorage.getObj("count")+1);
                let csPost = `
                        <li id="post-${localStorage.getObj("count")-1}"> 
                        <div style="display:flex; flex-direction: row; justify-content: space-around; align-items: center; 
                        border:solid black 1px;margin: 1rem; border-radius: 2rem">
                            
                                <div style="display: flex; flex-direction:row">
                                    <h2>${titleInput.value} </h2>
                                    <p>posted ${dateInput.value} </p>
                                </div>

                                <p>${summaryInput.value}</p>
                                
                            
                            <button id="edit-button-${localStorage.getObj("count")-1}" onclick="updateBlogPost()">Edit</button>
                            <button id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                            </div>
                        </li>
                        `;
                newPost = `
                        <section id="post-${localStorage.getObj("count")-1}" style="display:flex; flex-direction: row; justify-content: space-around; align-items: center; 
                        border:solid black 1px;margin: 2rem; border-radius: 2rem">
                            <div style="display:flex; flex-direction:column">
                                <div style="display: flex; flex-direction:row">
                                    <h2>${titleInput.value}:</h2>
                                    <p>${dateInput.value}</p>
                                </div>

                                <p>${summaryInput.value}</p>
                                
                            </div>
                            <button id="edit-button-${localStorage.getObj("count")-1}">Edit</button>
                            <button id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                        </section>
                        `;
                document.getElementById("post-list").innerHTML += csPost;

                /** handle click events with correct functions for buttons*/
                document.getElementById(`delete-button-${localStorage.getObj("count")-1}`).onclick = () =>{
                    deleteBlogPost(this);
                };
                document.getElementById(`edit-button-${localStorage.getObj("count")-1}`).onclick = () =>{
                    updateBlogPost(this);
                };

                let newPostArray = new Array();

                /**update posts in local storage*/
                newPostArray.push(titleInput.value);
                newPostArray.push(dateInput.value);
                newPostArray.push(summaryInput.value);
                posts.push(newPostArray);

                localStorage.setObj("posts", posts);
            }

    });
    populateWithBlogs(posts);
}

function populateWithBlogs(posts){
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i]);
        let title = posts[i][0];
        let date = posts[i][1];
        let summary = posts[i][2];

        localStorage.setObj("count", localStorage.getObj("count")+1);

        let csPost = `
                        <li id="post-${localStorage.getObj("count")-1}"> 
                        <div style="display:flex; flex-direction: row; justify-content: space-around; align-items: center; 
                        border:solid black 1px;margin: 1rem; border-radius: 2rem">
                            
                                <div style="display: flex; flex-direction:row">
                                    <h2>${title} </h2>
                                    <p>posted ${date} </p>
                                </div>

                                <p>${summary}</p>
                                
                            
                            <button id="edit-button-${localStorage.getObj("count")-1}" onclick="updateBlogPost()">Edit</button>
                            <button id="delete-button-${localStorage.getObj("count")-1}">Delete</button>
                            </div>
                        </li>
                        `;

        document.getElementById("post-list").innerHTML += csPost;

        document.getElementById(`delete-button-${localStorage.getObj("count")-1}`).addEventListener('click',  () =>{
            deleteBlogPost();
        };
        document.getElementById(`edit-button-${localStorage.getObj("count")-1}`).onclick = () =>{
            updateBlogPost(this);
        };
    }
}

function createBlogPost(){

    const newPostDialog = document.getElementById('new-post-dialog');
    const titleInput = document.getElementById('title-input');
    const dateInput = document.getElementById('date-input');
    const summaryInput = document.getElementById('summary-text');
    /*
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancel-button');
    const outputBox = document.getElementById('output-box');
    let newPost = "";
    let posts = localStorage.getObj("posts");
    */

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
    //console.log(event.srcElement.id);
    //console.log(this);
    let posts = localStorage.getObj("posts");
    posts.splice(event.srcElement.id.slice(-1));
    document.getElementById(`post-${event.srcElement.id.slice(-1)}`).style.display = "none";
    //decrement count of posts
    localStorage.setObj("count", localStorage.getObj("count")-1);
}
function updateBlogPost(){
    let posts = localStorage.getObj("posts");
    let postNumber = event.srcElement.id.slice(-1);

    /**assign corresponding inputs and show dialog for updating post*/
    titleInput.value = "";
    titleInput.required = true;
    dateInput.value = "";
    dateInput.required = true;
    summaryInput.value = "";
    summaryInput.required = true;
    newPostDialog.show();


}
export {blogMain, createBlogPost, deleteBlogPost, updateBlogPost}