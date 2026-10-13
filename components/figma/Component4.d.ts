import * as React from 'react';
/** Figma "Component 4". Text link. variant 4 = top-nav link 14/19.6 · 1 = footer list link 16/24 (hover reveals 6px dot) · 2 / 3 = 12.1px credit / legal links (no hover state). */
export interface Component4Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  variant?: "1" | "2" | "3" | "4";
  /** Force hover state; omit to follow the pointer. */
  hover?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Render as a link. */
  href?: string;
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Text content; defaults to "Home V1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Component4: React.FC<Component4Props>;
export default Component4;
