import { useState } from "react";

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
  bg: "#FFFFFF",
  surface: "#F7F7F8",
  border: "#E8E8EC",
  borderActive: "#1A1A1A",
  text: "#1A1A1A",
  textSub: "#888892",
  textMuted: "#BBBBC4",
  radius: 14,
  radiusSm: 9,
  font: "'Instrument Sans', 'Helvetica Neue', sans-serif",
  shadow: "0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const X = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);
const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Back = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Mic = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <rect x="4" y="1" width="5" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M1.5 7c0 2.76 2.24 5 5 5s5-2.24 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <line x1="6.5" y1="12" x2="6.5" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

// ─── Pattern controls ─────────────────────────────────────────────────────────
// Each pattern exposes: { left(checked, index, multi), right(checked, multi) }
// left  → rendered in the fixed-width left slot
// right → rendered in the trailing right slot (null if unused)

const PATTERNS = {
  E: {
    left: (checked, index, multi) => multi ? (
      <div style={{
        width: 16, height: 16, borderRadius: 4,
        border: `1.5px solid ${checked ? T.borderActive : T.border}`,
        background: checked ? T.text : "white",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, color: "white", transition: "all 0.12s",
      }}>
        {checked && <Check />}
      </div>
    ) : (
      <span style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, fontVariantNumeric: "tabular-nums" }}>
        {index + 1}.
      </span>
    ),
    right: (checked, multi) => (!multi && checked) ? (
      <span style={{ color: T.text, display: "flex" }}><Check /></span>
    ) : null,
  },
};

// ─── Option Row ───────────────────────────────────────────────────────────────
function OptionRow({ title, desc, checked, onClick, index, pattern, multi = false }) {
  const [hov, setHov] = useState(false);
  const p = PATTERNS[pattern];
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        width: "100%", padding: "9px 10px", borderRadius: T.radiusSm,
        border: `1.5px solid ${checked && (pattern === "A" || (pattern === "E" && !multi)) ? T.borderActive : "transparent"}`,
        background: (checked && (pattern === "A" || (pattern === "E" && !multi))) || hov ? T.surface : "transparent",
        cursor: "pointer", transition: "all 0.1s", textAlign: "left",
      }}>
      <div style={{ width: 22, display: "flex", justifyContent: "center", flexShrink: 0 }}>
        {p.left(checked, index, multi)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 590, color: T.text, lineHeight: 1.3, fontFamily: T.font }}>{title}</div>
        {desc && <div style={{ fontSize: 12, color: T.textSub, marginTop: 2, fontFamily: T.font }}>{desc}</div>}
      </div>
      {(() => { const r = p.right(checked, multi); return r ? <div style={{ flexShrink: 0, width: 20, display: "flex", justifyContent: "center" }}>{r}</div> : null; })()}
    </button>
  );
}

// ─── Ask row ──────────────────────────────────────────────────────────────────
function AskRow({ n, pattern, multi = false, selected = false, onSelect }) {
  const p = PATTERNS[pattern];
  const [value, setValue] = useState("");
  const [hov, setHov] = useState(false);
  const hasValue = value.trim().length > 0;
  const isChecked = multi ? hasValue : selected;

  const right = !multi && p.right(selected, false);

  const [focused, setFocused] = useState(false);

  return (
    <div style={{ padding: "4px 10px 10px" }}>
      <div
        onClick={() => !multi && onSelect?.()}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 10px",
          borderRadius: T.radiusSm,
          border: `1.5px solid ${focused ? T.borderActive : selected ? T.borderActive : T.border}`,
          background: T.bg,
          transition: "border-color 0.12s",
          cursor: "text",
        }}>
        <input
          value={value}
          onChange={e => { setValue(e.target.value); }}
          onClick={e => { e.stopPropagation(); !multi && onSelect?.(); }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Or something else..."
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent",
            fontSize: 13, fontFamily: T.font, color: T.text,
            caretColor: T.text, cursor: "text",
          }}
        />
        {right && <div style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}>{right}</div>}
      </div>
    </div>
  );
}

// ─── Action button ────────────────────────────────────────────────────────────
function ActionBtn({ label, disabled, onClick, variant = "primary" }) {
  const [hov, setHov] = useState(false);
  const isPrimary = variant === "primary";
  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 6, padding: "7px 14px",
        borderRadius: T.radiusSm, fontSize: 12.5, fontWeight: 620, fontFamily: T.font,
        cursor: disabled ? "not-allowed" : "pointer", transition: "all 0.12s",
        border: isPrimary ? "none" : `1.5px solid ${T.border}`,
        background: isPrimary ? (disabled ? T.border : hov ? "#333" : T.text) : (hov ? T.surface : "transparent"),
        color: isPrimary ? (disabled ? T.textMuted : "white") : T.textSub,
        letterSpacing: "-0.01em",
      }}>
      {label}
    </button>
  );
}

