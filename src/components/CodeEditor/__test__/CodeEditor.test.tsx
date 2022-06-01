import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CodeEditor } from '../CodeEditor';

describe('Running Test to check if CodeEditor is rendered', () => {
  test('StyledTextArea Render', () => {
    render(<CodeEditor identifier="html" />);
    expect(screen.getByTestId('styled-text-area')).toBeInTheDocument();
  });

  test('StyledPre Render', () => {
    render(<CodeEditor identifier="html" />);
    expect(screen.getByTestId('styled-pre')).toBeInTheDocument();
  });
});
