import { Model } from "../../../src";
import { Test1State } from "./Test1Model"
import { Test2State } from "./Test2Model"

export interface Test3Props {
  value: number;
}

export default class Test3Model extends Model<Test3Props> {
  state: Test3Props = {
    value: Date.now()
  }
  
  refresh = async () => {
    // await fetch("xxx", Test1State.value)
    // await fetch("xxx", Test2State.value)

    await Test1State.refresh();
    await Test2State.refresh();
  }
}

export const Test3State = new Test3Model();
