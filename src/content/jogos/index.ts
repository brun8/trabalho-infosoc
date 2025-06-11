import { Jogo } from "@/types/jogo"
import { teste } from "./teste"
import { bancoDeDados } from "./banco-de-dados"

export const jogos: Record<string, Jogo> = {
  teste,
  "banco-de-dados": bancoDeDados,
}
