import { Button } from "@/components/ui/button";
import { Jogo } from "@/types/jogo";
import { saveResult } from "@/app/actions";
import { useRouter } from 'next/navigation';

type Props = {
  jogo: Jogo
  respostas: (number | undefined)[]
}

export function SubmitPage({ jogo, respostas }: Props) {
  // const [score, setScore] = useState<number>(0)
  // const [enviado, setEnviado] = useState<boolean>(false)
  // const total = jogo.perguntas.length
  const router = useRouter()

  async function handleSubmit() {
    const nota = respostas.reduce<number>((acc, cur, idx) => {
      return acc + (cur === jogo.perguntas[idx].resposta ? 1 : 0)
    }, 0)

    const res = await saveResult({
      nota,
      jogo: "teste"
    })
    router.push(`/resultado/${res.id}`)
    // setScore(nota)
    // setEnviado(true)

  }

  return (
    <div
      className="
        min-h-screen min-w-screen
        flex flex-col items-center justify-center
        snap-center snap-always
      "
    >
      <Button
        className="w-5/6 max-w-md h-20 text-lg"
        onClick={handleSubmit}
      >
        Enviar respostas
      </Button>
    </div>
  )
}
