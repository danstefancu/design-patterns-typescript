## Mixin

- **USE FOR**: Adding functionality to classes, allowing for modular and reusable code composition.
- **USE CASES**: Augmenting classes with additional behavior, Implementing cross-cutting concerns, Code reuse, Avoiding deep inheritance hierarchies, Apply multiple inheritance in typescript
- **SUBOPTIMAL SOLUTIONS**:
    - Inheriting from multiple base classes to incorporate additional behavior, leading to the diamond problem and tight coupling.
    - Reimplementing the same functionality in multiple classes, resulting in code duplication and maintenance overhead.
- **BEST PRACTICES**:
    - Define mixins as standalone classes or modules that encapsulate specific behaviors.
    - Ensure that mixins adhere to the single responsibility principle to maintain code clarity and reusability.
    - Consider the order of mixin application to avoid conflicts and ensure the desired behavior.
- **EXAMPLE**:
    - Shapes: Extending the functionality of different types of shapes in a graphic design application by mixin classes that provide specific behaviors, such as `Resizable` and `Rotatable`. These mixins can be applied to various shape classes independently, allowing for flexible combinations of functionality without creating a complex inheritance hierarchy.  
    - Shapes-logger: Same example but with mixin classes using mixins as well. Beware of the order of application.

```ts
// mixin.ts
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
              derivedCtor.prototype,
              name,
              Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
              Object.create(null)
      );
    });
  });
}
```