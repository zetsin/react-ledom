import { Model } from "../../../src";

export default abstract class Ledom<T> extends Model<T> {
  constructor() {
    super()

    Object.assign(this, JSON.parse(localStorage.getItem(this.constructor.name) ?? "{}"));
  }

  setState(data?: Partial<T>) {
    super.setState(data);

    localStorage.setItem(this.constructor.name, JSON.stringify(this));
  }
}
