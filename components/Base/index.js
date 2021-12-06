import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  textStyle,
  border,
  buttonStyle,
  background,
  borderRadius,
} from "styled-system";

export { default as Icon } from "./Icon";

const themed = (key) => (props) => props.theme[key];
const customSystem = (themeField, propName) => (props) =>
  props.theme[themeField][props[propName]];

export const Box = styled.div(
  themed("Box"),
  space,
  color,
  layout,
  flexbox,
  borderRadius
);
export const Flex = styled(Box)(themed("Flex"), { display: "flex" });
export const Text = styled(Box)(
  themed("Text"),
  customSystem("textStyles", "textStyles"),
  typography,
  textStyle
);
export const Link = styled(Text)(
  themed("Link"),
  customSystem("clickableStyles", "clickableStyles")
);

export const Button = styled(Box)(
  themed("Button"),
  customSystem("clickableStyles", "clickableStyles"),
  typography,
  border,
  buttonStyle
);
Button.defaultProps = {
  as: "button",
};

export const Card = styled(Box)(
  themed("Card"),
  customSystem("clickableStyles", "clickableStyles"),
  customSystem("cardStyles", "cardStyle"),
  background,
  border
);

export const Image = styled(Box)(themed("Image"));
Image.defaultProps = {
  as: "img",
};

const Base = {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Card,
  Image,
};

export default Base;
