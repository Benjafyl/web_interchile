export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  category: string;
};

type ProjectCase = {
  slug: string;
  title: string;
  year: string;
  period: string;
  location: string;
  kind: string;
  description: string;
  heading: string;
  paragraphs: string[];
  scope: string[];
  facts: { label: string; value: string }[];
  cover: ProjectPhoto;
  coverPosition?: string;
  photos: ProjectPhoto[];
  galleryNote: string;
};

const antPhotos: ProjectPhoto[] = [
  {
    src: "/projects/achique-paris-antofagasta-2025/revision-planos.webp",
    alt: "Profesionales con casco revisando planos en la obra de achique de París Antofagasta",
    caption: "Revisión de planos en la obra",
    width: 960,
    height: 1280,
    category: "En terreno",
  },
  {
    src: "/projects/coordinacion-planos-hvac.jpeg",
    alt: "Equipo de Interchile Clima coordinando los planos de la obra en París Antofagasta",
    caption: "Coordinación técnica junto al equipo",
    width: 960,
    height: 1280,
    category: "En terreno",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    alt: "Equipos de climatización y técnicos en la cubierta de París Antofagasta",
    caption: "Instalaciones de climatización en la cubierta",
    width: 960,
    height: 1280,
    category: "En terreno",
  },
  {
    src: "/projects/supervision-equipos-hvac.jpeg",
    alt: "Profesional de Interchile Clima con casco entre las unidades exteriores de París Antofagasta",
    caption: "Supervisión de las instalaciones en Antofagasta",
    width: 960,
    height: 1280,
    category: "En terreno",
  },
];

