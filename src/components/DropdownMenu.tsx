import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Reference - https://github.com/ecklf/tailwindcss-radix/blob/main/demo/components/DropdownMenu.tsx
function DropdownMenu() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="btn btn-primary">
          Previous Months &nbsp; <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content align="start" sideOffset={5} asChild>
          <ul className="menu rounded-box w-48 bg-base-100">
            <li>
              <span>August 2022</span>
            </li>
            <li>
              <span>August 2022</span>
            </li>
            <li>
              <span>July 2022</span>
            </li>
            <li>
              <span>June 2022</span>
            </li>
            <li>
              <span>May 2022</span>
            </li>
            <li>
              <span>April 2022</span>
            </li>
          </ul>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

export default DropdownMenu
