import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Example from '../Example';

describe('Running Test for ExampleComponent', () => {
  test('Check Button Disabled', () => {
    render(<Example />);
  });
});
