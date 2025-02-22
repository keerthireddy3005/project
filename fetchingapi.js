const xhr = new XMLHttpRequest();
xhr.open('GET','http://jsonplaceholder.typicode.com/users')
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
        res=JSON.parse(xhr.respondText)
    console.log(res)
}
xhr.send();