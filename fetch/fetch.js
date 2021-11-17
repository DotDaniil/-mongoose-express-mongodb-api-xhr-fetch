const requestURL = 'http://localhost:3012/enemies/';

function sendRequest(method, url, body = null)  {
// После "url" идёт объект конфигурация - для метода "POST"
    const headers = {
        'Content-Type': 'application/json'
    }  
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так.')
            e.data = error
            throw e
        })
    })
};

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

let testMonster = {        
    "name": "Тестовый монстр (UPDATED)",
    "hp": "01 (UPDATED)",
    "attack": "01 (UPDATED)",
    "defense": "01 (UPDATED)",
    "reward": "01(UPDATED)"  
}

// sendRequest('POST', requestURL, testMonster)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

sendRequest('PUT', requestURL, testMonster)
    .then(data => console.log(data))
    .catch(err => console.log(err))

