function isEmailValid(value: string): { isValid: boolean; message: string; } {
  const atIndex = value.indexOf('@');
  const atCount = value.split('').filter(symbol => symbol === '@').length;
  const dotIndex = value.slice(atIndex).indexOf('.') + value.slice(0, atIndex).length;
  const lastSymbolIndex = value.length - 1;
  const topLevelDomainLength = lastSymbolIndex - dotIndex;

  const isEmpty = (value.length === 0);
  const missedAtSymbol = (atIndex === -1);
  const wrongAtSymbolCount = (atCount > 1);
  const missedLocalPart = (atIndex <= 0);
  const shortLocalPart = (atIndex > 0 && atIndex < 3);
  const missedDomainPart = (atIndex === lastSymbolIndex);
  const shortDomainPart = ((atIndex > dotIndex - 4) && (atIndex < lastSymbolIndex));
  const wrongDomainPart = ((dotIndex <= atIndex) || (dotIndex >= lastSymbolIndex));
  const shortTopLevelDomainName = (topLevelDomainLength < 2);

  const isValid = !(
    isEmpty
    || missedAtSymbol
    || wrongAtSymbolCount
    || missedLocalPart
    || missedDomainPart
    || wrongDomainPart
    || shortLocalPart
    || shortDomainPart
    || shortTopLevelDomainName
  );

  let message = '';

  if (isEmpty) {
    message = 'Поле обязательно для заполения';
  } else
  if (missedAtSymbol) {
    message = 'Email должен содержать «@»';
  } else
  if (wrongAtSymbolCount) {
    message = 'Неверное количество «@»';
  } else
  if (missedLocalPart) {
    message = 'Пропущена локальная часть адреса';
  } else
  if (shortLocalPart) {
    message = 'Короткая локальная часть адреса';
  } else
  if (missedDomainPart) {
    message = 'Пропущена доменная часть адреса';
  } else
  if (shortDomainPart) {
    message = 'Короткая доменная часть адреса';
  } else
  if (wrongDomainPart) {
    message = 'Неправильная доменная часть адреса';
  } else
  if (shortTopLevelDomainName) {
    message = 'Неправильный домен верхнего уровня';
  }

  return { isValid, message };
}

export { isEmailValid };
