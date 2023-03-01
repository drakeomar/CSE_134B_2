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
    let newPost = `<h1> str</h1>`
}
function deleteBlogPost(){

}
function updateBlogPost(){

}
export {blogMain, createBlogPost, deleteBlogPost, updateBlogPost}