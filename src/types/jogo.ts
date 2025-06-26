export type Jogo = {
  titulo: string
  perguntas: Pergunta[]
}

export type Pergunta = {
  pergunta: string
  img_url?: string
  resposta: number
  opcoes: Opcao[]
}

export type Opcao = {
  texto: string
}
