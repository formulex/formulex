import { add } from './add';

let a = 3;

export async function* greeting(...args: any[]) {
  console.log('Hello, World', ...args);
  yield a;
  return add(a, 3);
}
