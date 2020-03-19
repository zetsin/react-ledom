import { Model } from "../../../src";

export interface Test2State {
  value: number;
}

export default class Test2Model extends Model<Test2State> {
  state: Test2State = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test2Store = new Test2Model();
