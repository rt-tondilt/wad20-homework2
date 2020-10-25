
refreshPosts();

const postListSelector = 'section.main-container';

function refreshPosts() {
    $.get( "https://private-anon-cb48b9226c-wad20postit.apiary-mock.com/posts", posts => {
        $(postListSelector).empty();
        for (const post of posts) {
            console.log(post);
            appendPost(post);
        }
    });
}

function makeAuthor(author, createTime) {
    return `<div class="post-author">
        <span class="post-author-info">
        <img src="${author.avatar}" alt="Post author">
        <small>${author.firstname} ${author.lastname}</small>
        </span>
        <small>${createTime}</small>
    </div>`
}

function makeMedia(media) {
    if(media==null){
        return '';
    }
    if(media.type=='image'){
        return `<div class="post-image">
        <img src="${media.url}" alt="">
        </div>`
    }
    if(media.type=='video'){
        return "ERROR: TODO: Video showing not implemented."
    }
}

function makeText(text) {
    if(text==null){
        return '';
    }
    return `<div class="post-title">
    <h3>${text}</h3>
    </div>`
}


function appendPost(post) {

    post = `<div class="post">
    ${makeAuthor(post.author, post.createTime)}
    ${makeMedia(post.media)}
    ${makeText(post.text)}
    <div class="post-actions">
      <button type="button" name="like" class="like-button">${post.likes}</button>
    </div>
    </div>`
    $(postListSelector).append(
        post
    )
}