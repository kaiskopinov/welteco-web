import * as React from 'react';
/** Icon & brand-mark set from the Figma file (Figma "Component 2", 18 variants). */
export interface IconProps {
  /** Semantic name. play · architectural-design · home-construction · renovations · interior-design · project-management · arrow-right · check-light · check · value-mark · logo-formwise · dot · info · arrow-badge · customize · logo-loonis · webflow-mark · made-in-webflow */
  name?: "play" | "architectural-design" | "home-construction" | "renovations" | "interior-design" | "project-management" | "arrow-right" | "check-light" | "check" | "value-mark" | "logo-formwise" | "dot" | "info" | "arrow-badge" | "customize" | "logo-loonis" | "webflow-mark" | "made-in-webflow";
  /** Raw Figma variant number "1"–"18" (overrides name). */
  variant?: string;
  /** Recolour single-colour glyphs (sets CSS color). */
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare const iconNames: Record<string, string>;
export declare function Icon(props: IconProps): JSX.Element;
export default Icon;
