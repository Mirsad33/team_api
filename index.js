

const data = {
    name: 'JD',
    age: 44
}

function handlesSomeTask(isCool) {
    return new Promise((resolve, reject) => {
        if (isCool) {
            setTimeout(() => {
            resolve()
            }, 5000);
        } else {
            reject()
        }
        
     })
    }

handlesSomeTask(true)
    .then(() => {
        console.log('all good')
    })
    .then(() => {
        console.log('two')
    })
    .then(() => {
        console.log('three')
    })
    .catch(() => {
        console.log('all bad')
    })





// class Prom {
//     then(cb) {
//     // Wait until some code runs and completes before calling the callback
//         setTimeout(() => {
//             cb()
//         }, 3000)
//     }

//     catch(cb) {

//     }
// }

// const prom = new Prom((resolve, reject) => {

// })

// prom.then(() => {
//     console.log('callback called')
// })







  



  








