import { Button } from "@/components/ui/button";
import { Jogo } from "@/types/jogo";
import { saveResult } from "@/app/actions";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  jogo: Jogo
  respostas: (number | undefined)[]
}

export function SubmitPage({ jogo, respostas }: Props) {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  async function handleSubmit() {
    setPending(true)
    const nota = respostas.reduce<number>((acc, cur, idx) => {
      return acc + (cur === jogo.perguntas[idx].resposta ? 1 : 0)
    }, 0)

    saveResult({
      nota,
      jogo: jogo.slug,
    })
      .then((res) => {
        router.push(`/resultado/${res.id}`)
        toast.success("Respostas enviadas, redirecionando")
      })
      .catch((err) => {
        console.error(err)
        toast.error("Erro ao salvar resultado")
      })
      .finally(() => setPending(false))
    // setScore(nota)
    // setEnviado(true)
  }

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      <Button
        disabled={pending}
        className="w-5/6 max-w-md h-20 text-lg"
        onClick={handleSubmit}
      >
        {pending
          ? "Enviando..."
          : "Enviar respostas"
        }
      </Button>
    </div>
  )
}
