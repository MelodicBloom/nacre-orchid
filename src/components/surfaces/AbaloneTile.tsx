interface AbaloneTileProps {
  children?: React.ReactNode;
  depth?: 'shallow' | 'mid' | 'deep';
  className?: string;
}

export function AbaloneTile({ children, depth = 'mid', className = '' }: AbaloneTileProps) {
  return (
    <div className={`abalone-tile abalone-tile--${depth} ${className}`}>
      <div className="abalone-tile__iridescence" aria-hidden="true" />
      <div className="abalone-tile__content">{children}</div>
    </div>
  );
}
