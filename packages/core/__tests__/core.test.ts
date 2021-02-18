'use strict';

import { greeting, createForm } from '@formulex/core';

describe('@formulex/core', () => {
  it('needs tests', () => {
    greeting();
  });

  it('should work', () => {
    const form = createForm();
    console.log('form', form.values);
  });
});
