# Answering questions

### What is the difference between Component and PureComponent? Give an example where it might break my app.

The Purecomponent is a subclass of Component which implements an different ```shouldComponentUpdate``` method. It can be used as a regular presentational component but its ```shouldComponentUpdate``` shallowly compares the previous and current states of the component to determine when to re-render it.

It could break the app if arrays or js objects are passed as props as in a shallow comparison these types of data can mutate without triggering a re-render. Causing the component to not re-render when it should.

### Context + ShouldComponentUpdate might be dangerous. Why is that?

First of all, this could have been an issue with legacy context. But with the relatively new useContext, React addressed those issues.

The use of legacy context and shouldComponentUpdate simultaneously could break the state management via Context. This happens because if a component like a wrapper missed re-rendering via shouldComponentUpdate, components inside the wrapper that consume context won't be able to show the current state as the render was "blocked".

### Describe 3 ways to pass information from a component to its PARENT.

- Props: you can pass down a callback from parent component to its children, and then use the callback to pass information to the parent.
- Context or State Management: Context API or libraries like Redux, MobX or Zustand could be used to pass information from children components to parent components through dispatching information from children components to the store.
- Events: The events could be used to do this as well. An event listener could be attached to the parent component, and the child component could emit the event for it to be received by the parent.

### Give 2 ways to prevent components from re-rendering.

- ShouldComponentUpdate or pureComponent are good solutions for legacy implementations.
- In the other hand, React.memo works well as it perform shallow comparisons. It can be personalized furthermore by passing a second argument like it was a shouldComponentUpdate function.
- As a bonus, you can deeply control state updates with useState in order to avoid re-rendering by using immutable objects inside the state. A similar solution to useRef.

### What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group different components as siblings without adding a parent component. This helps create function components without the need to add another wrapper inside the return.

This could break the app when using it in reusable components as style encapsulation is lost. So it could be difficult to control wrapper styles per implementation of the component when using it on different sections of the app.

### Give 3 examples of the HOC pattern.

- Authentication HOC: it could be used to give authentication functionality to a component. This can be achieved by creating a wrapper that fetches the session and pass down session information to the wrapped component.
- Data Fetching HOC: It can fetch needed information that can be passed down to components when needed. This function is usually performed by parent components but it can be performed by an HOC as well.
- Styling HOC: As information, styling can be determined by an HOC as well. And then passed down to components that use the HOC.

### What's the difference in handling exceptions in promises, callbacks and async…await?

The main different between the 3 are the syntax.

- When using callback, the error is usually the first argument passed to the callback.
- When using promises, the promise use a method catch to handle the error.
- When using async await, the use of a try ... catch block. The try block wraps the await call and the catch block is used to handle the error.

### How many arguments does setState take and why is it async.

It can take two arguments:

- An object containing the new values, or a function that returns such an object.
- An optional callback function that is executed after the state has been updated.

setState is asynchronous for performance reasons. It is designed to batch multiple state updates into a single update.

### List the steps needed to migrate a Class to Function Component.

- Rewrite the class as a function. Replace the class keyword with a function syntax.
- Remove the constructor.
- Replace this.props with the props argument received by the function component.
- Remove this.state implementations and use 'useState'.
- Remove lifecycle methods of the component class, and replace them with useEffect implementations.
- Replace methods declared inside the class with regular functions.

### List a few ways styles can be used with components.

- Inline styles.
- CSS classes.
- CSS modules.
- Styled components.
- CSS-in-JS libraries.

### How to render an HTML string coming from the server.

To achieve this is easier to use dangerouslySetInnerHTML. This lets you set the innerHTML attribute of a html element. However, this is not recommended as it could expose the application to cross-stie scripting (XSS).
