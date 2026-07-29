import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Archive,
  BadgeCheck,
  Building2,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Clock3,
  Crosshair,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  History,
  KeyRound,
  Landmark,
  Layers3,
  ListChecks,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Network,
  Paperclip,
  Plane,
  Radio,
  Scale,
  ShieldCheck,
  Ship,
  Users,
  UserRound,
  Workflow,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Droneza Log",
    id: "log",
    description: "Structured incident capture and one operational timeline.",
    icon: FileText,
  },
  {
    name: "Droneza Risk",
    id: "risk",
    description: "Contextual assessment, ownership, and authorized response.",
    icon: Scale,
  },
  {
    name: "Droneza Evidence",
    id: "evidence",
    description: "Provenance, custody, retention, and controlled export.",
    icon: Fingerprint,
  },
];

const sectors = [
  { name: "Airports", icon: Plane, detail: "Coordinate operations, safety, security, and external stakeholders." },
  { name: "Ports", icon: Ship, detail: "Connect aerial observations to assets, vessels, and restricted operations." },
  { name: "Critical sites", icon: Building2, detail: "Document physical-security incidents and potential service impact." },
  { name: "Events", icon: CalendarDays, detail: "Turn high-volume reports into one controlled event-command record." },
  { name: "Municipalities", icon: Landmark, detail: "Coordinate departments while preserving privacy and accountability." },
];

const timeline = [
  ["21:15:16", "Field report received", "Observer near Gate B17 · direction west", "Web", "L. Dijkstra"],
  ["21:15:42", "Radio transmission", "“Possible object north of the apron.”", "Radio", "A. Martin"],
  ["21:15:58", "Camera clip captured", "Terminal 2 · North Apron", "Camera", "System"],
  ["21:16:08", "Incident assessed", "Contextual risk: Medium", "Review", "A. Martin"],
  ["21:16:21", "Response plan issued", "Monitor, coordinate, preserve originals", "Decision", "M. Rossi"],
];

const evidenceEvents = [
  ["Evidence added", "28 Jul 2026 · 21:16 UTC", "A. Martin", "Operations analyst"],
  ["Handover", "28 Jul 2026 · 21:22 UTC", "J. Verhoeven", "Duty supervisor"],
  ["Reviewed", "28 Jul 2026 · 21:28 UTC", "L. Dijkstra", "Legal advisor"],
  ["Sealed", "28 Jul 2026 · 21:35 UTC", "M. Rossi", "Authorised officer"],
];

const faqs = [
  [
    "Does Droneza detect drones?",
    "No. Droneza begins when a person, camera operator, patrol, control room, or authorised external system reports a possible drone. It structures the operational response and evidence trail.",
  ],
  [
    "Can Droneza decide whether a drone is hostile?",
    "No. Droneza keeps observation confidence separate from potential consequence and intent. Qualified people remain responsible for decisions and authorised actions.",
  ],
  [
    "Does Droneza replace official reporting systems?",
    "No. Droneza prepares and preserves structured incident information. External reporting routes, thresholds, and authorities remain customer- and jurisdiction-specific.",
  ],
  [
    "Is the incident shown here real?",
    "No. Every name, site, timestamp, file, and outcome on this website is synthetic and exists only to demonstrate the workflow.",
  ],
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="/" aria-label="Droneza home">
      <img src="/assets/droneza-lockup-trim.png" alt="Droneza" />
    </a>
  );
}

function ArrowLink({ href, children, download }) {
  return (
    <a className="text-link" href={href} download={download}>
      <span>{children}</span>
      {download ? <Download size={15} /> : <ArrowRight size={15} />}
    </a>
  );
}

