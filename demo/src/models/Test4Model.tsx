import Ledom from "./Ledom";

export interface Test4State {
  value: number;
}

export default class Test4Model extends Ledom<Test4State> {
  state: Test4State = {
    value: Date.now()
  }

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test4Store = new Test4Model();
