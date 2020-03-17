import React, { FC } from 'react'
import { useModel } from '../../../src';
import Test4Model from '../models/Test4Model';

const Test4: FC = () => {
  const test4 = useModel(Test4Model);

  return (
    <div>
      <h2>Test4</h2>
      <p>value: {test4.state.value}</p>
      <button onClick={() => {
        test4.refresh()
      }}>Refresh</button>
      <p>random( when Test4Model changed ): {Math.random()}</p>
    </div>
  )
}

export default Test4;
