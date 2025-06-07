import { Button } from "@/components/ui/button";
import { passos } from "@/content/passos";
import { useState } from "react";

type Props = {
  respostas: number[]
}

export function SubmitPage({ respostas }: Props) {
  const [_loading, setLoading] = useState(false)
  const [score, setScore] = useState<number>()
  const total = passos.length

  function handleSubmit() {
    setLoading(true)

    const score = respostas.reduce((acc, cur, idx) => {
      return acc + (cur === passos[idx].correta ? 1 : 0)
    }, 0)

    setScore(score)
  }

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      {score
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
