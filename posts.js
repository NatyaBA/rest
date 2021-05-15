//-----------------Read all post, particular post, create/edit post-------

const requestUrlPosts = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, post=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.responseType ='json';  // получаем объект
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            }
            else {
               resolve(xhr.response);  // all posts
               // resolve(xhr.response[23]);  // post №23
            }
        }    
        xhr.onrerror = () => {  // ошибка
            reject(xhr.response);  
        }
        xhr.send(JSON.stringify(post));  //отправляем результат
    })
}
sendRequest('GET', requestUrlPosts)
    .then (data => console.log(data))
   .catch(err => console.log(err))

const post =  {
    userId: 3,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint"
}

sendRequest('POST', requestUrlPosts, post)
    .then (data => console.log(data))
    .catch(err => console.log(err))



 