// ─── Modal shell ──────────────────────────────────────────────────────────────
function Shell({ question, hint, onClose, footer, stepIndicator, children }) {
  return (
    <div style={{ background: T.bg, borderRadius: T.radius, boxShadow: T.shadow, width: 340, overflow: "hidden", fontFamily: T.font }}>
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ flex: 1 }}>
            {stepIndicator}
            <div style={{ fontSize: 14, fontWeight: 650, color: T.text, lineHeight: 1.35, letterSpacing: "-0.01em" }}>{question}</div>
            {hint && <div style={{ fontSize: 11.5, color: T.textMuted, marginTop: 3, fontWeight: 500 }}>{hint}</div>}
          </div>
          <button onClick={onClose} style={{ background: T.surface, border: "none", cursor: "pointer", color: T.textSub, padding: 6, borderRadius: 7, display: "flex", flexShrink: 0 }}>
            <X />
          </button>
        </div>
      </div>
      <div style={{ padding: "10px 10px 0" }}>{children}</div>
      {footer && (
        <div style={{ padding: "10px 16px 14px", borderTop: `1px solid ${T.border}`, marginTop: 8 }}>
          {footer}
        </div>
      )}
    </div>
  );
}

// ─── Demo data ────────────────────────────────────────────────────────────────
const BASE_OPTIONS = [
  { id: "labels", title: "Shipping labels printed", desc: "Number of labels printed per location" },
  { id: "orders", title: "Orders fulfilled",         desc: "Fulfillment volume by location" },
  { id: "pod",    title: "Print-on-demand orders",   desc: "Orders from a POD app by location" },
  { id: "other",  title: "Something else",           desc: "A different type of print volume" },
];

