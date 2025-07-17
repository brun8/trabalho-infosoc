import { Jogo } from "@/types/jogo";

export const sbc: Jogo = {
  titulo: "O Código Invisível",
  perguntas: [
    {
      pergunta: "Juninho ficou muito animado ao saber que trabalhará em um projeto de modernização das escolas públicas. Diante disso, o que representa uma motivação ética adequada para seu envolvimento?",
      historia: "Juninho irá iniciar seu primeiro dia na empresa Fazemos de Tudo e Mais um Pouco LTDA. Ele precisa chegar às 8h. Então ele acorda cedo, toma seu café da manhã e pega a condução às 7h para chegar no horário. Na empresa, Juninho conhece seus colegas e o time que irá fazer parte. Sua gerente, Alana o apresenta para o desenvolvedor Sênior que irá acompanhá-lo.",
      img_url: "/cap-1-img-1.png",
      resposta: 1,
      opcoes: [
        {
          texto: "Vai ser ótimo para o meu portfólio. Se der tudo certo, consigo um emprego no exterior rapidinho!",
          feedback: "Incorreta. Embora pensar na carreira não seja errado, o princípio 1.1 nos lembra que devemos buscar contribuir para o bem-estar social — e não apenas vantagens pessoais.Embora pensar na carreira não seja errado, o princípio 1.1 nos lembra que devemos buscar contribuir para o bem-estar social — e não apenas vantagens pessoais.",
        },
        {
          texto: "Estou empolgado para aplicar meus conhecimentos e ajudar na melhoria da educação pública.",
          feedback: "Correto! Esse pensamento alinha-se diretamente ao princípio 1.1, que trata da responsabilidade de promover o bem-estar humano e social.",
        },
        {
          texto: "O projeto parece ser interessante. Mas não quero trabalhar com algo envolvendo o setor público. Se fizer algo errado pode estragar minha imagem.",
          feedback: "Incorreta. Esse pensamento demonstra falta de engajamento com o impacto social do projeto, indo contra os princípios 1.1 e 3.1.",
        },
        {
          texto: "Espero que ninguém me peça para fazer coisa difícil. Só quero manter meu emprego.",
          feedback: "Incorreta. Semelhante ao A, aqui ele está pensando mais em si do que no mundo ao seu redor. Além disso, vai contra o 2.7.",
        },
      ]
    },
    {
      pergunta: "O que Juninho deve pensar sobre isso?",
      historia: "André começa a introduzir o sistema para Juninho. Ele vai repassando com calma as regras de negócio e tudo que foi construído até o momento. Juninho ouve atentamente a explicação do André. Ele menciona que algumas escolas pediram para “ajustar” certos dados no sistema para que os indicadores fiquem mais favoráveis, pois isso ajudaria a conseguir mais recursos financeiros do estado.",
      img_url: "/cap-1-img-2-resized.png",
      resposta: 2,
      opcoes: [
        {
          texto: "Se for para beneficiar a escola, não vejo problema em dar uma maquiada.",
          feedback: "Incorreta. Mesmo que a intenção pareça boa, manipular dados é desonesto (1.3) e compromete a integridade do sistema (2.1).",
        },
        {
          texto: "É melhor aceitar, afinal, são pedidos dos próprios clientes do sistema.",
          feedback: "Incorreta. Cumprir pedidos antiéticos é perigoso. O profissional tem responsabilidade ética superior à hierarquia ou ao desejo do cliente (2.4, 3.1).",
        },
        {
          texto: "Manipular dados compromete a confiança e vai contra o propósito do projeto.",
          feedback: "Correto. A honestidade e o compromisso com o bem público devem prevalecer, mesmo diante de pressões externas.",
        },
        {
          texto: "Talvez isso nem afete ninguém diretamente, então pode passar despercebido.",
          feedback: "Incorreta. Pensar que a manipulação de dados pode “passar despercebida” ignora os riscos éticos e sistêmicos envolvidos. A confiança pública depende da integridade dos dados (1.3), e mesmo alterações sutis podem prejudicar políticas públicas e o bem coletivo (3.1).",

        },
      ]
    },
    {
      pergunta: "Diante disso, o que Juninho deve entender sobre a situação?",
      historia: `Juninho não tem certeza se os “ajustes” que André mencionou já foram feitos no sistema. Ele se sente incomodado com a ideia de alterar dados reais. Ao questionar como a privacidade dos dados sensíveis dos alunos será garantida, Juninho ouve do André:
"Não se preocupa com isso agora, Juninho. Nosso foco é entregar rápido."`,
      img_url: "/cap-2-img-1.png",
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
      historia: "Ao término da reunião, André pede que Juninho faça uma análise detalhada sobre como os dados alunos estão sendo armazenados no banco de dados. Juninho acessa o sistema e percebe alguns problemas: dados sem criptografia, permissões abertas a muitos usuários, e tabelas que armazenam informações pessoais e comportamentais sem qualquer anonimização.",
      img_url: "/cap-2-img-2.png",
      resposta: 1,
      opcoes: [
        {
          texto: "Tenta resolver tudo sozinho.",
          feedback: "Incorreta. Essa atitude ignora os limites da própria competência e pode gerar novos problemas. O princípio 2.6 afirma que o profissional só deve atuar dentro de sua área de competência. Segurança de dados exige trabalho em equipe e validação de decisões.",
        },
        {
          texto: "Registra os problemas em um relatório técnico detalhado e envia para André, documentando sua preocupação com segurança.",
          feedback: "Correta. Essa atitude demonstra responsabilidade ética, mesmo sem escalar o problema imediatamente. Documentar a situação cria um registro importante e permite que Juninho atue de forma profissional dentro da sua hierarquia. Princípios 2.1, 2.9 e 4.1.",
        },
        {
          texto: "Comunica o André de forma informal, sem documentação, e sugere que ele tome as providências.",
          feedback: "Incorreta. Comunicação informal sem registro compromete a rastreabilidade e responsabilidade. Mesmo falando com o superior imediato, é essencial manter evidências formais ao relatar riscos técnicos relevantes. Isso está em desacordo com os princípios 2.1 e 4.1.",
        },
        {
          texto: "Finaliza o relatório e não comunica ninguém até que alguém pergunte.",
          feedback: "Incorreta. Omissão é uma forma de conivência com falhas que podem causar sérios danos (1.2). O profissional tem o dever de agir proativamente diante de riscos, conforme indicado nos princípios 2.5 e 4.1.",
        },
      ]
    },
    {
      pergunta: "Como Juninho deve interpretar essa resposta do time?",
      historia: `Juninho percebe que os dados dos alunos estão sendo armazenados sem criptografia e que o sistema não tem proteção contra acessos indevidos. Ele alerta os colegas, mas ouve: “Depois a gente corrige, por enquanto o MVP tem que funcionar.”`,
      img_url: "/cap-3-img-1.png",
      resposta: 3,
      opcoes: [
        {
          texto: "É comum pular etapas em versões iniciais, desde que corrijam depois.",
          feedback: "Incorreta.MVP não justifica falhas éticas graves. Segurança deve ser parte desde o início. Vai contra os princípios 2.1 e 2.9."
        },
        {
          texto: "Entregar rápido é mais importante que se preocupar com segurança agora.",
          feedback: "Incorreta. A entrega não pode comprometer princípios éticos fundamentais."
        },
        {
          texto: "Não é seu papel questionar decisões se ele não for o responsável técnico.",
          feedback: "Incorreta. Todos têm responsabilidade ética, mesmo que não sejam líderes técnicos. O código é dever de todos (4.1)."
        },
        {
          texto: "A falta de segurança em qualquer versão coloca todos os usuários em risco",
          feedback: "Correto. Mesmo em versões iniciais, falhas de segurança podem gerar danos. Isso fere os princípios 2.1, 2.9 e 1.2."
        }
      ]
    },
    {
      pergunta: "O que essa atitute do Juninho representa?",
      historia: "Ao perceber o problema de segurança e a postura omissa da equipe, Juninho lembra de algo que aprendeu na faculdade. Ele então abre o Código de Ética da SBC, que mantém salvo em seu computador, e procura referências sobre o assunto.",
      img_url: "/cap-3-img-2.png",
      resposta: 0,
      opcoes: [
        {
          texto: "Uma demonstração de responsabilidade ética e profissional.",
          feedback: "Correto. Consultar o código mostra zelo, responsabilidade e disposição para agir conforme os princípios (3.4, 4.1).",
        },
        {
          texto: "Um gesto simbólico, mas ineficaz, já que ele não tem poder de decisão.",
          feedback: "Incorreta. O poder de decisão não limita o dever de agir eticamente.",
        },
        {
          texto: "Algo exagerado, pois consultar código de ética em situações do dia a dia é pouco prático.",
          feedback: "Incorreta. O Código de Ética serve exatamente para orientar decisões práticas no cotidiano.",
        },
        {
          texto: "Um comportamento que pode soar pedante ou arrogante para o restante da equipe.",
          feedback: "Incorreta. Ética não é arrogância. Promover conduta ética é um dever coletivo, não um ato individual de superioridade.",
        },
      ]
    },
    {
      pergunta: "O que essa atitude representa em termos éticos?",
      historia: "Juninho, mesmo receoso de sofrer represálias, decide entregar um relatório técnico à gerente do projeto, explicando os riscos de segurança que havia identificado.",
      img_url: "/cap-4-img-1.png",
      resposta: 2,
      opcoes: [
        {
          texto: "Uma atitude precipitada, já que deveria ter esperado mais tempo antes de envolver a gerência.",
          feedback: "Incorreta. Adiar a comunicação de riscos pode causar mais danos. Princípios como 2.4 e 1.2 exigem ação preventiva.",
        },
        {
          texto: "Um comportamento correto, pois observou o desleixo da gerência e agiu se sobrepondo a hierarquia.",
          feedback: "Incorreta. Não foi impulsivo, foi ético e fundamentado. Ele agiu com base em evidências e responsabilidade.",
        },
        {
          texto: "Uma demonstração de honestidade, responsabilidade e compromisso com a sociedade.",
          feedback: "Correto. Juninho demonstrou compromisso com os princípios 1.3, 2.4 e 3.2 ao agir com responsabilidade social.",
        },
        {
          texto: "Algo arriscado, mas necessário apenas quando houver incidentes confirmados.",
          feedback: "Incorreta. A prevenção é parte essencial da ética profissional. Esperar por incidentes para agir viola o princípio de evitar danos (1.2).",
        },
      ]
    },
    {
      pergunta: "Qual a importância dessa escolha?",
      historia: "Juninho observou que uma atitude precisava ser tomada. O projeto é muito importante para ele e para a empresa. Por isso, não apenas relatou os riscos, mas também baseou suas preocupações no Código de Ética da SBC.",
      resposta: 1,
      opcoes: [
        {
          texto: "É uma tentativa de se proteger de punições futuras.",
          feedback: "Incorreta. Mesmo que ofereça proteção, o foco deve ser o bem público. Essa motivação é legítima, mas incompleta se for apenas por autopreservação.",
        },
        {
          texto: "Fortalece a legitimidade de sua posição, mostrando que sua crítica vai além da opinião pessoal.",
          feedback: "Correto! Embasar preocupações técnicas em princípios éticos mostra maturidade, legitimidade e senso de responsabilidade (2.4, 4.1).",
        },
        {
          texto: " É desnecessário. Bastaria relatar o problema com termos técnicos.",
          feedback: "Incorreta. O relato técnico é importante, mas o respaldo ético fortalece a argumentação diante de decisões organizacionais.",
        },
        {
          texto: "Pode ser mal visto pelos colegas, como se estivesse tentando ensinar ética para os outros.",
          feedback: "Incorreta. Esse pensamento reflete uma cultura antiética. Promover os princípios éticos é um dever de todos, não arrogância (3.2).",
        },
      ]
    },
  {
      pergunta: "O que isso demonstra?",
      historia: "Graças à postura ética de Juninho, a gerência conseguiu conversar e ser transparente com o cliente sobre o projeto passar por ajustes. Foi possível corrigir os problemas de segurança e privacidade antes do lançamento.",
      resposta: 0,
      opcoes: [
        {
          texto: "Que princípios éticos aplicados corretamente fortalecem a qualidade e o impacto do sistema.",
          feedback: "Correto. Esse desfecho mostra como ética gera valor, confiança e segurança — alinhado aos princípios 1.2, 1.7, 3.3 e 3.2.",
        },
        {
          texto: "Que é possível adiar decisões técnicas e consertar depois, se houver pressão.",
          feedback: "Incorreta. O problema foi resolvido justamente porque não foi adiado novamente. Ética exige ação oportuna (1.2, 2.1).",
        },
        {
          texto: "Que agir com ética pode comprometer prazos, mas raramente traz retorno visível.",
          feedback: "Incorreta. O retorno foi visível e positivo — inclusive com reconhecimento social. Ética é valor estratégico.",
        },
        {
          texto: "Que a gerência soube esconder os problemas sem afetar a reputação da empresa.",
          feedback: "Incorreta. Seria antiético e irresponsável ignorar os problemas. A solução foi transparente e responsável, não encoberta.",
        },
      ]
    },
    {
      pergunta: "Por que a campanha de conscientização com professores e diretores foi uma boa prática?",
      historia: "A empresa promoveu uma campanha explicando como a plataforma funciona e reforçando a importância da ética na tecnologia. Juninho ficou feliz ao ver que a empresa se preocupava com o impacto social do sistema.",
      resposta: 3,
      opcoes: [
        {
          texto: "Cumprir exigências contratuais e evitar multas.",
          feedback: "Incorreta. A motivação principal aqui não foi contratual, e sim ética.",
        },
        {
          texto: "Ganhar vantagem competitiva sobre outras plataformas.",
          feedback: "Incorreta. O foco não foi competir, mas servir melhor o público — o bem comum é prioridade (3.2).",
        },
        {
          texto: "Criar uma narrativa favorável para marketing institucional.",
          feedback: "Incorreta. Embora o marketing possa se beneficiar, a motivação ética e educativa é o ponto central aqui.",
        },
        {
          texto: "Promover transparência e fortalecer a confiança na solução.",
          feedback: "Correto. Transparência e diálogo com os usuários melhoram a confiança e o impacto social da tecnologia (2.7, 3.3).",
        },
      ]
    }
  ]
}
