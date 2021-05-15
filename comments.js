//---------------Read all comments for particular post, add comment comment for post

const requestUrlComments = 'https://jsonplaceholder.typicode.com/comments'

function sendRequest(method, url, comments=null) {
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
        xhr.send(JSON.stringify(comments));  //отправляем результат
    })
}
sendRequest('GET',  requestUrlComments)
    .then (data => console.log(data.filter(data => data.postId === 2)))
    .catch(err => console.log(err))

const comments =  {
    userId: 3,
    postId: 2,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint"
}

sendRequest('POST', requestUrlComments, comments)
    .then (data => console.log(data))
    .catch(err => console.log(err))



 
