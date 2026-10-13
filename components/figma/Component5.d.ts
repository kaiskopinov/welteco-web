import * as React from 'react';
/** Figma "Component 5". Nav dropdown trigger: 4px espresso dot + label ("Pages"). Hover: opacity 0.5. */
export interface Component5Props {
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
  /** Text content; defaults to "Pages". */
  text1?: string;
}
export declare const Component5: React.FC<Component5Props>;
export default Component5;
