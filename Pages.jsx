function AboutPage() {
  const { t, go } = useL();
  const a = t.aboutPage;
  return (
    <React.Fragment>
      <PageHero title={a.h1} image={C.IMG.concreteMachine} minHeight={520} />
      <section style={{ padding: "128px 0 96px", background: wc.white }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
          <div><Eyebrow>{a.eyebrow}</Eyebrow></div>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textWrap: "balance" }}>{a.title}</h2>
            <p style={{ margin: 0, fontSize: 20, lineHeight: "26px", color: wc.dark, maxWidth: 820 }}>{a.p}</p>
          </div>
        </Container>
      </section>
      <section style={{ padding: "0 0 144px", background: wc.white }}>
        <Container style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {a.list.map((l, i) =>
          <button key={l} onClick={() => go(i === 3 ? "machines" : "contacts")} style={{ all: "unset", cursor: "pointer", display: "grid", gridTemplateColumns: "64px minmax(0,1fr) 28px", alignItems: "center", gap: 24, padding: "24px", borderRadius: 4, background: i % 2 ? wc.greyLight : wc.grey }}>
              <span style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", color: wc.blue }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 20, lineHeight: "26px", fontWeight: 500, color: wc.black, textTransform: "uppercase" }}>{l}</span>
              <img src={C.IMG.arrow} alt="" style={{ width: 20, height: 20 }} />
            </button>
          )}
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>);

}

function PartnersPage() {
  const { t } = useL();
  const p = t.partnersPage;
  const [lb, setLb] = React.useState(null);
  return (
    <React.Fragment>
      <PageHero title={p.h1} image={C.IMG.partnersPoster} video={C.IMG.partnersVideo} minHeight={620} />
      {p.sections.map((s, si) =>
      <section key={s.key} id={s.key} style={{ padding: "128px 0", background: si % 2 ? wc.grey : wc.white }}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              <div style={{ height: 160, borderRadius: 4, background: wc.pure, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LogoTile src={s.logo} alt="" height={110} />
              </div>
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 24, minWidth: 0, justifyContent: "center" }}>
                <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance" }}>{s.title}</h2>
                {s.intro.map((x) => <p key={x} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{x}</p>)}
              </div>
            </div>
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow tone={si % 2 ? "yellow" : "light"}>{p.examples}</Eyebrow>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
                {s.images.map((src) =>
              <button key={src} onClick={() => setLb(src)} style={{ all: "unset", cursor: "zoom-in", height: 440, borderRadius: 4, background: `${wc.pure} url("${src}") 50% 50% / cover no-repeat` }}></button>
              )}
              </div>
            </div>
            <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 6 }}>
              {s.points.map((x, i) =>
            <div key={x} style={{ padding: 24, borderRadius: 4, background: si % 2 ? wc.white : wc.grey, display: "flex", flexDirection: "column", gap: 16 }}>
                  <span style={{ fontSize: 14, lineHeight: "19.6px", color: wc.blue }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{x}</p>
                </div>
            )}
            </div>
          </Container>
        </section>
      )}
      <ContactSection />
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </React.Fragment>);

}

function ProductsPage() {
  const { t } = useL();
  const [lb, setLb] = React.useState(null);
  return (
    <React.Fragment>
      <PageHero title={t.productsPage.h1} image={C.GALLERY[11]} minHeight={520} />
      <section style={{ padding: "96px 0 144px", background: wc.white }}>
        <Container>
          <div style={{ columnWidth: 320, columnGap: 6 }}>
            {C.GALLERY.map((src) =>
            <button key={src} onClick={() => setLb(src)} style={{ all: "unset", cursor: "zoom-in", display: "block", width: "100%", marginBottom: 6, borderRadius: 4, overflow: "hidden", breakInside: "avoid" }}>
                <img src={src} alt="concrete product example" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
              </button>
            )}
          </div>
        </Container>
      </section>
      <ContactSection />
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </React.Fragment>);

}

