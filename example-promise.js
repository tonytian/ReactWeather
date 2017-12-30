function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof(a) === 'number' && typeof(b) === 'number') {
            resolve(a + b);
        }
        else {
            reject('Both operators have to be numbers');
        }
    }); 
}

var num1 = 1; 
var num2 = false; 
addPromise(num1, num2).then(function(temp){
    console.log(num1 + ' + ' + num2 + ' = ' + temp);
}, function(error) {
    console.log('something is wrong: ' + error);
}); 