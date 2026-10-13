import React from 'react';
// figma node: 2:448 Component 6 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "hover=" + __venc(p.hover);

function Component6Base(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "1", hover: _p.hover ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 4.010000228881836,
      padding: "28px 16px 28px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 26.98,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: -1,
          width: 27.168,
          height: 20,
          fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "19.600px",
          color: "var(--color-base-white)",
        }}>{props.text1 ?? "Cart"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 4.19,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: -1,
            width: 5.014,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text2 ?? "("}</span>
        </div>
        <div style={{
          position: "relative",
          width: 7.7,
          borderRadius: 9,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: -0.15,
            top: -1,
            width: 8.155,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text3 ?? "0"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 4.19,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: -1,
            width: 5.014,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text4 ?? ")"}</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4.010000228881836,
      padding: "28px 16px 28px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 26.98,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 0,
          top: -1,
          width: 27.168,
          height: 20,
          fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "19.600px",
          color: "var(--color-base-white)",
        }}>{props.text1 ?? "Cart"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 4.19,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: -1,
            width: 5.014,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text2 ?? "("}</span>
        </div>
        <div style={{
          position: "relative",
          width: 7.7,
          borderRadius: 9,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: -0.15,
            top: -1,
            width: 8.155,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text3 ?? "0"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 4.19,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: -1,
            width: 5.014,
            height: 20,
            fontFamily: "\"Funnel Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "19.600px",
            color: "var(--color-base-white)",
          }}>{props.text4 ?? ")"}</span>
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
export function Component6(_p = {}) {
  const [h, setH] = React.useState(false);
  const { onClick, block, href, ...rest } = _p;
  const Tag = href ? "a" : "span";
  return (
    <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: block ? "flex" : "inline-flex", cursor: "pointer", textDecoration: "none" }}>
      {Component6Base({ ...rest, hover: _p.hover !== undefined ? _p.hover : h, style: { transition: "opacity 200ms ease, background-color 200ms ease", ...(block ? { width: "100%" } : null), ...rest.style } })}
    </Tag>
  );
}
export default Component6;
