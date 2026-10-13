import * as React from 'react';
/** Figma "Component 10". White floating "More Templates" pill with Loonis mark. Hover: #F5F5F5. */
export interface Component10Props {
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
  /** Text content; defaults to "More Templates". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Component10: React.FC<Component10Props>;
export default Component10;
