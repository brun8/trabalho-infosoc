"use client"

import { useState } from "react"
import { Pergunta } from "./components/pergunta"
import { passos } from "@/content/passos"
import { SubmitPage } from "./components/submit"

export default function Jogo() {
  const [respostas, setRespostas] = useState(Array(passos.length).fill(undefined))

  function setResposta(idx: number, val: number) {
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
        {passos.map((_, idx) => (
          <Pergunta
            key={idx}
            num={idx}
            selected={respostas[idx]}
            setSelected={(val: number) => setResposta(idx, val)}
          />
        ))}
        <SubmitPage
          respostas={respostas}
        />
      </div>
    </div>
  )
}