const costaneraBase = "/projects/costanera-center-paris-2026/";
const costaneraPhotos: ProjectPhoto[] = [
  {
    src: costaneraBase + "estructura-de-montaje.webp",
    alt: "Base metálica de montaje y ductería instaladas sobre las vitrinas de París Costanera Center",
    caption: "Base de montaje y ductos instalados",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
  {
    src: costaneraBase + "base-y-ducto.webp",
    alt: "Estructura de montaje con rejilla metálica bajo un ducto de climatización en las vitrinas de París",
    caption: "Detalle de la estructura y la distribución de aire",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
  {
    src: costaneraBase + "base-instalada.webp",
    alt: "Base metálica y conexiones de ductos en el área técnica de las vitrinas de París Costanera Center",
    caption: "Montaje en el área técnica de vitrinas",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
  {
    src: costaneraBase + "distribucion-ductos.webp",
    alt: "Red de ductos y rejillas de climatización sobre las vitrinas de París en Costanera Center",
    caption: "Distribución de ductos sobre las vitrinas",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
  {
    src: costaneraBase + "ductos-y-rejillas.webp",
    alt: "Detalle de ductos y rejillas instaladas para las vitrinas de París Costanera Center",
    caption: "Ductos y rejillas de la instalación",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
  {
    src: costaneraBase + "acceso-vitrinas.webp",
    alt: "Acceso al sector de vitrinas y a sus instalaciones de climatización en París Costanera Center",
    caption: "El espacio de trabajo en Costanera Center",
    width: 1200,
    height: 1600,
    category: "Bases y ductería",
  },
];

const machineBase = "/projects/portal-temuco-sala-de-maquinas/";
const machinePhotos: ProjectPhoto[] = [
  {
    src: machineBase + "sala-de-equipos.webp",
    alt: "Registro actual de la sala de máquinas ejecutada por Interchile Clima en 2004 en Mall Portal Temuco, con tuberías rojas y azules",
    caption: "Vista actual de la sala de máquinas ejecutada en 2004",
    width: 1280,
    height: 960,
    category: "Sala de máquinas",
  },
  {
    src: machineBase + "equipo-climatizacion.webp",
    alt: "Equipamiento y tuberías de la sala de máquinas de Mall Portal Temuco, fotografiados en 2026",
    caption: "Equipamiento y conexiones de la sala",
    width: 1280,
    height: 960,
    category: "Sala de máquinas",
  },
  {
    src: machineBase + "sistema-bombeo.webp",
    alt: "Bombas y conexiones de la sala de máquinas de Mall Portal Temuco en un registro de 2026",
    caption: "Sistema de bombeo y redes de tuberías",
    width: 960,
    height: 1280,
    category: "Sala de máquinas",
  },
];

export const projectCases: ProjectCase[] = [
  {
    slug: "vitrinas-paris-costanera-center-2026",
    title: "Vitrinas París · Costanera Center",
    year: "2026",
    period: "Enero de 2026",
    location: "Santiago · Costanera Center",
    kind: "Trabajo puntual · Bases de montaje y ductería",
    description:
      "Fabricación e instalación de bases de montaje y ductos para la climatización de las vitrinas de París en Costanera Center, en enero de 2026.",
    heading: "De la fabricación al montaje en vitrinas.",
    paragraphs: [
      "En enero de 2026, Interchile Clima realizó un trabajo puntual para las vitrinas de la tienda París en Costanera Center, Santiago. La intervención se desarrolló en aproximadamente una semana.",
      "El alcance reunió la fabricación e instalación de las bases de montaje y la fabricación, armado e instalación de los ductos de climatización. Al término de los trabajos, los equipos quedaron operativos para impulsar aire hacia las vitrinas.",
    ],
    scope: [
      "Fabricación de bases de montaje",
      "Instalación de las bases en vitrinas",
      "Fabricación, armado e instalación de ductos",
    ],
    facts: [
      { label: "Fecha", value: "Enero de 2026" },
      { label: "Duración aproximada", value: "Una semana" },
      { label: "Espacio", value: "Vitrinas de tienda París" },
    ],
    cover: costaneraPhotos[0],
    coverPosition: "center 55%",
    photos: costaneraPhotos,
    galleryNote:
      "Registro del trabajo de bases de montaje y ductería en las vitrinas de París Costanera Center, 2026.",
  },
  {
    slug: "achique-paris-antofagasta-2025",
    title: "Achique París Antofagasta",
    year: "2025",
    period: "2025",
    location: "Antofagasta",
    kind: "Obra · Adecuación de climatización en retail",
    description:
      "Participación de Interchile Clima en la obra de achique de la tienda París Antofagasta durante 2025. Coordinación técnica y climatización en terreno.",
    heading: "Climatización para una tienda que cambia de escala.",
    paragraphs: [
      "Durante 2025 participamos en la obra de achique de la tienda París en Antofagasta, una intervención asociada a la reducción de su superficie comercial.",
      "Nuestro equipo revisó planos, coordinó los trabajos en terreno y supervisó las instalaciones de climatización. Las fotografías de la cubierta y de las unidades exteriores forman parte del registro de esta misma obra.",
    ],
    scope: [
      "Participación en la obra de achique de tienda",
      "Revisión de planos y coordinación en terreno",
      "Supervisión de instalaciones de climatización",
    ],
    facts: [
      { label: "Año", value: "2025" },
      { label: "Ubicación", value: "París Antofagasta" },
      { label: "Tipo de intervención", value: "Obra de adecuación de tienda" },
    ],
    cover: antPhotos[0],
    coverPosition: "center 40%",
    photos: antPhotos,
    galleryNote:
      "Fotografías de la obra Achique París Antofagasta, 2025. Registro de Interchile Clima.",
  },
  {
    slug: "sala-maquinas-mall-portal-temuco-2004",
    title: "Sala de máquinas · Mall Portal Temuco",
    year: "2004",
    period: "Proyecto ejecutado en 2004",
    location: "Temuco · Región de La Araucanía",
    kind: "Trayectoria · Sala de máquinas de climatización",
    description:
      "Sala de máquinas de Mall Portal Temuco ejecutada por Interchile Clima en 2004. Una historia que continúa con la ampliación del mall en 2026.",
    heading: "Una historia en Portal Temuco que comenzó en 2004.",
    paragraphs: [
      "En 2004 ejecutamos la sala de máquinas de climatización de Mall Portal Temuco. Este trabajo forma parte de la trayectoria de Interchile Clima en instalaciones de mayor escala para centros comerciales.",
      "Veintidós años después, en 2026, volvemos al mismo mall para participar en su ampliación, esta vez con la instalación de ductos y tuberías. Son dos proyectos distintos, separados por el tiempo y unidos por nuestra experiencia en el recinto.",
    ],
    scope: [
      "Ejecución de la sala de máquinas de climatización",
      "Instalaciones y redes de tuberías de la sala",
      "Montaje asociado al sistema de climatización del mall",
    ],
    facts: [
      { label: "Ejecución del proyecto", value: "2004" },
      { label: "Registro fotográfico", value: "Visita de 2026" },
      { label: "Recinto", value: "Mall Portal Temuco" },
    ],
    cover: machinePhotos[0],
    photos: machinePhotos,
    galleryNote:
      "Fotografías tomadas en 2026 de la sala de máquinas ejecutada en 2004. Registro de Interchile Clima.",
  },
];

export const rentalPhotos: ProjectPhoto[] = [
  {
    src: "/projects/arriendo-equipos/traslado-equipos.webp",
    alt: "Equipos compactos de arriendo de Interchile Clima sobre un camión durante una maniobra nocturna",
    caption: "Traslado de nuestros equipos de arriendo",
    width: 1200,
    height: 1600,
    category: "Arriendo",
  },
  {
    src: "/projects/arriendo-equipos/maniobra-equipo-compacto.webp",
    alt: "Equipo compacto de arriendo de Interchile Clima suspendido con una grúa junto al camión",
    caption: "Maniobra de un equipo compacto",
    width: 899,
    height: 1599,
    category: "Arriendo",
  },
  {
    src: "/projects/arriendo-equipos/izaje-equipo-compacto.webp",
    alt: "Grúa elevando un equipo compacto de arriendo de Interchile Clima al atardecer",
    caption: "Izaje de nuestros equipos en terreno",
    width: 900,
    height: 1600,
    category: "Arriendo",
  },
];
