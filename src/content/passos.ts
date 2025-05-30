import { Opcao } from "@/types/jogo";

export const passos:
  Record<number, {
    pergunta: string,
    opcoes: Opcao[],
  }> = {
  0: {
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
  }
}
