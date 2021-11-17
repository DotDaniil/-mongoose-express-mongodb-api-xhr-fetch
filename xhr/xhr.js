const requestURL = 'http://localhost:3012/enemies';

async function sendRequest(method, url, body = null)  {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
    
        xhr.responseType = "json"
// Устанавливаем хэдеры - для метода "POST"
        xhr.setRequestHeader('Content-Type', 'application/json')
//
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
//Передаём тестовый объект - для метода "POST"    
        xhr.send(JSON.stringify(testMonster))
//
    })
};

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let testMonster = {        
    "name": "Тестовый монстр",
    "hp": 01,
    "attack": 01,
    "defense": 01,
    "reward": 01  
}

// sendRequest('POST', requestURL, testMonster)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

    sendRequest('PUT', requestURL, testMonster)
    .then(data => console.log(data))
    .catch(err => console.log(err))
