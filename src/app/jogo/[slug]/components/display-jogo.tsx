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
        className="flex max-w-screen max-h-screen overflow-y-hidden overflow-x-scroll snap-x snap-mandatory"
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
