import { Model } from "../../../src";

export default class Test1Model extends Model<Test1Model> {
  value: number = Date.now();

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test1State = new Test1Model();
