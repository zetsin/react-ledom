import { Model } from "../../../src";

export interface Test2Props {
  value: number;
}

export default class Test2Model extends Model<Test2Props> {
  state = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test2State = new Test2Model();
