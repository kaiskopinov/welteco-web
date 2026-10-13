const C = window.WCONTENT;
const wc = { blue: "#20387F", yellow: "#FAF870", orange: "#FFBA4C", black: "#1D1C1C", dark: "#313138", medium: "#3A3A3A", grey: "#DBDBDB", greyLight: "#E4E2E2", line: "#AFACAC", white: "#F5F5F5", pure: "#FFFFFF", navy: "#004394" };
const LangCtx = React.createContext({ lang: "ua", t: C.ua, go: () => {} });
const useL = () => React.useContext(LangCtx);

function useWide(bp = 900) {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => { const f = () => setW(window.innerWidth); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);
  return w >= bp;
}

function Container({ children, style }) {
  return <div style={{ maxWidth: 1428, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>;
}

function Eyebrow({ children, tone = "light", style }) {
  const tones = { light: [wc.grey, wc.black], dark: ["rgba(255,255,255,0.1)", wc.white], yellow: [wc.yellow, wc.black] };
  const [bg, fg] = tones[tone];
  return <div style={{ display: "inline-flex", alignSelf: "flex-start", padding: "8px 12px", borderRadius: 4, background: bg, color: fg, fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", ...style }}>{children}</div>;
}

function WButton({ children, variant = "yellow", onClick, href, block, type, style }) {
  const [h, setH] = React.useState(false);
  const v = {
    yellow: { background: wc.yellow, color: wc.black },
    dark: { background: wc.black, color: wc.white },
    blue: { background: wc.blue, color: wc.white },
    glass: { background: "rgba(255,255,255,0.1)", color: wc.white, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.4)" },
    outline: { background: "transparent", color: wc.black, border: `1px solid ${wc.line}` },
  }[variant];
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", display: block ? "flex" : "inline-flex", width: block ? "100%" : undefined, justifyContent: "center", alignItems: "center", gap: 8, padding: "12px 16px", borderRadius: 4, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: "24px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2px", textAlign: "center", opacity: h ? 0.8 : 1, transition: "opacity 200ms ease", ...v, ...style }}>
      {children}
    </Tag>
  );
}

function SectionTitle({ eyebrow, title, tone = "light", color, right, size = 40 }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1000 }}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        {title && <h2 style={{ margin: 0, fontSize: size, lineHeight: 1.15, fontWeight: 500, color: color || wc.black, textWrap: "balance", textTransform: "uppercase" }}>{title}</h2>}
      </div>
      {right}
    </div>
  );
}

function PageHero({ title, image, video, minHeight = 560, children }) {
  return (
    <section style={{ position: "relative", minHeight, marginTop: -76, display: "flex", alignItems: "flex-end", overflow: "hidden", background: wc.black }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / cover no-repeat` }}></div>
      {video ? <video autoPlay muted loop playsInline poster={image} src={video} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></video>
        : <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / cover no-repeat` }}></div>}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(245,245,245,0.45),rgba(245,245,245,0.45)), linear-gradient(180deg, rgba(245,245,245,0) 40%, rgb(245,245,245) 100%)" }}></div>
      <Container style={{ position: "relative", width: "100%", boxSizing: "border-box", padding: "140px 20px 48px" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 1, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance", maxWidth: 1200 }}>{title}</h1>
        {children}
      </Container>
    </section>
  );
}

function NavItem({ children, onClick, active }) {
  const [h, setH] = React.useState(false);
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.black, opacity: h ? 0.5 : 1, transition: "opacity 200ms ease" }}>{active && <span style={{ width: 4, height: 4, borderRadius: 2, background: wc.blue }}></span>}{children}</button>;
}

function LangToggle() {
  const { lang, setLang } = useL();
  return (
    <div style={{ display: "flex", padding: 3, borderRadius: 6, background: "rgba(29,28,28,0.06)", border: "1px solid rgba(29,28,28,0.12)" }}>
      {[["ua", C.IMG.flagUA, "ukr"], ["en", C.IMG.flagUS, "eng"]].map(([k, f, l]) => (
        <button key={k} onClick={() => setLang(k)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 4, background: lang === k ? wc.black : "transparent", color: lang === k ? wc.white : wc.black, fontSize: 12, lineHeight: "16.8px", textTransform: "uppercase", transition: "background-color 200ms ease" }}>
          <img src={f} alt="" style={{ width: 16, height: 12, objectFit: "cover", borderRadius: 2 }} />{l}
        </button>
      ))}
    </div>
  );
}

