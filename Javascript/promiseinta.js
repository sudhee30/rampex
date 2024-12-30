async function comments() {
    return new Promise ((commentposted)=>{
        commentposted("Comment Posted Successfully")
    })
    
}
async function likes() {
    return new Promise ((liked)=>{
        liked("Liked Successfully")
    })
    
}

async function createpost(){
    var post=new Promise((cPost)=>{
        cPost("Post created successfully")
    })
    var [posts,comment,like]=await Promise.all([post,comments(),likes()])
    console.log(posts)
    console.log(comment)
    console.log(like)
}
createpost()