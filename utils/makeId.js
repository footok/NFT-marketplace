export const makeId = (length) => {
  let result = '';

  const characters = 'abcdefghijklm0123456789';
  const charactersLength = characters.length;

  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
