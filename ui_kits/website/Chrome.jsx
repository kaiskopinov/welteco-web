const { Component1, Component3, Component4, Component5, Component6, Component7, Component8, Component9, Component10, Icon } = window.WeltecoDesignSystem_f324c2;
// Local kit aliases over the DS components (Figma Component 1, 3–10).
const BTN = { primary: "1", glass: "2", wide: "3", light: "4" };
const Button = ({ variant = "primary", children, style, wrapperStyle, ...r }) => <Component1 variant={BTN[variant]} block={variant === "wide" || !!wrapperStyle} text1={children} style={style} {...r} />;
const SubmitButton = ({ children, ...r }) => <Component3 block text1={children} {...r} />;
const IconButton = ({ icon = "info", ...r }) => <Component7 icon1={<Icon name={icon} />} {...r} />;
const NAV = { menu: "4", footer: "1", meta: "2", "meta-wide": "3" };
const NavLink = ({ variant = "menu", children, style, ...r }) => <Component4 variant={NAV[variant]} block={variant === "footer"} text1={children} style={{ ...(variant === "footer" ? { height: 24 } : null), ...style }} {...r} />;
const NavDropdown = ({ children, ...r }) => <Component5 text1={children} {...r} />;
const CartLink = ({ count = 0, ...r }) => <Component6 text3={String(count)} {...r} />;
const TemplateBadge = ({ children, ...r }) => <Component8 block text1={children} {...r} />;
const HelpBadge = (p) => <Component9 block {...p} />;
const MoreTemplatesBadge = (p) => <Component10 block {...p} />;
const IMG = "../../assets/images/";

function Container({ children, style }) {
  return <div style={{ maxWidth: 1428, margin: "0 auto", padding: "0 20px", boxSizing: "content-box", ...style }}>{children}</div>;
}

function Eyebrow({ children, tone = "sand", style }) {
  return <div style={{ display: "inline-flex", padding: "8px 12px", borderRadius: 4, background: tone === "sand" ? "var(--accent-secondary)" : "var(--color-base-white)", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: "var(--accent)", ...style }}>{children}</div>;
}

function SiteNav({ cart, onNav }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, height: 76, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
      <Container style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }} style={{ display: "flex" }}><Icon name="logo-formwise" style={{ width: 151.27, height: 31.999 }} /></a>
        <nav style={{ display: "flex", alignItems: "center" }}>
          <NavLink onClick={(e) => { e.preventDefault(); onNav("services"); }} href="#services">Overview</NavLink>
          <NavDropdown onClick={() => onNav("blog")}>Pages</NavDropdown>
          <CartLink count={cart} />
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <IconButton />
          <Button variant="light">More Templates</Button>
          <Button onClick={() => onNav("buy")}>Buy FormWise</Button>
        </div>
      </Container>
    </header>
  );
}

function FooterBanner({ onBuy }) {
  return (
    <div style={{ position: "relative", height: 600, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${IMG}32d20f624e1bca4c.jpg) 50% 50% / cover no-repeat` }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 52%, rgb(0,0,0) 100%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center", padding: "0 20px" }}>
        <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: "var(--color-base-white)" }}>Start building with FormWise today</h2>
        <Button variant="light" onClick={onBuy}>Buy FormWise</Button>
      </div>
    </div>
  );
}

const FOOTER_COLS = [
  ["Multilayout", ["Home V1", "Home V2", "Home V3", "Services V1", "Services V2", "Services V3", "Contact V1", "Contact V2", "Contact V3"]],
  ["Company", ["Services Details (CMS)", "Services Details (E-commerce)", "About", "Blog", "Blog Post", "Projects", "Project Details", "FAQs"]],
  ["Account & Utility", ["Terms & Conditions", "404", "Password Protected"]],
];

function SiteFooter({ onBuy }) {
  return (
    <footer style={{ background: "var(--color-base-black)", color: "var(--color-base-white)" }}>
      <FooterBanner onBuy={onBuy} />
      <Container style={{ padding: "96px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 6 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 31, alignItems: "flex-start" }}>
            <Icon name="logo-formwise" style={{ width: 151.27, height: 31.999 }} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: "21px", maxWidth: 268 }}>A sleek, top-tier template built for trusted construction firms and visionary architects</p>
            <Button variant="light" onClick={onBuy}>Buy FormWise</Button>
          </div>
          {FOOTER_COLS.map(([h, links]) => (
            <div key={h} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase" }}>{h}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>{links.map((l) => <NavLink key={l} variant="footer" href="#">{l}</NavLink>)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 15.1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 12.1, lineHeight: "18.12px", padding: "16px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}><span>© Copyright 2025 Designs by&nbsp;</span><NavLink variant="meta">Loonis</NavLink><span>, powered by&nbsp;</span><NavLink variant="meta" style={{ width: 46.95 }}>Webflow</NavLink></div>
          <div style={{ display: "flex", gap: 32 }}><NavLink variant="meta-wide">Licenses</NavLink><NavLink variant="meta-wide" style={{ width: 62.28 }}>Style Guide</NavLink><NavLink variant="meta-wide" style={{ width: 58.92 }}>Changelog</NavLink></div>
        </div>
        <div style={{ height: 1, opacity: 0.3, background: "rgb(230,228,223)" }} />
        <p style={{ margin: "15.1px 0 0", opacity: 0.6, fontSize: 12.1, lineHeight: "18.12px" }}>This is a legal disclaimer for website footers. It should begin with a statement confirming the company’s official registration, including a placeholder for the location and a sample registration number—for instance, “Incorporated in [Location], USA (Reg. No. YY-123456).” The disclaimer should also include a note about the company’s regulatory authorization, referencing a relevant oversight body and legislation. You may use placeholders like “Licensed by the [State Regulatory Authority] under the [Relevant State Act] (License No. YY-123456).”</p>
      </Container>
    </footer>
  );
}

function FloatingBadges() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return (
    <div style={{ position: "fixed", right: 12, bottom: 12, zIndex: 30, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      <div style={{ width: 346, borderRadius: 12, background: "rgba(255,255,255,0.01)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", padding: 16, display: "flex", flexDirection: "column", gap: 12, boxSizing: "border-box" }}>
        <TemplateBadge image={IMG + "4b22ab81c1c02f0b.png"} />
        <HelpBadge />
        <MoreTemplatesBadge onClick={() => setOpen(false)} />
      </div>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 4, padding: 6, height: 28, boxSizing: "border-box", borderRadius: 3, background: "#fff", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)" }}>
        <Icon name="webflow-mark" /><Icon name="made-in-webflow" />
      </a>
    </div>
  );
}

Object.assign(window, { Container, Eyebrow, SiteNav, SiteFooter, FloatingBadges, IMG, Button, SubmitButton });
