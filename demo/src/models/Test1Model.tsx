import { Model } from "../../../src";

export interface Test1State {
  value: number;
}

export default class Test1Model extends Model<Test1State> {
  state: Test1State = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test1Store = new Test1Model();
