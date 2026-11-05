import type { ServiceIcon } from "./services";

export type ServicePage = {
  slug: string;
  icon: ServiceIcon;
  title: string;
  shortTitle: string;
  description: string;
  quoteService: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  introduction: string[];
  scope: { title: string; text: string }[];
  applications: string[];
  requirements: string[];
  questions: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "ingenieria-proyectos-climatizacion",
    icon: "project",
    title: "Ingeniería y proyectos de climatización",
    shortTitle: "Ingeniería y proyectos HVAC",
    description:
      "Evaluación, dimensionamiento y coordinación de proyectos HVAC para industrias, retail, centros comerciales y empresas en Chile.",
    quoteService: "Proyecto de climatización",
    image: "/projects/portal-temuco-2026/revision-planos.webp",
    imageAlt:
      "Revisión de planos por el equipo de Interchile Clima durante la ampliación de Mall Portal Temuco",
    imageWidth: 960,
    imageHeight: 1280,
    introduction: [
      "Un proyecto de climatización debe responder al uso del edificio, su ocupación y las condiciones de operación. En Interchile Clima evaluamos esos antecedentes antes de proponer equipos o una intervención. Trabajamos con requerimientos industriales, comerciales, corporativos y de retail, con atención coordinada en todo Chile.",
      "Integramos evaluación técnica, levantamiento en terreno, dimensionamiento, instalación y puesta en marcha según el alcance acordado. Para ampliaciones o recambios, revisamos cómo se relacionará la solución con las instalaciones existentes y qué restricciones de acceso, montaje u horarios hay que considerar.",
    ],
    scope: [
      {
        title: "Evaluación y levantamiento",
        text: "Revisamos el tipo de espacio, las condiciones de uso, la capacidad requerida y los antecedentes disponibles del sistema existente.",
      },
      {
        title: "Propuesta de solución HVAC",
        text: "Definimos una alternativa técnica y su dimensionamiento. El presupuesto precisa equipos, trabajos incluidos y condiciones de ejecución.",
      },
      {
        title: "Coordinación e implementación",
        text: "Coordinamos instalación, montaje y puesta en marcha, considerando los accesos y las necesidades de la operación del cliente.",
      },
    ],
    applications: [
      "Ampliaciones y remodelaciones de centros comerciales",
      "Nuevas instalaciones para industrias y empresas",
      "Recambio de equipos en retail y edificios corporativos",
      "Requerimientos de climatización en oficinas y banca",
    ],
    requirements: [
      "Comuna o ciudad y tipo de instalación",
      "Planos, superficie y uso del espacio, si están disponibles",
      "Equipos existentes y motivo del proyecto",
      "Fechas previstas y restricciones de acceso u operación",
    ],
    questions: [
      {
        question:
          "¿Cómo se define la capacidad de climatización de un proyecto?",
        answer:
          "La superficie es un antecedente, pero no basta por sí sola. También influyen el uso del espacio, la ocupación, las condiciones del edificio y la demanda de la operación. El dimensionamiento se define con una evaluación técnica.",
      },
      {
        question: "¿Pueden trabajar en una ampliación con sistemas existentes?",
        answer:
          "Sí. Evaluamos el sistema instalado y las necesidades del nuevo espacio para definir el alcance de la intervención. El registro de la ampliación de Mall Portal Temuco muestra parte de nuestra coordinación en obra.",
      },
      {
        question: "¿La cotización incluye instalación y puesta en marcha?",
        answer:
          "El alcance se especifica en cada propuesta. Indícanos si necesitas ingeniería, suministro, instalación, puesta en marcha o una solución que reúna esas etapas, para que los trabajos incluidos queden claros.",
      },
    ],
  },
  {
    slug: "mantencion-hvac",
    icon: "maintenance",
    title: "Mantención HVAC preventiva y correctiva",
    shortTitle: "Mantención HVAC para empresas",
    description:
      "Mantención de climatización industrial y comercial: revisión de equipos, limpieza técnica y diagnóstico para empresas, retail y oficinas en Chile.",
    quoteService: "Mantención",
    image: "/projects/techo-antofagasta-hvac.jpeg",
    imageAlt:
      "Equipo técnico revisando una instalación de climatización en Antofagasta",
    imageWidth: 960,
    imageHeight: 1280,
    introduction: [
      "La mantención de climatización permite detectar condiciones que afectan el funcionamiento de los equipos y planificar intervenciones antes de que una falla interrumpa la actividad. Atendemos sistemas HVAC de empresas, industrias, retail, centros comerciales y oficinas, además de equipos domiciliarios.",
      "Diferenciamos la mantención preventiva, que se programa según el equipo y sus condiciones de uso, de la correctiva, que aborda una anomalía ya presente. El alcance y la periodicidad se acuerdan después de revisar la instalación; no todos los sistemas necesitan las mismas tareas ni la misma frecuencia.",
    ],
    scope: [
      {
        title: "Limpieza y revisión técnica",
        text: "Limpieza técnica e inspección de unidades interiores, exteriores, componentes y drenajes, según las condiciones del equipo.",
      },
      {
        title: "Evaluación del funcionamiento",
        text: "Revisión de la operación y el rendimiento para identificar síntomas de deterioro o necesidades de diagnóstico adicional.",
      },
      {
        title: "Recomendaciones y coordinación",
        text: "Definimos los trabajos recomendados y coordinamos la intervención de acuerdo con los accesos y horarios de la instalación.",
      },
    ],
    applications: [
      "Operaciones de retail y centros comerciales",
      "Oficinas, sucursales bancarias y atención a público",
      "Instalaciones industriales y empresas",
      "Equipos de aire acondicionado domiciliarios",
    ],
    requirements: [
      "Ubicación y tipo de operación",
      "Cantidad, marca y modelo de los equipos, si se conocen",
      "Historial de mantenciones y fallas observadas",
      "Horarios de funcionamiento y posibilidades de acceso",
    ],
    questions: [
      {
        question:
          "¿Cada cuánto se debe realizar la mantención del aire acondicionado?",
        answer:
          "Depende del equipo, su uso, el ambiente y las recomendaciones del fabricante. Una instalación de alta ocupación puede requerir una programación distinta a la de una oficina con menor uso. Evaluamos esas condiciones para proponer la frecuencia.",
      },
      {
        question: "¿Qué diferencia hay entre mantención y reparación?",
        answer:
          "La mantención busca conservar o recuperar condiciones de funcionamiento mediante revisión y tareas programadas. Una falla específica puede necesitar diagnóstico, reparación o cambio de componentes, con un alcance que se cotiza según su causa.",
      },
      {
        question: "¿Pueden coordinar la mantención de varios equipos?",
        answer:
          "Sí. Indícanos cuántos equipos tienes, dónde están y cuáles son sus horarios de operación. Con esos antecedentes coordinamos la evaluación y una propuesta ajustada a la instalación.",
      },
    ],
  },
  {
    slug: "instalacion-aire-acondicionado",
    icon: "install",
    title: "Instalación de aire acondicionado comercial e industrial",
    shortTitle: "Instalación de climatización",
    description:
      "Instalación y montaje de equipos de climatización para empresas, retail, oficinas e industrias. También atendemos instalaciones domiciliarias.",
    quoteService: "Instalación",
    image: "/projects/izaje-equipo-hvac.jpeg",
    imageAlt:
      "Montaje con grúa de una unidad compacta de climatización de gran capacidad",
    imageWidth: 899,
    imageHeight: 1599,
    introduction: [
      "Instalar un sistema de climatización requiere evaluar tanto el equipo como el lugar donde va a operar. Revisamos capacidad, ubicación de las unidades, canalizaciones, tuberías y condiciones de montaje para definir los trabajos necesarios en cada instalación.",
      "Nuestro foco está en instalaciones comerciales e industriales, retail, oficinas y espacios de atención a público. También instalamos equipos split y multi split para hogares. En equipos de mayor capacidad coordinamos accesos y maniobras de montaje según el proyecto; el registro de Mall Alto Las Condes muestra una de nuestras intervenciones en terreno.",
    ],
    scope: [
      {
        title: "Evaluación de la instalación",
        text: "Revisamos las características del espacio y las condiciones requeridas para ubicar e instalar las unidades.",
      },
      {
        title: "Montaje y conexiones",
        text: "Instalación de unidades interiores y exteriores, canalizaciones y tuberías según la solución y el alcance acordado.",
      },
      {
        title: "Puesta en marcha",
        text: "Comprobamos el funcionamiento del equipo instalado y coordinamos los ajustes que correspondan a la intervención.",
      },
    ],
    applications: [
      "Equipos comerciales y unidades de mayor capacidad",
      "Recambio de climatización en retail e industrias",
      "Oficinas y locales de atención a público",
      "Equipos split y multi split domiciliarios",
    ],
    requirements: [
      "Comuna, tipo de espacio y superficie aproximada",
      "Marca, modelo y capacidad del equipo, si ya lo tienes",
      "Fotografías de la ubicación y los accesos",
      "Plazos previstos y condiciones del sistema actual",
    ],
    questions: [
      {
        question: "¿Instalan equipos que el cliente ya tiene?",
        answer:
          "Podemos evaluar la instalación de un equipo existente. Necesitamos conocer su marca, modelo, capacidad, estado y las condiciones del lugar para confirmar la factibilidad y los trabajos requeridos.",
      },
      {
        question:
          "¿La instalación de un equipo industrial requiere visita técnica?",
        answer:
          "La evaluación en terreno permite revisar accesos, ubicación y condiciones de montaje que no siempre pueden resolverse con fotografías. Coordinamos la visita según la ubicación y la complejidad del requerimiento.",
      },
      {
        question: "¿También realizan instalación domiciliaria?",
        answer:
          "Sí. Instalamos aire acondicionado para hogares, incluidos equipos split y multi split. Indícanos la comuna, el espacio y los antecedentes del equipo para evaluar tu solicitud.",
      },
    ],
  },
  {
    slug: "reparacion-climatizacion",
    icon: "repair",
    title: "Diagnóstico y reparación de climatización",
    shortTitle: "Diagnóstico y reparación HVAC",
    description:
      "Diagnóstico y reparación de aire acondicionado industrial y comercial: fallas de funcionamiento, bajo enfriamiento y cambio de componentes en Chile.",
    quoteService: "Reparación",
    image: "/projects/supervision-equipos-hvac.jpeg",
    imageAlt:
      "Inspección técnica de equipos de climatización por Interchile Clima",
    imageWidth: 960,
    imageHeight: 1280,
    introduction: [
      "Cuando un equipo no enfría como antes, se detiene o presenta una falla, lo primero es identificar su causa. Realizamos diagnóstico y reparación de sistemas de climatización para empresas, industrias y espacios comerciales, y también atendemos equipos domiciliarios.",
      "Una baja de rendimiento puede tener distintas causas; no corresponde indicar un repuesto o una reparación sin revisar el sistema. Evaluamos el funcionamiento y los componentes involucrados para proponer una intervención y comprobar su operación después del trabajo. Los repuestos y plazos dependen del diagnóstico y de la disponibilidad confirmada.",
    ],
    scope: [
      {
        title: "Diagnóstico técnico",
        text: "Revisión de síntomas, condiciones de funcionamiento y antecedentes de la falla para identificar qué necesita el sistema.",
      },
      {
        title: "Reparación y componentes",
        text: "Intervención de la falla y cambio de componentes cuando el diagnóstico lo requiera, previa definición del alcance.",
      },
      {
        title: "Prueba operacional",
        text: "Revisión del funcionamiento posterior a la reparación y de las recomendaciones que correspondan al equipo.",
      },
    ],
    applications: [
      "Equipos con baja capacidad de enfriamiento",
      "Sistemas que se detienen o no arrancan",
      "Fallas operativas o eléctricas de climatización",
      "Requerimientos de recuperación de equipos comerciales e industriales",
    ],
    requirements: [
      "Ubicación y tipo de instalación",
      "Marca, modelo y fotografía de la placa del equipo",
      "Síntomas o códigos de error y cuándo comenzaron",
      "Intervenciones recientes y condiciones de acceso",
    ],
    questions: [
      {
        question: "¿Pueden cotizar una reparación solo con el código de error?",
        answer:
          "El código ayuda a orientar la evaluación, pero no siempre identifica por sí solo la causa. Podemos revisar los antecedentes y definir si corresponde una visita de diagnóstico antes de cotizar la reparación.",
      },
      {
        question: "¿Qué información acelera la evaluación de una falla?",
        answer:
          "La ubicación, marca y modelo, una foto de la placa y una descripción del problema ayudan a preparar la revisión. Puedes compartir fotografías o videos por WhatsApp sin intervenir el equipo.",
      },
      {
        question:
          "¿Hay una alternativa temporal mientras se repara el sistema?",
        answer:
          "Podemos evaluar arriendo de equipos compactos de 150.000 o 300.000 BTU. La capacidad, instalación y disponibilidad se confirman según las condiciones de cada operación; no todas las instalaciones admiten el mismo apoyo temporal.",
      },
    ],
  },
  {
    slug: "repuestos-climatizacion",
    icon: "parts",
    title: "Suministro de repuestos para climatización",
    shortTitle: "Repuestos para sistemas HVAC",
    description:
      "Apoyo técnico para identificar y cotizar repuestos de climatización industrial, comercial y domiciliaria. Evaluación de compatibilidad según el equipo.",
    quoteService: "Repuestos",
    image: "/projects/unidades-exteriores-techo.webp",
    imageAlt: "Unidades exteriores de un sistema de climatización comercial",
    imageWidth: 1440,
    imageHeight: 1920,
    introduction: [
      "Para reemplazar un componente hay que identificar el equipo y confirmar su compatibilidad. Apoyamos a empresas, industrias y comercios en la evaluación y el suministro de repuestos para sistemas de climatización de distintas capacidades y marcas.",
      "Trabajamos a partir de los antecedentes del equipo y de la pieza requerida. La disponibilidad, las características y los plazos se confirman en la cotización. Si la falla todavía no ha sido diagnosticada, podemos evaluar primero el sistema para evitar solicitar un componente que no resuelva el problema.",
    ],
    scope: [
      {
        title: "Identificación del requerimiento",
        text: "Revisamos marca, modelo, placa y antecedentes de la pieza para orientar la búsqueda del repuesto.",
      },
      {
        title: "Compatibilidad técnica",
        text: "Contrastamos las características del componente y del equipo antes de definir una alternativa de suministro.",
      },
      {
        title: "Cotización y coordinación",
        text: "Confirmamos disponibilidad, plazos y condiciones de entrega. Si necesitas instalación, su alcance se evalúa por separado.",
      },
    ],
    applications: [
      "Equipos de climatización industrial y comercial",
      "Unidades de oficinas, locales y empresas",
      "Sistemas de mayor capacidad",
      "Equipos domiciliarios según compatibilidad",
    ],
    requirements: [
      "Marca y modelo del equipo",
      "Fotografía legible de la placa técnica",
      "Código, descripción o foto del repuesto",
      "Ciudad de entrega y si requieres instalación o diagnóstico",
    ],
    questions: [
      {
        question: "¿Qué necesito enviar para cotizar un repuesto?",
        answer:
          "Envía marca y modelo del equipo, una fotografía de su placa y el código o una foto de la pieza. Si tienes un diagnóstico previo, compártelo para revisar el requerimiento con más contexto.",
      },
      {
        question: "¿Tienen repuestos para todas las marcas?",
        answer:
          "La compatibilidad y disponibilidad se revisan para cada solicitud. No publicamos stock universal ni confirmamos una pieza antes de identificar correctamente el equipo.",
      },
      {
        question: "¿El suministro incluye el cambio del componente?",
        answer:
          "La cotización indica qué está incluido. Si también necesitas diagnóstico o instalación, solicítalo al enviar el requerimiento para evaluar una propuesta con ese alcance.",
      },
    ],
  },
];

export { serviceHref, quoteHref } from "./service-links";