function LogoTile({ src, alt, height = 120, style }) {
  if (src) return <img src={src} alt={alt} style={{ maxWidth: "60%", maxHeight: height, ...style }} />;
  return <span style={{ fontSize: height * 0.5, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.02em", color: wc.navy }}>CGM</span>;
}

function SiteNav({ page }) {
  const { t, go } = useL();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => { const f = () => setScrolled(window.scrollY > 400); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  const wide = useWide(1000);
  const [open, setOpen] = React.useState(false);
  const [prod, setProd] = React.useState(false);
  const nav = (p) => { setOpen(false); setProd(false); go(p); };
  const items = [["about", t.nav.about], ["home#offers", t.nav.offers], ["products-menu", t.nav.products], ["partners", t.nav.partners]];
  const prodItems = [["products", t.nav.productsExamples], ["machines", t.nav.machines]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, height: 76, background: scrolled ? "rgba(245,245,245,0.92)" : "rgba(245,245,245,0.6)", borderBottom: "1px solid rgba(29,28,28,0.08)", transition: "background-color 200ms ease", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
      <Container style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#/home" onClick={(e) => { e.preventDefault(); nav("home"); }} style={{ display: "flex" }}><img src={C.IMG.logo} alt="Welteco company  logo" style={{ height: 44, width: "auto" }} /></a>
        {wide ? (
          <React.Fragment>
            <nav style={{ display: "flex", alignItems: "center" }}>
              {items.map(([k, l]) => k === "products-menu" ? (
                <div key={k} style={{ position: "relative" }} onMouseEnter={() => setProd(true)} onMouseLeave={() => setProd(false)}>
                  <NavItem active={page === "products" || page === "machines"}>{l}<span style={{ fontSize: 10, opacity: 0.7 }}>▾</span></NavItem>
                  {prod && (
                    <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8 }}>
                      <div style={{ minWidth: 260, padding: 6, borderRadius: 6, background: "rgba(245,245,245,0.96)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: 2 }}>
                        {prodItems.map(([pk, pl]) => <NavItem key={pk} onClick={() => nav(pk)} active={page === pk}>{pl}</NavItem>)}
                      </div>
                    </div>
                  )}
                </div>
              ) : <NavItem key={k} onClick={() => nav(k)} active={page === k}>{l}</NavItem>)}
            </nav>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <LangToggle />
              <WButton onClick={() => nav("contacts")}>{t.nav.contact}</WButton>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <LangToggle />
            <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ all: "unset", cursor: "pointer", width: 46, height: 46, borderRadius: 6, background: wc.pure, border: "1px solid rgba(29,28,28,0.12)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              {[0, 1, 2].map((i) => <span key={i} style={{ width: 18, height: 2, background: wc.black }}></span>)}
            </button>
          </div>
        )}
      </Container>
      {!wide && open && (
        <div style={{ position: "absolute", top: 76, left: 0, right: 0, background: "rgba(245,245,245,0.98)", padding: "12px 20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[...items.filter(([k]) => k !== "products-menu"), ...prodItems].map(([k, l]) => <NavItem key={k} onClick={() => nav(k)} active={page === k}>{l}</NavItem>)}
          <div style={{ marginTop: 12 }}><WButton block onClick={() => nav("contacts")}>{t.nav.contact}</WButton></div>
        </div>
      )}
    </header>
  );
}

function Messengers({ size = 40, tone = "dark" }) {
  const list = [[C.CONTACT.whatsapp, C.IMG.whatsapp, "icon whatsapp"], [C.CONTACT.telegram, C.IMG.telegram, "icon telegram"], [C.CONTACT.viber, C.IMG.viber, "icon viber"]];
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {list.map(([href, src, alt]) => (
        <a key={alt} href={href} target="_blank" rel="noreferrer" style={{ width: size + 6, height: size + 6, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: tone === "dark" ? "rgba(255,255,255,0.1)" : wc.black, border: "1px solid rgba(255,255,255,0.2)" }}>
          <img src={src} alt={alt} style={{ width: size * 0.6, height: size * 0.6 }} />
        </a>
      ))}
    </div>
  );
}

function Field({ label, type = "text", textarea, value, onChange }) {
  const [f, setF] = React.useState(false);
  const base = { all: "unset", boxSizing: "border-box", width: "100%", padding: "10px 0", borderBottom: `1px solid ${f ? wc.yellow : "rgba(255,255,255,0.4)"}`, color: wc.white, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: "24px", transition: "border-color 200ms ease" };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4, gridColumn: textarea ? "1 / -1" : undefined }}>
      <span style={{ fontSize: 12, lineHeight: "16.8px", letterSpacing: "0.2px", textTransform: "uppercase", color: "rgba(245,245,245,0.7)" }}>{label}</span>
      {textarea ? <textarea required maxLength={5000} value={value} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ ...base, minHeight: 96, resize: "vertical" }}></textarea>
        : <input required maxLength={256} type={type} value={value} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)} style={base} />}
    </label>
  );
}

