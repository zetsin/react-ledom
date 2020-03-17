import Ledom from "./Ledom";

export interface Test4Props {
  value: number;
}

export default class Test4Model extends Ledom<Test4Props> {
  state = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test4State = new Test4Model();
