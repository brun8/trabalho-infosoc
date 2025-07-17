export type Jogo = {
  titulo: string
  slug: string
  perguntas: Pergunta[]
}

export type Pergunta = {
  historia?: string
  pergunta: string
  img_url?: string
  resposta: number
  opcoes: Opcao[]
}

export type Opcao = {
  texto: string
  feedback?: string
}