function ContactForm() {
  const { t } = useL();
  const c = t.contact;
  const [v, setV] = React.useState({ name: "", phone: "", email: "", msg: "" });
  const [state, setState] = React.useState("idle");
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setState("wait"); setTimeout(() => setState("done"), 700); };
  if (state === "done") return (
    <div style={{ padding: 32, borderRadius: 6, background: "rgba(255,255,255,0.1)", color: wc.white, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 28, lineHeight: "33.6px", fontWeight: 500 }}>{c.success[0]}</div>
      <div style={{ fontSize: 16, lineHeight: "24px" }}>{c.success[1]}</div>
    </div>
  );
  return (
    <form onSubmit={submit} style={{ padding: 32, borderRadius: 6, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px 20px" }}>
      <Field label={c.name} value={v.name} onChange={set("name")} />
      <Field label={c.phone} type="tel" value={v.phone} onChange={set("phone")} />
      <div style={{ gridColumn: "1 / -1" }}><Field label={c.email} type="email" value={v.email} onChange={set("email")} /></div>
      <Field label={c.message} textarea value={v.msg} onChange={set("msg")} />
      <div style={{ gridColumn: "1 / -1" }}><WButton block type="submit">{state === "wait" ? c.wait : c.submit}</WButton></div>
    </form>
  );
}

function ContactSection({ id = "Contact", first }) {
  const { t } = useL();
  const c = t.contact;
  return (
    <section id={id} style={{ background: wc.blue, color: wc.white, padding: first ? "176px 0 96px" : "96px 0", marginTop: first ? -76 : 0 }}>
      <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow tone="dark">{c.eyebrow}</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, textTransform: "uppercase", textWrap: "balance" }}>{c.title1}<br /><span style={{ color: wc.yellow }}>{c.title2}</span></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", opacity: 0.7 }}>{c.call}</div>
            <a href={C.CONTACT.tel} style={{ color: wc.white, textDecoration: "none", fontSize: 32, lineHeight: "38.4px" }}>{C.CONTACT.phone}</a>
            <a href={C.CONTACT.mailto} style={{ color: wc.white, textDecoration: "none", fontSize: 20, lineHeight: "26px" }}>{C.CONTACT.email}</a>
            <div style={{ marginTop: 8 }}><Messengers /></div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

function FooterLink({ children, onClick, href }) {
  const [h, setH] = React.useState(false);
  return <a href={href || "#"} onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 8, color: wc.white, textDecoration: "none", fontSize: 16, lineHeight: "24px", opacity: h ? 0.6 : 1, transition: "opacity 200ms ease" }}><span style={{ width: h ? 6 : 0, height: 6, borderRadius: 3, background: wc.yellow, transition: "width 200ms ease" }}></span>{children}</a>;
}

function SiteFooter() {
  const { t, go } = useL();
  const f = t.footer;
  const head = { fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: "rgba(245,245,245,0.6)" };
  return (
    <footer style={{ background: wc.black, color: wc.white }}>
      <Container style={{ padding: "96px 20px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <a href="#/home" onClick={(e) => { e.preventDefault(); go("home"); }}><img src={C.IMG.logoLight} alt="Welteco" style={{ height: 56 }} /></a>
            <Messengers size={34} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>Welteco</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{f.links.map(([l, p]) => <FooterLink key={p} onClick={() => go(p)}>{l}</FooterLink>)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>{f.offersTitle}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{f.offers.map((l, i) => <FooterLink key={l} onClick={() => go(i < 2 ? "machines" : "home#offers")}>{l}</FooterLink>)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>{t.contact.call}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <FooterLink href={C.CONTACT.tel}>{C.CONTACT.phone}</FooterLink>
              <FooterLink href={C.CONTACT.mailto}>{C.CONTACT.email}</FooterLink>
            </div>
          </div>
        </div>
        <div style={{ height: 1, marginTop: 72, background: "rgba(230,228,223,0.3)" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", padding: "16px 0 0", fontSize: 12.1, lineHeight: "18.12px", color: "rgba(245,245,245,0.6)" }}>
          <span>© Welteco</span>
          <a href="#" style={{ color: "rgba(245,245,245,0.6)" }}>{f.privacy}</a>
        </div>
      </Container>
    </footer>
  );
}

function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 40, cursor: "zoom-out" }}>
      <img src={src} alt="" style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 4, objectFit: "contain" }} />
    </div>
  );
}

Object.assign(window, { LogoTile, C, wc, LangCtx, useL, useWide, Container, Eyebrow, WButton, SectionTitle, PageHero, SiteNav, Messengers, ContactSection, SiteFooter, Lightbox });
