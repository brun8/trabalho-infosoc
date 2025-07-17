import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"

export function AuthMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            absolute top-10 right-10
            size-10 rounded-full
            cursor-pointer bg-white shadow-accent
          "
        >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {/* mostrar turma se for professor */}
        <SignedOut>
          <DropdownMenuItem asChild>
            <SignInButton />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <SignUpButton />
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          <DropdownMenuItem>
            <UserButton />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <div className="w-full">
              <SignOutButton />
            </div>
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

