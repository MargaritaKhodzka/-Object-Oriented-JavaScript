class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if (hour >= 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  speak() {
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer');

// ernie.speak();
// vera.speak();
console.log(ernie.activity);
console.log(ernie);
