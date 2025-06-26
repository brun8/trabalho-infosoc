import { type Pergunta } from "@/types/jogo"
import { OpcaoResposta } from "./opcao-resposta"
import Image from "next/image"

type Props = {
  pergunta: Pergunta
  selected?: number
  setSelected: (_: number) => void
}

export function Pergunta({ pergunta, selected, setSelected }: Props) {
  return (
    <div
      className="flex flex-col lg:flex-row min-w-screen lg:min-h-screen snap-center snap-always"
    >
      <div className="min-h-full lg:w-1/2 h-1/2 flex items-center justify-center py-8">
        <div className="relative my-auto bg-neutral-200 rounded-md p-4 w-5/6 aspect-square py-4">
          {pergunta.img_url &&
            <Image
              src={pergunta.img_url}
              alt="minato"
              fill
              quality={100}
              priority
            />
          }
        </div>
      </div>
      <div className="lg:min-h-full min-h-1/2 lg:w-1/2 h-1/2 bg-neutral-800 p-20 text-center">
        <div className="text-neutral-100 flex flex-col items-center h-full p-4 space-y-8">
          <h1
            className="font-bold lg:text-xl"
          >
            {pergunta.pergunta}
          </h1>
          <div className="space-y-4 w-full max-w-md">
            {pergunta.opcoes.map((op, idx) => (
              <OpcaoResposta
                key={idx}
                op={op}
                selected={selected === idx}
                toggle={() => setSelected(idx)}
              />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
