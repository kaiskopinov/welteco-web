import * as React from 'react';
/** Figma "Component 9". Black floating "Need help customizing?" pill. Hover: #E60023. */
export interface Component9Props {
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
  /** Text content; defaults to "Need help customizing?". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Component9: React.FC<Component9Props>;
export default Component9;
