export default class Validator {
  static validateUsername(name) {
    if (!/\d{4,}/.exec(name)) {
      return /^[a-z][\w-_]*[a-z]$/i.test(name);
    }
    return false;
  }
}
