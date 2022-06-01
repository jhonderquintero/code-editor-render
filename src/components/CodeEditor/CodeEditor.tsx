import React, { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledPre,
  StyledTextArea,
} from './CodeEditor.styles';
import './CodeEditor.styles.css';

export const CodeEditor = ({ identifier }: { identifier: string }) => {
  const codeEditorRef = React.useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const uniqueTextAreaID = `text-area-${identifier}`;
  const uniquePreID = `pre-element-${identifier}`;

  const syntaxHighlights = (text: HTMLPreElement) => {
    let data = text.innerHTML;
    data = data.replace(
      /"(.*?)"/g,
      '<span class="code-quote">&quot;$1&quot;</span>'
    );
    data = data.replace(
      /&lt;(.*?)&gt;/g,
      '<span class="code-element">&lt;$1&gt;</span>'
    );
    text.innerHTML = data;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.currentTarget;
      setText(
        (prevState) =>
          prevState.substring(0, selectionStart) +
          '\t' +
          prevState.substring(selectionEnd)
      );
    }
  };

  const handleTextAreaScroll = (
    e: React.UIEvent<HTMLTextAreaElement | HTMLPreElement>
  ) => {
    const pre = document.getElementById(uniquePreID);
    const textAreaElement = document.getElementById(uniqueTextAreaID);

    if (pre) pre.scrollTop = e.currentTarget.scrollTop;
    if (textAreaElement) textAreaElement.scrollTop = Number(pre?.scrollTop);
  };

  useEffect(() => {
    // Same Scroll
    const textAreaElement = document.getElementById(uniqueTextAreaID);
    const pre = document.getElementById(uniquePreID);
    if (pre) pre.scrollTop = Number(textAreaElement?.scrollTop);

    // Highlight
    const textArea = document.getElementById(uniquePreID) as HTMLPreElement;
    syntaxHighlights(textArea);
  }, [text]);

  return (
    <StyledContainer>
      <StyledTextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        data-gramm={false}
        onKeyDown={handleKeyDown}
        id={uniqueTextAreaID}
        onScroll={handleTextAreaScroll}
        ref={codeEditorRef}
      />
      <StyledPre
        aria-hidden="true"
        onScroll={handleTextAreaScroll}
        id={uniquePreID}
      >
        {text}
      </StyledPre>
    </StyledContainer>
  );
};
