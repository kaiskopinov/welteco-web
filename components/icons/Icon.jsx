import React from 'react';
import { Component2 } from '../figma/Component2.jsx';
export const iconNames = {
  "play": "1", "architectural-design": "2", "home-construction": "3", "renovations": "4", "interior-design": "5",
  "project-management": "6", "arrow-right": "7", "check-light": "8", "check": "9", "value-mark": "10",
  "logo-formwise": "11", "dot": "12", "info": "13", "arrow-badge": "14", "customize": "15", "logo-loonis": "16",
  "webflow-mark": "17", "made-in-webflow": "18"
};
/** Figma "Component 2" — the file's 18-glyph icon & mark set. Single-colour glyphs paint with currentColor. */
export function Icon({ name = "arrow-right", variant, color, style, className }) {
  const v = variant ?? iconNames[name] ?? "7";
  return <Component2 variant={String(v)} className={className} style={{ flexShrink: 0, ...(color ? { color } : null), ...style }} />;
}
export default Icon;
