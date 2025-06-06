"use client"

import { useState } from "react"
import { Pergunta } from "./components/pergunta"
import { passos } from "@/content/passos"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        <div
          className="
          absolute bottom-8 right-8
          flex items-center gap-3
        "
        >
          <Button
            variant="secondary"
            disabled={passo === 0}
            onClick={() => setPasso(passo => passo - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="secondary"
            disabled={passo === total - 1}
            onClick={() => setPasso(passo => passo + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
