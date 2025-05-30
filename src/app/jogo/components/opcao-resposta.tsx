import { Opcao } from "@/types/jogo";
import { useState } from "react";

export function OpcaoResposta({ op }: { op: Opcao }) {
  const [selected, setSelected] = useState(false)

  function handleClick() {
    setSelected((cur) => !cur)
  }

  return (
    <button
      className={`
        p-4 w-full text-center mx-auto
        bg-neutral-600 hover:bg-neutral-700
        hover:cursor-pointer
        rounded-md
      `}
      onClick={handleClick}
    >
      {selected ? "AAAAAAAAAAAAAAAA" : op.texto}
    </button >
  )
}
