"use client"

import { createTurma } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"


export function CreateTurmaDialog() {
  const [name, setName] = useState("")

  const router = useRouter()
  async function handleSubmit() {
    const res = await createTurma(name)
    if (res) {
      router.push(`/turma/${res.id}`)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar turma</Button>
      </DialogTrigger>
      <DialogContent className="w-5/6 sm:max-w-lg max-h-10/12 overflow-y-scroll no-scrollbar">
        <DialogHeader>
          <DialogTitle>Criar turma</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
          >
            Criar turma
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
