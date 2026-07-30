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

export type PortfolioCategory = 'Site' | 'Outro';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
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
    category: 'Site',
    thumb: `${SITES}/assai-thumb.png`,
    thumbWidth: 450,
    thumbHeight: 714,
    images: [`${SITES}/assai-1.jpg`],
    description: '<p>Site oficial do Assaí Atacadista, uma das maiores redes de atacarejo do Brasil. Exibe diariamente o catálogo de ofertas, notícias e conteúdos variados. Encontra a loja mais próxima do usuário automaticamente usando geolocalização.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Drupal'],
    link: 'https://www.assai.com.br/',
  },
  {
    id: 'site-churrasco',
    title: 'Churrasco Assaí',
    category: 'Site',
    thumb: `${SITES}/churrasco-thumb.jpg`,
    thumbWidth: 450,
    thumbHeight: 714,
    images: [`${SITES}/churrasco-1.jpg`],
    description: '<p>Site para ação promocional do setor de carnes do Assaí Atacadista. Feito em <b>Wordpress</b>, conta com blog de receitas e dicas de churrasco e um "Churrascômetro", um app para calcular a quantidade de carne, bebidas e outros produtos necessários para um churrasco, feito em <b>VueJS</b>.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'VueJS', 'Wordpress'],
    link: 'https://www.assai.com.br/churrascoassai/',
  },
  {
    id: 'site-truss',
    title: 'Truss Professional',
    category: 'Site',
    thumb: `${SITES}/truss-thumb.jpg`,
    thumbWidth: 450,
    thumbHeight: 270,
    images: [`${SITES}/truss-1.png`],
    description: '<p>Portal destinado a franqueados do grupo <b>Boticário</b>, utilizado como ferramenta de confirmação de recebimento de materiais da marca. Ao escanear um qrcode presente na embalagem, o franqueado é direcionado para este portal onde confirma a chegada do material e tem acesso a outros detalhes da ação promocional.</p>',
    technologies: ['Decnologia 1', 'Tecnologia 2'],
    link: 'https://meupdv.ticcolor.com.br/app/',
  },
  {
    id: 'site-dhlaw',
    title: 'DH Law',
    category: 'Site',
    // Captura da home inteira: é a imagem que dá altura variada à masonry
    thumb: `${SITES}/dhlaw-thumb.jpg`,
    thumbWidth: 450,
    thumbHeight: 1442,
    images: [`${SITES}/dhlaw-1.png`],
    description: '<p>Site para o escritório de advocacia DH Law. Feito em <b>Wordpress</b>, possui versões em <b>inglês e português</b>, <b>área exclusiva para clientes</b> e outras informações como equipe, áreas de atuação, contato e um blog com notícias e artigos sobre direito.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress'],
    link: 'https://dhlaw.com.br/',
  },
  {
    id: 'site-fora',
    title: 'Fora dos Autos',
    category: 'Site',
    thumb: `${SITES}/fora-thumb.jpg`,
    thumbWidth: 450,
    thumbHeight: 876,
    images: [`${SITES}/fora-1.png`],
    description: '<p>Landing page para divulgação do programa <b>Fora dos Autos</b> da <b>Gazeta do Povo</b>. Possui campo para captação de leads e integração com o CRM do jornal.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://especiais.gazetadopovo.com.br/lp/fora-dos-autos/',
  },    
  {
    id: 'site-psicodelia',
    title: 'Psicodelia',
    category: 'Site',
    thumb: `${SITES}/psicodelia-thumb.png`,
    thumbWidth: 450,
    thumbHeight: 714,
    images: [`${SITES}/psicodelia-1.jpg`, `${SITES}/psicodelia-2.jpg`],
    description: '<p>O Psicodelia é um site de notícias sobre música eletrônica e loja de produtos como camisetas, canecas e acessórios. Criei a <b>identidade visual</b>, <b>layout</b> e desenvolvi o site em <b>Wordpress</b> e <b>Woocommerce</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress', 'Woocommerce'],
    link: 'https://psicodelia.org/',
  },
  {
    id: 'site-pura',
    title: 'Pura Web',
    category: 'Site',
    thumb: `${SITES}/pura-thumb.jpg`,
    thumbWidth: 450,
    thumbHeight: 1198,
    images: [`${SITES}/pura-1.jpg`, `${SITES}/pura-3.jpg`],
    description: '<p>Landing page para a agência de marketing digital Pura Web. O objetivo foi destacar o serviço de sites rápidos e de baixo custo. Criei a <b>identidade visual</b>, <b>layout</b> e desenvolvi o site em <b>NextJS</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'NextJS'],
    link: 'https://puraweb.com.br/',
  },
  {
    id: 'site-retail',
    title: 'Portal Retail Media Assaí',
    category: 'Site',
    thumb: `${SITES}/retail-thumb.png`,
    thumbWidth: 450,
    thumbHeight: 714,
    images: [`${SITES}/retail-1.png`],
    description: '<p>Criação de portal para comercialização de espeços publicitários dentro das lojas do Assaí Atacadista.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Drupal'],
    link: 'https://megamidiagroup.com.br/retailmedia10/',
  },
  {
    id: 'site-task',
    title: 'Task List',
    category: 'Site',
    // thumb e interna são o mesmo arquivo
    thumb: `${SITES}/task-thumb.jpg`,
    thumbWidth: 1500,
    thumbHeight: 999,
    images: [`${SITES}/task-1.jpg`, `${SITES}/task-2.jpg`],
    description: '<p>Landing page para o lançamento do Task List, um app para gerenciamento de tarefas e equipes de reposição de produtos em supermercados. Além de programar a página, também criei a <b>identidade visual</b> e <b>layout</b>.</p>',
    technologies: ['Identidade Visual', 'Design', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://ecwd.cloud/task/',
  },
  {
    id: 'detail',
    title: 'Detail - Casa das Capotas',
    category: 'Site',
    // thumb e interna são o mesmo arquivo
    thumb: `${SITES}/detail-thumb.jpg`,
    thumbWidth: 1500,
    thumbHeight: 999,
    images: [`${SITES}/detail-1.jpg`],
    description: '<p>Site institucional para a empresa de estética automotiva <b>Detail - Casa das Capotas</b>. Feito em NextJS integrado com Wordpress, o site contém toda a gama de serviços e especificações de produtos vendidos pela empresa. </p>',
    technologies: ['Design', 'NextJS', 'Wordpress'],
    link: 'https://eliel.dev/detail/',
  },
  {
    id: 'site-fort',
    title: 'Fort Atacadista',
    category: 'Site',
    thumb: `${SITES}/fort-thumb.png`,
    thumbWidth: 450,
    thumbHeight: 714,
    images: [`${SITES}/fort-1.png`],
    description: '<p>Site para a ação promocional <b>Amigo Todo Dia</b> do Fort Atacadista. O site conta com área exclusiva para clientes, formulário integradom com o CRM do Fort além de notícias voltadas para difeerentes atividades de comércio.</p>',
    technologies: ['Design', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress'],
    link: 'https://www.amigotododia.com.br/',
  },


  // ----------------------------------------------------- Projetos pessoais
  {
    id: 'projeto-chat',
    title: 'Chatbot com N8N e OpenAI',
    category: 'Outro',
    thumb: `${PROJETOS}/chat-thumb.jpg`,
    thumbWidth: 1080,
    thumbHeight: 768,
    images: [`${PROJETOS}/chat-1.jpg`],
    description: '<p>Chatbot desenvolvido com N8N e API do ChatGPT, integrado com banco de dados MySQL para responder perguntas específicas sobre casas e apartamentos comercializados por uma imobiliária.</p>',
    technologies: ['N8N', 'ChatGPT', 'React'],
    link: 'https://ecwd.cloud/chatbot/',
  },
  {
    id: 'projeto-churrascometro',
    title: 'Churrascômetro Assaí',
    category: 'Outro',
    // thumb e interna são o mesmo arquivo
    thumb: `${PROJETOS}/churrascometro-thumb.jpg`,
    thumbWidth: 1231,
    thumbHeight: 874,
    images: [`${PROJETOS}/churrascometro-1.jpg`],
    description: '<p>App desenvolvido em VueJS integrado com Wordpress para calcular a quantidade de carne, bebidas e outros produtos necessários para um churrasco.</p>',
    technologies: ['VueJS', 'Wordpress'],
    link: 'https://www.assai.com.br/churrascoassai/',
  },
  {
    id: 'site-mcdonalds',
    title: "Display McDonald's",
    category: 'Outro',
    // thumb e interna são o mesmo arquivo, então a galeria tem uma imagem só
    thumb: `${SITES}/mcdonalds-thumb.jpg`,
    thumbWidth: 1231,
    thumbHeight: 874,
    images: [`${SITES}/mcdonalds-thumb.jpg`],
    description: '<p>Exemplo de display animado feito para o McDonald\'s. A partir de um arquivo de Photoshop, a tela é desenvolvida usando HTML, CSS e JavaScript e é integrada ao sistema de controle de preços e produtos da loa.</p>',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://ecwd.cloud/mcd/',
  },
  {
    id: 'projeto-hublink',
    title: 'HubLink',
    category: 'Outro',
    thumb: `${PROJETOS}/hublink-thumb.jpg`,
    thumbWidth: 1231,
    thumbHeight: 874,
    images: [`${PROJETOS}/hublink-1.jpg`],
    description: '<p>O Hublink surgiu para ser uma alternativa a sistemas como o LinkTree. Funciona como um agregador de links, porém com uma interface mais amigável e mais possibilidades de design na página.</p>',
    technologies: ['Design', 'React', 'NodeJS', 'Prisma', 'MySQL'],
    link: 'https://hublink.ecwd.cloud/',
  },
  {
    id: 'projeto-mapa',
    title: 'Mapa Interativo Assaí',
    category: 'Outro',
    thumb: `${PROJETOS}/mapa-thumb.jpg`,
    thumbWidth: 950,
    thumbHeight: 800,
    images: [`${PROJETOS}/mapa-1.jpg`],
    description: '<p>Mapa interativo desenvolvido em VueJS e integrado ao site oficial do Assaí Atacadista para tornar a localização de lojas mais fácil e intuitiva.</p>',
    technologies: ['VueJS'],
    link: 'https://codepen.io/elielcezar/full/yLGJxKG',
  },
  {
    id: 'projeto-safe',
    title: 'Safe',
    category: 'Outro',
    thumb: `${PROJETOS}/safe-thumb.jpg`,
    thumbWidth: 1080,
    thumbHeight: 768,
    images: [`${PROJETOS}/safe-1.jpg`, `${PROJETOS}/safe-2.jpg`, `${PROJETOS}/safe-3.jpg`],
    description: '<p>Projeto pessoal desenvolvido para gerenciamento de senhas de múltiplos sites e estudo de criptografia.</p>',
    technologies: ['React', 'NodeJS', 'Prisma', 'MySQL'],
    link: 'https://safe.ecwd.cloud/',
  },
  {
    id: 'projeto-scriby',
    title: 'Scriby',
    category: 'Outro',
    thumb: `${PROJETOS}/scriby-thumb.jpg`,
    thumbWidth: 1080,
    thumbHeight: 768,
    images: [`${PROJETOS}/scriby-1.jpg`, `${PROJETOS}/scriby-2.jpg`, `${PROJETOS}/scriby-3.jpg`, `${PROJETOS}/scriby-4.jpg`],
    description: '<p>O Scriby é um projeto de <b>CMS</b> integrado com <b>IA</b> e agregador de feeds de notícias. Em poucos cliques, o usuário consegue transformar a notícia de um site concorrente em um conteúdo totalmente novo e original usando IA. Na ausência de pautas, o sistema também disponibiliza uma janela de chat com IA para geração de conteúdo.</p>',
    technologies: ['Identidade Visual', 'Design', 'React', 'NodeJS', 'Prisma', 'MySQL', 'OpenAI'],
    link: '',
  },
  {
    id: 'projeto-task',
    title: 'Task',
    category: 'Outro',
    thumb: `${PROJETOS}/task-thumb.jpg`,
    thumbWidth: 950,
    thumbHeight: 800,
    images: [`${PROJETOS}/task-1.jpg`, `${PROJETOS}/task-2.jpg`],
    description: '<p>App para gerenciamento de tarefas e equipes de reposição de produtos em supermercados. Criei o projeto completo, desde a identidade visual até o design da interface e a programação em React + ModeJS</p>',
    technologies: ['Identidade Visual', 'Design', 'React', 'NodeJS', 'Prisma', 'MySQL'],
    link: 'https://task.ecwd.cloud',
  },
  {
    id: 'projeto-webcopy',
    title: 'WebCopy',
    category: 'Outro',
    // thumb e interna são o mesmo arquivo
    thumb: `${PROJETOS}/webcopy-thumb.jpg`,
    thumbWidth: 1231,
    thumbHeight: 874,
    images: [`${PROJETOS}/webcopy-1.jpg`],
    description: '<p>Sistema feito em python que realiza a cópia de sites, reorganizando os arquivos de forma a torna-los editáveis por qualquer pessoa.</p>',
    technologies: ['Python'],
    link: 'https://webcopy.ecwd.cloud/',
  },
];

export function getPortfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}
