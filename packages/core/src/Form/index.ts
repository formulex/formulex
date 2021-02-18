import Features from './features';

const Form = Features.named('Form');

export function createForm() {
  const formInstance = Form.create();
  return formInstance;
}
