# Answers

1.  What is React JS and what problems does it try and solve?

A library that allows programmers to offload a lot of the state/data that their apps need to use from the DOM with React’s Virtual DOM. DOM operations are expensive drains on performance, so the Virtual DOM helps in this aspect with pages that have high rates of data/state changes

2.  What does it mean to _think_ in react?

Breaking an app down into a component hierarchy/tree, building a static rendered version, deciding where to hold state (typically the parent or at least one of the higher level children components), and then splitting the static version into components. Use inverse data flow (parent -> child -> grandchild) to make the components live.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Classes have access to state (although React 16.8 added hooks to functional as well) as well as lifecycle methods, but need “this” to access props, data, and methods

4.  Describe state.

State is data that is represented in real time through the UI. We can make changes to the state with methods/handlers.

5.  Describe props.

Props is the bridge child elements use to access data from parent elements.
