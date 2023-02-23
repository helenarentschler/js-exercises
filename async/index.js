
// console.log(1);
// console.log(2);

// funçao assincrona, nao vai bloquar o fluxo
// começa agora, e termina depois com o callback
// chama callback pois ela chama novamente a funçao setTimeout para executar

// setTimeout(function callback() {
//     console.log(3);
// }, 5000);

// console.log(4);

// __________ HTTP Request

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback("could not fetch data", undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();
// }


//__________ callback hell

// getTodos("todos/valeria.json", (err, data) => {
//     console.log(err, data)
//     getTodos("todos/luiz.json", (err, data) => {
//         console.log(err, data)
//         getTodos("todos/helena.json", (err, data) => {
//             console.log(err, data)
//         });
//     });
// });

//___________ promises

// const getSmth = () => {
//     return new Promise((resolve, reject) => {
//         // fetch somthing
//         resolve("some data");
//         //reject("some error");
//     });
// }
//                 // fires if resolve            //fires if reject
// getSmth().then(data => {console.log(data)}, err => {console.log(err)});

// getSmth().then(data => {console.log(data)}).catch(err => {console.log(err)});

// const getTodos = (source) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject("Error");
//             }
//         });

//         request.open('GET', source);
//         request.send();
//     }); 
// };

// getTodos("todos/helena.json").then(data => {
//     console.log("Promise resolved: ", data);
//     return getTodos("todos/luiz.json"); //returns a promise, now we can use then in sequence
// }).then(data => {
//     console.log("Promise 2 resolved: ", data);
//     return getTodos("todos/valeria.json");
// }).then(data => {
//     console.log("Promise 3 resolved: ", data);
// }).catch(err => {
//     //catches any erros
//     console.log(err);
// });

// ________ Fetch api - returns a promise
                                //object
// fetch("todos/helena.json").then(response => {
//     // .json method also return promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// _________ Async

const getTodos = async () => {
                    // stalls code until promise is resolved
    const response = await fetch("todos/luiz.json");

    if (response.status !== 200) {
        //interrupts function code here, promise of async function will be rejected and error will fall in catch
        throw new Error("cannot fetch data");
    }

    const data = await response.json();

    // async functions return promises
    return data;
}

getTodos()
    .then(data => console.log("Resolved: ", data))
    .catch(err => console.log("Rejected: ", err.message));