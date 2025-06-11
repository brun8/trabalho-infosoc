import { Opcao } from "@/types/jogo";

export const passos: {
  pergunta: string,
  opcoes: Opcao[],
}[] = [
    {
      pergunta: "sim ou não?",
      opcoes: [
        {
          texto: "sim",
          certa: false,
        },
        {
          texto: "nao",
          certa: false,
        },
        {
          texto: "talvez",
          certa: true,
        },
      ]
    },
    {
      pergunta: "sim ou com certeza?",
      opcoes: [
        {
          texto: "sim",
          certa: false,
        },
        {
          texto: "com certeza",
          certa: true,
        },
        {
          texto: "não sei",
          certa: false,
        },
      ]
    },
    {
      pergunta: "neymar ou messi?",
      opcoes: [
        {
          texto: "neymar",
          certa: true,
        },
        {
          texto: "messi",
          certa: false,
        },
      ]
    },
  ]
