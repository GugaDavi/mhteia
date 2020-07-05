class Validator {
  public validateIndex(value: string) {
    const match = value.match(/^([0-9])/gm);
    if (match) {
      return match[0];
    }
    return null;
  }
}

export default new Validator();
