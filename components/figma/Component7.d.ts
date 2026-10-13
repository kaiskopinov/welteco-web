import * as React from 'react';
/** Figma "Component 7". 46×46 off-white icon button, radius 6, sand border; icon1 swaps the glyph. Hover: opacity 0.5. */
export interface Component7Props {
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
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Component7: React.FC<Component7Props>;
export default Component7;
