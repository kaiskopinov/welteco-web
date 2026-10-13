import * as React from 'react';
/** Figma "Component 3". Full-width form submit ("Send Message"). Hover: opacity 0.8. */
export interface Component3Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  variant?: "1";
  /** Force hover state; omit to follow the pointer. */
  hover?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Render as a link. */
  href?: string;
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Text content; defaults to "Send Message". */
  text1?: string;
}
export declare const Component3: React.FC<Component3Props>;
export default Component3;
