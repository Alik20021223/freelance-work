export function getRandomId(): number {
    let number: string = '';
    for (let i = 0; i < 6; i++) {
      const digit: number = Math.floor(Math.random() * 10);
      number += digit.toString();
    }
    return +number;
  }
  