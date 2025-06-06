import { passos } from "@/content/passos"
import { OpcaoResposta } from "./opcao-resposta"
import { useState } from "react"

export function Pergunta({ num }: { num: number }) {
  const [selectedOp, setSelectedOp] = useState<number>()
  const conteudo = passos[num]

  if (!conteudo) {
    return <div />
  }

  return (
    <div
      className="flex min-w-screen min-h-screen snap-center snap-always"
    >
      <div className="min-h-full w-1/2 flex items-center justify-center">
        <div className="h-5/6 bg-neutral-200 rounded-md p-4 w-5/6 py-4">
          ilustração
        </div>
      </div>
      <div className="min-h-full w-1/2 bg-neutral-800 p-20 text-center">
        <div className="text-neutral-100 flex flex-col item-center h-full p-4 space-y-8">
          <h1
            className="font-bold text-3xl"
          >
            {conteudo.pergunta}
          </h1>
          <div className="space-y-4 min-w-[500px]">
            {conteudo.opcoes.map((op, idx) => (
              <OpcaoResposta
                key={idx}
                op={op}
                selected={selectedOp === idx}
                toggle={() => setSelectedOp(idx)}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
