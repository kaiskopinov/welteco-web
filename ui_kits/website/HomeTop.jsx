const { Icon: HIcon } = window.WeltecoDesignSystem_f324c2;
const HButton = (p) => <window.Button {...p} />;

function Hero({ onWatch }) {
  return (
    <section id="top" style={{ position: "relative", minHeight: 900, marginTop: -76, display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", background: "#000" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${IMG}5741afd99e145c22.jpg) 50% 50% / cover no-repeat` }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), linear-gradient(180deg, rgba(0,0,0,0) 45%, rgb(0,0,0) 100%)" }} />
      <Container style={{ position: "relative", padding: "48px 20px", width: "calc(100% - 40px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: "var(--color-base-white)" }}>
              {["From", "Concept", "to", "Completion"].map((w) => <span key={w}>{w}</span>)}
            </div>
            <div style={{ height: 1, opacity: 0.3, background: "rgb(230,228,223)" }} />
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 520px", display: "flex", flexDirection: "column", gap: 32 }}>
              <h1 style={{ margin: 0, fontSize: 90, lineHeight: "90px", fontWeight: 500, color: "var(--color-base-white)", textWrap: "balance" }}>Redefining How<br />the World Builds</h1>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <HButton onClick={() => window.scrollToId("projects")}>View Projects</HButton>
                <HButton variant="glass" onClick={() => window.scrollToId("contact")}>Contact Us</HButton>
              </div>
            </div>
            <div style={{ width: 340, borderRadius: 6, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", padding: 24, display: "flex", flexDirection: "column", gap: 16, boxSizing: "border-box" }}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: "var(--color-base-white)" }}>A Webflow template built for architects, builders, and design-driven firms</p>
              <button onClick={onWatch} style={{ all: "unset", cursor: "pointer", position: "relative", height: 194.66, borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: `url(${IMG}ae7b1f12f5903495.jpg) 50% 50% / cover no-repeat` }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 16px", borderRadius: 4, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", color: "var(--color-base-white)", fontSize: 16, lineHeight: "24px", fontWeight: 500 }}><HIcon name="play" />See in Action</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const INTRO = [
  ["efea20afd0de99fd.png", "Experienced Team", "Architects and builders with a proven track record of excellence"],
  ["0521c0fbd3617dd7.png", "On-Time Delivery", "Every project completed with precision and accountability"],
  ["c2a4de4593d4eeb8.png", "Quality & Safety", "Built to the highest standards for durability and compliance"],
  ["e6ab5f0a18b9fbb5.png", "Sustainable Design", "Eco-conscious materials and energy-efficient building methods"],
];

function Intro({ onBuy }) {
  return (
    <section style={{ padding: "128px 0 96px" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
          <Eyebrow>Welcome to Formwise</Eyebrow>
          <h2 style={{ margin: 0, padding: "0 0 16px", fontSize: 40, lineHeight: "46px", fontWeight: 500, maxWidth: 1340, textWrap: "balance" }}>FormWise is built for those shaping the spaces we live and work in — architects, builders, and design studios who value both structure and style.</h2>
          <HButton onClick={onBuy}>Buy FormWise</HButton>
        </div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 6 }}>
          {INTRO.map(([img, t, d]) => (
            <div key={t} style={{ display: "flex", gap: 12, padding: 16, borderRadius: 4, background: "var(--accent-secondary)" }}>
              <div style={{ width: 60, height: 60, flexShrink: 0, borderRadius: 8, background: `url(${IMG}${img}) 50% 50% / 100% 100% no-repeat` }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 7.01 }}>
                <div style={{ fontSize: 16, lineHeight: "24px", fontWeight: 500 }}>{t}</div>
                <div style={{ fontSize: 14, lineHeight: "21px" }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Offer() {
  const items = [["Construction", "fbb4b223ec9df6f9.jpg"], ["Architecture", "76b18a20e0c028bd.jpg"]];
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map(([t, img]) => (
        <div key={t} style={{ position: "relative", flex: "1 1 480px", minHeight: 700, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: `url(${IMG}${img}) 50% 50% / cover no-repeat` }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: "var(--color-base-white)" }}>{t}</h2>
            <HButton variant="glass">Learn More</HButton>
          </div>
        </div>
      ))}
    </section>
  );
}

const SERVICES = [
  ["architectural-design", "Architectural Design"],
  ["home-construction", "Home Construction"],
  ["renovations", "Renovations & Additions"],
  ["interior-design", "Interior Design"],
  ["project-management", "Project Management"],
];

function Services() {
  const [active, setActive] = React.useState(0);
  return (
    <section id="services" style={{ padding: "128px 0 144px" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: 6 }}>
          <div><Eyebrow>Services</Eyebrow></div>
          <h3 style={{ margin: 0, fontSize: 32, lineHeight: "38.4px", fontWeight: 400, textWrap: "pretty" }}>From modern architectural design to reliable construction execution, we deliver projects that merge aesthetic vision with structural integrity — on time, on budget, and built to last</h3>
        </div>
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "406.28px minmax(0,1fr)", gap: 6 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {SERVICES.map(([icon, label], i) => (
              <button key={label} onClick={() => setActive(i)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, padding: 16, height: 58, boxSizing: "border-box", borderRadius: 4, border: "1px solid rgb(242,240,235)", background: i === active ? "var(--accent-secondary)" : "transparent", color: "var(--color-grey-13)", fontSize: 16, lineHeight: "24px", fontWeight: 500, transition: "background-color 200ms ease" }}>
                <HIcon name={icon} />{label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 24, minHeight: 600 }}>
            <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", padding: 16, display: "flex", alignItems: "flex-end", background: `url(${IMG}8e4c07956fdb8873.jpg) 50% 50% / cover no-repeat` }}>
              <div style={{ minWidth: 240, padding: 12, borderRadius: 4, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", color: "var(--color-base-white)" }}>
                <div style={{ fontSize: 28, lineHeight: "33.6px" }}>180+</div>
                <div style={{ fontSize: 14, lineHeight: "21px" }}>Architectural projects designed</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div><Eyebrow>{SERVICES[active][1]}</Eyebrow></div>
                <div style={{ fontSize: 20, lineHeight: "26px" }}>From concept sketches to full-scale blueprints, we shape ideas into purposeful spaces</div>
                <div style={{ fontSize: 14, lineHeight: "21px" }}>We develop thoughtful, functional spaces that balance beauty with purpose. From initial sketches to detailed blueprints, every project is tailored to reflect your vision and the environment around it.</div>
              </div>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#000", fontSize: 16, lineHeight: "24px", fontWeight: 500 }}>
                Learn More
                <span style={{ width: 46, height: 46, boxSizing: "border-box", borderRadius: 6, background: "var(--color-base-white)", border: "1px solid var(--accent-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}><HIcon name="arrow-right" /></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, Intro, Offer, Services });
