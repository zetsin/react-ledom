import Ledom from "./Ledom";

export default class Test4Model extends Ledom<Test4Model> {
  value: Number = Date.now();

  refresh = async () => {
    this.setState({
      value: Date.now()
    });
  }
}

export const Test4State = new Test4Model();
