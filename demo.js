let rPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(0);
        resolve()
    }, 0);
});

console.log("Middle1")
console.log("Middle2")
rPromise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    })
})
.then(() => console.log(2))
.then(() => console.log(3))
console.log("After")