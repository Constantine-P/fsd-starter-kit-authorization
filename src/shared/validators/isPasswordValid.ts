function isPasswordValid(value: string) {
  const isEmpty = value.length === 0;
  const isShort = value.length < 8;
  const missedLowercaseLetter = !value.split('').some(symbol => symbol >= 'a' && symbol <= 'z');
  const missedUppercaseLetter = !value.split('').some(symbol => symbol >= 'A' && symbol <= 'Z');
  const missedDigit = !value.split('').some(symbol => symbol >= '0' && symbol <= '9');

  const isValid = !(
    isEmpty
    || isShort
    || missedLowercaseLetter
    || missedUppercaseLetter
    || missedDigit
  );

  let message = '';

  if (isEmpty) {
    message = 'Поле обязательно для заполения';
  } else
  if (isShort) {
    message = 'Пароль слишком короткий';
  } else
  if (missedLowercaseLetter) {
    message = 'Пароль должен содержать строчную букву';
  } else
  if (missedUppercaseLetter) {
    message = 'Пароль должен содержать прописную букву';
  } else
  if (missedDigit) {
    message = 'Пароль должен содержать цифру';
  }

  return { isValid, message };
}

export { isPasswordValid };
