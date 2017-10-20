import styled, { injectGlobal } from "styled-components";

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

const app_max_width = padding_base * 80;

const composer_height_base = padding_base * 6.5;
const composer_submit_button_width = padding_base * 7;

injectGlobal`
html, body {
    margin: 0;
    padding: 0;
    font-family: font_stack_base;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }  
`;

export const MessagesList = styled.ul`
  padding: 0 0 (composer_height_base + padding_base);
  margin: 0 auto;
  max-width: $app-max-width;
`;

export const MessageGroupHeader = styled.header`
  font-size: font_size_sm;
  padding: padding_base * 2 padding_base;
  font-weight: 600;
  color: lighten(color_content, 70%);
  display: flex;
  align-items: center;
  &:after {
    content: "";
    flex: 1 1 100%;
    border-bottom: 1px solid darken(color_content_background, 10%);
  }
`;

export const Message = styled.li`
  list-style: none;
  border-radius: 2px;
  padding: $padding-base / 2 $padding-base;
  font-size: $font-size-sm;
  color: color_content;
  transition: all 0.1s ease;

  &:hover {
    background-color: darken(color_content_background, 3%);
  }
`;

export const MessageHeader = styled.header`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: $padding-base / 2;
  margin-left: -$padding-base / 2;
`;

export const Sender = styled.h1`
  font-size: inherit;
  flex: 0 0 auto;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin: 0 0 -2px 0;
  border-radius: 100px;
  padding: 1px $padding-base;
  color: #fff;
`;

export const Timestamp = styled.span`
  flex: 1 1 5em;
  text-align: right;
  text-transform: uppercase;
  font-size: $font-size-xs;
  color: lighten($color-content, 50%);
`;

export const Content = styled.div`max-width: 64em;`;