const STEPS = [
  {
    key: "type", type: "single", label: "Print type",
    question: "What does 'print volume' refer to?",
    options: BASE_OPTIONS,
  },
  {
    key: "period", type: "single", label: "Time period",
    question: "Which time period?",
    options: [
      { id: "7d",      title: "Last 7 days",   desc: "Rolling 7-day window" },
      { id: "30d",     title: "Last 30 days",  desc: "Rolling 30-day window" },
      { id: "quarter", title: "This quarter",  desc: "Current fiscal quarter" },
      { id: "custom",  title: "Custom range",  desc: "Pick your own dates" },
    ],
  },
  {
    key: "breakdown", type: "multi", label: "Breakdown",
    question: "Break down results by?",
    options: [
      { id: "location", title: "Location",       desc: "Each fulfillment center" },
      { id: "carrier",  title: "Carrier",        desc: "UPS, FedEx, USPS, etc." },
      { id: "sku",      title: "SKU / Product",  desc: "Per product line" },
      { id: "none",     title: "No breakdown",   desc: "Show total summary only" },
    ],
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

function SingleSelect({ pattern }) {
  const [sel, setSel] = useState(null);
  return (
    <Shell question="What does 'print volume' refer to?" onClose={() => setSel(null)}
      footer={<div style={{ display: "flex", justifyContent: "flex-end" }}><ActionBtn label="Confirm" disabled={!sel} /></div>}>
      {BASE_OPTIONS.map((opt, i) => (
        <OptionRow key={opt.id} title={opt.title} desc={opt.desc} index={i}
          checked={sel === opt.id} onClick={() => setSel(opt.id)} pattern={pattern} />
      ))}
      <AskRow n={BASE_OPTIONS.length + 1} pattern={pattern}
        selected={sel === "__other__"} onSelect={() => setSel("__other__")} />
    </Shell>
  );
}

function MultiSelect({ pattern }) {
  const [sel, setSel] = useState(new Set());
  const toggle = id => { const s = new Set(sel); s.has(id) ? s.delete(id) : s.add(id); setSel(s); };
  return (
    <Shell question="What does 'print volume' refer to?" hint="Select all that apply" onClose={() => setSel(new Set())}
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionBtn label="Apply" disabled={sel.size === 0} />
        </div>
      }>
      {BASE_OPTIONS.map((opt, i) => (
        <OptionRow key={opt.id} title={opt.title} desc={opt.desc} index={i}
          checked={sel.has(opt.id)} onClick={() => toggle(opt.id)} pattern={pattern} multi />
      ))}
      <AskRow n={BASE_OPTIONS.length + 1} pattern={pattern} multi />
    </Shell>
  );
}

function MultiStep({ pattern }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const step = STEPS[stepIdx];
  const isMulti = step.type === "multi";
  const currentAnswer = answers[step.key];
  const multiSet = isMulti ? (currentAnswer instanceof Set ? currentAnswer : new Set()) : null;

  const advance = () => { if (stepIdx < STEPS.length - 1) setStepIdx(stepIdx + 1); else setDone(true); };

  const pickSingle = id => setAnswers(prev => ({ ...prev, [step.key]: id }));
  const toggleMulti = id => setAnswers(prev => {
    const s = prev[step.key] instanceof Set ? new Set(prev[step.key]) : new Set();
    s.has(id) ? s.delete(id) : s.add(id);
    return { ...prev, [step.key]: s };
  });

  const isChecked = id => isMulti ? multiSet.has(id) : currentAnswer === id;
  const canAdvance = isMulti ? multiSet.size > 0 : currentAnswer !== undefined;

  const serialise = raw => { const o = {}; for (const [k,v] of Object.entries(raw)) o[k] = v instanceof Set ? [...v] : v; return o; };

  const dots = (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      {stepIdx > 0 && (
        <button onClick={() => setStepIdx(stepIdx - 1)} style={{ background: "none", border: "none", cursor: "pointer", color: T.textSub, padding: 0, display: "flex", marginRight: 2 }}>
          <Back />
        </button>
      )}
      <div style={{ display: "flex", gap: 4 }}>
        {STEPS.map((_, i) => (
          <div key={i} style={{ height: 3, width: i === stepIdx ? 16 : 6, borderRadius: 99, background: i <= stepIdx ? T.text : T.border, transition: "all 0.2s" }} />
        ))}
      </div>
      <span style={{ fontSize: 11, color: T.textMuted, fontFamily: T.font, fontWeight: 500 }}>{stepIdx + 1} / {STEPS.length}</span>
    </div>
  );

  if (done) {
    const serial = serialise(answers);
    return (
      <Shell question="All set!" onClose={() => { setStepIdx(0); setAnswers({}); setDone(false); }}
        footer={<div style={{ display: "flex", justifyContent: "space-between" }}>
          <ActionBtn label="Start over" variant="ghost" onClick={() => { setStepIdx(0); setAnswers({}); setDone(false); }} />
          <ActionBtn label="Done" />
        </div>}>
        <div style={{ padding: "4px 10px 4px" }}>
          {STEPS.map(s => {
            const val = serial[s.key];
            const ids = Array.isArray(val) ? val : [val];
            const labels = ids.map(id => s.options.find(o => o.id === id)?.title).filter(Boolean);
            return (
              <div key={s.key} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: `1px solid ${T.border}` }}>
                <span style={{ fontSize: 11.5, color: T.textMuted, fontFamily: T.font, minWidth: 80, paddingTop: 1 }}>{s.label}</span>
                <span style={{ fontSize: 13, fontWeight: 590, color: T.text, fontFamily: T.font }}>{labels.join(", ")}</span>
              </div>
            );
          })}
        </div>
      </Shell>
    );
  }

  return (
    <Shell question={step.question} hint={isMulti ? "Select all that apply" : undefined}
      onClose={() => { setStepIdx(0); setAnswers({}); }} stepIndicator={dots}
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <ActionBtn label={stepIdx < STEPS.length - 1 ? "Next" : "Finish"} disabled={!canAdvance} onClick={advance} />
        </div>
      }>
      {step.options.map((opt, i) => (
        <OptionRow key={opt.id} title={opt.title} desc={opt.desc} index={i}
          checked={isChecked(opt.id)}
          onClick={() => isMulti ? toggleMulti(opt.id) : pickSingle(opt.id)}
          pattern={pattern} multi={isMulti} />
      ))}
      <AskRow n={step.options.length + 1} pattern={pattern} />
    </Shell>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────


export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#F0F0F2", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 24px 64px", fontFamily: T.font }}>
      <div style={{ marginBottom: 36, textAlign: "center" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: T.text, letterSpacing: "-0.03em" }}>
          Disambiguation Modal
        </div>
        <div style={{ fontSize: 13, color: T.textSub, marginTop: 4 }}>
          Number + checkbox pattern across all variants
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 340px)", gap: 24, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textMuted, textAlign: "center" }}>Single select</div>
          <SingleSelect pattern="E" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textMuted, textAlign: "center" }}>Multi select</div>
          <MultiSelect pattern="E" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: T.textMuted, textAlign: "center" }}>Multi-step</div>
          <MultiStep pattern="E" />
        </div>
      </div>
    </div>
  );
}
