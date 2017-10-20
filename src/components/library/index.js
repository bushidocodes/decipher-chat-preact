import styled, { injectGlobal } from "styled-components";
import { transparentize, lighten, darken } from "polished";

// Variables
const font_stack_base =
  "Avenir Next, Avenir, -apple-system, BlinkMacSystemFont";
// font-stack-base: -apple-system, BlinkMacSystemFont;
const font_size_base = "16px";
const font_size_sm = "14px";
const font_size_xs = "10px";
const padding_base = "8px";

const color_content_background = "#fff";
const color_content = "#000";
const color_highlight = " #0aab2a";

const sender_color_1 = "#DA4297";
const sender_color_2 = " #00ab2a";
const sender_color_3 = "#0023C0";

const app_max_width = parseInt(padding_base, 10) * 80 + "px";

const composer_height_base = parseInt(padding_base, 10) * 6.5 + "px";
const composer_submit_button_width = parseInt(padding_base, 10) * 7 + "px";

injectGlobal`
html, body {
    margin: 0;
    padding: 0;
    font-family: ${font_stack_base};
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }  
`;

export const MessagesList = styled.ul`
  padding: 0 0 (${composer_height_base} + ${padding_base});
  margin: 0 auto;
  max-width: ${app_max_width};
`;

export const MessageGroupHeader = styled.header`
  font-size: ${font_size_sm};
  padding: ${parseInt(padding_base, 10) * 2 + "px "} ${padding_base};
  font-weight: 600;
  color: ${lighten(0.7, color_content)};
  display: flex;
  align-items: center;
  &:after {
    content: "";
    flex: 1 1 100%;
    border-bottom: 1px solid ${darken(0.1, color_content_background)};
  }
`;

export const Message = styled.li`
  list-style: none;
  border-radius: 2px;
  padding: ${parseInt(padding_base, 10) / 2 + "px "} ${padding_base};
  font-size: ${font_size_sm};
  color: ${color_content};
  transition: all 0.1s ease;

  &:hover {
    background-color: ${darken(0.03, color_content_background)};
  }
`;

export const MessageHeader = styled.header`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${parseInt(padding_base, 10) / 2 + "px "};
  margin-left: -${parseInt(padding_base, 10) / 2 + "px "};
  margin-top: ${padding_base};
  padding-bottom: ${padding_base};
`;

export const Sender = styled.h1`
  font-size: inherit;
  flex: 0 0 auto;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin: 0 0 -2px 0;
  border-radius: 100px;
  padding: 1px ${padding_base};
  color: #fff;
  background-color: blue;
`;

export const Timestamp = styled.span`
  flex: 1 1 5em;
  text-align: right;
  text-transform: uppercase;
  font-size: ${font_size_xs};
  color: ${lighten(0.5, color_content)};
`;

export const Content = styled.div`max-width: 64em;`;

export const InputWrapper = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
height: ${composer_height_base};
padding: 0;
border-top: 1px solid ${transparentize(0.95, color_content)};
background-color: ${transparentize(0.5, color_content_background)};
-webkit-backdrop-filter: blur(10px);
}
`;

export const TextArea = styled.textarea.attrs({
  placeholder: "Message"
})`flex: 1 1 calc(${app_max_width} - ${composer_submit_button_width})};
  height:  calc(${composer_height_base} - ${parseInt(padding_base, 10) * 2 +
  "px "});
  font-family: inherit;
  max-width: calc(${app_max_width} - ${composer_submit_button_width})};
  padding: ${padding_base};
  background: transparent;
  -webkit-apperance: none;
  border: 0;
  display: block;
  font-size: ${font_size_base};
  transition: all 0.15s ease;
  color: ${transparentize(0.2, color_content)};
  border-radius: 2px;
  resize: none;
  &::placeholder {
    color: ${color_highlight};
    transition: all 0.15s ease;
  }

  &:focus {
    border-color: ${color_content_background};
    color: ${color_content};
    outline: none;

    &::placeholder {
      opacity: 0.2;
    }
  }
`;

export const Submit = styled.button`
  flex: 0 0 ${composer_submit_button_width};
  -webkit-appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &[disabled] {
    -webkit-filter: grayscale(100%);
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
