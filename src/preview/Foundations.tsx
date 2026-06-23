const RAMPS: { label: string; swatches: [string, string][] }[] = [
  {
    label: "Brand — purple accent",
    swatches: [
      ["primary 100", "#ADA8FF"],
      ["primary 200", "#8280FF"],
      ["primary 300", "#5959FF"],
      ["primary 400", "#4710C6"],
      ["primary 500", "#270788"],
    ],
  },
  {
    label: "Brand — secondary (deep blue)",
    swatches: [
      ["secondary 100", "#B1C6F1"],
      ["secondary 200", "#5882E4"],
      ["secondary 300", "#2249B4"],
      ["secondary 400", "#142766"],
      ["secondary 500", "#0A1230"],
    ],
  },
  {
    label: "Brand — tertiary (coral)",
    swatches: [
      ["tertiary 100", "#FFCEC2"],
      ["tertiary 200", "#FF9E8F"],
      ["tertiary 300", "#FF6B5C"],
      ["tertiary 400", "#DF1A0C"],
      ["tertiary 500", "#8B140E"],
    ],
  },
  {
    label: "Neutral",
    swatches: [
      ["black", "#030303"],
      ["darkest", "#111111"],
      ["darker", "#222222"],
      ["dark", "#444444"],
      ["neutral", "#666666"],
      ["light", "#AAAAAA"],
      ["lighter", "#CCCCCC"],
      ["lightest", "#EEEEEE"],
      ["white", "#FFFFFF"],
    ],
  },
  {
    label: "System — Success",
    swatches: [
      ["success 100", "#ECFDF3"],
      ["success 200", "#A6F4C5"],
      ["success 300", "#32D583"],
      ["success 400", "#12B76A"],
      ["success 500", "#027A48"],
    ],
  },
  {
    label: "System — Error",
    swatches: [
      ["error 100", "#FEF3F2"],
      ["error 200", "#FECDCA"],
      ["error 300", "#F97066"],
      ["error 400", "#F04438"],
      ["error 500", "#B42318"],
    ],
  },
  {
    label: "System — Info",
    swatches: [
      ["info 100", "#EFF8FF"],
      ["info 200", "#B2DDFF"],
      ["info 300", "#53B1FD"],
      ["info 400", "#2E90FA"],
      ["info 500", "#175CD3"],
    ],
  },
  {
    label: "System — Warning",
    swatches: [
      ["warning 100", "#FFFAEB"],
      ["warning 200", "#FEDF89"],
      ["warning 300", "#FDB022"],
      ["warning 400", "#F79009"],
      ["warning 500", "#B54708"],
    ],
  },
];

function textOn(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substr(0, 2), 16);
  const g = parseInt(c.substr(2, 2), 16);
  const b = parseInt(c.substr(4, 2), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#030303" : "#fff";
}

const HEADINGS: [string, number][] = [
  ["H1", 56],
  ["H2", 48],
  ["H3", 40],
  ["H4", 32],
  ["H5", 24],
  ["H6", 20],
];
const BODY: [string, number][] = [
  ["Large", 20],
  ["Medium", 18],
  ["Regular", 16],
  ["Small", 14],
  ["Tiny", 12],
];
const SPACE: [string, number][] = [
  ["space-1", 4],
  ["space-2", 8],
  ["space-3", 12],
  ["space-4", 16],
  ["space-5", 24],
  ["space-6", 32],
  ["space-7", 48],
  ["space-8", 64],
];
const RADII: [string, number][] = [
  ["xs", 4],
  ["sm", 8],
  ["md", 12],
  ["lg", 16],
  ["xl", 24],
  ["full", 999],
];
const STEPS = ["xs", "sm", "md", "lg", "xl"];

function Head({ title, note }: { title: string; note?: string }) {
  return (
    <div className="pv-sec-head">
      <h2>{title}</h2>
      {note && <span>{note}</span>}
    </div>
  );
}

export function Foundations() {
  return (
    <>
      <section className="pv-sec">
        <Head title="Colors" note="monochrome base · purple accent" />
        {RAMPS.map((ramp) => (
          <div key={ramp.label}>
            <div className="pv-label">{ramp.label}</div>
            <div className="pv-swatches">
              {ramp.swatches.map(([name, hex]) => (
                <div
                  key={name}
                  className="pv-swatch"
                  style={{ background: hex, color: textOn(hex) }}
                >
                  <div className="pv-swatch-name">{name}</div>
                  <div className="pv-swatch-hex">{hex}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="pv-sec">
        <Head title="Typography" note="Instrument Sans · Inter" />
        <div className="pv-label">Headings — Instrument Sans</div>
        {HEADINGS.map(([label, size]) => (
          <div key={label} className="pv-type-row">
            <div className="pv-type-spec">
              {label} · {size}px
            </div>
            <div
              style={{
                fontFamily: "var(--fz-font-heading)",
                fontWeight: 700,
                fontSize: size,
                lineHeight: 1.2,
              }}
            >
              Folloze
            </div>
          </div>
        ))}
        <div className="pv-label">Body — Inter</div>
        {BODY.map(([label, size]) => (
          <div key={label} className="pv-type-row">
            <div className="pv-type-spec">
              {label} · {size}px
            </div>
            <div style={{ fontSize: size }}>The quick brown fox jumps over the lazy dog</div>
          </div>
        ))}
      </section>

      <section className="pv-sec">
        <Head title="Spacing" note="4px grid" />
        {SPACE.map(([name, value]) => (
          <div key={name} className="pv-scale-row">
            <div className="pv-scale-lbl">
              <b>{name}</b>
              <span>{value}px</span>
            </div>
            <div className="pv-space-bar" style={{ width: value }} />
          </div>
        ))}
      </section>

      <section className="pv-sec">
        <Head title="Radius" note="corner radii" />
        <div className="pv-row" style={{ gap: 24 }}>
          {RADII.map(([name, value]) => (
            <div key={name} className="pv-radius-item">
              <div className="pv-radius-box" style={{ borderRadius: value }} />
              <div className="pv-scale-lbl">
                <b>{name}</b>
                <span>{value === 999 ? "999" : value + "px"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pv-sec">
        <Head title="Shadows" note="drop · inner" />
        <div className="pv-label">Drop</div>
        <div className="pv-row" style={{ gap: 32 }}>
          {STEPS.map((s) => (
            <div key={s} className="pv-shadow-item">
              <div className="pv-shadow-box" style={{ boxShadow: `var(--fz-shadow-${s})` }} />
              <b>{s}</b>
            </div>
          ))}
        </div>
        <div className="pv-label">Inner</div>
        <div className="pv-row" style={{ gap: 32 }}>
          {STEPS.map((s) => (
            <div key={s} className="pv-shadow-item">
              <div
                className="pv-shadow-box pv-inset"
                style={{ boxShadow: `var(--fz-shadow-inner-${s})` }}
              />
              <b>{s}</b>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
