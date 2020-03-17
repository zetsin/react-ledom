import React, { FC } from 'react'
import { useModel } from '../../../src';
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
