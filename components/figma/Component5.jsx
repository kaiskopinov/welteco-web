import React from 'react';
// figma node: 2:442 Component 5 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component5Base(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Pages", variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "28px 16px 28px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: "var(--accent)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 38.23,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: -1,
          width: 39.107,
          height: 20,
          fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "19.600px",
          color: "var(--color-base-white)",
        }}>{props.text1 ?? "Pages"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "28px 16px 28px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: "var(--accent)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 38.23,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: -1,
          width: 39.107,
          height: 20,
          fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "19.600px",
          color: "var(--color-base-white)",
        }}>{props.text1 ?? "Pages"}</span>
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
export function Component5(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component5Base({ ...rest, hover: _p.hover !== undefined ? _p.hover : h, style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component5;
