export const checkValidation = (email, password) => {
  const isValidEmail =
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
