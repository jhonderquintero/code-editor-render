import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CodeEditor } from '../CodeEditor';

describe('Running Test to check if CodeEditor is rendered', () => {
  test('HTML Code Editor', () => {
    render(<CodeEditor identifier="html" />);
  });
});
