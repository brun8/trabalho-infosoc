"use client"

import { useState } from "react"
import { Pergunta } from "./components/pergunta"
import { passos } from "@/content/passos"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SubmitPage } from "./components/submit"

const total = Object.keys(passos).length

export default function Jogo() {
  const [passo, setPasso] = useState(0)

  return (
    <div className="relative">
      <div
        className="flex max-w-screen overflow-x-scroll snap-x snap-mandatory"
      >
        {passos.map((_, idx) => (
          <Pergunta key={idx} num={idx} />
        ))}
        <SubmitPage />
      </div>
    </div>
  )
}
