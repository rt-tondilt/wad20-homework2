
refreshPosts();

const postListSelector = 'section.main-container';

function refreshPosts() {
    $.get( "https://private-anon-cb48b9226c-wad20postit.apiary-mock.com/posts", posts => {
        $(postListSelector).empty();
        for (const post of posts) {
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
        return `<video controls>
        <source src="${media.url}" type="video/mp4">
        </video>`
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
    id = post.id

    post = `<div class="post">
    ${makeAuthor(post.author, post.createTime)}
    ${makeMedia(post.media)}
    ${makeText(post.text)}
    <div class="post-actions">
      <button type="button" name="like-${id}" class="like-button">${post.likes}</button>
    </div>
    </div>`
    $(postListSelector).append(
        post
    )
    $(`button[name = "like-${id}"]`).click(function() {
        if ($(this).css('background-color') == 'rgb(138, 138, 138)') {
            $(this).css('background-color', '#3355aa')
        } else {
            $(this).css('background-color', '#8a8a8a')
        }
    })
}

function userInfo() {
    $.get( "https://private-anon-3e8f2d9a55-wad20postit.apiary-mock.com/users/1", users => {
        $(userListSelector).empty();
        for (const user of users) {
            console.log(user);
        }
    });
}

$("div a:first").replaceWith("<p>user.firstname</p>");