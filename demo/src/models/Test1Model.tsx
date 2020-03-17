import { Model } from "../../../src";

export interface Test1Props {
  value: number;
}

export default class Test1Model extends Model<Test1Props> {
  state = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test1State = new Test1Model();
