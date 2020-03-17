import React, { FC } from 'react'
import { useModel } from '../../../src';
import Test2Model from '../models/Test2Model';

const Test2: FC = () => {
  const test2 = useModel(Test2Model);

  return (
    <div>
      <h2>Test2</h2>
      <p>value: {test2.state.value}</p>
      <button onClick={() => {
        test2.refresh()
      }}>Refresh</button>
      <p>random( when Test2Model changed ): {Math.random()}</p>
    </div>
  )
}

export default Test2;
