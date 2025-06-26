import { Jogo } from "@/types/jogo";

export const teste: Jogo = {
  titulo: "jogo teste",
  perguntas: [
    {
      pergunta: "Juninho ficou muito animado ao saber que trabalhará em um projeto de modernização das escolas públicas. Diante disso, o que representa uma motivação ética adequada para seu envolvimento?",
      resposta: 1,
      opcoes: [
        {
          texto: "Vai ser ótimo para o meu portfólio. Se der tudo certo, consigo um emprego no exterior rapidinho!",
        },
        {
          texto: "Estou empolgado para aplicar meus conhecimentos e ajudar na melhoria da educação pública.",
        },
        {
          texto: "O projeto parece ser interessante. Mas não quero trabalhar com algo envolvendo o setor público. Se fizer algo errado pode estragar minha imagem.",
        },
        {
          texto: "Espero que ninguém me peça para fazer coisa difícil. Só quero manter meu emprego.",
        },
      ]
    },
    {
      pergunta: "Durante a explicação, André menciona que algumas escolas pediram para “ajustar” certos dados no sistema para que os indicadores fiquem mais favoráveis, pois isso ajudaria a conseguir mais recursos e prestígio. O que Juninho deve pensar sobre isso?",
      resposta: 2,
      opcoes: [
        {
          texto: "Se for para beneficiar a escola, não vejo problema em dar uma maquiada."
          ,
        },
        {
          texto: "É melhor aceitar, afinal, são pedidos dos próprios clientes do sistema.",
        },
        {
          texto: "Manipular dados compromete a confiança e vai contra o propósito do projeto."
        },
        {
          texto: "Talvez isso nem afete ninguém diretamente, então pode passar despercebido.",

        },
      ]
    },
    {
      pergunta: `Ao questionar como a privacidade dos dados sensíveis dos alunos será garantida, Juninho ouve do André:
"Não se preocupa com isso agora, Juninho. Nosso foco é entregar rápido."
Diante disso, o que Juninho deve entender sobre a situação?`,
      resposta: 2,
      opcoes: [
        {
          texto: "A preocupação com privacidade pode ser deixada para depois, quando o sistema estiver estável.",
        },
        {
          texto: "A fala do gestor indica uma prática comum e aceitável em projetos ágeis.",
        },
        {
          texto: "A privacidade dos usuários deve ser considerada desde o início e não pode ser ignorada em nome da pressa.",
        },
        {
          texto: "Como o gestor é experiente, Juninho deve confiar que ele saberá lidar com isso mais tarde.",
        },
      ]
    },
    {
      pergunta: "Diante das falhas identificadas, qual deve ser a próxima atitude de Juninho?",
      img_url: "/minato.jpg",
      resposta: 1,
      opcoes: [
        {
          texto: "Tenta resolver tudo sozinho.",
        },
        {
          texto: "Comunica imediatamente a gerente Alana, entregando o relatório técnico.",
        },
        {
          texto: "Entrega o relatório diretamente ao André, já que foi ele quem pediu.",
        },
        {
          texto: "Finaliza o relatório e não comunica ninguém até que alguém pergunte.",
        },
      ]
    },
  ]
}
