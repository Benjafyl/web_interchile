export type ServiceIcon =
  "project" | "install" | "maintenance" | "repair" | "parts" | "rental";

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
      "Ingeniería, evaluación e implementación de soluciones HVAC para empresas, retail, industria y comercio.",
    icon: "project",
  },
  {
    title: "Instalación de equipos",
    summary:
      "Instalación de aire acondicionado para domicilios, oficinas, locales comerciales y empresas.",
    icon: "install",
  },
  {
    title: "Mantención preventiva y correctiva",
    summary:
      "Mantención HVAC para continuidad operativa, eficiencia y vida útil de los equipos.",
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
      "Repuestos para sistemas domiciliarios, comerciales e industriales, con apoyo técnico de compatibilidad.",
    icon: "parts",
  },
  {
    title: "Arriendo de equipos compactos",
    summary:
      "Arriendo de equipos de climatización de 150.000 y 300.000 BTU para contingencias, eventos y apoyo temporal.",
    icon: "rental",
  },
];

export const detailedServices: Service[] = [
  {
    title: "Ingeniería y proyectos de climatización",
    summary:
      "Desarrollamos soluciones de climatización para espacios comerciales, industriales, corporativos y técnicos, evaluando necesidades de capacidad, eficiencia y operación.",
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
    title: "Mantención HVAC preventiva y correctiva",
    summary:
      "La mantención preventiva y correctiva ayuda a disminuir fallas, mejorar eficiencia, recuperar rendimiento y prolongar la vida útil de los equipos.",
    icon: "maintenance",
    includes: [
      "Limpieza técnica",
      "Revisión de unidades interiores y exteriores",
      "Revisión de funcionamiento general",
      "Inspección de componentes",
      "Revisión de drenajes",
      "Evaluación de rendimiento",
      "Recomendaciones técnicas",
    ],
  },
  {
    title: "Reparación de sistemas de clima",
    summary:
      "Realizamos diagnóstico y reparación de equipos de climatización para resolver fallas operativas, problemas eléctricos, baja capacidad de enfriamiento u otros inconvenientes técnicos.",
    icon: "repair",
    includes: [
      "Diagnóstico técnico",
      "Reparación de fallas",
      "Cambio de componentes",
      "Revisión de sistemas eléctricos",
      "Prueba operacional",
      "Puesta en marcha posterior a reparación",
    ],
  },
  {
    title: "Suministro de repuestos",
    summary:
      "Apoyamos la continuidad operativa con suministro de repuestos para equipos de distintas capacidades y marcas.",
    icon: "parts",
    includes: [
      "Repuestos para equipos domiciliarios",
      "Repuestos para equipos comerciales",
      "Repuestos para sistemas de mayor capacidad",
      "Evaluación de compatibilidad",
      "Apoyo técnico para selección de componentes",
    ],
  },
  {
    title: "Arriendo de equipos compactos",
    summary:
      "Arriendo de equipos compactos de climatización de 150.000 y 300.000 BTU para contingencias, eventos, comercios, industrias y apoyo temporal.",
    icon: "rental",
    includes: [
      "Equipos compactos 150.000 BTU",
      "Equipos compactos 300.000 BTU",
      "Apoyo temporal para contingencias",
      "Aplicaciones comerciales e industriales",
      "Coordinación de montaje y retiro",
    ],
  },
];
