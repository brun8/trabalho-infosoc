"use client"

import { Jogo } from "@/types/jogo"
import { useState } from "react"
import { Pergunta } from "./pergunta"
import { SubmitPage } from "./submit-page"

type Props = {
  jogo: Jogo
}
export function DisplayJogo({ jogo }: Props) {
  const [respostas, setRespostas] =
    useState<(number | undefined)[]>(Array(jogo.perguntas.length).fill(undefined))

  function handleResposta(idx: number, val: number) {
    setRespostas((cur) => {
      const atualizado = [...cur]
      atualizado[idx] = val
      return atualizado
    })
  }

  return (
    <div className="relative">
      <div
        className="
          flex flex-col lg:flex-row
          snap-mandatory snap-y lg:snap-x
          lg:overflow-y-hidden lg:overflow-x-scroll
          max-w-screen max-h-screen
        "
      >
        {jogo.perguntas.map((prg, idx) => (
          <Pergunta
            key={idx}
            pergunta={prg}
            selected={respostas[idx]}
            setSelected={(val: number) => handleResposta(idx, val)}
          />
        ))}
        <SubmitPage jogo={jogo} respostas={respostas} />
      </div>
    </div>
  )
}
