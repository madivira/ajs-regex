export default class Validator {
  static validateUsername(name) {
    return !/\d{4,}/.test(name) && /^[a-z][\w-]*[a-z]$/i.test(name);
  }
}
