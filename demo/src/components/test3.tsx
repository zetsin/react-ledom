import React, { FC } from 'react'
import { useModel } from '../../../src';
import Test3Model from '../models/Test3Model';

const Test3: FC = () => {
  const test3 = useModel(Test3Model);

  return (
    <div>
      <h2>Test3</h2>
      <p>value: {test3.state.value}</p>
      <button onClick={() => {
        test3.refresh()
      }}>Refresh</button>
      <p>random( once ): {Math.random()}</p>
    </div>
  )
}

export default Test3;
