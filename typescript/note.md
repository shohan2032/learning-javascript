# Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## Interface vs Type

### Extending an Interface

```typescript
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

### Extending a Type via Intersections

```typescript
type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

### Adding New Fields to an Existing Interface

```typescript
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

### A Type Cannot Be Changed After Being Created

```typescript
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

// Error: Duplicate identifier 'Window'.
```

# TypeScript Narrowing

TypeScript narrowing refers to the process of refining the type of a variable within a specific scope based on runtime checks. It allows TypeScript to determine more specific types than the declared or inferred type, enabling safer and more precise code.

## Why is Narrowing Important?

TypeScript often deals with union types (e.g., `string | number`), where a variable can hold values of multiple types. Narrowing helps TypeScript infer the exact type in specific contexts, allowing you to access properties and methods specific to that type.

## How Does Narrowing Work?

Narrowing is achieved using type guards or control structures that inspect the type of a variable. Common methods include:

### 1. `typeof` Type Guard

The `typeof` operator is used to narrow primitive types like `string`, `number`, `boolean`, etc.

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows `value` is a string here.
  } else {
    console.log(value.toFixed(2)); // TypeScript knows `value` is a number here.
  }
}
```

### 2. `instanceof` Type Guard

The `instanceof` operator is used to narrow object types based on their constructor.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function handlePet(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // TypeScript knows `pet` is a Dog.
  } else {
    pet.meow(); // TypeScript knows `pet` is a Cat.
  }
}
```

### 3. Equality Checks

Comparing a variable to a specific value can narrow its type.

```typescript
function processInput(input: string | null) {
  if (input === null) {
    console.log("No input provided.");
  } else {
    console.log(input.trim()); // TypeScript knows `input` is a string.
  }
}
```

### 4. Custom Type Guards

You can define a function that checks the type and use it to narrow types.

```typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function handleAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // TypeScript knows `animal` is a Fish.
  } else {
    animal.fly(); // TypeScript knows `animal` is a Bird.
  }
}
```

### 5. `in` Operator

The `in` operator checks if a property exists on an object, which helps narrow object types.

```typescript
type Admin = { role: string };
type User = { name: string };

function getInfo(person: Admin | User) {
  if ("role" in person) {
    console.log(`Admin role: ${person.role}`);
  } else {
    console.log(`User name: ${person.name}`);
  }
}
```

### 6. Control Flow Analysis

TypeScript can narrow types automatically based on the structure of your code.

```typescript
function process(value: string | undefined) {
  if (!value) {
    console.log("No value provided.");
    return;
  }
  console.log(value.toUpperCase()); // TypeScript knows `value` is a string here.
}
```

## Summary

TypeScript narrowing allows the compiler to infer more specific types based on runtime checks, enabling type-safe operations and reducing errors. By using tools like `typeof`, `instanceof`, `in`, equality checks, and custom type guards, you can write more robust and maintainable TypeScript code.