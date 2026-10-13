import React from 'react';
import { Component2 } from './Component2.jsx';

// figma node: 2:430 Component 4 (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component4Base(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Home V1", variant: _p.variant ?? "1", hover: _p.hover ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 332.5,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-base-white)",
        flexShrink: 0,
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 15,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -11,
        width: 37.194,
        height: 37,
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12.100000381469727,
        lineHeight: "18.120px",
        color: "var(--color-base-white)",
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 47.72,
      height: 18.11,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: -10,
        width: 48.145,
        height: 37,
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12.100000381469727,
        lineHeight: "18.120px",
        color: "var(--color-base-white)",
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      maxWidth: 1428,
      maxHeight: null,
      opacity: 0.5,
      display: "flex",
      flexDirection: "column",
      padding: "28px 16px 28px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "19.600px",
        color: "var(--color-base-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      maxWidth: 1428,
      maxHeight: null,
      display: "flex",
      flexDirection: "column",
      padding: "28px 16px 28px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "19.600px",
        color: "var(--color-base-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 332.5,
      opacity: 0.5,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 332.5,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "9px 326.500px 9px 0px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            height: 6,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <Component2 variant={"12"} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-base-white)",
        flexShrink: 0,
      }}>{props.text1 ?? "Home V1"}</span>
    </div>
  );
  const __impls = {
    // figma: variant=1,:hover=false
    "variant=1|hover=false": __body0,
    // figma: variant=2,:hover=false
    "variant=2|hover=false": __body1,
    // figma: variant=3,:hover=false
    "variant=3|hover=false": __body2,
    // figma: variant=4,:hover=true
    "variant=4|hover=true": __body3,
    // figma: variant=4,:hover=false
    "variant=4|hover=false": __body4,
    // figma: variant=1,:hover=true
    "variant=1|hover=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
/** Interactive wrapper: hover state follows the pointer unless `hover` is passed. */
export function Component4(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component4Base({ ...rest, hover: (_p.variant === "2" || _p.variant === "3") ? false : (_p.hover !== undefined ? _p.hover : h), style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component4;
