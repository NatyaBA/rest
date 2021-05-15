//-------------------- Read all albums, particular album--------------

const requestUrlAlbums = 'https://jsonplaceholder.typicode.com/albums'

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
                resolve(xhr.response);  // all albums
              //  resolve(xhr.response[23]);  // post №23
            }
        }    
        xhr.onrerror = () => {  // ошибка
            reject(xhr.response);  
        }
        xhr.send(JSON.stringify());  //отправляем результат
    })
}
sendRequest('GET', requestUrlAlbums)
    .then (data => console.log(data))
   .catch(err => console.log(err))

