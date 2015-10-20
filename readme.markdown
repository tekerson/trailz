# Trailz

## What is it?

A project where I am playing with a few development ideas. Currently looking at ways of putting together some technologies and ideas including ES2015(ES6), React, (re)flux, flow and Domain Driven Design.

## What does it do?

In short, not much. At the moment it displays a list of "parks" that have "trails" of various "distances" and "grades". It displays a collapsible list of parks, allowing the selection of trails restricted by some arbitrary rules. It's mostly about exploring the technologies/techniques, not functionality. So, it's ugly - no effort has been put into the user interface at all.

## Installation

Installation and build requires `npm`, `linklocal`, and `webpack`. Also, `webpack-dev-server` can be used for development.

```shell
% git clone https://tekerson@bitbucket.org/tekerson/trailz.git
% cd trailz
% linklocal
% npm install
```

To build:
```shell
% webpack
```

Or, to run in development mode:
```shell
% webpack-dev-server
```

## Key technical ideas

### Domain separation/Dependency management

The primary architectural idea is to separate the business domain from the application logic. This is achieved with a careful consideration of the dependency graph between modules. Dependencies only ever flow in one direction, the overview is:

 * The "domain" (`/lib/trailz`) has no dependencies
 * The "infrastructure" (`/lib/trailz-db`) depends on the domain
 * The "application" (`/app`) depends on the infrastructure and domain

It should be fairly simple to replace the application layer (eg. implement it in AngularJS or a CLI) without changing the underlying domain and infrastructure layers.

### Types

The domain and infrastructure modules are fully annotated with types for Facebook's flow type checker. As a result, I have reduced that amount of runtime type checking being performed.

The heavier use of types, whether run-time or statically checked, influences some design decisions. For example, a `Trail` could be represented much more simply as:

``` javascript
type Trail = {
  id: string
  name: string,
  distance: [number, string],
  grade: number,
};
```

But creating implementations of `Id`, `Name`, `Distance` and `Grade` ensure those concepts from the domain are concrete in the code. They can be type checked, augmented, tested and most importantly discussed as first class citizens.

### Object Creation

The objects in the domain modules are created using a method based on that recommended by Douglas Crockford in his 2014 talks (eg. "JavaScript: The better parts" at Nordic.js (https://www.youtube.com/watch?v=PSGEjv3Tqo0). It doesn't use the new ES6 `class` keyword, and even avoids using the `prototype`. In doing so, it avoids some of the pitfalls often encountered and lends itself to a more functional style. It does have some down sides of course.
The most commonly cited is extra memory usage, but in most cases this won't be significant and if it is, it's fairly simple refactor, as the construction logic is encapsulated in the module.
It also doesn't do classical inheritance, using more of a mix-in composition style.

### Immutability

Immutability is desirable for a number of reasons - it prevents distant parts of the code modifying data unexpectedly - I believe this is the principle complexities the flux architecture (and many other design principles) try to reduce.

The more interesting reason in this project is that it removes the need for much of the information hiding that is usually performed in object-oriented code. When the data is immutable there is less need to hide it. This allows a nice separation of concerns. For example - the `trails-db/map` module is able to map to and from `JSON` without the data types involved having any knowledge of the mapping - data mappers often have to rely on reflection to access private properties - no data hiding allows code to become a set of data transformation pipes and avoid interdependencies.
