export function getTokenLocalstor(): string {
  const getData = localStorage.getItem('token');
  const token = getData ? JSON.parse(getData) : '';

  return token;
}

export function setTokenlocalstor(key: string, token: string): void {
  localStorage.setItem(key, JSON.stringify(token));
}

export function removeTokenLocalstor(key: string): void {
  localStorage.removeItem(key);
}
