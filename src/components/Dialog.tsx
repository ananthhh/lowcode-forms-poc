import React, { PropsWithChildren } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay />
    <DialogPrimitive.Content {...props} ref={forwardedRef}>
      {children}
      <DialogPrimitive.Close aria-label="Close">
        <FontAwesomeIcon icon={faXmark} />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
))

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
