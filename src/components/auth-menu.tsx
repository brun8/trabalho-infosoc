import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { db } from "@/server/db"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { Menu } from "lucide-react"
import Link from "next/link"

export async function AuthMenu() {
  const user = await auth()
  const professor = user.isAuthenticated && await db.professor.findFirst({
    where: {
      clerkId: user.userId
    }
  })

  return (
    <>
      <SignedIn>
        <div
          className="
            absolute top-10 right-10
            flex flex-col gap-4 items-center
          "
        >
          <UserButton />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full size-8">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                {professor &&
                  <Link href="/turmas">
                    Turmas
                  </Link>
                }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SignedIn>
      <SignedOut>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full size-8">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <SignUpButton />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignInButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedOut>
    </>
  )
}

