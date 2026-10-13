import React from 'react';
// figma node: 2:424 Component 3 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component3Base(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Send Message", variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 604,
      opacity: 0.8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--accent)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "21px",
        color: "var(--color-base-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Send Message"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 604,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--accent)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "21px",
        color: "var(--color-base-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Send Message"}</span>
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
export function Component3(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component3Base({ ...rest, hover: _p.hover !== undefined ? _p.hover : h, style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component3;
