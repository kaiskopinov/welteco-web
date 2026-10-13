import * as React from 'react';
/** Figma "Component 1". Primary CTA button. variant 1 = espresso #413936 · 2 = glass (on photos) · 3 = wide 896px, 24/36 label · 4 = light off-white w/ sand border. Hover: opacity 0.8 (1–3) or sand fill (4). */
export interface Component1Props {
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
  /** Text content; defaults to "View Projects". */
  text1?: string;
}
export declare const Component1: React.FC<Component1Props>;
export default Component1;
