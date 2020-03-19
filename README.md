# react-ledom

The State management library for React

🎉 Support Both Class and Hooks Api

⚔ Fully TypeScript Support

```tsx
import { Model } from 'react-ledom'

// define state
interface TestState {
  value: number;
}

// define model
class TestModel extends Model<TestState> {
  state: TestState = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

// create store
const TestStore = new TestModel();

const App = () => {
  return (
    <Provider stores={[TestStore]}>
      <Test />
    </Provider>
  );
}

const Test = () => {
  const test = useModel(TestModel)
  return <div>
    <p>value: {test.state.value}</p>
    <button onClick={() => {
      test.refresh()
    }}>
      Refresh
    </button>
  </div>
}
```

---

## Quick Start
install package

```shell
npm install react-ledom
```

## Core Concept

### Model

Every model has customized properties and methods.

```tsx
import { Model } from "react-ledom";

export interface TestState {
  value: number;
}

export default class Test1Model extends Model<TestState> {
  state: TestState = {
    value: Date.now();
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test1Store = new Test1Model();
```

### Provider

The [`Provider`](https://reactjs.org/docs/context.html#contextprovider) React component that allows consuming components to subscribe to context changes.

```tsx
import React, { FC } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-ledom'

const Demo: FC = () => {
  return (
    <Provider stores={[store1, store2, ...]}>
      ...
    </Provider>
  )
};

render(<Demo/>, document.querySelector('#demo'))

```

### useModel

A helper for using [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) in functional components

```tsx
import React, { FC } from 'react'
import { useModel } from 'react-ledom';
import Test1Model from '../models/Test1Model';

const Test1: FC = () => {
  const test1 = useModel(Test1Model);

  return (
    <div>
      <h2>Test1</h2>
      <p>value: {test1.state.value}</p>
      <button onClick={() => {
        test1.refresh()
      }}>Refresh</button>
      <p>random( when Test1Model changed ): {Math.random()}</p>
    </div>
  )
}

export default Test1;
```

### Cousumer
The [`Cousumer`](https://reactjs.org/docs/context.html#contextconsumer) React component that subscribes to context changes.

```tsx
import React, { FC } from 'react'
import { Consumer } from 'react-ledom';
import Test1Model from '../models/Test1Model';
import Test2Model from '../models/Test2Model';

const Test1or2: FC = () => {

  return (
    <div>
      <Consumer model={Test1Model}>
        {test1 => (
          <>
            <h2>Test1</h2>
            <p>value: {test1.state.value}</p>
            <button onClick={() => {
              test1.refresh()
            }}>Refresh</button>
            <p>random( when Test1Model changed ): {Math.random()}</p>
          </>
        )}
      </Consumer>

      <Consumer model={Test2Model}>
        {test2 => (
          <>
            <h2>Test2</h2>
            <p>value: {test2.state.value}</p>
            <button onClick={() => {
              test2.refresh()
            }}>Refresh</button>
            <p>random( when Test2Model changed ): {Math.random()}</p>
          </>
        )}
      </Consumer>

      <p>random( once ): {Math.random()}</p>
    </div>
  )
}

export default Test1or2;
```

### Instances

You can use other model instance's values and methods directly.

```tsx
import { Model } from "react-ledom";
import { Test1Store } from "./Test1Model"
import { Test2Store } from "./Test2Model"

export interface TestProps {
  value: number;
}

export default class Test3Model extends Model<TestProps> {
  state: TestProps = {
    value: Date.now();
  }
  
  refresh = async () => {
    // await fetch("xxx", Test1Store.value)
    // await fetch("xxx", Test2Store.value)

    await Test1Store.refresh();
    await Test2Store.refresh();
  }
}

export const Test3Store = new Test3Model();
```

## Advance Concept

### State persistence

```tsx
import { Model } from "react-ledom";

export default abstract class Ledom<T> extends Model<T> {
  constructor() {
    super()

    Object.assign(this, JSON.parse(localStorage.getItem(this.constructor.name) ?? "{}"));
  }

  setState(data?: Partial<T>) {
    super.setState(data);

    localStorage.setItem(this.constructor.name, JSON.stringify(this));
  }
}

```
