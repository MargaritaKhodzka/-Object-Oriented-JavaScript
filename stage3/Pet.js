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
  // 
  // get owner() {
  //   return this._owner;
  // }
  //
  // set owner(owner) {
  //   this._owner = owner;
  //   console.log(`setter called: ${owner}`);
  // }

  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor (name, address) {
    this.name = name;
    this.address = address;
  }

  set phone(phone) {
    /* string method replace takes in 2 params:
      what replacing: identify all non-numeric chars,
      with: empty string */
    const phoneNumber = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNumber;
  }

  get phone() {
    return this._phone;
  }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer');

// ernie.speak();
// vera.speak();
// console.log(ernie.activity);
// console.log(ernie);

ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);
