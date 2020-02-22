import { Model } from "../../../src";

export default class Test2Model extends Model<Test2Model> {
  value: Number = Date.now();

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test2State = new Test2Model();