function MachinesPage() {
  const { t, lang } = useL();
  const m = t.machinesPage;
  const [active, setActive] = React.useState(0);
  const mc = C.MACHINES[active];
  const labels = C.SPEC_LABELS[lang];
  const name = (x) => lang === "en" ? x.nameEn : x.name;
  return (
    <React.Fragment>
      <PageHero title={m.h1} image={C.IMG.heroPoster} minHeight={560} />
      <section style={{ padding: "96px 0 144px", background: wc.white }}>
        <Container>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {C.MACHINES.map((x, i) =>
            <button key={x.id} onClick={() => setActive(i)} style={{ all: "unset", cursor: "pointer", padding: "16px 20px", borderRadius: 4, border: `1px solid ${i === active ? wc.black : wc.grey}`, background: i === active ? wc.black : "transparent", color: i === active ? wc.white : wc.black, fontSize: 16, lineHeight: "24px", fontWeight: 500, transition: "background-color 200ms ease" }}>{name(x)}</button>
            )}
          </div>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 6 }}>
            <div style={{ minHeight: 520, borderRadius: 4, background: wc.grey, display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
              <img src={mc.img} alt={name(mc)} style={{ maxWidth: "100%", maxHeight: 520, objectFit: "contain" }} />
            </div>
            <div style={{ padding: 32, borderRadius: 4, background: wc.greyLight, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: wc.black }}>{name(mc)}</h2>
                <Eyebrow tone="yellow">{mc.cycle[lang]}</Eyebrow>
              </div>
              {mc.desc[lang].map((p) => <p key={p} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{p}</p>)}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.blue }}>{m.standard}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {mc.eq[lang].map((e) => <li key={e} style={{ display: "flex", gap: 10, alignItems: "baseline", fontSize: 16, lineHeight: "24px", color: wc.black }}><span style={{ width: 6, height: 6, flexShrink: 0, borderRadius: 3, background: wc.blue, transform: "translateY(-2px)" }}></span>{e}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 6, padding: 32, borderRadius: 4, background: wc.black, color: wc.white }}>
            <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.yellow, marginBottom: 16 }}>{m.specs} · {name(mc)}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", columnGap: 48 }}>
              {labels.map((l, i) =>
              <div key={l} style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "14px 0", borderBottom: "1px solid rgba(230,228,223,0.2)", fontSize: 16, lineHeight: "24px" }}>
                  <span style={{ color: "rgba(245,245,245,0.7)" }}>{l}</span>
                  <span style={{ textAlign: "right", fontWeight: 500 }}>{mc.specs[lang][i]}</span>
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: 96, display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>{m.examples}</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
              {[C.IMG.examples1, C.IMG.examples2].map((src) => <div key={src} style={{ height: 480, borderRadius: 4, background: `url("${src}") 50% 50% / cover no-repeat` }}></div>)}
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>);

}

function ContactsPage() {
  return <ContactSection first />;
}

function UpdatePage() {
  const { t } = useL();
  const u = t.update;
  return (
    <React.Fragment>
      <PageHero title={u.h1} image={C.IMG.heroPoster} minHeight={560}>
        <div style={{ marginTop: 24, maxWidth: 720, display: "flex", flexDirection: "column", gap: 8 }}>
          {u.p.map((p) => <p key={p} style={{ margin: 0, fontSize: 20, lineHeight: "26px", color: wc.black }}>{p}</p>)}
        </div>
      </PageHero>
      <section style={{ padding: "96px 0", background: wc.white }}>
        <Container>
          <div style={{ maxWidth: 896, margin: "0 auto", padding: 48, borderRadius: 4, background: wc.pure, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: wc.black, textTransform: "uppercase" }}>{u.helpTitle}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark, maxWidth: 560 }}>{u.helpText}</p>
            <a href={C.CONTACT.tel} style={{ marginTop: 8, color: wc.blue, textDecoration: "none", fontSize: 32, lineHeight: "38.4px" }}>{C.CONTACT.phone}</a>
            <a href={"mailto:" + C.CONTACT.email} style={{ color: wc.blue, textDecoration: "none", fontSize: 20, lineHeight: "26px" }}>{C.CONTACT.email}</a>
          </div>
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>);

}

Object.assign(window, { AboutPage, PartnersPage, ProductsPage, MachinesPage, ContactsPage, UpdatePage });