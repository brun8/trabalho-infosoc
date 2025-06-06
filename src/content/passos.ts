import { Opcao } from "@/types/jogo";

export const passos: { pergunta: string, opcoes: Opcao[], }[] = [
  {
    pergunta: "sim ou não?",
    opcoes: [
      {
        texto: "sim",
        certo: false,
      },
      {
        texto: "nao",
        certo: false,
      },
      {
        texto: "talvez",
        certo: true,
      },
    ]
  },
  {
    pergunta: "sim ou com certeza?",
    opcoes: [
      {
        texto: "sim",
        certo: false,
      },
      {
        texto: "com certeza",
        certo: true,
      },
      {
        texto: "não sei",
        certo: false,
      },
    ]
  },
  {
    pergunta: "neymar ou messi?",
    opcoes: [
      {
        texto: "neymar",
        certo: true,
      },
      {
        texto: "messi",
        certo: false,
      },
    ]
  },
]
