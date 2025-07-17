import { Jogo } from "@/types/jogo";

export const plagio: Jogo = {
  titulo: "A Imitação",
  perguntas: [
    {
        pergunta: "O que Rafaela deve fazer?",
        historia: "Rafaela está no laboratório de pesquisa da UnB. É sua primeira iniciação científica. Ela está animada com a ideia de explorar o poder do processamento de imagens e sons. Seu orientador sugeriu que ela começasse analisando datasets públicos de imagens. Rafaela encontra um dataset incrível de rostos humanos. Ele foi publicado por um usuário anônimo em um fórum russo, sem qualquer licença ou autor identificado. Ela pensa em usá-lo.",
        resposta: 3,
        opcoes: [
            {
                texto: "Usar o dataset, afinal, está disponível na internet.",
                feedback: "",
            },
            {
                texto: `Usar o dataset, mas apenas se colocar nos agradecimentos "dados retirados da internet."`,
                feedback: "",
            },
            {
                texto: "Usar e fingir que ela mesma gerou os dados para evitar problemas.",
                feedback: "",
            },
            {
                texto: "Não usar. É preciso verificar a licença e a origem do material.",
                feedback: "O uso de material sem licença explícita viola os princípios da Lei 9.610/1998. Segundo a Resolução da UnB, é necessário respeitar os direitos autorais mesmo em ambientes virtuais.",
            },
        ]
    },
    {
        // Link explicando as licenças: https://teaching.resources.osu.edu/teaching-topics/simple-guide-creative-commons
        pergunta: "Qual das licenças permite isso com maior liberdade desde que o autor seja citado?",
        historia: "Buscando mais repositórios para criar um grande dataset, Rafaela descobre um repositório com dados licenciados em Creative Commons. Ela comemora, mas percebe que há vários tipos de licenças. CC-BY, CC-BY-NC, CC-BY-SA… “Socorro!”, ela pensa. Ela quer usar imagens para treinar um algoritmo e depois apresentar os resultados em um evento da universidade.",
        resposta: 1,
        opcoes: [
        {
                texto: "CC-BY-NC",
                feedback: "Incorreta. A licença CC-BY-NC não permite o uso comercial, o que pode ser um problema se Rafaela quiser apresentar os resultados em um evento.",
            },
            {
                texto: "CC-BY",
                feedback: "Correta. A licença CC-BY permite o uso, inclusive comercial, desde que o autor seja creditado.",
            },
            {
                texto: "CC-BY-ND",
                feedback: "Incorreta. A licença CC-BY-ND permite o uso, desde que o autor seja creditado, mas não permite a criação de obras derivadas.",
            },
            {
                texto: "CC-BY-NC-ND",
                feedback: "Incorreta. A licença CC-BY-NC-ND não permite o uso comercial e não permite a criação de obras derivadas.",
            },
        ]
    },
    {
        pergunta: "O que Rafaela deve fazer?",
        historia: `Com o conjunto de dados pronto, Rafaela começa a desenvolver seu algoritmo. Um colega do laboratório, Renan, compartilha com Rafaela um código que ele "achou no GitHub". Ela percebe que o script é idêntico a um artigo recente publicado por outro grupo de pesquisa. Mas Renan diz: "Relaxa, ninguém vai perceber."`,
        resposta: 1,
        opcoes: [
            {
                texto: "Ignorar, afinal, quem nunca copiou um código?",
                feedback: "",
            },
            {
                texto: "Usar o código, mas mudar os nomes das variáveis.",
                feedback: "",
            },
            {
                texto: "Usar o código e colocar apenas um comentário dizendo “inspirado em…”",
                feedback: "",
            },
            {
                texto: "Conversar com Renan e explicar que isso pode configurar plágio.",
                feedback: "",
            },
        ]
    },
    {
        pergunta: "",
        historia: "",
        resposta: 1,
        opcoes: [
            {
                texto: "",
                feedback: "",
            },
            {
                texto: "",
                feedback: "",
            },
            {
                texto: "",
                feedback: "",
            },
            {
                texto: "",
                feedback: "",
            },
        ]
    },
  ]
}