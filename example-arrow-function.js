var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
//     console.log('forEach ', name);
// });

// names.forEach((name)=>{
//     console.log('=>', name);
// });

var person = {
    name : 'Andrew',
    greet: function() {
        names.forEach(function(name) {
            console.log(this.name + ' says hi to ' + name);
        })
    }
}

var name = 'Tony';
person.greet();