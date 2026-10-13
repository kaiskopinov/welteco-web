import * as React from 'react';
/** Figma "Component 8". White floating template pill (radius 12) with 32px thumbnail (image prop), uppercase 13.6px label, arrow. Hover: #F5F5F5. */
export interface Component8Props {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  /** Thumbnail image URL (32×32, radius 4). Falls back to a currentColor square. */
  image?: string;
  variant?: "1";
  /** Force hover state; omit to follow the pointer. */
  hover?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Render as a link. */
  href?: string;
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Text content; defaults to "Launch Plan Builder". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Component8: React.FC<Component8Props>;
export default Component8;
