const { Icon: BIcon } = window.WeltecoDesignSystem_f324c2;
const BButton = (p) => <window.Button {...p} />;
const BSubmit = (p) => <window.SubmitButton {...p} />;

const STEPS = [
  ["1", "Discovery & Consultation", "Every great project begins with understanding your vision.", ["Initial Consultation", "Site Analysis", "Concept Briefing"]],
  ["2", "Design & Planning", "We translate ideas into actionable designs that balance creativity with practicality", ["Concept design", "Technical Drawings", "Permits & Approvals"]],
  ["3", "Build & Deliver", "From groundbreaking to final handover, our team manages every stage with precision and transparency", ["Construction management", "Quality checks", "Final inspection"]],
];

function Process() {
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ background: "var(--accent-secondary)", padding: "144px 0" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Eyebrow tone="white">Welcome to Formwise</Eyebrow>
          <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>Our Step-by-Step Approach</h2>
        </div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 6 }}>
          {STEPS.map(([n, t, d, list], i) => {
            const on = i === active;
            const fg = on ? "var(--color-base-white)" : "#000";
            return (
              <div key={n} onMouseEnter={() => setActive(i)} style={{ minHeight: 480, borderRadius: 4, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48, color: fg, background: on ? `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${IMG}15967d6746738a7c.png) 50% 50% / cover no-repeat` : "var(--color-base-white)", transition: "background 300ms ease" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 4, background: "var(--accent)", color: "var(--color-base-white)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, lineHeight: "20.8px" }}>{n}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ fontSize: 20, lineHeight: "26px" }}>{t}</div>
                    <div style={{ fontSize: 14, lineHeight: "21px", opacity: 0.6 }}>{d}</div>
                  </div>
                  {on && <BButton variant="glass" wrapperStyle={{}} style={{ width: "100%" }}>Book Consultation</BButton>}
                </div>
                <div>
                  {list.map((l) => (
                    <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderTop: "1px solid rgba(166,165,161,0.2)", fontSize: 14, lineHeight: "21px" }}>
                      <BIcon name={on ? "check-light" : "check"} />{l}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ position: "relative", padding: "144px 0", overflow: "hidden", color: "var(--color-base-white)" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${IMG}f903df5881e6d2be.jpg) 50% 50% / cover no-repeat` }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
          <Eyebrow>Projects</Eyebrow>
          <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>Proven Results</h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", maxWidth: 654 }}>From the first concept sketch to the final inspection, we deliver design and construction work that stands the test of time</p>
        </div>
        <div style={{ margin: "48px auto 0", maxWidth: 654, padding: 24, borderRadius: 4, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.4)", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 14, lineHeight: "21px", opacity: 0.8 }}>Denver, CO</div>
          <div style={{ fontSize: 28, lineHeight: "33.6px" }}>Oakline Office Complex</div>
          <div style={{ fontSize: 14, lineHeight: "21px" }}>A 60,000 sq. ft. mixed-use development designed for flexibility and efficiency. Featuring contemporary façades, energy-efficient systems, and collaborative workspaces crafted with precision.</div>
          <div style={{ marginTop: 12 }}><BButton variant="glass">Show Project</BButton></div>
        </div>
        <div style={{ marginTop: 48, textAlign: "center", fontSize: 14, lineHeight: "21px", opacity: 0.8 }}>Trusted by homeowners, architects, and builders alike</div>
      </Container>
    </section>
  );
}

function About() {
  const cards = [["Collaborative Approach", "We believe the best results come from partnership — every project begins with open dialogue and shared vision."], ["Quality Without Compromise", "From materials to craftsmanship, every detail is held to the highest standard."]];
  return (
    <section style={{ padding: "144px 0" }}>
      <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <Eyebrow>About</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>Building More Than Structures</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", maxWidth: 560 }}>At FormWise, we believe great design is about more than buildings. It’s about creating experiences that inspire, connect, and endure</p>
            <BButton>About Us</BButton>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, maxWidth: 560 }}>
            {cards.map(([t, d]) => (
              <div key={t} style={{ minHeight: 180, padding: 16, borderRadius: 4, background: "var(--accent-secondary)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 4 }}>
                <div style={{ fontSize: 16, lineHeight: "24px", fontWeight: 500 }}>{t}</div>
                <div style={{ fontSize: 14, lineHeight: "21px" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ minHeight: 600, borderRadius: 4, background: `url(${IMG}4e72bd0a87011fed.jpg) 50% 30% / cover no-repeat` }} />
      </Container>
    </section>
  );
}

function Values() {
  const V = [["Craftsmanship", "Every detail matters. From the first sketch to the final finish, we approach each project with care, precision, and pride in the work we create."], ["Reliability", "Our process is transparent, organized, and dependable — ensuring every project is delivered on time, within scope, and beyond expectations."], null, ["Sustainability", "We design with the future in mind, using eco-conscious materials and energy-efficient methods that reduce impact and promote longevity."]];
  return (
    <section style={{ padding: "0 0 144px" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
          <Eyebrow>Our Values</Eyebrow>
          <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>A foundation built on purpose, precision, and trust</h2>
        </div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 6 }}>
          {V.map((v, i) => v ? (
            <div key={i} style={{ minHeight: 320, padding: 16, borderRadius: 4, background: "var(--accent-secondary)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ width: 60, height: 60, borderRadius: 4, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><BIcon name="value-mark" /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 20, lineHeight: "26px" }}>{v[0]}</div>
                <div style={{ fontSize: 14, lineHeight: "21px", opacity: 0.6 }}>{v[1]}</div>
              </div>
            </div>
          ) : (
            <div key={i} style={{ minHeight: 320, padding: 16, borderRadius: 4, display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "var(--color-base-white)", background: `url(${IMG}9f3843318499c977.jpg) 50% 50% / cover no-repeat` }}>
              <div style={{ fontSize: 56, lineHeight: "61.6px", fontWeight: 500 }}>200+</div>
              <div style={{ fontSize: 14, lineHeight: "21px" }}>Projects Completed</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const POSTS = [
  ["The Art of Precision: Inside Construction Methods", "Learn how technology and craftsmanship work together to deliver projects faster, safer, and with greater attention to detail", "Construction & Process"],
  ["Building for the Future: Sustainable Practices That Last", "A look at how eco-conscious materials and energy-efficient systems are reshaping modern architecture and construction", "Sustainability & Innovation"],
  ["Bringing Nature Indoors: The Rise of Biophilic Design", "Explore how architects are blending natural elements with modern structures to create healthier, more inspiring environments.", "Design & Architecture"],
];

function Blog() {
  const [hover, setHover] = React.useState(-1);
  return (
    <section id="blog" style={{ padding: "144px 0", background: "var(--color-neutral-shade-50)" }}>
      <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
          <Eyebrow>Blog</Eyebrow>
          <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>Insights for Better Building</h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: "21px", maxWidth: 654 }}>Explore expert perspectives on design, construction, and innovation — stories that inspire smarter spaces and stronger foundations</p>
        </div>
        <div style={{ width: "100%", maxWidth: 896, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {POSTS.map(([t, d, c], i) => (
              <a key={t} href="#" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} style={{ display: "block", textDecoration: "none", color: "#000", padding: 24, borderRadius: 4, background: "var(--color-base-white)", border: "1px solid var(--color-neutral-shade-100)", boxShadow: "0px 10px 12px 0px rgba(247,243,236,0.3)", opacity: hover === i ? 0.8 : 1, transition: "opacity 200ms ease" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                  <div style={{ fontSize: 20, lineHeight: "26px" }}>{t}</div>
                  <div style={{ fontSize: 14, lineHeight: "21px", fontWeight: 500, opacity: 0.6 }}>{d}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "9px 0" }}>
                    <span style={{ padding: "5px 8px 6.11px", borderRadius: 2, background: "var(--accent-secondary)", fontSize: 12.1, lineHeight: "18.12px", fontWeight: 500 }}><span style={{ opacity: 0.6 }}>October 16, 2025</span></span>
                    <span style={{ fontSize: 12, lineHeight: "16.8px", fontWeight: 500, textTransform: "uppercase" }}>{c}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <BButton variant="wide">Visit Blog</BButton>
        </div>
      </Container>
    </section>
  );
}

function Field({ placeholder, multiline, value, onChange }) {
  const s = { width: "100%", boxSizing: "border-box", borderRadius: 4, background: "var(--color-base-white)", border: "1px solid rgb(242,240,235)", padding: "14px 16px", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "#000", outline: "none", resize: "none" };
  return <div style={{ paddingBottom: 8 }}>{multiline ? <textarea placeholder={placeholder} value={value} onChange={onChange} style={{ ...s, height: 157 }} /> : <input placeholder={placeholder} value={value} onChange={onChange} style={{ ...s, height: 48 }} />}</div>;
}

function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section id="contact" style={{ padding: "0 0 144px" }}>
      <Container>
        <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", padding: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 24, color: "var(--color-base-white)" }}>
          <div style={{ position: "absolute", inset: 0, background: `url(${IMG}810de8ebbe33232e.jpg) 50% 50% / cover no-repeat`, filter: "blur(0px)" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48, padding: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
              <Eyebrow>Get Started</Eyebrow>
              <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500 }}>Let’s Build Something That Lasts</h2>
              <p style={{ margin: 0, fontSize: 14, lineHeight: "21px", maxWidth: 560 }}>From design to delivery, we turn ideas into enduring spaces that inspire trust and stand the test of time.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, fontSize: 14, lineHeight: "21px" }}>
              <span style={{ opacity: 0.6 }}>Head of Client Relations</span><span style={{ fontSize: 16, fontWeight: 500 }}>Liam Carter</span><span>liam@formwise.com</span><span>+1 555 432 78 21</span>
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: 4, background: "rgba(245,239,234,0.01)", border: "1px solid rgb(166,165,161)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 28, lineHeight: "33.6px" }}>Got a project in mind?</div>
            {sent ? (
              <div style={{ padding: 24, borderRadius: 4, background: "rgba(255,255,255,0.1)", fontSize: 16, lineHeight: "24px" }}>Thanks, {form.name || "there"} — your message has been sent.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column" }}>
                <Field placeholder="Name" value={form.name} onChange={set("name")} />
                <Field placeholder="Email" value={form.email} onChange={set("email")} />
                <Field placeholder="Phone (optional)" value={form.phone} onChange={set("phone")} />
                <Field placeholder="Message" multiline value={form.message} onChange={set("message")} />
                <BSubmit>Send Message</BSubmit>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Process, Projects, About, Values, Blog, Contact });
