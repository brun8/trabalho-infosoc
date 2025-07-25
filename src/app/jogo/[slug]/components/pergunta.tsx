import { type Pergunta } from "@/types/jogo"
import { OpcaoResposta } from "./opcao-resposta"
import Image from "next/image"

type Props = {
  pergunta: Pergunta
  historia?: string
  selected?: number
  setSelected: (_: number) => void
}

export function Pergunta({ pergunta, historia, selected, setSelected }: Props) {
  return (
    <div
      className="flex flex-col lg:flex-row min-w-screen lg:min-h-screen snap-center snap-always"
    >
      <div className="min-h-screen w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="bg-neutral-200 rounded-md p-4 w-5/6 space-y-4">
          {pergunta.img_url &&
            <Image
              src={pergunta.img_url}
              className="rounded-sm"
              width={1200}
              height={720}
              alt=""
              quality={100}
              priority
            />
          }
          <div className="p-3 bg-white rounded-sm">
            <p className="">
              {historia}
            </p>
          </div>
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
