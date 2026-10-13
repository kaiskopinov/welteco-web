import * as React from 'react';
/** Figma "Component 6". "Cart (n)" nav item — text3 is the count. Hover: opacity 0.5. */
export interface Component6Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "1";
  /** Force hover state; omit to follow the pointer. */
  hover?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Render as a link. */
  href?: string;
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Text content; defaults to "Cart". */
  text1?: string;
  /** Text content; defaults to "(". */
  text2?: string;
  /** Text content; defaults to "0". */
  text3?: string;
  /** Text content; defaults to ")". */
  text4?: string;
}
export declare const Component6: React.FC<Component6Props>;
export default Component6;
