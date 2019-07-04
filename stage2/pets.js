const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

console.log(ernie['age']);
console.log(ernie.breed);
ernie['bark']();

var prop = 'breed';
ernie[prop];

ernie.age = 2;
ernie.color = 'black';
console.log(ernie);
