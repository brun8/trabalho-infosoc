import { Jogo } from "@/types/jogo";

export const bancoDeDados: Jogo = {
  titulo: "jogo teste",
  slug: "banco-de-dados",
  perguntas: [
    {
      pergunta: "guardar senha em texto normal",
      resposta: 1,
      opcoes: [
        {
          texto: "pode",
        },
        {
          texto: "não pode",
        },
      ]
    },
    {
      pergunta: "vc valida inputs pra evitar sql injection?",
      resposta: 2,
      opcoes: [
        {
          texto: "sim",
        },
        {
          texto: "não",
        },
        {
          texto: "digo que sim mas não",
        },
      ]
    },
    {
      pergunta: "cpf é número ou string",
      resposta: 1,
      opcoes: [
        {
          texto: "número",
        },
        {
          texto: "string",
        },
      ]
    },
    {
      pergunta: "trabalho de software básico",
      resposta: 0,
      opcoes: [
        {
          texto: "copiei",
        },
        {
          texto: "fiz",
        },
      ]
    },
    {
      pergunta: "quando vem o hexa?",
      img_url: "/minato.jpg",
      resposta: 0,
      opcoes: [
        {
          texto: "2026",
        },
        {
          texto: "2066",
        },
      ]
    },
  ]
}
