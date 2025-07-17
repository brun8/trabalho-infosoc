import { Jogo } from "@/types/jogo"
import { sbc } from "./sbc"
import { plagio } from "./plagio"
import { bancoDeDados } from "./banco-de-dados"

export const jogos: Record<string, Jogo> = {
  "sbc": sbc,
  "plagio": plagio,
  "banco-de-dados": bancoDeDados,
}
