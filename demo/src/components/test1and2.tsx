import React, { FC } from 'react'
import { useModel } from '../../../src';
import Test1Model from '../models/Test1Model';
import Test2Model from '../models/Test2Model';

const Test1and2: FC = () => {
  const test1 = useModel(Test1Model);
  const test2 = useModel(Test2Model);

  return (
    <div>
      <h2>Test1</h2>
      <p>value: {test1.state.value}</p>
      <button onClick={() => {
        test1.refresh()
      }}>Refresh</button>
      <p>random( when Test1Model or Test2Model changed ): {Math.random()}</p>

      <h2>Test2</h2>
      <p>value: {test2.state.value}</p>
      <button onClick={() => {
        test2.refresh()
      }}>Refresh</button>
      <p>random( when Test1Model or Test2Model changed ): {Math.random()}</p>

    </div>
  )
}

export default Test1and2;
