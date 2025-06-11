import { Jogo } from "@/types/jogo"

export const jogos: Record<string, Jogo> = {
  teste: {
    titulo: "jogo teste",
    perguntas: [
      {
        pergunta: "sim ou não?",
        resposta: 2,
        opcoes: [
          {
            texto: "sim",
          },
          {
            texto: "nao",
          },
          {
            texto: "talvez",
          },
        ]
      },
      {
        pergunta: "sim ou com certeza?",
        resposta: 1,
        opcoes: [
          {
            texto: "sim",
          },
          {
            texto: "com certeza",
          },
          {
            texto: "não sei",
          },
        ]
      },
      {
        pergunta: "neymar ou messi?",
        resposta: 0,
        opcoes: [
          {
            texto: "neymar",
          },
          {
            texto: "messi",
          },
        ]
      },
    ]
  }
}
