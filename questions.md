1. What is the difference between Component and PureComponent? give an example where it might break my app.

   `PureComponent` and `Component` are the basic the same .Except `PureComponent` implements the `shouldComponentUpdate`.
   `PureComponent` will do a shallow comparison when `state` or `props` change.

   A problem we might have would be when `props` or `states` changes. As `PureComponent` does a shallow comparison the content change will never be detected.

   As in the example below, instead of generating a new Array every second, we are just changing the value of the `Array` not he's reference, with that the `PureComponent` will not detect the changing and will show anything instead of the numbers of the array

```js
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      numbers: []
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { numbers } = this.state;
      numbers.push(this.state.count);

      this.setState((prevState) => ({
        numbers,
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { numbers } = this.state;
    return <Numbers numbers={numbers} />;
  }
}

class Numbers extends React.PureComponent {
  render() {
    const { numbers } = this.props;
    return (
      <div>
        {numbers.length ? numbers.map((number) => <div>{number}</div>) : null}
      </div>
    );
  }
}
```

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

   Because if within a component tree some component decides not to render, the children of that component can work with inconsistent context values.

3. Describe 3 ways to pass information from a component to its PARENT.

   1- With Context API.

   2- With some library for state management, like redux.

   3- With a callback function that recives a functions that can pass some value back

4. Give 2 ways to prevent components from re-rendering.

   We can use  `useMemo()` and `useCallback()` .

5. What is a fragment and why do we need it? Give an example where it might break my app.

   It's common to return multiples elements in a component `Fragment` allow us to agroup they without create an extra node to the DOM.

```js
export function Component() {
  return (
    <React.Fragment>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </React.Fragment>
  );
}

export function App() {
  <div style={{ display: "flex", flexDirection: 'column' justifyContent: "space-between" }}>
   <Component />
   <OtherComponent />
  </div>
}
```

   If instead a `Fragment` we have a div the layout would break because we are adding a new element to the dom in this case a div where we don't want.

6. Give 3 examples of the HOC pattern.

```js
// example 1
function WithAuthentication(Component) {
  return function (props) {
    if (props.isAuthenticated) {
      return <Component {...props} />;
    }

    return <p>Login</p>;
  };
}

// example 2
function WithIncrementer(Component) {
  return function (props) {
    return (
      <div>
        <Component {...props} value={props.value + 1} />
      </div>
    );
  };
}

// example 3
function WithUserInformations(Component) {
  return function (props) {
    return <Component {...props} />;
  };
}
```

7. what's the difference in handling exceptions in promises, callbacks and async...await.

   `Promise` you can handle the exceptions with the `.catch` method.

   `callback` you can pass a function that should be executed if something goes wrong.

   `async await` you can handle the exceptions using `try {} catch`.

8. How many arguments does setState take and why is it async.

   Two arguments state and callback;

   Is async because it can be a expensive operation with that async setState calls are batched to provide a better performance.

9. List the steps needed to migrate a Class to Function Component.

   1- Replace the `class` structure with a `function` or use `arrow function`

   2- Remove the `constructor`

   3- Replace the `this.state` to `useState`

   4- Remove all references to `this`

   5- Convert all `class` methods to `functions` or `arrow functions`

   6- use `useEffect` instead lifecycle methods.

   7- Remove the `render` method and `return` the component

10. List a few ways styles can be used with components.

    1- CSS inline.
   
    2- CSS classes.

    3- CSS-in-JS.

11. How to render an HTML string coming from the server.

    Using `dangerouslySetInnerHTML`.
