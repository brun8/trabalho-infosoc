import { Opcao } from "@/types/jogo";

export const passos: {
  pergunta: string,
  opcoes: Opcao[],
  correta: number,
}[] = [
    {
      pergunta: "sim ou não?",
      correta: 2,
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
      correta: 1,
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
      correta: 0,
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
