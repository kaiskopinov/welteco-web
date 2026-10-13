import React from 'react';
import { Component2 } from './Component2.jsx';

// figma node: 2:472 Component 10 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component10Base(_p = {}) {
  const props = { ..._p, text: _p.text ?? "More Templates", variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 313.83,
      borderRadius: 12,
      backgroundColor: "var(--color-grey-96)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 181.08,
          maxHeight: null,
          overflow: "hidden",
          borderRadius: 4,
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
              width: 32,
              height: 32,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component2 variant={"16"} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "var(--color-base-black)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>{props.text1 ?? "More Templates"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 313.83,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
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
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component2 variant={"14"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 313.83,
      borderRadius: 12,
      backgroundColor: "var(--color-white-solid)",
      display: "flex",
      flexDirection: "row",
      padding: "9px 12px 9px 12px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 181.08,
          maxHeight: null,
          overflow: "hidden",
          borderRadius: 4,
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
              width: 32,
              height: 32,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component2 variant={"16"} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "var(--color-base-black)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>{props.text1 ?? "More Templates"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 313.83,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
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
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component2 variant={"14"} />}</div>
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
export function Component10(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component10Base({ ...rest, hover: _p.hover !== undefined ? _p.hover : h, style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component10;
