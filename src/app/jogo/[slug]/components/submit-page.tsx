import { Button } from "@/components/ui/button";
import { Jogo } from "@/types/jogo";
import { useState } from "react";

type Props = {
  jogo: Jogo
  respostas: (number | undefined)[]
}

export function SubmitPage({ jogo, respostas }: Props) {
  const [score, setScore] = useState<number>(0)
  const [enviado, setEnviado] = useState<boolean>(false)
  const total = jogo.perguntas.length

  function handleSubmit() {
    const res = respostas.reduce<number>((acc, cur, idx) => {
      return acc + (cur === jogo.perguntas[idx].resposta ? 1 : 0)
    }, 0)
    setScore(res)
    setEnviado(true)
  }

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      {enviado
        ?
        <div className="space-y-4">
          <h1 className="font-bold text-6xl">
            {score}/{total}
          </h1>
          {score === total &&
            <p className="text-xl text-center">parabéns</p>
          }
        </div>
        :
        <Button
          className="min-w-md h-20 text-lg"
          onClick={handleSubmit}
        >
          Enviar respostas
        </Button>
      }
    </div>
  )
}
