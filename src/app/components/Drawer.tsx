'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import { Drawer } from 'vaul';
import BottomBar from './BottomBar';

const snapPoints = ['200px', '340px', 0.91];

export default function VaulDrawer() {
  // Set the initial snap point to fully open
  //const [snap, setSnap] = useState<string | number | null>(null);
  const [snap, setSnap] = useState(snapPoints[0]);

  return (
    <Drawer.Root
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      snapToSequentialPoint
      open={true} // Keep the drawer always open
      dismissible={false} // Prevent any user action from closing the drawer
    >
      {/* Removed Drawer.Trigger since it's always open */}
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Portal>
        <Drawer.Content
          data-testid="content"
          className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
        >
          <div
            className={clsx('flex flex-col max-w-md mx-auto w-full p-4 pt-5', {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1,
            })}
          >
            <BottomBar />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
