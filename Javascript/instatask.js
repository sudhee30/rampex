//share,unshare,unpost,unlike,uncommnet
function share(){
    return new Promise((share,unshare)=>{
        var s=1
        if(s==1){
            share("Post Shared ")
        }
        else{
            unshare("Post is not shared")
        }
    })
}
function cpost(){
    return new Promise((post,unpost)=>{
        var p=1
        if(p==1){
            post("Posted ")
        }
        else{
            unpost("Post is not posted")
        }
    })
}
function comment(){
    return new Promise((cmt,uncmt)=>{
        var c=0
        if(c==0){
            cmt("comment Shared ")
        }
        else{
            uncmt("comment is not shared")
        }
    })
}
async function like(){
    var liked=new Promise((liked,unliked)=>{
        var l=1
        if(l==1)
        liked("Post is Liked")
        else
        unliked("Post is Unliked")
    })
    var [post,cmnts,shares,posts] = await Promise.all([liked,comment(),share(),cpost()])
    console.log(post)
    console.log(shares)
    console.log(cmnts)
    console.log(posts)




}
like()