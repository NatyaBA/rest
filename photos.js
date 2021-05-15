//---------------------Read all photos for particular album----------

const requestUrlPhotos = 'https://jsonplaceholder.typicode.com/photos'

function sendRequest(method, url) {
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
        xhr.send(JSON.stringify());  //отправляем результат
    })
}
sendRequest('GET', requestUrlPhotos)
    .then (data => console.log(data.filter(data => data.albumId === 5)))
    .catch(err => console.log(err))



 