function SimulationLabel({ dark = false }) {
  return (
    <p className={`simulation-label ${dark ? "simulation-label--dark" : ""}`}>
      Simulated case — no real organization or incident
    </p>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dark = window.location.pathname === "/security";

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <Logo light={dark} />
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Main navigation">
        <div className="nav-dropdown">
          <button type="button" onClick={() => toggleDropdown("product")} aria-expanded={openDropdown === "product"}>
            Product <ChevronDown size={14} />
          </button>
          <div className={`dropdown-panel ${openDropdown === "product" ? "dropdown-panel--open" : ""}`}>
            <p className="eyebrow">One incident workflow</p>
            {products.map(({ name, id, description, icon: Icon }) => (
              <a key={name} href={`/product/${id}`} onClick={closeAll}>
                <Icon size={18} />
                <span>
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="nav-dropdown">
          <button type="button" onClick={() => toggleDropdown("solutions")} aria-expanded={openDropdown === "solutions"}>
            Solutions <ChevronDown size={14} />
          </button>
          <div className={`dropdown-panel dropdown-panel--compact ${openDropdown === "solutions" ? "dropdown-panel--open" : ""}`}>
            {sectors.map(({ name, icon: Icon }) => (
              <a key={name} href={`/solutions#${name.toLowerCase().replaceAll(" ", "-")}`} onClick={closeAll}>
                <Icon size={17} />
                <strong>{name}</strong>
              </a>
            ))}
          </div>
        </div>
        <a href="/security" onClick={closeAll}>Security</a>
        <a href="/company" onClick={closeAll}>Company</a>
      </nav>
      <div className="header-actions">
        <a className="sign-in" href="/sign-in">Sign in</a>
        <a className="button button--primary button--small" href="/request-demo">
          Review a scenario <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}

function IncidentBackdrop() {
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    query.addEventListener?.("change", updatePreference);
    return () => query.removeEventListener?.("change", updatePreference);
  }, []);

  if (reduceMotion) {
    return (
      <img
        className="incident-entry__backdrop"
        src="/assets/incident-thread-airport-master.png"
        alt="Synthetic blue-hour airport perimeter used to illustrate an unverified observation"
      />
    );
  }

  return (
    <video
      className="incident-entry__backdrop"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      preload="auto"
      poster="/assets/incident-thread-airport-master.png"
      aria-hidden="true"
    >
      <source src="/assets/incident-thread-airport-loop.mp4" type="video/mp4" />
    </video>
  );
}

function IncidentEntry() {
  const enterSite = () => {
    const target = document.querySelector(".home-site");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="incident-entry" aria-labelledby="incident-entry-title">
      <div className="incident-entry__sticky">
        <IncidentBackdrop />
        <div className="incident-entry__scrim" aria-hidden="true" />
        <div className="incident-entry__topbar">
          <Logo light />
          <button className="incident-entry__skip" type="button" onClick={enterSite}>
            Skip intro
          </button>
        </div>

        <div className="incident-entry__content">
          <div className="incident-entry__copy">
            <p className="eyebrow">Incident thread · workflow begins</p>
            <h1 id="incident-entry-title">
              A sighting is not a track.
              <em>A response still needs a record.</em>
            </h1>
            <p>
              Drone incident workflow for structured reports, human-governed decisions,
              and controlled evidence hand-off.
            </p>
            <SimulationLabel dark />
          </div>

          <div className="incident-entry__events" aria-label="Illustrative incident thread">
            <div className="incident-entry__thread" aria-hidden="true" />
            <article>
              <span>Source</span>
              <strong>Pilot report</strong>
              <time>21:14:08</time>
              <p>Pilot report received</p>
              <small>Unverified observation</small>
              <CircleDot aria-hidden="true" />
            </article>
            <article>
              <span>Source</span>
              <strong>Security call</strong>
              <time>21:15:36</time>
              <p>Security call logged</p>
              <small>Source preserved</small>
              <CircleDot aria-hidden="true" />
            </article>
            <article>
              <span>Source</span>
              <strong>Duty manager</strong>
              <time>21:16:21</time>
              <p>Decision recorded</p>
              <small>Human authority</small>
              <CircleDot aria-hidden="true" />
            </article>
          </div>
        </div>

        <div className="incident-entry__boundary">
          <span>Droneza does not detect, identify, track, classify, or mitigate drones.</span>
          <button type="button" onClick={enterSite}>
            <ChevronDown aria-hidden="true" />
            Scroll to follow the incident
          </button>
        </div>
        <Crosshair className="incident-entry__registration" aria-hidden="true" strokeWidth={1} />
        <div className="incident-entry__paper-wipe" aria-hidden="true" />
      </div>
    </section>
  );
}

function Hero({ onDemo }) {
  return (
    <section className="hero section-pad" id="top">
      <Crosshair className="registration-mark registration-mark--one" aria-hidden="true" strokeWidth={1} />
      <div className="hero-copy reveal">
        <p className="eyebrow">Forensic ledger · incident workflow</p>
        <h1>A drone sighting is only the <em>beginning.</em></h1>
        <p className="hero-intro">From uncertain observation to coordinated response and evidence-ready closure.</p>
        <div className="hero-actions">
          <button className="button button--primary" type="button" onClick={onDemo}>
            Review a scenario <ArrowRight size={17} />
          </button>
          <a className="button-link" href="#problem">
            See how it works <span aria-hidden="true">＋</span>
          </a>
        </div>
      </div>
      <figure className="observation-card reveal">
        <figcaption>
          <span>Observation fragment</span>
          <strong>28 Jul 2026 · 21:46 UTC</strong>
          <small>Approx. direction 292° NNW</small>
        </figcaption>
        <div className="observation-frame">
          <img src="/assets/observation-still.png" alt="Ambiguous synthetic observation over a fictional site" />
          <span className="focus-bracket" aria-hidden="true">[ · ]</span>
        </div>
        <p>Unverified</p>
      </figure>
      <SimulationLabel />
    </section>
  );
}

function ReportFragment({ className, icon: Icon, label, children, time }) {
  return (
    <article className={`report-fragment ${className} story-fragment`}>
      <header>
        <Icon size={16} />
        <span>{label}</span>
      </header>
      <p>{children}</p>
      <time>{time}</time>
    </article>
  );
}

function Problem() {
  return (
    <section className="problem section-pad story-section" id="problem">
      <div className="section-copy reveal">
        <p className="chapter">01 · Unified from uncertainty</p>
        <h2>
          The risk is not only what is in the sky.
          <em> It is what happens when every team sees a different incident.</em>
        </h2>
        <p>Disconnected reports create delay, confusion, and gaps that matter.</p>
      </div>
      <div className="fragment-field" aria-label="Disconnected incident reports">
        <ReportFragment className="fragment--radio" icon={Radio} label="Radio transcript" time="21:15:42 UTC">
          “…possible object north of the apron.”
        </ReportFragment>
        <ReportFragment className="fragment--phone" icon={Eye} label="Phone report" time="21:15:36 UTC">
          Small object, hovering then moving west.
        </ReportFragment>
        <ReportFragment className="fragment--field" icon={UserRound} label="Field report" time="21:15:16 UTC">
          Observer near Gate B17. Direction west, above terminal.
        </ReportFragment>
        <ReportFragment className="fragment--camera" icon={Camera} label="Camera clip" time="21:15:58 UTC">
          <img src="/assets/observation-still.png" alt="" />
        </ReportFragment>
      </div>
    </section>
  );
}

function TimelineUI() {
  return (
    <div className="app-surface reveal">
      <div className="app-rail" aria-hidden="true">
        <img src="/assets/droneza-mark-square.png" alt="" />
        <FileText size={17} />
        <MapPin size={17} />
        <Clock3 size={17} />
        <Paperclip size={17} />
        <ShieldCheck size={17} />
      </div>
      <div className="app-main">
        <header className="app-header">
          <div>
            <SimulationLabel />
            <h3>INC-2026-07-28-017</h3>
          </div>
          <a href="#risk">View full log <ArrowRight size={14} /></a>
        </header>
        <nav className="app-tabs" aria-label="Incident views">
          <span>Overview</span>
          <span className="active">Timeline</span>
          <span>Evidence</span>
          <span>Risk</span>
          <span>Response</span>
        </nav>
        <div className="timeline-table">
          {timeline.map(([time, title, detail, source, owner], index) => (
            <div className="timeline-row" key={time}>
              <span className={`timeline-dot ${index === timeline.length - 1 ? "timeline-dot--active" : ""}`} />
              <time>{time}</time>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <span>{source}</span>
              <span>{owner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogSection() {
  return (
    <section className="log-section section-pad story-section" id="log">
      <div className="section-copy reveal">
        <p className="chapter">02 · Droneza Log</p>
        <h2>One incident.<br />One timeline.<br />Everyone in sync.</h2>
        <p>Droneza creates a common record, assigns ownership, and aligns teams from the first report to the last action.</p>
        <ArrowLink href="#risk">Explore the log</ArrowLink>
      </div>
      <TimelineUI />
    </section>
  );
}

function RiskSection() {
  return (
    <section className="risk-section story-section" id="risk">
      <div className="risk-inner">
        <div className="risk-column reveal">
          <p className="chapter">03 · Droneza Risk · Humans decide</p>
          <h2>Observation confidence</h2>
          <p>We assess what we know, what we do not, and how reliable the sources are.</p>
          <div className="risk-score">
            <span>Confidence</span>
            <strong>Medium <small>62%</small></strong>
            <div className="meter"><span style={{ width: "62%" }} /></div>
          </div>
          <dl>
            <div><dt>Airport status</dt><dd>Normal operations</dd></div>
            <div><dt>Airspace status</dt><dd>Controlled</dd></div>
            <div><dt>Weather</dt><dd>VMC</dd></div>
            <div><dt>Relevant notices</dt><dd>None</dd></div>
          </dl>
        </div>
        <div className="risk-column reveal">
          <h2>Potential consequence</h2>
          <p>We consider impact to people, operations, and protected assets.</p>
          <div className="consequence">
            <span>Consequence</span>
            <strong>Moderate</strong>
            <div className="severity-dots" aria-label="Three of five consequence level">
              {[0, 1, 2, 3, 4].map((value) => <i className={value < 3 ? "active" : ""} key={value} />)}
              <small>3 / 5</small>
            </div>
          </div>
          <p className="fine-print">Confidence reflects available information—not intent or identity.</p>
        </div>
        <div className="decision-panel reveal">
          <p className="chapter">Decision & authorisation</p>
          <h2>People authorise the response.</h2>
          <p>Droneza records who decided, what they knew, and why.</p>
          <dl>
            <div><dt><UserRound size={16} /> Decision owner</dt><dd>J. Verhoeven<br /><small>Duty supervisor</small></dd></div>
            <div><dt><Clock3 size={16} /> Decision time</dt><dd>28 Jul 2026 · 21:16</dd></div>
            <div><dt><Scale size={16} /> Decision</dt><dd>Monitor & coordinate</dd></div>
            <div><dt><ClipboardCheck size={16} /> Rationale</dt><dd>Medium confidence. Moderate consequence.</dd></div>
            <div><dt><ShieldCheck size={16} /> Authorised action</dt><dd>Increase vigilance. Notify airside ops.</dd></div>
          </dl>
          <span className="status-pill">In progress</span>
        </div>
      </div>
      <SimulationLabel dark />
    </section>
  );
}

function EvidenceSection() {
  return (
    <section className="evidence-section section-pad story-section" id="evidence">
      <div className="section-copy reveal">
        <p className="chapter">04 · Droneza Evidence</p>
        <h2>Evidence is captured.<br />Custody is unbroken.<br />The record is ready.</h2>
        <p>Every handoff, file, and decision is locked into a verifiable chain of custody.</p>
        <ArrowLink href="#sealed">View evidence</ArrowLink>
      </div>
      <div className="custody-list reveal">
        <p className="micro-heading">Chain of custody</p>
        {evidenceEvents.map(([event, time, name, role], index) => (
          <article key={event} className={index === evidenceEvents.length - 1 ? "sealed" : ""}>
            <span className="custody-dot" />
            <div><strong>{event}</strong><time>{time}</time></div>
            <div><strong>{name}</strong><small>{role}</small></div>
          </article>
        ))}
      </div>
      <div className="manifest reveal">
        <p className="micro-heading">Evidence manifest</p>
        {[
          ["IMG_2718.MP4", "Video", "sha256: 7b1ac…3b08"],
          ["audio_2122.wav", "Audio", "sha256: 2bf1e…9f01"],
          ["field_report.pdf", "Document", "sha256: 70ba2…c6e3"],
        ].map(([file, type, hash]) => (
          <div key={file}><FileCheck2 size={17} /><strong>{file}</strong><span>{type}</span><code>{hash}</code></div>
        ))}
        <div className="record-hash"><Fingerprint size={18} /><span><strong>Record hash (SHA-256)</strong><code>cbe3f9e65c002a8f…b7ec6c01</code></span></div>
      </div>
    </section>
  );
}

function SealedRecord({ onDemo }) {
  return (
    <section className="sealed-section section-pad story-section" id="sealed">
      <div className="section-copy reveal">
        <p className="chapter">05 · Sealed record</p>
        <h2>A complete record.<br />A clear chain of custody.<br /><em>Accountable outcomes.</em></h2>
        <p>Ready when it matters—for review, investigation, audit, and operational learning.</p>
      </div>
      <article className="record-seal reveal">
        <span>INC-2026-07-28-017</span>
        <strong>[ 00018472 ]</strong>
        <small>Evidence-ready incident record</small>
        <i>Sealed</i>
      </article>
      <div className="record-summary reveal">
        <div><span>Owner</span><strong>Airport operations</strong></div>
        <div><span>Status</span><strong>Sealed</strong></div>
        <div><span>Sealed by</span><strong>M. Rossi · Authorised officer</strong></div>
        <div><span>Record ID</span><strong>EVD-00018472</strong></div>
        <ArrowLink href="#evidence">View full record</ArrowLink>
      </div>
      <div className="closing-statement reveal">
        <h2>One incident.<br />One decision trail.<br /><em>One defensible record.</em></h2>
        <div>
          <button className="button button--primary" type="button" onClick={onDemo}>Review a scenario <ArrowRight size={17} /></button>
          <ArrowLink href="/assets/droneza-readiness-checklist.md" download>Download readiness checklist</ArrowLink>
        </div>
      </div>
      <SimulationLabel />
    </section>
  );
}

function Solutions() {
  const [active, setActive] = useState(0);
  const ActiveIcon = sectors[active].icon;

  return (
    <section className="solutions section-pad" id="solutions">
      <header className="editorial-heading reveal">
        <p className="eyebrow">Operational contexts</p>
        <h2>One workflow.<br />Different consequences.</h2>
      </header>
      <div className="sector-index reveal" role="tablist" aria-label="Sector use cases">
        {sectors.map((sector, index) => (
          <button
            className={active === index ? "active" : ""}
            key={sector.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>{sector.name}<ArrowUpRight size={18} />
          </button>
        ))}
      </div>
      <div className="sector-detail reveal" role="tabpanel">
        <ActiveIcon size={28} />
        <p>{sectors[active].detail}</p>
        <a href="/request-demo">Explore {sectors[active].name.toLowerCase()} <ArrowRight size={15} /></a>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    ["Human authority", "Droneza records decisions. It does not grant authority or automate interdiction.", UserRound],
    ["Evidence integrity", "Originals, hashes, provenance, custody events, and controlled export.", Fingerprint],
    ["Privacy controls", "Role-based access, policy-led retention, redaction, and legal hold.", LockKeyhole],
    ["Clear boundaries", "Complements national coordination and reporting systems—it does not replace them.", ShieldCheck],
  ];

  return (
    <section className="trust section-pad" id="trust">
      <header className="editorial-heading reveal">
        <p className="eyebrow">Security & trust</p>
        <h2>Sensitive incidents demand explainable controls.</h2>
      </header>
      <div className="trust-list">
        {items.map(([title, description, Icon], index) => (
          <article className="reveal" key={title}>
            <span>0{index + 1}</span>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Company() {
  return (
    <section className="company section-pad" id="company">
      <div className="company-statement reveal">
        <p className="eyebrow">Why Droneza exists</p>
        <h2>Preparedness should not begin after the incident.</h2>
      </div>
      <div className="company-copy reveal">
        <p>Droneza is a Poland/EU-oriented product concept for teams responsible for critical places and public operations.</p>
        <p>We are designing the process layer between a reported sighting and a defensible operational record—with people, authority, privacy, and evidence integrity kept visible at every step.</p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section-pad" id="faq">
      <header className="editorial-heading reveal">
        <p className="eyebrow">Questions before the scenario</p>
        <h2>Clear boundaries.<br />Fewer assumptions.</h2>
      </header>
      <div className="faq-list reveal">
        {faqs.map(([question, answer], index) => (
          <article className={`reveal ${open === index ? "open" : ""}`} key={question}>
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
              <span>0{index + 1}</span>
              <strong>{question}</strong>
              <span aria-hidden="true">{open === index ? "−" : "+"}</span>
            </button>
            <div><p>{answer}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sector, setSector] = useState("Airport");
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.classList.add("modal-open");
    window.setTimeout(() => dialogRef.current?.focus(), 0);
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" tabIndex={-1} ref={dialogRef}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close dialog"><X /></button>
        {!submitted ? (
          <>
            <p className="eyebrow">Synthetic incident walkthrough</p>
            <h2 id="demo-title">Review your scenario through Droneza.</h2>
            <p>Tell us the operating context. We will prepare a fictional workflow walkthrough—no sensitive incident information required.</p>
            <form onSubmit={handleSubmit}>
              <label>
                Work email
                <input type="email" name="email" placeholder="name@organisation.eu" required />
              </label>
              <label>
                Organisation
                <input type="text" name="organisation" placeholder="Organisation name" required />
              </label>
              <label>
                Operating context
                <select value={sector} onChange={(event) => setSector(event.target.value)}>
                  <option>Airport</option>
                  <option>Port</option>
                  <option>Critical infrastructure</option>
                  <option>Event</option>
                  <option>Municipality</option>
                </select>
              </label>
              <label>
                Primary workflow gap
                <textarea name="gap" placeholder="For example: reports arrive through radio and email with no shared timeline." rows="4" />
              </label>
              <button className="button button--primary" type="submit">Prepare walkthrough <ArrowRight size={17} /></button>
            </form>
            <small>Demo concept only. Do not submit real incident, personal, or sensitive site data.</small>
          </>
        ) : (
          <div className="success-state">
            <CheckCircle2 size={38} />
            <p className="eyebrow">Scenario request prepared</p>
            <h2>We have the operating context.</h2>
            <p>A tailored synthetic {sector.toLowerCase()} incident walkthrough would be the next step. No real incident data was transmitted in this prototype.</p>
            <button className="button button--primary" type="button" onClick={onClose}>Return to the story <Check size={17} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

const productPages = {
  log: {
    chapter: "Product 01 · Droneza Log",
    title: <>Turn every report into <em>one shared incident.</em></>,
    intro: "Capture sightings from people and authorised systems, reconcile conflicting fragments, and give every team one operational timeline.",
    promise: "A common record before assumptions harden.",
    stages: [
      ["01", "Capture", "Bring radio calls, phone reports, field notes, files, and system events into one incident."],
      ["02", "Unify", "Preserve source context while normalising time, location, ownership, and status."],
      ["03", "Coordinate", "Assign the next action and keep every team aligned to the same chronology."],
    ],
    features: [
      ["Multi-channel intake", "Structured manual reporting, authorised system inputs, attachments, and source provenance."],
      ["One operational timeline", "A chronological record that separates what was observed, assessed, decided, and done."],
      ["Ownership at every step", "Named roles, due actions, handovers, and escalation states remain visible."],
      ["Incident-ready export", "Prepare a coherent record for review, external reporting, and operational learning."],
    ],
  },
  risk: {
    chapter: "Product 02 · Droneza Risk",
    title: <>Make uncertainty visible <em>before people decide.</em></>,
    intro: "Separate observation confidence from potential consequence, bring operating context into view, and preserve the rationale behind authorised actions.",
    promise: "Decision support with human authority kept explicit.",
    stages: [
      ["01", "Assess", "Describe source reliability, confidence, operational context, and information gaps."],
      ["02", "Compare", "Consider potential consequence to people, assets, services, and protected operations."],
      ["03", "Authorise", "Record who decided, what they knew, why they acted, and which action was permitted."],
    ],
    features: [
      ["Confidence, not certainty", "Keep incomplete observations visible without turning them into unsupported identity or intent claims."],
      ["Contextual consequence", "Use customer-defined operating context to make potential impact legible."],
      ["Decision rationale", "Connect each authorised response to the information available at that moment."],
      ["Policy-led playbooks", "Guide qualified teams through agreed checks while leaving authority with people."],
    ],
  },
  evidence: {
    chapter: "Product 03 · Droneza Evidence",
    title: <>Preserve what happened—<em>and who handled it.</em></>,
    intro: "Maintain originals, provenance, custody events, review history, and controlled exports from the first file to the sealed incident record.",
    promise: "An evidence-ready record without losing operational context.",
    stages: [
      ["01", "Preserve", "Retain originals, file metadata, source provenance, and content fingerprints."],
      ["02", "Trace", "Record every handover, review, redaction, retention action, and legal hold."],
      ["03", "Seal", "Package the incident timeline, decisions, and evidence manifest into a controlled record."],
    ],
    features: [
      ["Originals stay intact", "Evidence references remain linked to source files and immutable content hashes."],
      ["Chain of custody", "Every access, handover, review, and export becomes part of the audit trail."],
      ["Privacy-aware handling", "Role-based visibility, redaction, retention, and legal-hold controls support policy."],
      ["Controlled disclosure", "Prepare scoped evidence packages without exposing the entire operational record."],
    ],
  },
};

function PageHero({ chapter, title, intro, promise, dark = false }) {
  return (
    <section className={`subpage-hero section-pad ${dark ? "subpage-hero--dark" : ""}`}>
      <Crosshair className="registration-mark" aria-hidden="true" strokeWidth={1} />
      <div className="subpage-hero__copy reveal">
        <p className="chapter">{chapter}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <aside className="subpage-hero__aside reveal">
        <span>Operational promise</span>
        <strong>{promise}</strong>
        <a className="text-link" href="/request-demo">Review a scenario <ArrowRight size={15} /></a>
      </aside>
    </section>
  );
}

function ProductArtifact({ type }) {
  if (type === "log") {
    return <div className="product-artifact product-artifact--log reveal"><TimelineUI /></div>;
  }

  if (type === "risk") {
    return (
      <div className="product-artifact product-artifact--risk reveal">
        <div>
          <span>Observation confidence</span>
          <strong>Medium <small>62%</small></strong>
          <i><b style={{ width: "62%" }} /></i>
          <p>Sources agree on direction. Identity and intent remain unverified.</p>
        </div>
        <div>
          <span>Potential consequence</span>
          <strong>Moderate <small>3 / 5</small></strong>
          <ul><li>People</li><li>Airside operations</li><li>Protected assets</li></ul>
        </div>
        <div>
          <span>Human decision</span>
          <strong>Monitor & coordinate</strong>
          <dl><dt>Owner</dt><dd>J. Verhoeven</dd><dt>Status</dt><dd>In progress</dd><dt>Authority</dt><dd>Duty supervisor</dd></dl>
        </div>
        <SimulationLabel dark />
      </div>
    );
  }

  return (
    <div className="product-artifact product-artifact--evidence reveal">
      <div>
        <p className="micro-heading">Chain of custody</p>
        {evidenceEvents.map(([event, time, person]) => (
          <article key={event}><span /><strong>{event}</strong><time>{time}</time><b>{person}</b></article>
        ))}
      </div>
      <div>
        <p className="micro-heading">Evidence manifest</p>
        {[
          ["IMG_2718.MP4", "Video", "7b1ac…3b08"],
          ["audio_2122.wav", "Audio", "2bf1e…9f01"],
          ["field_report.pdf", "Document", "70ba2…c6e3"],
        ].map(([file, kind, hash]) => (
          <article key={file}><FileCheck2 size={17} /><strong>{file}</strong><span>{kind}</span><code>{hash}</code></article>
        ))}
        <div className="record-seal"><Fingerprint size={24} /><span>Record hash</span><code>cbe3f9e65c00…b7ec6c01</code></div>
      </div>
    </div>
  );
}

function ProductPage({ type }) {
  const page = productPages[type];
  return (
    <>
      <PageHero {...page} />
      <section className="stage-ledger section-pad">
        <header className="reveal">
          <p className="chapter">How the workflow moves</p>
          <h2>From the first signal to an accountable outcome.</h2>
        </header>
        <div>
          {page.stages.map(([number, name, copy]) => (
            <article className="reveal" key={name}><span>{number}</span><h3>{name}</h3><p>{copy}</p><ArrowRight size={18} /></article>
          ))}
        </div>
      </section>
      <section className="artifact-section section-pad">
        <div className="artifact-intro reveal">
          <p className="chapter">Simulated product view</p>
          <h2>Operational clarity, kept in the record.</h2>
          <p>Every screen shown uses synthetic information and demonstrates workflow only.</p>
        </div>
        <ProductArtifact type={type} />
      </section>
      <section className="feature-ledger section-pad">
        <header className="reveal"><p className="chapter">Product capabilities</p><h2>Built as a ledger, not another inbox.</h2></header>
        <div>
          {page.features.map(([name, copy], index) => (
            <article className="reveal" key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <PageClosing eyebrow="See the workflow in context" title="Bring a fictional incident. Leave with a clearer process." />
    </>
  );
}

function PageClosing({ eyebrow, title }) {
  return (
    <section className="page-closing section-pad reveal">
      <div><p className="chapter">{eyebrow}</p><h2>{title}</h2></div>
      <a className="button button--primary" href="/request-demo">Review a scenario <ArrowRight size={17} /></a>
    </section>
  );
}

function SolutionsPage() {
  const contextCopy = [
    ["Airports", "Unify sightings from airside operations, security, control rooms, and authorised systems without confusing observation with identity.", "Operations · Safety · Security · Legal"],
    ["Ports", "Relate aerial observations to vessels, restricted zones, cargo activity, and continuity decisions in one incident record.", "Port control · Security · Terminal operations"],
    ["Critical sites", "Coordinate physical security and service owners while preserving information boundaries around sensitive infrastructure.", "Security · Control room · Service owners"],
    ["Events", "Turn high-volume public and staff reports into one controlled event-command timeline with named ownership.", "Event control · Safety · Venue operations"],
    ["Municipalities", "Help departments coordinate, document decisions, and preserve privacy when responsibility crosses organisational lines.", "Public safety · Legal · Communications"],
  ];
  return (
    <>
      <PageHero
        chapter="Solutions · Operational contexts"
        title={<>Different places. <em>One accountable response layer.</em></>}
        intro="Droneza gives teams a common workflow while leaving authority, reporting thresholds, and response policy with each organisation."
        promise="Adapt the workflow to the site—keep the record consistent."
      />
      <section className="sector-ledger section-pad">
        <aside className="reveal"><p className="chapter">Choose a context</p><h2>The consequences change. The need for coordination does not.</h2></aside>
        <div>
          {contextCopy.map(([name, copy, teams], index) => {
            const Icon = sectors[index].icon;
            const slug = name.toLowerCase().replaceAll(" ", "-");
            return (
              <article className="reveal" id={slug} key={name}>
                <header><span>{String(index + 1).padStart(2, "0")}</span><Icon size={26} /><h3>{name}</h3></header>
                <p>{copy}</p>
                <footer><small>Typical participants</small><strong>{teams}</strong><a href="/request-demo">Review this context <ArrowUpRight size={16} /></a></footer>
              </article>
            );
          })}
        </div>
      </section>
      <PageClosing eyebrow="A workflow shaped around responsibility" title="Map Droneza to the way your teams already operate." />
    </>
  );
}

function SecurityPage() {
  const controls = [
    [KeyRound, "Role-based access", "Define who can see incidents, evidence, identity, decisions, and exports."],
    [Archive, "Retention & legal hold", "Apply policy-led retention while preserving selected records when review requires it."],
    [History, "Complete audit trail", "Record changes, access, handovers, approvals, and controlled disclosures."],
    [BadgeCheck, "Human authority", "Keep recommendations, decisions, and authorised actions visibly separate."],
  ];
  return (
    <>
      <PageHero
        chapter="Security & trust"
        title={<>Sensitive incidents demand <em>explainable controls.</em></>}
        intro="Droneza is designed around least privilege, evidence integrity, privacy-aware handling, and visible human responsibility."
        promise="Control access without breaking the chain of accountability."
        dark
      />
      <section className="control-ledger section-pad">
        <header className="reveal"><p className="chapter">Control model</p><h2>Security is part of the incident story.</h2></header>
        <div>
          {controls.map(([Icon, name, copy], index) => (
            <article className="reveal" key={name}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={25} /><h3>{name}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="trust-flow section-pad">
        <p className="chapter reveal">A governed record</p>
        <div>
          {[
            [Workflow, "Incident created"],
            [KeyRound, "Access controlled"],
            [Fingerprint, "Originals preserved"],
            [Users, "Decision recorded"],
            [LockKeyhole, "Record sealed"],
          ].map(([Icon, label], index) => <article className="reveal" key={label}><span>{index + 1}</span><Icon size={23} /><strong>{label}</strong></article>)}
        </div>
      </section>
      <section className="boundary-statement section-pad reveal">
        <ShieldCheck size={36} />
        <h2>Droneza structures workflow and evidence. It does not detect, identify, classify intent, or authorise interdiction.</h2>
      </section>
      <PageClosing eyebrow="Security review" title="Bring your policy questions into a synthetic walkthrough." />
    </>
  );
}

function CompanyPage() {
  return (
    <>
      <PageHero
        chapter="Company · Warsaw, Poland"
        title={<>Preparedness should not begin <em>after the incident.</em></>}
        intro="Droneza is a Poland/EU-oriented product startup building the process layer between a reported drone sighting and a defensible operational record."
        promise="Make critical-incident coordination calmer, clearer, and accountable."
      />
      <section className="company-story section-pad">
        <div className="reveal"><p className="chapter">Why Droneza</p><h2>Critical teams already have procedures. The gap appears between them.</h2></div>
        <div className="reveal">
          <p>Reports arrive through radio, phone, email, patrols, control rooms, and authorised systems. Each fragment may be useful, but without a shared chronology, teams can act on different versions of the same incident.</p>
          <p>Droneza is being designed to keep the observation, operating context, human decision, authorised action, and evidence trail connected—without pretending software replaces qualified judgement or public authority.</p>
        </div>
      </section>
      <section className="principles-ledger section-pad">
        {[
          ["01", "People remain responsible", "Software can organise context. It cannot inherit operational or legal authority."],
          ["02", "Uncertainty stays visible", "A report is not an identification, and confidence is not intent."],
          ["03", "Evidence keeps its history", "Provenance and custody are part of the record, not an afterthought."],
          ["04", "Boundaries build trust", "Droneza complements customer procedures and official systems; it does not replace them."],
        ].map(([number, title, copy]) => <article className="reveal" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>
      <PageClosing eyebrow="Work with Droneza" title="Help shape a workflow grounded in real operational responsibility." />
    </>
  );
}

function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sector, setSector] = useState("Airport");
  return (
    <section className="demo-page section-pad">
      <div className="demo-page__story reveal">
        <p className="chapter">Request a synthetic walkthrough</p>
        <h1>Bring the workflow gap. <em>Keep sensitive details out.</em></h1>
        <p>We will frame a fictional incident around your operating context and walk through Log, Risk, and Evidence from first report to sealed record.</p>
        <ol>
          <li><span>01</span><strong>Describe the operating context</strong></li>
          <li><span>02</span><strong>Choose the coordination gap</strong></li>
          <li><span>03</span><strong>Review a synthetic scenario</strong></li>
        </ol>
        <SimulationLabel />
      </div>
      <div className="demo-page__form reveal">
        {!submitted ? (
          <>
            <p className="micro-heading">Scenario request</p>
            <h2>Prepare the walkthrough.</h2>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <label>Work email<input type="email" placeholder="name@organisation.eu" required /></label>
              <label>Organisation<input type="text" placeholder="Organisation name" required /></label>
              <label>Operating context<select value={sector} onChange={(event) => setSector(event.target.value)}>{["Airport", "Port", "Critical infrastructure", "Event", "Municipality"].map((item) => <option key={item}>{item}</option>)}</select></label>
              <label>Primary workflow gap<textarea rows="5" placeholder="For example: reports arrive through radio and email with no shared timeline." /></label>
              <label className="consent-line"><input type="checkbox" required /><span>I will not include real incident, personal, or sensitive site data.</span></label>
              <button className="button button--primary" type="submit">Prepare walkthrough <ArrowRight size={17} /></button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <CheckCircle2 size={42} />
            <p className="chapter">Scenario request prepared</p>
            <h2>The {sector.toLowerCase()} context is ready.</h2>
            <p>This prototype has prepared the success state only. No information was transmitted or stored.</p>
            <a className="button button--primary" href="/">Return to the homepage <ArrowRight size={17} /></a>
          </div>
        )}
      </div>
    </section>
  );
}

function SignInPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="signin-page">
      <div className="signin-page__context reveal">
        <Logo light />
        <div>
          <p className="chapter">Droneza workspace</p>
          <h1>Return to the incident record.</h1>
          <p>Access is limited to invited organisations and authorised users.</p>
        </div>
        <SimulationLabel dark />
      </div>
      <div className="signin-page__panel reveal">
        {!submitted ? (
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <p className="micro-heading">Secure access</p>
            <h2>Sign in to Droneza.</h2>
            <label>Work email<input type="email" placeholder="name@organisation.eu" required /></label>
            <label>Password<input type="password" placeholder="Enter your password" required /></label>
            <div className="signin-options"><label><input type="checkbox" /> Keep me signed in</label><a href="mailto:hello@droneza.io?subject=Droneza%20access%20help">Access help</a></div>
            <button className="button button--primary" type="submit">Continue securely <ArrowRight size={17} /></button>
            <p className="signin-note"><LockKeyhole size={15} /> Prototype interface—authentication is not connected.</p>
          </form>
        ) : (
          <div className="success-state">
            <Mail size={38} />
            <p className="chapter">Prototype sign-in</p>
            <h2>Workspace lookup prepared.</h2>
            <p>No account lookup or password transmission occurs in this demo.</p>
            <button className="button button--primary" type="button" onClick={() => setSubmitted(false)}>Return to sign in</button>
          </div>
        )}
      </div>
    </section>
  );
}

function LegalPage({ type }) {
  const privacy = type === "privacy";
  return (
    <section className="legal-page section-pad">
      <header className="reveal"><p className="chapter">Legal · Demo concept</p><h1>{privacy ? "Privacy notice" : "Terms of use"}</h1><p>Last updated 29 July 2026</p></header>
      <div className="reveal">
        <aside><strong>Important</strong><p>This website is a fictional product demonstration. It does not collect or transmit form submissions.</p></aside>
        <article>
          <h2>{privacy ? "How this prototype handles information" : "Using this prototype"}</h2>
          <p>{privacy ? "Interactive forms exist only to demonstrate interface states. Submitted values remain in the browser session and are not sent to Droneza or any external service." : "All company, customer, incident, person, site, file, and outcome details shown here are synthetic. Nothing on this site is operational, legal, safety, or security advice."}</p>
          <h2>{privacy ? "Sensitive information" : "Product boundaries"}</h2>
          <p>Do not enter real incident information, personal data, credentials, protected-site details, or other sensitive material into this prototype.</p>
          <h2>Contact</h2><p>Questions about this demo can be directed to <a href="mailto:hello@droneza.io">hello@droneza.io</a>.</p>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="sign-in">
      <div className="footer-lead">
        <Logo light />
        <p>Drone incident response workflow software for critical environments.</p>
        <a className="button button--light" href="/request-demo">Review a scenario <ArrowRight size={17} /></a>
      </div>
      <div className="footer-links">
        <div><strong>Product</strong>{products.map(({ name, id }) => <a href={`/product/${id}`} key={name}>{name}</a>)}</div>
        <div><strong>Solutions</strong>{sectors.map(({ name }) => <a href={`/solutions#${name.toLowerCase().replaceAll(" ", "-")}`} key={name}>{name}</a>)}</div>
        <div><strong>Company</strong><a href="/company">About</a><a href="/security">Security</a><a href="/#faq">FAQ</a></div>
        <div><strong>Legal</strong><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@droneza.io">hello@droneza.io</a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Droneza. Demo product concept.</span>
        <span>Warsaw, Poland · European Union</span>
        <SimulationLabel dark />
      </div>
    </footer>
  );
}

export function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isHome = path === "/";

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const qaMode = new URLSearchParams(window.location.search).has("qa");
    if (reduceMotion || qaMode) return undefined;

    const context = gsap.context(() => {
      const compactMotion = window.innerWidth <= 760;
      const rowSelector = [
        ".stage-ledger article",
        ".feature-ledger article",
        ".control-ledger article",
        ".sector-ledger article",
        ".principles-ledger article",
        ".trust-flow article",
        ".trust-list article",
      ].join(",");
      const surfaceSelector = [
        ".app-surface",
        ".product-artifact",
        ".demo-page__form",
        ".signin-page__panel",
        ".record-seal",
      ].join(",");

      const siteHeader = document.querySelector(".site-header");
      if (siteHeader) {
        gsap.fromTo(
          siteHeader,
          { autoAlpha: 0, y: -18 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity,visibility" },
        );
      }

      gsap.utils.toArray("main section").forEach((section) => {
        if (section.matches(".incident-entry, .hero, .subpage-hero, .signin-page")) return;
        gsap.fromTo(
          section,
          { y: compactMotion ? 20 : 34 },
          {
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: section, start: "top 92%", once: true },
          },
        );
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        const row = element.matches(rowSelector);
        const surface = element.matches(surfaceSelector);
        const siblingIndex = element.parentElement
          ? Array.from(element.parentElement.children).indexOf(element)
          : 0;
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            x: row && !compactMotion ? (siblingIndex % 2 === 0 ? -22 : 22) : 0,
            y: surface ? 54 : (compactMotion ? 28 : 42),
            scale: surface ? 0.985 : 1,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: surface ? 1.05 : 0.85,
            delay: row ? Math.min(Math.max(siblingIndex, 0) * 0.035, 0.14) : 0,
            ease: surface ? "power3.out" : "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray(".timeline-row, .custody-list article, .manifest > div, .record-summary > div").forEach((element) => {
        const siblingIndex = element.parentElement
          ? Array.from(element.parentElement.children).indexOf(element)
          : 0;
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: compactMotion ? 10 : 18 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.62,
            delay: Math.min(Math.max(siblingIndex, 0) * 0.055, 0.28),
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: element.parentElement || element, start: "top 87%", once: true },
          },
        );
      });

      gsap.utils.toArray(".risk-section, .trust, .trust-flow").forEach((section) => {
        gsap.fromTo(
          section,
          { clipPath: "inset(5% 0 5% 0)" },
          {
            clipPath: "inset(0% 0 0% 0)",
            duration: 1.05,
            ease: "power3.inOut",
            clearProps: "clipPath",
            scrollTrigger: { trigger: section, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray(".site-footer .footer-lead, .site-footer .footer-links > div, .site-footer .footer-bottom").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            delay: Math.min(index * 0.06, 0.24),
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: ".site-footer", start: "top 88%", once: true },
          },
        );
      });

      if (isHome) {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .fromTo(".incident-entry__topbar", { autoAlpha: 0, y: -18 }, { autoAlpha: 1, y: 0, duration: 0.7 })
          .fromTo(".incident-entry__copy > *", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.35")
          .fromTo(
            ".incident-entry__thread",
            { scaleX: compactMotion ? 1 : 0, scaleY: compactMotion ? 0 : 1 },
            { scaleX: 1, scaleY: 1, duration: 1.05, ease: "power2.inOut" },
            "-=0.45",
          )
          .fromTo(".incident-entry__events article", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.12 }, "-=0.75")
          .fromTo(".incident-entry__boundary, .incident-entry__registration", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7 }, "-=0.3");

        const entryScroll = gsap.timeline({
          scrollTrigger: {
            trigger: ".incident-entry",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
        entryScroll
          .to(".incident-entry__backdrop", { scale: 1.08, yPercent: -2, ease: "none" }, 0)
          .to(".incident-entry__copy", { autoAlpha: 0, y: -110, ease: "power2.in" }, 0.08)
          .to(".incident-entry__events article", { autoAlpha: 0, y: -70, stagger: 0.04, ease: "power2.in" }, 0.12)
          .to(".incident-entry__boundary", { autoAlpha: 0, y: -24, ease: "power2.in" }, 0.18)
          .to(
            ".incident-entry__thread",
            { rotate: compactMotion ? 0 : 90, scaleX: compactMotion ? 1 : 0.72, scaleY: compactMotion ? 0.72 : 1, ease: "power2.inOut" },
            0.42,
          )
          .fromTo(
            ".incident-entry__paper-wipe",
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", ease: "power3.inOut" },
            0.68,
          );

        gsap.fromTo(
          ".custody-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".story-shell",
              start: "top 28%",
              end: "bottom 68%",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray(".story-fragment").forEach((element, index) => {
          gsap.fromTo(
            element,
            { x: index % 2 === 0 ? -70 : 70, rotate: index % 2 === 0 ? -4 : 4, autoAlpha: 0 },
            {
              x: 0,
              rotate: 0,
              autoAlpha: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".fragment-field",
                start: "top 72%",
                end: "center 50%",
                scrub: 0.8,
              },
            },
          );
        });

        ScrollTrigger.create({
          trigger: ".risk-section",
          start: "top top",
          end: "+=460",
          pin: window.innerWidth > 900,
          pinSpacing: true,
        });
      }
    });

    return () => context.revert();
  }, [isHome]);

  let page;
  if (isHome) {
    page = (
      <>
        <div className="story-shell">
          <div className="custody-rail" aria-hidden="true"><span className="custody-progress" /></div>
          <Hero onDemo={() => setDemoOpen(true)} />
          <Problem />
          <LogSection />
          <RiskSection />
          <EvidenceSection />
          <SealedRecord onDemo={() => setDemoOpen(true)} />
        </div>
        <Solutions />
        <Trust />
        <Company />
        <FAQ />
      </>
    );
  } else if (path.startsWith("/product/") && productPages[path.split("/").pop()]) {
    page = <ProductPage type={path.split("/").pop()} />;
  } else if (path === "/solutions") {
    page = <SolutionsPage />;
  } else if (path === "/security") {
    page = <SecurityPage />;
  } else if (path === "/company") {
    page = <CompanyPage />;
  } else if (path === "/request-demo") {
    page = <DemoPage />;
  } else if (path === "/sign-in") {
    page = <SignInPage />;
  } else if (path === "/privacy" || path === "/terms") {
    page = <LegalPage type={path.slice(1)} />;
  } else {
    page = (
      <section className="not-found section-pad">
        <p className="chapter">404 · Record not found</p>
        <h1>This page is outside the incident record.</h1>
        <a className="button button--primary" href="/">Return home <ArrowRight size={17} /></a>
      </section>
    );
  }

  return (
    <>
      {isHome ? (
        <main>
          <IncidentEntry />
          <div className="home-site">
            <Header />
            {page}
            <Footer />
          </div>
        </main>
      ) : (
        <>
          {path !== "/sign-in" && <Header />}
          <main>{page}</main>
          {path !== "/sign-in" && <Footer />}
        </>
      )}
      {isHome && <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />}
    </>
  );
}
