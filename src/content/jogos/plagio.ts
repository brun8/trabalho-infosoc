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
                feedback: "Incorreta. Estar disponível na internet não significa que o conteúdo é livre de direitos autorais. Segundo o Art. 2º da Resolução da UnB e a Lei nº 9.610/1998, qualquer obra intelectual requer autorização expressa do autor para ser utilizada, especialmente em trabalhos acadêmicos."
            },
            {
                texto: `Usar o dataset, mas apenas se colocar nos agradecimentos "dados retirados da internet."`,
                feedback: "Incorreta. Agradecer genericamente não substitui o dever legal de identificar a origem e a licença do material. O uso de dados exige verificação da autorização e da titularidade, conforme previsto na Resolução da UnB, Art. 2º, II, e na Lei de Direitos Autorais."
            },
            {
                texto: "Usar e fingir que ela mesma gerou os dados para evitar problemas.",
                feedback: "Incorreta. Isso configura plágio, além de violação grave dos direitos autorais. A Resolução da UnB e o Regimento Geral da universidade preveem sanções disciplinares, administrativas e éticas para esse tipo de conduta (Art. 5º e Art. 7º)."
            },
            {
                texto: "Não usar. É preciso verificar a licença e a origem do material.",
                feedback: "Correta. O uso de material sem licença explícita viola os princípios da Lei 9.610/1998. Segundo a Resolução da UnB, é necessário respeitar os direitos autorais mesmo em ambientes virtuais.",
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
        resposta: 3,
        opcoes: [
            {
                texto: "Ignorar, afinal, quem nunca copiou um código?",
                feedback: "Incorreta. Ignorar uma infração de direitos autorais, especialmente em contexto acadêmico, contraria os princípios éticos da Universidade de Brasília. A Resolução da UnB estabelece que o uso não autorizado de material protegido configura infração passível de responsabilização administrativa, civil e/ou penal (Art. 5º)."
            },
            {
                texto: "Usar o código, mas mudar os nomes das variáveis.",
                feedback: "Incorreta. Modificar superficialmente o código sem autorização ou citação correta ainda constitui plágio. A Resolução da UnB afirma que a reprodução não autorizada de material intelectual, mesmo com alterações, é vedada (Art. 2º e Art. 7º), e isso também viola o princípio da integridade acadêmica."
            },
            {
                texto: "Usar o código e colocar apenas um comentário dizendo “inspirado em…”",
                feedback: "Incorreta. A menção genérica como 'inspirado em...' não substitui a obrigação de obter autorização ou fazer a devida citação. A Resolução da UnB reforça que qualquer uso de conteúdo protegido exige consentimento específico e expresso do autor (Art. 2º, II; Art. 7º)."
            },
            {
                texto: "Conversar com Renan e explicar que isso pode configurar plágio.",
                feedback: "Correta. O diálogo é importante para promover a conscientização sobre ética acadêmica. O uso de código de terceiros sem autorização ou citação adequada configura plágio, como prevê a Resolução da UnB (Art. 7º e Art. 4º, §2º, V)."
            }
        ]
    },
    {
        pergunta: "Essa atitute de Renan é:",
        historia: "Rafaela finalizou uma versão satisfatória do projeto e irá apresentá-lo em um seminário na UnB. Para registrar o momento, pediu à sua melhor amiga que gravasse a apresentação. Contudo, Renan, um colega que estava animado com sua fala, também a gravou um trecho e a postou no TikTok sem autorização. O vídeo viralizou e acabou sendo monetizado por ele.",
        resposta: 1,
        opcoes: [
            {
                texto: "Errada, pois exige autorização para uso da imagem e voz.",
                feedback: "Correta. A Resolução da UnB deixa claro que é necessário consentimento prévio, específico e expresso para gravações e publicações com finalidade monetária ou pública."
            },
            {
                texto: "Não há problemas, pois o evento era público.",
                feedback: "Incorreta. Mesmo que o evento seja público, o uso da imagem e da voz de alguém requer autorização específica, conforme o Art. 6º da Resolução da UnB. A publicidade do evento não elimina o direito à imagem."
            },
            {
                texto: "Correta, desde que ele tenha marcado a Rafaela.",
                feedback: "Incorreta. Marcar a pessoa nas redes sociais não substitui a necessidade de autorização formal para uso de imagem e voz, especialmente em conteúdos com finalidade monetária ou pública."
            },
            {
                texto: "Errada, apenas se ela reclamar oficialmente",
                feedback: "Incorreta. A exigência de autorização é legal e independe de reclamação. A ausência de reclamação não legitima a infração. A violação pode gerar sanções mesmo sem denúncia formal."
            }
        ]
    },
    {
        pergunta: "Rafaela tem direito de compartilhar a apresentação no YouTube?",
        historia: "Rafaela notou que o trecho compartilhado por Renan gerou bastante repercussão. Nos comentários, algumas pessoas questionavam sua fala, mas a maioria estava curiosa para saber mais sobre o algoritmo que ela desenvolveu. Orgulhosa do seu trabalho, Rafaela resolveu compartilhar a apresentação completa no YouTube para explicar melhor o projeto.",
        resposta: 1,
        opcoes: [
            {
                texto: "Sim, afinal o trabalho é dela e a internet é livre.",
                feedback: "Incorreta. Mesmo sendo autora do conteúdo, Rafaela deve considerar se a apresentação envolve terceiros (como orientador, colegas ou imagens protegidas). A publicação em plataformas externas requer cautela e, às vezes, autorizações complementares, especialmente se envolver conteúdo de terceiros ou instituições."
            },
            {
                texto: "Sim, desde que ela respeite os direitos de imagem  deconteúdo de outras pessoas envolvidas.",
                feedback: "Correta. Rafaela pode divulgar a apresentação, desde que os direitos autorais e de imagem de qualquer colaborador ou material utilizado estejam respeitados, conforme os artigos 2º, 4º e 6º da Resolução da UnB. Caso haja coautoria, autorização prévia é necessária."
            },
            {
                texto: "Não, nenhum conteúdo acadêmico pode ser ompartilhadoem plataformas públicas.",
                feedback: "Incorreta. A Resolução da UnB não proíbe o compartilhamento de conteúdos acadêmicos em plataformas públicas, desde que seja respeitada a titularidade dos direitos autorais e de imagem, e que não haja exploração comercial sem consentimento."
            },
            {
                texto: "Sim, desde que ela monetize o vídeo para ser ecompensadapelo esforço.",
                feedback: "Incorreta. A exploração econômica do conteúdo acadêmico, como a monetização no YouTube, só pode ser feita com autorizações específicas. Segundo o Art. 5º da Resolução da UnB, a monetização de conteúdos protegidos sem autorização pode acarretar sanções."
            }
        ]
    },
    {
        pergunta: "",
        historia: "Rafaela criou um canal no YouTube para divulgar ciência com responsabilidade Seu cuidado com licenças, citações e ética a levou a inspirar outros estudantes e ser reconhecida como exemplo em ética digital e ciência aberta. Ela aprendeu que respeitar o trabalho dos outros é essencial para inovar e colaborar de forma consciente.",
        resposta: 1,
        opcoes: [
            {
                texto: "",
                feedback: ""
            },
            {
                texto: "",
                feedback: ""
            },
            {
                texto: "",
                feedback: ""
            },
            {
                texto: "",
                feedback: ""
            },
        ]
    },
  ]
}