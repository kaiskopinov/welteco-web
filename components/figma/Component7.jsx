import React from 'react';
import { Component2 } from './Component2.jsx';

// figma node: 2:454 Component 7 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component7Base(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--color-base-white)",
        borderTop: "1px solid var(--accent-secondary)",
        borderRight: "1px solid var(--accent-secondary)",
        borderBottom: "1px solid var(--accent-secondary)",
        borderLeft: "1px solid var(--accent-secondary)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 12px 12px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 46,
          maxHeight: null,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component2 variant={"13"} />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--color-base-white)",
        borderTop: "1px solid var(--accent-secondary)",
        borderRight: "1px solid var(--accent-secondary)",
        borderBottom: "1px solid var(--accent-secondary)",
        borderLeft: "1px solid var(--accent-secondary)",
        display: "flex",
        flexDirection: "row",
        padding: "12px 12px 12px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 46,
          maxHeight: null,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component2 variant={"13"} />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: variant=1,:hover=true
    "variant=1|hover=true": __body0,
    // figma: variant=1,:hover=false
    "variant=1|hover=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
/** Interactive wrapper: hover state follows the pointer unless `hover` is passed. */
export function Component7(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component7Base({ ...rest, hover: _p.hover !== undefined ? _p.hover : h, style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component7;
