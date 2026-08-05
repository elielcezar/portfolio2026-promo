/**
 * Dados do portfólio.
 *
 * Antes vinham de uma API (Drupal), que foi desativada. Agora são estáticos:
 * as imagens estão em `public/images/portfolio/{sites,projetos}` e os caminhos
 * abaixo são relativos a `public/`.
 *
 * `thumbWidth`/`thumbHeight` são as dimensões reais do arquivo. Elas vão para os
 * atributos `width`/`height` da <img> para o navegador reservar o espaço antes do
 * download — sem isso a masonry (CSS columns) remonta as colunas conforme as
 * imagens carregam.
 *
 * TEXTO PROVISÓRIO: `description` e `technologies` são marcação para substituir.
 * `link` está vazio de propósito — as URLs reais se perderam com a API e não faz
 * sentido inventá-las; o botão "Acesse o site" só aparece quando há link.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  /** Imagem do card na grade */
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  /** Galeria do modal */
  images: string[];
  /** Aceita HTML simples (<p>, <strong>, <a>) — ver estilos em `.modal-content` */
  description: string;
  technologies: string[];
  link: string;
}

const SITES = '/images/portfolio/sites';
const PROJETOS = '/images/portfolio/projetos';

export const portfolioItems: PortfolioItem[] = [
  // ---------------------------------------------------------------- Sites
  {
    id: 'site-assai',
    title: 'Assaí Atacadista',
    thumb: `${SITES}/assai-thumb_v2.png`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/assai-1_v2.jpg`],
    description: '<p>Site oficial do Assaí Atacadista, uma das maiores redes de atacarejo do Brasil. Exibe diariamente o catálogo de ofertas, notícias e conteúdos variados. Encontra a loja mais próxima do usuário automaticamente usando geolocalização.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Drupal'],
    link: 'https://www.assai.com.br/',
  },
  {
    id: 'site-churrasco',
    title: 'Churrasco Assaí',
    thumb: `${SITES}/churrasco-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/churrasco-1_v2.jpg`],
    description: '<p>Site para ação promocional do setor de carnes do Assaí Atacadista. Além do conteúdo com receitas e dicas de churrasco, conta com um "Churrascômetro", um app para calcular a quantidade de carne, bebidas e outros produtos necessários para um churrasco.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'VueJS', 'Wordpress'],
    link: 'https://www.assai.com.br/churrascoassai/',
  },
  {
    id: 'site-dhlaw',
    title: 'DH Law',
    // Captura da home inteira: é a imagem que dá altura variada à masonry
    thumb: `${SITES}/dhlaw-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/dhlaw-1_v2.png`],
    description: '<p>Site para o escritório de advocacia DH Law. Feito em <b>Wordpress</b>, possui versões em <b>inglês e português</b>, <b>área exclusiva para clientes</b> e outras informações como equipe, áreas de atuação, contato e um blog com notícias e artigos sobre direito.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress'],
    link: 'https://dhlaw.com.br/',
  },
  {
    id: 'site-fora',
    title: 'Fora dos Autos',
    thumb: `${SITES}/fora-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/fora-1_v2.png`],
    description: '<p>Landing page para divulgação do programa <b>Fora dos Autos</b> da <b>Gazeta do Povo</b>. Possui campo para captação de leads e integração com o CRM do jornal.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://especiais.gazetadopovo.com.br/lp/fora-dos-autos/',
  },    
  {
    id: 'site-psicodelia',
    title: 'Psicodelia',
    thumb: `${SITES}/psicodelia-thumb2_v2.png`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/psicodelia-1_v2.jpg`, `${SITES}/psicodelia-2_v2.jpg`],
    description: '<p>O Psicodelia é um site de notícias sobre música eletrônica e loja de produtos como camisetas, canecas e acessórios. Criei a <b>identidade visual</b>, <b>layout</b> e desenvolvi o site em <b>Wordpress</b> e <b>Woocommerce</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress', 'Woocommerce'],
    link: 'https://psicodelia.org/',
  },
  {
    id: 'site-pura',
    title: 'Pura Web',
    thumb: `${SITES}/pura-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/pura-1_v2.jpg`, `${SITES}/pura-3_v2.jpg`],
    description: '<p>Landing page para a agência de marketing digital Pura Web. O objetivo foi destacar o serviço de sites rápidos e de baixo custo. Criei a <b>identidade visual</b>, <b>layout</b> e desenvolvi o site em <b>NextJS</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'NextJS'],
    link: 'https://puraweb.com.br/',
  },
  {
    id: 'site-retail',
    title: 'Retail Media Assaí',
    thumb: `${SITES}/retail-thumb_v2.png`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/retail-1_v2.png`],
    description: '<p>Criação de portal para comercialização de espeços publicitários dentro das lojas do Assaí Atacadista.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Drupal'],
    link: 'https://megamidiagroup.com.br/retailmedia10/',
  },
  {
    id: 'site-task',
    title: 'Task List',
    // thumb e interna são o mesmo arquivo
    thumb: `${SITES}/task-thumb2_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/task-1_v2.jpg`, `${SITES}/task-2_v2.jpg`],
    description: '<p>Landing page para o lançamento do Task List, um app para gerenciamento de tarefas e equipes de reposição de produtos em supermercados. Além de programar a página, também criei a <b>identidade visual</b> e <b>layout</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://ecwd.cloud/task/',
  },
  {
    id: 'detail',
    title: 'Casa das Capotas',
    // thumb e interna são o mesmo arquivo
    thumb: `${SITES}/detail-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/detail-1_v2.jpg`],
    description: '<p>Site institucional para a empresa de estética automotiva <b>Detail - Casa das Capotas</b>. Feito em NextJS integrado com Wordpress, o site contém toda a gama de serviços e especificações de produtos vendidos pela empresa. </p>',
    technologies: ['Design', 'NextJS', 'Wordpress'],
    link: 'https://eliel.dev/detail/',
  },
  {
    id: 'site-fort',
    title: 'Fort Atacadista',
    thumb: `${SITES}/fort-thumb_v2.png`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${SITES}/fort-1_v2.png`],
    description: '<p>Site para a ação promocional <b>Amigo Todo Dia</b> do Fort Atacadista. O site conta com área exclusiva para clientes, formulário integradom com o CRM do Fort além de notícias voltadas para difeerentes atividades de comércio.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress'],
    link: 'https://www.amigotododia.com.br/',
  },


  // ----------------------------------------------------- Projetos pessoais
  {
    id: 'projeto-chat',
    title: 'Chatbot + IA',
    thumb: `${PROJETOS}/chat-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${PROJETOS}/chat-1_v2.jpg`],
    description: '<p>Chatbot integrado com a API do ChatGPT e banco de dados do cliente, desenvolvido para responder perguntas específicas sobre casas e apartamentos comercializados por uma imobiliária.</p>',
    technologies: ['N8N', 'ChatGPT', 'React'],
    link: 'https://ecwd.cloud/chatbot/',
  }, 
  {
    id: 'site-mcdonalds',
    title: "McDonald's",
    // thumb e interna são o mesmo arquivo, então a galeria tem uma imagem só
    thumb: `${SITES}/mcdonalds-thumb_v2.jpg`,
    thumbWidth: 1231,
    thumbHeight: 874,
    images: [`${SITES}/mcdonalds-thumb_v2.jpg`],
    description: '<p>Exemplo de display animado feito para o McDonald\'s. A partir de um arquivo de Photoshop, a tela é desenvolvida usando JavaScript e integrada ao sistema de controle de preços e produtos da loja.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://ecwd.cloud/mcd/',
  },
  {
    id: 'projeto-hublink',
    title: 'HubLink',
    thumb: `${PROJETOS}/hublink-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${PROJETOS}/hublink-1_v2.jpg`],
    description: '<p>O Hublink surgiu para ser uma alternativa a sistemas como o LinkTree. Funciona como um agregador de links, porém com uma interface mais amigável e mais possibilidades de design na página.</p>',
    technologies: ['Design', 'React', 'NodeJS', 'Prisma', 'MySQL'],
    link: 'https://hublink.ecwd.cloud/',
  }, 
  {
    id: 'projeto-safe',
    title: 'Safe',
    thumb: `${PROJETOS}/safe-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${PROJETOS}/safe-1_v2.jpg`, `${PROJETOS}/safe-2_v2.jpg`, `${PROJETOS}/safe-3_v2.jpg`],
    description: '<p>Sistema de gerenciamento de senhas de múltiplos sites e usuários com criptografia de ponta a ponta.</p>',
    technologies: ['React', 'NodeJS', 'Prisma', 'MySQL'],
    link: 'https://safe.ecwd.cloud/',
  },
  {
    id: 'projeto-scriby',
    title: 'Scriby',
    thumb: `${PROJETOS}/scriby-thumb_v2.jpg`,
    thumbWidth: 500,
    thumbHeight: 355,
    images: [`${PROJETOS}/scriby-1_v2.jpg`, `${PROJETOS}/scriby-2_v2.jpg`, `${PROJETOS}/scriby-3_v2.jpg`, `${PROJETOS}/scriby-4_v2.jpg`],
    description: '<p>O Scriby é um projeto de <b>CMS</b> integrado com <b>IA</b> e agregador de feeds de notícias. Em poucos cliques, o usuário consegue transformar a notícia de um site concorrente em um conteúdo totalmente novo e original usando IA. Na ausência de pautas, o sistema também disponibiliza uma janela de chat com IA para geração de conteúdo.</p>',
    technologies: ['Identidade Visual', 'Design', 'React', 'NodeJS', 'Prisma', 'MySQL', 'OpenAI'],
    link: '',
  }
];
