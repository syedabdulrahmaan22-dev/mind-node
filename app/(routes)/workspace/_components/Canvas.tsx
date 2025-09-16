'use client';

import { Tldraw, useEditor } from 'tldraw'; // <--- Removed TLSnapshot from import
import 'tldraw/tldraw.css';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useEffect } from 'react';

// Props for our Canvas component
interface CanvasProps {
  fileId: Id<'files'>;
  fileData: {
    _id: Id<'files'>;
    canvasData?: string | null;
  };
  onSaveTrigger: boolean;
}

function SaveEvents({ fileId, onSaveTrigger }: { fileId: Id<'files'>, onSaveTrigger: boolean }) {
  const editor = useEditor();
  const updateCanvas = useMutation(api.files.updateCanvas);

  useEffect(() => {
    if (onSaveTrigger) {
      const snapshot = editor.getSnapshot();
      const snapshotString = JSON.stringify(snapshot);

      updateCanvas({
        _id: fileId,
        canvasData: snapshotString,
      });
    }
  }, [onSaveTrigger, editor, fileId, updateCanvas]);

  return null;
}

export function Canvas({ fileId, fileData, onSaveTrigger }: CanvasProps) {
  // By removing the type, TypeScript infers it as 'any', which is acceptable here.
  const snapshot = fileData?.canvasData // <--- Removed the ': TLSnapshot | undefined' part
    ? JSON.parse(fileData.canvasData) 
    : undefined;

  return (
    <div className="h-full w-full">
      <Tldraw
        snapshot={snapshot}
        persistenceKey={`tldraw-file-${fileId}`}
      >
        <SaveEvents
          fileId={fileId}
          onSaveTrigger={onSaveTrigger}
        />
      </Tldraw>
    </div>
  );
}