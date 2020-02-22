import { Model } from "../../../src";
import { Test1State } from "./Test1Model"
import { Test2State } from "./Test2Model"

export default class Test3Model extends Model<Test3Model> {
  value: Number = Date.now();
  
  refresh = async () => {
    await Test1State.refresh();
    await Test2State.refresh();
  }
}

export const Test3State = new Test3Model();
