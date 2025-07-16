import { FeedbackModal } from "@/app/jogo/[slug]/components/feedback-modal"
import { jogos } from "@/content/jogos"
import { db } from "@/server/db"
import { notFound } from "next/navigation"
import { GraficoNotas } from "./components/grafico-notas"

type Params = Promise<{
  id: string
}>

export default async function ResultPage({ params }: { params: Params }) {
  const { id } = await params
  const result = await db.result.findFirst({
    where: {
      id: id
    },
  })

  if (!result) {
    notFound()
  }

  const allResults = await db.result.findMany({
    where: {
      jogo: result.jogo
    }
  })

  const notas = allResults.reduce((acc, cur) => {
    const nota = cur.nota
    const count = acc.get(nota)
    if (count) {
      acc.set(cur.nota, count + 1)
    } else {
      acc.set(cur.nota, 1)
    }
    return acc
  }, new Map<number, number>())

  const jogo = jogos[result.jogo]
  const total = jogo.perguntas.length

  const chartData = Array.from(notas.entries()).map(([key, value]) => ({
    nota: String(key),
    quantidade: value,
  }));
  chartData.sort((a, b) => parseInt(a.nota) - parseInt(b.nota));

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      <div className="space-y-8 flex flex-col items-center">
        <div className="space-y-2">
          <h1 className="font-bold text-6xl">
            {result.nota}/{total}
          </h1>
          {result.nota === total &&
            <p className="text-xl text-center">parabéns</p>
          }
        </div>

        <div className="mx-auto">
          <FeedbackModal jogo={jogo} />
        </div>

        <GraficoNotas
          chartData={chartData}
        />
      </div>
    </div>
  )
}
