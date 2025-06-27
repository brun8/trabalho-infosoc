import { Jogo } from "@/types/jogo";

export const teste: Jogo = {
  titulo: "Capítulos 1 e 2",
  perguntas: [
    {
      pergunta: "Juninho ficou muito animado ao saber que trabalhará em um projeto de modernização das escolas públicas. Diante disso, o que representa uma motivação ética adequada para seu envolvimento?",
      img_url: "/cap-1-img-1.png",
      resposta: 1,
      opcoes: [
        {
          texto: "Vai ser ótimo para o meu portfólio. Se der tudo certo, consigo um emprego no exterior rapidinho!",
          feedback: "Embora pensar na carreira não seja errado, o princípio 1.1 nos lembra que devemos buscar contribuir para o bem-estar social — e não apenas vantagens pessoais.Embora pensar na carreira não seja errado, o princípio 1.1 nos lembra que devemos buscar contribuir para o bem-estar social — e não apenas vantagens pessoais.",
        },
        {
          texto: "Estou empolgado para aplicar meus conhecimentos e ajudar na melhoria da educação pública.",
          feedback: "Correto! Esse pensamento alinha-se diretamente ao princípio 1.1, que trata da responsabilidade de promover o bem-estar humano e social.",
        },
        {
          texto: "O projeto parece ser interessante. Mas não quero trabalhar com algo envolvendo o setor público. Se fizer algo errado pode estragar minha imagem.",
          feedback: "Esse pensamento demonstra falta de engajamento com o impacto social do projeto, indo contra os princípios 1.1 e 3.1.",
        },
        {
          texto: "Espero que ninguém me peça para fazer coisa difícil. Só quero manter meu emprego.",
          feedback: "Semelhante ao A, aqui ele está pensando mais em si do que no mundo ao seu redor. Além disso, vai contra o 2.7.",
        },
      ]
    },
    {
      pergunta: "Durante a explicação, André menciona que algumas escolas pediram para “ajustar” certos dados no sistema para que os indicadores fiquem mais favoráveis, pois isso ajudaria a conseguir mais recursos e prestígio. O que Juninho deve pensar sobre isso?",
      resposta: 2,
      opcoes: [
        {
          texto: "Se for para beneficiar a escola, não vejo problema em dar uma maquiada.",
          feedback: "Mesmo que a intenção pareça boa, manipular dados é desonesto (1.3) e compromete a integridade do sistema (2.1).",
        },
        {
          texto: "É melhor aceitar, afinal, são pedidos dos próprios clientes do sistema.",
          feedback: "Cumprir pedidos antiéticos é perigoso. O profissional tem responsabilidade ética superior à hierarquia ou ao desejo do cliente (2.4, 3.1).",
        },
        {
          texto: "Manipular dados compromete a confiança e vai contra o propósito do projeto.",
          feedback: "Correto! A honestidade e o compromisso com o bem público devem prevalecer, mesmo diante de pressões externas.",
        },
        {
          texto: "Talvez isso nem afete ninguém diretamente, então pode passar despercebido.",
          feedback: "Pensar que a manipulação de dados pode “passar despercebida” ignora os riscos éticos e sistêmicos envolvidos. A confiança pública depende da integridade dos dados (1.3), e mesmo alterações sutis podem prejudicar políticas públicas e o bem coletivo (3.1).",

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
          feedback: "Incorreta. Privacidade não é um “plus”, é uma obrigação ética e legal. Deixá-la para depois fere o princípio 1.6.",
        },
        {
          texto: "A fala do gestor indica uma prática comum e aceitável em projetos ágeis.",
          feedback: "Incorreta. Pressa não justifica riscos éticos e técnicos. Princípios como 2.5 e 3.6 exigem análise e responsabilidade contínuas.",
        },
        {
          texto: "A privacidade dos usuários deve ser considerada desde o início e não pode ser ignorada em nome da pressa.",
          feedback: "Correta. Privacidade deve ser considerada desde o design do sistema — é parte essencial do desenvolvimento responsável (1.6, 2.5).",
        },
        {
          texto: "Como o gestor é experiente, Juninho deve confiar que ele saberá lidar com isso mais tarde.",
          feedback: "Incorreta. O apelo à autoridade não substitui a responsabilidade individual ética. O Código exige postura crítica mesmo para iniciantes (4.1).",
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
          feedback: "Essa atitude ignora os limites da própria competência e pode gerar novos problemas. O princípio 2.6 afirma que o profissional só deve atuar dentro de sua área de competência. Segurança de dados exige trabalho em equipe e validação de decisões.",
        },
        {
          texto: "Comunica imediatamente a gerente Alana, entregando o relatório técnico.",
          feedback: "Correta. Essa ação demonstra responsabilidade, comunicação clara e compromisso com a integridade do sistema. Está alinhada aos princípios 2.1, 2.9 e 3.6 — além de mostrar respeito à hierarquia apropriada.",
        },
        {
          texto: "Entrega o relatório diretamente ao André, já que foi ele quem pediu.",
          feedback: "Embora pareça coerente, essa escolha pode ser arriscada se André estiver envolvido ou for conivente com os problemas. O profissional deve julgar se é necessário acionar níveis superiores ou instâncias mais neutras, especialmente se houver indícios de negligência.",
        },
        {
          texto: "Finaliza o relatório e não comunica ninguém até que alguém pergunte.",
          feedback: "Omissão é uma forma de conivência com falhas que podem causar sérios danos (1.2). O profissional tem o dever de agir proativamente diante de riscos, conforme indicado nos princípios 2.5 e 4.1.",
        },
      ]
    },
  ]
}
