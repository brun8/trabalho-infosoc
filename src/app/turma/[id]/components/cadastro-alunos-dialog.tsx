"use client"

import { addAlunos } from "@/app/actions"
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
import { toast } from "sonner"

export function CadastroAlunosDialog({ turmaId }: { turmaId: string }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()

  async function handleSubmit() {
    const emails = value
      .replaceAll(" ", ",")
      .split(",")
      .filter((email) => email !== "")

    try {
      await addAlunos(turmaId, emails)
      toast.success("alunos adicionados")
      setOpen(false)
      router.refresh()
    } catch {
      toast.error("Erro ao cadastrar alunos")
    }
  }

  return (
    <Dialog open={open} onOpenChange={(state) => setOpen(state)}>
      <DialogTrigger asChild>
        <Button>Adicionar alunos</Button>
      </DialogTrigger>
      <DialogContent className="w-5/6 sm:max-w-lg max-h-10/12 overflow-y-scroll no-scrollbar">
        <DialogHeader>
          <DialogTitle>Adicionar alunos</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <p>
            Inserir emails separados por &quot,&quot
          </p>
          <Input
            placeholder="joao@email.com,maria@email.com"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
