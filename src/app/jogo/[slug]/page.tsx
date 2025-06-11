import { jogos } from "@/content/jogos";
import { notFound } from "next/navigation";
import { DisplayJogo } from "./components/display-jogo";

export default async function Jogo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const jogo = jogos[slug]
  if (!jogo) {
    notFound()
  }

  return (
    <DisplayJogo jogo={jogo} />
  )
}
