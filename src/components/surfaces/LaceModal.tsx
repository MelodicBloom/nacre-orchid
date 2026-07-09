'use client';
import { useEffect, useRef } from 'react';
import type { Artifact } from '../../lib/artifacts';
import { SemanticMeter } from '../primitives/SemanticMeter';
import { PearlButton } from '../primitives/PearlButton';

interface LaceModalProps {
  artifact: Artifact | null;
  onClose: () => void;
}

export function LaceModal({ artifact, onClose }: LaceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (artifact) {
      el.showModal();
    } else {
      el.close();
    }
  }, [artifact]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const handleClose = () => onClose();
    el.addEventListener('close', handleClose);
    return () => el.removeEventListener('close', handleClose);
  }, [onClose]);

  if (!artifact) return null;

  return (
    <dialog ref={dialogRef} className="lace-modal" aria-labelledby="modal-title">
      <div className="lace-modal__veil" aria-hidden="true" />
      <div className="lace-modal__body">
        <button className="lace-modal__close" onClick={onClose} aria-label="Close">&times;</button>
        <h2 id="modal-title" className="lace-modal__title">{artifact.title}</h2>
        <div className="lace-modal__story">{artifact.story}</div>
        <div className="lace-modal__materials">
          {artifact.materials.map((m) => (
            <span key={m} className={`material-tag material-tag--${m}`}>{m}</span>
          ))}
        </div>
        <div className="lace-modal__meters">
          {artifact.scores.map((s) => (
            <SemanticMeter key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
        <div className="lace-modal__recipe">
          <pre className="lace-modal__prompt">{artifact.promptRecipe}</pre>
        </div>
        <PearlButton variant="primary">Save Artifact</PearlButton>
      </div>
    </dialog>
  );
}
