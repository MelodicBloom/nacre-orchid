interface TokenChipProps {
  label: string;
  material?: 'pearl' | 'orchid' | 'lace' | 'gold' | 'abalone' | 'opal' | 'labradorite';
  active?: boolean;
  onClick?: () => void;
}

export function TokenChip({ label, material = 'pearl', active = false, onClick }: TokenChipProps) {
  return (
    <button
      className={`token-chip token-chip--${material} ${active ? 'token-chip--active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
