import React, { FC } from 'react'
import { Consumer } from '../../../src';
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
