import "../styles/automationVisual.css";

export default function AutomationVisual() {
  return (
    <div className="auto-visual" aria-hidden="true">
      <div className="auto-grid" />

      {/* Nodes */}
      <div className="auto-node n1" />
      <div className="auto-node n2" />
      <div className="auto-node n3" />
      <div className="auto-node n4" />

      {/* Pulses */}
      <span className="auto-pulse p1" />
      <span className="auto-pulse p2" />
      <span className="auto-pulse p3" />

      {/* Flow line */}
      <div className="auto-line">
        <span className="auto-flow" />
      </div>

    </div>
  );
}
