interface SemanticMeterProps {
  label: string;
  value: number;
  material?: 'pearl' | 'orchid' | 'gold' | 'opal';
}

export function SemanticMeter({ label, value, material = 'opal' }: SemanticMeterProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`semantic-meter semantic-meter--${material}`}>
      <span className="semantic-meter__label">{label}</span>
      <div className="semantic-meter__track" role="meter" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
        <div className="semantic-meter__fill" style={{ width: `${clamped}%` }} />
      </div>
      <span className="semantic-meter__value">{clamped}</span>
    </div>
  );
}
