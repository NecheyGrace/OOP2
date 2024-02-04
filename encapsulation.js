// Base class
class Animal {
  constructor(name, species, type) {
    this.name = name;
    this.species = species;
    this.type = type;
  }

  hasSkeleton() {
    return true; // Placeholder implementation
  }

  isMulticellular() {
    return true; // Placeholder implementation
  }

  isMotile() {
    return true; // Placeholder implementation
  }

  eat() {
    console.log(`${this.name} are eating.`); // Placeholder implementation
  }

  reproduce() {
    console.log(`${this.name} is reproducing.`); // Placeholder implementation
  }
}

// Vertebrate subclass
class Vertebrate extends Animal {
  constructor(name, species, type) {
    super(name, species, type);
    this.hasBackbone = true;
  }

  hasSkeleton() {
    return this.hasBackbone;
  }
}

// Invertebrate subclass
class Invertebrate extends Animal {
  constructor(name, species, type) {
    super(name, species, type);
    this.hasBackbone = false;
  }

  hasSkeleton() {
    return this.hasBackbone;
  }
}

// Specific animal classes (examples)
class Human extends Vertebrate {
  constructor(name) {
    super("Homo sapiens", "Human", "Mammal");
    this.isWarmBlooded = true;
    this.hasHair = true;
  }

  speak(message) {
    console.log(`${this.name} says: ${message}`);
  }
}

class Bird extends Vertebrate {
  constructor(name, species) {
    super(name, species, "Bird");
    this.canFly = true;
  }

  hasSkeleton() {
    return true;
  }

  isWarmBlooded() {
    return true; // Some birds are not warm-blooded
  }

  hasHair() {
    return false;
  }

  fly() {
    console.log(`${this.name} flies high in the sky!`);
  }
}

// Create instances and interact with them
const human = new Human("Alice");
const bird = new Bird("Eagle", "Aquila chrysaetos");

human.speak("Hello, world!");
bird.fly();

// Perform actions on animals
human.eat();
bird.reproduce();
