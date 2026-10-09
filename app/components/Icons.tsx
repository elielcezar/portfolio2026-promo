/**
 * Ícones de traço do mockup (v2027/index.html), copiados path a path para o
 * desenho bater com o design. O estilo vem das classes `.i`/`.s` em globals.css.
 */

type IconProps = { size?: number; className?: string };

function Stroke({ size = 24, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg className={`i${className ? ` ${className}` : ""}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

export const IconChat = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Stroke>
);

export const IconArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Stroke>
);

export const IconCheck = (p: IconProps) => (
  <Stroke {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Stroke>
);

export const IconUser = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Stroke>
);

export const IconPlus = (p: IconProps) => (
  <Stroke {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Stroke>
);

export const IconMail = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Stroke>
);

export const IconCode = (p: IconProps) => (
  <Stroke {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Stroke>
);

export const IconPen = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </Stroke>
);

export const IconSeo = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <polyline points="8 12.5 10.5 10 12.5 12 14.5 9.5" />
  </Stroke>
);

export const IconBug = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M8 2l1.88 1.88" />
    <path d="M14.12 3.88L16 2" />
    <path d="M9 7.13v-1a3 3 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <path d="M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <path d="M22 13h-4" />
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
  </Stroke>
);

export const IconStar = ({ size = 16 }: IconProps) => (
  <svg className="s" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
