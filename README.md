# Animal Kingdom Model in JavaScript
![image](https://github.com/NecheyGrace/OOP2/assets/37805319/929f102d-20a4-46cd-9385-768b1bf78dda)

A simple model of the Animal Kingdom using object-oriented programming (OOP) principles in JavaScript.

## Features

- **Encapsulation**: Private properties protect data, public methods control access.
- **Abstraction**: Abstract classes and interfaces define common properties and behaviors.
- **Inheritance**: Subclasses inherit and extend functionality from parent classes.
- **Polymorphism**: Overriding methods allow specialized behavior in subclasses.

## Classes

### Abstract Classes:

- **Animal**: Base class representing all animals.
- **Vertebrate**: Subclass for animals with backbones.
- **Invertebrate**: Subclass for animals without backbones.

### Interfaces:

- **WarmBlooded**: Interface for warm-blooded animals.
- **Mammal**: Interface for mammals, extending WarmBlooded.

### Concrete Classes:

- **Human**: Subclass of mammals, representing humans.
- **Bird**: Subclass of Vertebrate, representing birds.

## Usage

1. Save the code as a JavaScript file (e.g., `animal-kingdom.js`).
2. Run the file in a JavaScript environment (e.g., Node.js, browser console).
3. Create instances of animal classes and interact with their methods:

    ```javascript
    const human = new Human("Alice");
    const bird = new Bird("Eagle", "Aquila chrysaetos");

    human.speak("Hello, world!");
    bird.fly();
    ```

## Expansion

Encouraged to expand the model with:

- More animal classes: Fish, reptiles, amphibians, etc.
- More properties and methods: Movement, habitat, diet, etc.
- A user interface: Allow users to interact with the model and explore animal characteristics.

## Author

Amara Metu
