import { Model } from "../../../src";
import { Test1Store } from "./Test1Model"
import { Test2Store } from "./Test2Model"

export interface Test3State {
  value: number;
}

export default class Test3Model extends Model<Test3State> {
  state: Test3State = {
    value: Date.now()
  }
  
  refresh = async () => {
    // await fetch("xxx", Test1State.value)
    // await fetch("xxx", Test2State.value)

    await Test1Store.refresh();
    await Test2Store.refresh();
  }
}

export const Test3Store = new Test3Model();
