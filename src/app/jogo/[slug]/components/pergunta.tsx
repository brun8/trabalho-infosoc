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
      <div className="min-h-screen w-full lg:w-1/2 flex items-center justify-center p-4 ">
        <div className="my-auto bg-neutral-200 rounded-md p-4 w-5/6 min-h-11/12">
          {pergunta.img_url &&
            <div className="aspect-square">
              <Image
                src={pergunta.img_url}
                className="rounded-sm"
                width={1200}
                height={720}
                alt=""
                quality={100}
                priority
              />
            </div>
          }
          <div className="p-3 bg-white rounded-sm">
            <p className="">
              Juninho irá iniciar seu primeiro dia na empresa Fazemos de Tudo e Mais um Pouco LTDA. Ele precisa chegar às 8h. Então ele acorda cedo, toma seu café da manhã e pega a condução às 7h para chegar no horário. Na empresa, Juninho conhece seus colegas e o time que irá fazer parte. Sua gerente, Alana o apresenta para o desenvolvedor Sênior que irá acompanhá-lo.
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
