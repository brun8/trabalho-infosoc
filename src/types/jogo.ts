export type Jogo = {
  titulo: string
  perguntas: Pergunta[]
}

export type Pergunta = {
  pergunta: string
  resposta: number
  opcoes: Opcao[]
}

export type Opcao = {
  texto: string
}
