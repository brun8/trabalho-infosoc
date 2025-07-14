import { FeedbackModal } from "@/app/jogo/[slug]/components/feedback-modal"
import { jogos } from "@/content/jogos"
import { db } from "@/server/db"
import { notFound } from "next/navigation"

type Props = {
  params: {
    id: string
  }
}

export default async function ResultPage({ params }: Props) {
  const result = await db.result.findFirst({
    where: {
      id: params.id
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

  console.log({ allResults, notas })


  const jogo = jogos[result.jogo]
  const total = jogo.perguntas.length
  console.log(jogo)

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      <div className="space-y-8 flex flex-col items-center">
        <h1 className="font-bold text-6xl">
          {result.nota}/{total}
        </h1>
        {result.nota === total &&
          <p className="text-xl text-center">parabéns</p>
        }

        <div className="mx-auto">
          <FeedbackModal jogo={jogo} />
        </div>
      </div>
    </div>
  )
}
