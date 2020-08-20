export default class Validator {
  static validateUsername(name) {
    if (!/\d{4,}/.exec(name) && /^[a-z][\w-]*[a-z]$/i.test(name)) {
      return true;
    }
    return false;
  }
}
