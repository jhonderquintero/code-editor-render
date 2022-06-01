import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  width: auto;
  position: relative;
  margin: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 8px;
  min-height: 20px;
  position: absolute;
  background: none;
  box-sizing: inherit;
  display: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  tab-size: inherit;
  text-indent: inherit;
  text-rendering: inherit;
  text-transform: inherit;
  box-sizing: border-box;
  resize: none;
  outline: none;
  overflow: auto;

  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    border-radius: 0px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    /* border-radius: 10px; */
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6); */
    background-color: #555;
  }
`;

export const StyledPre = styled.pre`
  height: 100%;
  width: 100%;
  margin: 0px;
  border: 0px;
  padding: 8px;
  min-height: 20px;
  background: none;
  box-sizing: inherit;
  display: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  tab-size: inherit;
  text-indent: inherit;
  text-rendering: inherit;
  text-transform: inherit;
  text-align: left;
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  box-sizing: border-box;
  position: relative;
  pointer-events: none;
  overflow: auto;

  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    border-radius: 0px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    /* border-radius: 10px; */
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6); */
    background-color: #555;
  }
`;
