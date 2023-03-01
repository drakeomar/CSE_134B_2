
function blogMain(){
    Storage.prototype.setObj = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    }
    if (localStorage.getItem("count") === null) {
        localStorage.setObj('count', 0);
    }

    localStorage.setObj(`post${localStorage.getObj}`, `1`)
    console.log(localStorage.getObj(`test`))

    if (localStorage.getItem("posts") === null) {
        let posts = new Array(24);
        localStorage.setObj('posts', posts);
    }else{
        let posts = localStorage.getObj(`posts`);
    }
    populateWithBlogs();
}

function populateWithBlogs(){

}
function createBlogPost(){

}
function deleteBlogPost(){

}
function updateBlogPost(){

}
export {blogMain, createBlogPost, deleteBlogPost, updateBlogPost}