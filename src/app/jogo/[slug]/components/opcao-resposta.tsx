import { Opcao } from "@/types/jogo";

type Props = {
  op: Opcao,
  selected: boolean
  toggle: () => void
}

export function OpcaoResposta({ op, selected, toggle }: Props) {
  return (
    <button
      className={`
        p-4 w-full text-center mx-auto
        bg-neutral-600 hover:bg-neutral-700
        hover:cursor-pointer
        border-2 rounded-md
        lg:text-base text-sm
        transition delay-150 duration-300 
        ease-in-out hover:-translate-y-1 hover:scale-110
        ${selected
          ? "border-blue-400"
          : "border-transparent"
        }
      `}
      onClick={toggle}
    >
      {op.texto}
    </button>
  )
}
