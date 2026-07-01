export type ServiceIcon =
  | "project"
  | "install"
  | "maintenance"
  | "repair"
  | "parts";

export type Service = {
  title: string;
  summary: string;
  icon: ServiceIcon;
  includes?: string[];
};

export const mainServices: Service[] = [
  {
    title: "Proyectos de climatización",
    summary:
      "Diseño, evaluación e implementación de soluciones HVAC para espacios comerciales, industriales y corporativos.",
    icon: "project",
  },
  {
    title: "Instalación de equipos",
    summary:
      "Instalación de equipos de aire acondicionado para domicilios, oficinas, locales comerciales y empresas.",
    icon: "install",
  },
  {
    title: "Mantención preventiva y correctiva",
    summary:
      "Servicios de mantención para asegurar continuidad operativa, eficiencia y vida útil de los equipos.",
    icon: "maintenance",
  },
  {
    title: "Reparación de sistemas de clima",
    summary:
      "Diagnóstico y reparación de equipos de climatización de distintas capacidades.",
    icon: "repair",
  },
  {
    title: "Suministro de repuestos",
    summary:
      "Provisión de repuestos para equipos de climatización, desde sistemas pequeños hasta unidades de mayor capacidad.",
    icon: "parts",
  },
  {
    title: "Montaje y puesta en marcha",
    summary:
      "Coordinación técnica, instalación, revisión operacional y entrega de sistemas HVAC listos para funcionar.",
    icon: "project",
  },
];

export const detailedServices: Service[] = [
  {
    title: "Ingeniería y proyectos de climatización",
    summary:
      "Desarrollamos soluciones de climatización para espacios comerciales, industriales, corporativos y técnicos, evaluando las necesidades de cada proyecto para proponer sistemas adecuados en capacidad, eficiencia y operación.",
    icon: "project",
    includes: [
      "Evaluación técnica",
      "Levantamiento en terreno",
      "Propuesta de solución HVAC",
      "Dimensionamiento de equipos",
      "Instalación y puesta en marcha",
      "Coordinación técnica del proyecto",
    ],
  },
  {
    title: "Instalación de equipos de aire acondicionado",
    summary:
      "Realizamos instalación de equipos de climatización para domicilios, oficinas, locales comerciales, empresas y espacios de atención a público.",
    icon: "install",
    includes: [
      "Equipos split",
      "Equipos multi split",
      "Equipos comerciales",
      "Equipos de mayor capacidad",
      "Instalación de unidades interiores y exteriores",
      "Canalización, tuberías y puesta en marcha",
    ],
  },
  {
    title: "Mantención preventiva",
    summary:
      "La mantención preventiva permite asegurar el correcto funcionamiento de los sistemas de climatización, disminuir fallas, mejorar la eficiencia y prolongar la vida útil de los equipos.",
    icon: "maintenance",
    includes: [
      "Limpieza de filtros",
      "Revisión de unidades interiores y exteriores",
      "Revisión de funcionamiento general",
      "Inspección de componentes",
      "Revisión de drenajes",
      "Evaluación de rendimiento",
      "Recomendaciones técnicas",
    ],
  },
  {
    title: "Mantención correctiva y reparación",
    summary:
      "Realizamos diagnóstico y reparación de equipos de climatización para resolver fallas operativas, pérdidas de rendimiento, problemas eléctricos, problemas de refrigeración u otros inconvenientes técnicos.",
    icon: "repair",
    includes: [
      "Diagnóstico técnico",
      "Reparación de fallas",
      "Cambio de componentes",
      "Revisión de sistemas eléctricos",
      "Revisión de funcionamiento",
      "Puesta en marcha posterior a reparación",
    ],
  },
  {
    title: "Suministro de repuestos",
    summary:
      "Contamos con experiencia en suministro de repuestos para equipos de climatización de distintas capacidades, apoyando la continuidad operativa de empresas, comercios y sistemas domiciliarios.",
    icon: "parts",
    includes: [
      "Repuestos para equipos pequeños",
      "Repuestos para equipos comerciales",
      "Repuestos para sistemas de mayor capacidad",
      "Evaluación de compatibilidad",
      "Apoyo técnico para selección de componentes",
    ],
  },
];
