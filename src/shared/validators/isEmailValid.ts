function isEmailValid(value: string) {
  const isEmpty = value.length === 0;
  const missedSymbol = value.indexOf('@') === -1;
  const missedLocalPart = value.indexOf('@') <= 0;
  const missedDomainPart = value.indexOf('@') === value.length - 1;

  const isValid = !(missedSymbol || isEmpty || missedLocalPart || missedDomainPart);

  let message = '';

  if (isEmpty) {
    message = 'Поле обязательно для заполения';
  } else
  if (missedSymbol) {
    message = 'Email должен содержать «@»';
  } else
  if (!missedSymbol && missedLocalPart) {
    message = 'Пропущена локальная часть адреса';
  } else
  if (!missedSymbol && missedDomainPart) {
    message = 'Пропущена доменная часть адреса';
  }

  return { isValid, message };
}

export { isEmailValid };
