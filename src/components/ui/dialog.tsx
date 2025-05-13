import { Dialog } from "radix-ui";
import { ReactNode } from "react";

interface DialogProps {
  trigger: ReactNode;
  title: string;
  desc: string;
  children: ReactNode;
}

export const DialogComponent = (
  { trigger, title, desc, children }: DialogProps,
) => (
  <Dialog.Root>
    <Dialog.Trigger>
      {trigger}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="z-20 fixed left-1/2 top-1/3 max-h-[85vh] h-1/2 w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow p-4">
        <div className="flex flex-col gap-1 pb-2">
          <Dialog.Title className="text-2xl font-semibold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-600">
            {desc}
          </Dialog.Description>
        </div>
        <section>{children}</section>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
