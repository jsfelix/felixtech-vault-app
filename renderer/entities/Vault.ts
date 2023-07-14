export class Vault {
  public readonly id;

  private _data!: string;

  get data() {
    return this._data;
  }

  set data(data: string) {
    this._data = data;
  }

  constructor(id: string) {
    this.id = id;
  }
}
