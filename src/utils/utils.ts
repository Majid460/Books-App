const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordExp: RegExp = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
const emailValidator: (email: string) => boolean = function (
  email: string,
): boolean {
  const result: boolean = expression.test(email);
  return result;
};

const nameValidator: (name: string) => boolean = function (
  name: string,
): boolean {
  let result: boolean = name.length > 6 ? true : false;
  return result;
};
const passwordValidator: (password: string) => boolean = function (
  password: string,
) {
  let result: boolean =
    password.length >= 6 && passwordExp.test(password) ? true : false;
  return result;
};
const confirmPasswordValidator: (
  password: string,
  confirmPassword: string,
) => boolean = function (password: string, confirmPassword: string) {
  let result = password === confirmPassword ? true : false;
  return result;
};

export {
  emailValidator,
  nameValidator,
  passwordValidator,
  confirmPasswordValidator,
};
