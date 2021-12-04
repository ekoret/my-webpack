console.log('hello world');

const obj = {
    message: 'hello world'
}

const newObj = {
    ...obj, anotherMessage: "greetings"
}

console.log(newObj);