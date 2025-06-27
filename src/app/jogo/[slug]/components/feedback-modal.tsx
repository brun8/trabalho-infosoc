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
import { Jogo } from "@/types/jogo"

type Props = {
  jogo: Jogo
}

export function FeedbackModal({ jogo }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Feedback</Button>
      </DialogTrigger>
      <DialogContent className="w-5/6 sm:max-w-4xl max-h-10/12 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>{jogo.titulo}</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div
          className="space-y-6"
        >
          {jogo.perguntas.map((pergunta, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="md:text-lg">
                <span className="font-bold">
                  Pergunta {idx + 1}: {" "}
                </span>
                {pergunta.pergunta}
              </h4>
              <div className="space-y-3">
                {pergunta.opcoes.map((opt, idx) => (
                  <div key={idx} className="pl-4 space-y-1">
                    <p className="text-sm md:text-base">
                      <span className="font-bold">
                        opção {idx + 1}:{" "}
                      </span>
                      {opt.texto}
                    </p>
                    <p className="text-sm md:text-base">
                      <span className="font-bold">
                        feedback:{" "}
                      </span>
                      {opt.feedback}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
