export type ServiceIcon =
  | "project"
  | "install"
  | "maintenance"
  | "repair"
  | "parts"
  | "rental";

export type Service = {
  title: string;
  summary: string;
  icon: ServiceIcon;
  includes?: string[];
};

export const mainServices: Service[] = [
  {
    title: "Proyectos de climatizacion",
    summary:
      "Ingenieria, evaluacion e implementacion de soluciones HVAC para empresas, retail, industria y comercio.",
    icon: "project",
  },
  {
    title: "Instalacion de equipos",
    summary:
      "Instalacion de aire acondicionado para domicilios, oficinas, locales comerciales y empresas.",
    icon: "install",
  },
  {
    title: "Mantencion preventiva y correctiva",
    summary:
      "Mantencion HVAC para continuidad operativa, eficiencia y vida util de los equipos.",
    icon: "maintenance",
  },
  {
    title: "Reparacion de sistemas de clima",
    summary:
      "Diagnostico y reparacion de equipos de climatizacion de distintas capacidades.",
    icon: "repair",
  },
  {
    title: "Suministro de repuestos",
    summary:
      "Repuestos para sistemas domiciliarios, comerciales e industriales, con apoyo tecnico de compatibilidad.",
    icon: "parts",
  },
  {
    title: "Arriendo de equipos compactos",
    summary:
      "Arriendo de equipos de climatizacion de 150.000 y 300.000 BTU para contingencias, eventos y apoyo temporal.",
    icon: "rental",
  },
];

export const detailedServices: Service[] = [
  {
    title: "Ingenieria y proyectos de climatizacion",
    summary:
      "Desarrollamos soluciones de climatizacion para espacios comerciales, industriales, corporativos y tecnicos, evaluando necesidades de capacidad, eficiencia y operacion.",
    icon: "project",
    includes: [
      "Evaluacion tecnica",
      "Levantamiento en terreno",
      "Propuesta de solucion HVAC",
      "Dimensionamiento de equipos",
      "Instalacion y puesta en marcha",
      "Coordinacion tecnica del proyecto",
    ],
  },
  {
    title: "Instalacion de equipos de aire acondicionado",
    summary:
      "Realizamos instalacion de equipos de climatizacion para domicilios, oficinas, locales comerciales, empresas y espacios de atencion a publico.",
    icon: "install",
    includes: [
      "Equipos split",
      "Equipos multi split",
      "Equipos comerciales",
      "Equipos de mayor capacidad",
      "Instalacion de unidades interiores y exteriores",
      "Canalizacion, tuberias y puesta en marcha",
    ],
  },
  {
    title: "Mantencion HVAC preventiva y correctiva",
    summary:
      "La mantencion preventiva y correctiva ayuda a disminuir fallas, mejorar eficiencia, recuperar rendimiento y prolongar la vida util de los equipos.",
    icon: "maintenance",
    includes: [
      "Limpieza tecnica",
      "Revision de unidades interiores y exteriores",
      "Revision de funcionamiento general",
      "Inspeccion de componentes",
      "Revision de drenajes",
      "Evaluacion de rendimiento",
      "Recomendaciones tecnicas",
    ],
  },
  {
    title: "Reparacion de sistemas de clima",
    summary:
      "Realizamos diagnostico y reparacion de equipos de climatizacion para resolver fallas operativas, problemas electricos, baja capacidad de enfriamiento u otros inconvenientes tecnicos.",
    icon: "repair",
    includes: [
      "Diagnostico tecnico",
      "Reparacion de fallas",
      "Cambio de componentes",
      "Revision de sistemas electricos",
      "Prueba operacional",
      "Puesta en marcha posterior a reparacion",
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
      "Evaluacion de compatibilidad",
      "Apoyo tecnico para seleccion de componentes",
    ],
  },
  {
    title: "Arriendo de equipos compactos",
    summary:
      "Arriendo de equipos compactos de climatizacion de 150.000 y 300.000 BTU para contingencias, eventos, comercios, industrias y apoyo temporal.",
    icon: "rental",
    includes: [
      "Equipos compactos 150.000 BTU",
      "Equipos compactos 300.000 BTU",
      "Apoyo temporal para contingencias",
      "Aplicaciones comerciales e industriales",
      "Coordinacion de montaje y retiro",
    ],
  },
];
