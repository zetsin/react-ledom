import React, { FC } from 'react'
import { render } from 'react-dom'
import { Provider } from '../../src'
import store from './models'
import Test1 from './components/test1'
import Test2 from './components/test2'
import Test1and2 from './components/test1and2'
import Test1or2 from './components/test1or2'
import Test3 from './components/test3'
import Test4 from './components/test4'

const Demo: FC = () => {
  return (
    <Provider values={store}>
      <Test1 />
      <hr />
      <Test2 />
      <hr />
      <Test1and2 />
      <hr />
      <Test1or2 />
      <hr />
      <Test3 />
      <hr />
      <Test4 />
    </Provider>
  )
};

render(<Demo/>, document.querySelector('#demo'))
