import { useState } from "react";

// ============================================================
// DICCIONARIO COMPLETO BUK — 7 Transversales + 15 Específicas
// ============================================================
const DICCIONARIO = [
  { id:"proactividad", nombre:"Proactividad", tipo:"transversal", color:"#4F46E5", colorLight:"#EEF2FF",
    definicion:"Capacidad para tomar la iniciativa y adelantarse a diferentes situaciones, identificando oportunidades de mejora.",
    indicadores:["Trabaja de manera independiente y autónoma, sin supervisión constante","Se anticipa a diferentes situaciones y problemas","Persevera ante lo que se propone y no se rinde frente a dificultades","Identifica oportunidades de mejora cuestionando la forma actual de hacer las cosas","Busca hacer más de lo requerido, creando espacios para nuevas oportunidades"]
  },
  { id:"trabajo_colaborativo", nombre:"Trabajo Colaborativo", tipo:"transversal", color:"#0891B2", colorLight:"#ECFEFF",
    definicion:"Capacidad para trabajar de manera conjunta y coordinada con las distintas personas de la organización, creando relaciones de confianza.",
    indicadores:["Identifica los objetivos grupales como propios","Considera y respeta las opiniones de los demás","Entrega su conocimiento y experiencia al servicio del equipo y otras áreas","Participa activamente en la búsqueda de nuevas ideas","Promueve el trabajo en red","Expresa satisfacción por los éxitos de otros"]
  },
  { id:"orientacion_servicio", nombre:"Orientación al Servicio", tipo:"transversal", color:"#D97706", colorLight:"#FFFBEB",
    definicion:"Capacidad para comprender, identificar y satisfacer las necesidades de clientes internos y externos.",
    indicadores:["Identifica y comprende las necesidades de sus clientes","Busca entregar soluciones efectivas","Genera mejoras basadas en retroalimentación de clientes","Considera al cliente interno y externo en la toma de decisiones","Inspira a otros a ofrecer experiencias de excelencia"]
  },
  { id:"compromiso_organizacional", nombre:"Compromiso Organizacional", tipo:"transversal", color:"#059669", colorLight:"#ECFDF5",
    definicion:"Capacidad para identificarse y comprometerse con los valores organizacionales.",
    indicadores:["Muestra comportamiento alineado a la cultura y valores","Genera un sentido de pertenencia hacia la organización","Vive los valores de la organización como propios","Entrega un esfuerzo más allá de lo solicitado","Es referente y motiva a otros a fortalecer el compromiso"]
  },
  { id:"comunicacion_efectiva", nombre:"Comunicación Efectiva", tipo:"transversal", color:"#7C3AED", colorLight:"#F5F3FF",
    definicion:"Capacidad de transmitir la información de manera clara y oportuna, siendo capaz de escuchar y entender al otro.",
    indicadores:["Escucha y comprende la perspectiva del otro","Expresa sus ideas de manera asertiva y clara","Identifica el momento adecuado para exponer sus ideas","Promueve y genera instancias de comunicación para toda la organización"]
  },
  { id:"excelencia", nombre:"Excelencia", tipo:"transversal", color:"#B45309", colorLight:"#FEF3C7",
    definicion:"Capacidad para realizar un trabajo acorde a los estándares de calidad de la organización, promoviendo la mejora continua.",
    indicadores:["Entrega trabajo de alta calidad orientado a los estándares de excelencia","Incorpora la mejora continua en su ámbito de acción","Busca constantemente nuevos aprendizajes","Demuestra interés en proyectos desafiantes","Gestiona efectivamente entornos complejos","Promueve una cultura de perseverancia y mejora continua"]
  },
  { id:"adaptacion_cambio", nombre:"Adaptación al Cambio", tipo:"transversal", color:"#DC2626", colorLight:"#FEF2F2",
    definicion:"Capacidad para comprender y adaptarse a los cambios organizacionales, entendiéndolos como oportunidades de mejora.",
    indicadores:["Identifica y entiende rápidamente los cambios del entorno","Supera rápidamente la resistencia al cambio","Busca formas alternativas y creativas para afrontar los cambios","Es promotor del cambio e influye en otros para adaptarse"]
  },
  { id:"liderazgo_equipos", nombre:"Liderazgo de Equipos", tipo:"especifica", color:"#0F766E", colorLight:"#F0FDFA",
    definicion:"Capacidad para guiar e inspirar a otros a entregar lo mejor de sí, potenciando la motivación y el compromiso.",
    indicadores:["Genera una cultura de aprendizaje continuo","Crea un ambiente de confianza e inclusivo","Equilibra la orientación a las personas y a los resultados","Promueve la eficiencia del equipo diseñando mecanismos de motivación","Está atento a las necesidades de su equipo"]
  },
  { id:"innovacion_creatividad", nombre:"Innovación y Creatividad", tipo:"especifica", color:"#9333EA", colorLight:"#FAF5FF",
    definicion:"Capacidad para detectar oportunidades y crear soluciones originales que agreguen valor a la organización.",
    indicadores:["Propone nuevas formas de trabajo y mejoras en procesos","Plantea soluciones innovadoras a problemas imprevistos","Identifica oportunidades de mejora con soluciones originales","Impulsa la transformación del negocio","Promueve y motiva a otros a desarrollar propuestas innovadoras"]
  },
  { id:"integridad", nombre:"Integridad", tipo:"especifica", color:"#1D4ED8", colorLight:"#EFF6FF",
    definicion:"Capacidad para actuar acorde con lo que se dice, siendo honesto, respetuoso y objetivo.",
    indicadores:["Genera relaciones de confianza duraderas","Toma decisiones objetivas sin favoritismos","Actúa con honestidad y respeto en situaciones complejas","Reconoce sus errores y trabaja para enmendarlos","Respeta la confidencialidad de la información"]
  },
  { id:"resiliencia", nombre:"Resiliencia", tipo:"especifica", color:"#C2410C", colorLight:"#FFF7ED",
    definicion:"Capacidad para enfrentar situaciones complejas con una actitud positiva y perseverante.",
    indicadores:["Persevera en objetivos a pesar de dificultades","Posee actitud positiva ante situaciones complejas","Demuestra flexibilidad ante cambios","Reconoce y celebra sus logros","Convierte las dificultades en oportunidades"]
  },
  { id:"desarrollo_personas", nombre:"Desarrollo de Personas", tipo:"especifica", color:"#0369A1", colorLight:"#F0F9FF",
    definicion:"Capacidad de buscar mejoras en su desempeño y nuevos aprendizajes que le permitan desarrollarse laboralmente.",
    indicadores:["Muestra interés por mejorar su desempeño","Busca autónomamente nuevos conocimientos","Transmite sus conocimientos a otros","Participa en proyectos que contribuyan a su desarrollo","Promueve instancias de aprendizaje con su equipo"]
  },
  { id:"accountability", nombre:"Accountability / Responsabilidad", tipo:"especifica", color:"#4D7C0F", colorLight:"#F7FEE7",
    definicion:"Capacidad para cumplir con su trabajo y con los compromisos adquiridos.",
    indicadores:["Cumple compromisos informando a tiempo las dificultades","Se compromete con los objetivos organizacionales","Se anticipa a las dificultades","Trabaja sin supervisión constante","Asume la responsabilidad de sus acciones"]
  },
  { id:"inteligencia_emocional", nombre:"Inteligencia Emocional", tipo:"especifica", color:"#BE185D", colorLight:"#FDF2F8",
    definicion:"Capacidad de gestionar las emociones de manera proactiva, tanto las propias como las de otros.",
    indicadores:["Identifica sus fortalezas y debilidades","Gestiona sus emociones y controla sus impulsos","Construye un ambiente de confianza","Actúa con templanza en situaciones difíciles","Fomenta una cultura de Accountability"]
  },
  { id:"vision_sistemica", nombre:"Visión Sistémica", tipo:"especifica", color:"#6B21A8", colorLight:"#FAF5FF",
    definicion:"Capacidad para comprender a la organización como un sistema integral donde las decisiones tienen impacto global.",
    indicadores:["Comprende cómo sus acciones impactan en otras áreas","Toma decisiones considerando el impacto organizacional","Se anticipa a dificultades con perspectiva global","Promueve una cultura de responsabilidad integral"]
  },
  { id:"orientacion_resultados", nombre:"Orientación a Resultados", tipo:"especifica", color:"#065F46", colorLight:"#ECFDF5",
    definicion:"Capacidad para cumplir con los objetivos del cargo con el estándar de calidad determinado por la organización.",
    indicadores:["Cumple los objetivos de su cargo con estándares de excelencia","Establece objetivos ambiciosos y se esfuerza por alcanzarlos","Orienta su accionar hacia el logro de metas","Delega tareas para la consecución de los objetivos","Trabaja colaborativamente para cumplir metas propias y del equipo"]
  },
  { id:"planificacion_organizacion", nombre:"Planificación y Organización", tipo:"especifica", color:"#1E40AF", colorLight:"#EFF6FF",
    definicion:"Capacidad para determinar eficazmente las metas y prioridades de su tarea, estipulando acción, plazos y recursos.",
    indicadores:["Gestiona eficientemente el tiempo para cumplir sus funciones","Se anticipa a posibles obstáculos","Resuelve problemas con perspectiva de mediano y largo plazo","Determina sentido de urgencia y desafía tiempos de ejecución"]
  },
  { id:"autonomia_iniciativa", nombre:"Autonomía e Iniciativa", tipo:"especifica", color:"#7C2D12", colorLight:"#FFF7ED",
    definicion:"Capacidad del colaborador para actuar buscando solucionar problemáticas y generando oportunidades de mejora.",
    indicadores:["Presenta autonomía e iniciativa frente a decisiones bajo su ámbito","Actúa proactivamente buscando solucionar conflictos","Actúa con decisión y firmeza en situaciones de crisis","Promueve y motiva a otros a actuar con autonomía"]
  },
  { id:"gestion_tiempo", nombre:"Gestión del Tiempo", tipo:"especifica", color:"#334155", colorLight:"#F8FAFC",
    definicion:"Capacidad para distribuir y organizar eficientemente el tiempo, definiendo prioridades para cumplir objetivos.",
    indicadores:["Organiza y planifica su trabajo de manera eficaz","Gestiona su tiempo para cumplir plazos establecidos","Establece prioridades para el cumplimiento de objetivos","Diseña estrategias que optimizan el tiempo de ejecución","Prioriza tareas según urgencia e importancia"]
  },
  { id:"competencia_digital", nombre:"Competencia Digital", tipo:"especifica", color:"#0284C7", colorLight:"#F0F9FF",
    definicion:"Capacidad para interactuar con los medios digitales, adaptándose a los cambios que se puedan generar.",
    indicadores:["Interactúa con medios digitales con facilidad","Es flexible y se adapta a nuevas tecnologías","Reconoce sus brechas tecnológicas y trabaja para superarlas","Actualiza proactivamente sus conocimientos digitales"]
  },
  { id:"negociacion", nombre:"Negociación", tipo:"especifica", color:"#92400E", colorLight:"#FFFBEB",
    definicion:"Capacidad para construir espacios de colaboración y confianza que favorezcan la concreción de acuerdos.",
    indicadores:["Identifica y comprende las necesidades de su contraparte","Construye espacios de colaboración y confianza","Redefine estrategias para alcanzar sus objetivos","Persuade e influye en otros para alcanzar acuerdos convenientes"]
  },
  { id:"pensamiento_critico", nombre:"Pensamiento Crítico y Análisis", tipo:"especifica", color:"#3730A3", colorLight:"#EEF2FF",
    definicion:"Capacidad para tomar decisiones y solucionar problemas complejos de manera objetiva a partir del análisis de información.",
    indicadores:["Busca y analiza diversas fuentes de información","Determina la relevancia de la información analizada","Toma decisiones de manera imparcial y objetiva","Cuestiona la forma actual de hacer las cosas","Impulsa al equipo a generar instancias de cuestionamiento"]
  }
];

// ============================================================
// MOTOR DE RECOMENDACIONES — Sin API, basado en reglas
// ============================================================

// Keywords por industria → competencias priorizadas
const INDUSTRY_RULES = {
  "Tecnología / Software":          { top:["innovacion_creatividad","competencia_digital","adaptacion_cambio","trabajo_colaborativo","autonomia_iniciativa"], extra:"El sector tech valora la innovación constante y la autonomía técnica." },
  "Servicios Financieros / Banca":  { top:["integridad","orientacion_resultados","pensamiento_critico","orientacion_servicio","gestion_tiempo"], extra:"El sector financiero exige integridad, análisis riguroso y orientación al cliente." },
  "Salud / Clínicas":               { top:["orientacion_servicio","comunicacion_efectiva","trabajo_colaborativo","resiliencia","integridad"], extra:"En salud la comunicación efectiva y la resiliencia ante situaciones críticas son esenciales." },
  "Educación":                      { top:["desarrollo_personas","comunicacion_efectiva","compromiso_organizacional","innovacion_creatividad","trabajo_colaborativo"], extra:"El sector educativo prioriza el desarrollo de personas y la comunicación efectiva." },
  "Retail / Comercio":              { top:["orientacion_servicio","adaptacion_cambio","orientacion_resultados","trabajo_colaborativo","negociacion"], extra:"El retail requiere fuerte orientación al cliente y capacidad de adaptación rápida." },
  "Manufactura / Industria":        { top:["planificacion_organizacion","orientacion_resultados","gestion_tiempo","trabajo_colaborativo","accountability"], extra:"La manufactura demanda planificación rigurosa y orientación consistente a resultados." },
  "Consultoría / Servicios Profesionales": { top:["pensamiento_critico","orientacion_servicio","comunicacion_efectiva","negociacion","innovacion_creatividad"], extra:"La consultoría exige pensamiento analítico y comunicación de alto nivel con clientes." },
  "Construcción / Inmobiliaria":    { top:["planificacion_organizacion","liderazgo_equipos","orientacion_resultados","gestion_tiempo","accountability"], extra:"La construcción requiere planificación estricta y liderazgo de equipos en terreno." },
  "Logística / Transporte":         { top:["planificacion_organizacion","gestion_tiempo","orientacion_resultados","adaptacion_cambio","trabajo_colaborativo"], extra:"En logística la gestión del tiempo y la planificación son competencias críticas." },
  "Alimentos y Bebidas":            { top:["orientacion_servicio","orientacion_resultados","trabajo_colaborativo","adaptacion_cambio","excelencia"], extra:"El sector alimentario combina orientación al cliente con altos estándares de calidad." },
  "Energía / Utilities":            { top:["planificacion_organizacion","vision_sistemica","integridad","orientacion_resultados","liderazgo_equipos"], extra:"El sector energético requiere visión sistémica y planificación de largo plazo." },
  "Gobierno / Sector Público":      { top:["integridad","compromiso_organizacional","comunicacion_efectiva","orientacion_servicio","vision_sistemica"], extra:"El sector público prioriza la integridad y el compromiso con el bien común." },
  "ONG / Sin fines de lucro":       { top:["compromiso_organizacional","orientacion_servicio","resiliencia","trabajo_colaborativo","comunicacion_efectiva"], extra:"Las ONG destacan el compromiso organizacional y la resiliencia ante la escasez de recursos." },
  "Otro":                           { top:["trabajo_colaborativo","orientacion_resultados","comunicacion_efectiva","adaptacion_cambio","compromiso_organizacional"], extra:"Se recomiendan las competencias más universales para comenzar." }
};

// Keywords de cultura → boost de competencias
const CULTURE_KEYWORDS = [
  { words:["innov","creativ","disrupt","startup"],      boost:["innovacion_creatividad","autonomia_iniciativa","adaptacion_cambio"] },
  { words:["cliente","servicio","experiencia","user"],  boost:["orientacion_servicio","comunicacion_efectiva","negociacion"] },
  { words:["equipo","colabor","colectiv","juntos"],      boost:["trabajo_colaborativo","comunicacion_efectiva","desarrollo_personas"] },
  { words:["result","meta","objetivo","kpi","logro"],    boost:["orientacion_resultados","planificacion_organizacion","accountability"] },
  { words:["calidad","excelencia","estándar","proceso"], boost:["excelencia","planificacion_organizacion","orientacion_resultados"] },
  { words:["líder","jefatura","gerencia","dirección"],   boost:["liderazgo_equipos","vision_sistemica","desarrollo_personas"] },
  { words:["integridad","ética","confianza","transpar"], boost:["integridad","compromiso_organizacional","accountability"] },
  { words:["digital","tecnolog","datos","software"],     boost:["competencia_digital","innovacion_creatividad","pensamiento_critico"] },
  { words:["autonomía","independ","ownership","propio"], boost:["autonomia_iniciativa","proactividad","accountability"] },
  { words:["aprend","desarrollo","crecer","formación"],  boost:["desarrollo_personas","excelencia","innovacion_creatividad"] },
  { words:["ágil","agile","rápido","dinámico","veloz"],  boost:["adaptacion_cambio","autonomia_iniciativa","gestion_tiempo"] },
  { words:["persona","bienestar","humano","cercan"],     boost:["inteligencia_emocional","comunicacion_efectiva","desarrollo_personas"] }
];

// Objective → boost
const OBJECTIVE_RULES = {
  "feedback":        ["desarrollo_personas","comunicacion_efectiva"],
  "rendimiento":     ["orientacion_resultados","planificacion_organizacion"],
  "decisiones_rrhh": ["orientacion_resultados","liderazgo_equipos"],
  "capacitacion":    ["desarrollo_personas","excelencia"],
  "motivacion":      ["liderazgo_equipos","inteligencia_emocional","compromiso_organizacional"],
  "aprendizaje":     ["desarrollo_personas","innovacion_creatividad","excelencia"],
  "lideres":         ["liderazgo_equipos","vision_sistemica","desarrollo_personas"],
  "objetivos_claros":["planificacion_organizacion","orientacion_resultados","accountability"]
};

function buildTransversalesRecs(formData) {
  const scores = {};
  DICCIONARIO.forEach(c => { scores[c.id] = 0; });

  // 1. Industry rules
  const rule = INDUSTRY_RULES[formData.industria] || INDUSTRY_RULES["Otro"];
  rule.top.forEach((id, i) => { if (scores[id] !== undefined) scores[id] += (10 - i * 1.5); });

  // 2. Culture keyword boost
  const culturaLower = (formData.cultura + " " + formData.valores).toLowerCase();
  CULTURE_KEYWORDS.forEach(({ words, boost }) => {
    if (words.some(w => culturaLower.includes(w))) {
      boost.forEach(id => { if (scores[id] !== undefined) scores[id] += 4; });
    }
  });

  // 3. Objective boost
  formData.objetivos.forEach(obj => {
    (OBJECTIVE_RULES[obj] || []).forEach(id => { if (scores[id] !== undefined) scores[id] += 3; });
  });

  // 4. Always include core transversales with base score
  ["proactividad","trabajo_colaborativo","compromiso_organizacional","adaptacion_cambio","excelencia","comunicacion_efectiva","orientacion_servicio"].forEach(id => {
    scores[id] = (scores[id] || 0) + 5;
  });

  // Sort by score
  const sorted = DICCIONARIO
    .map(c => ({ ...c, score: scores[c.id] || 0 }))
    .sort((a, b) => b.score - a.score);

  // Build reason per competency
  const reasons = {
    proactividad: "Fomenta iniciativa y trabajo autónomo en todos los colaboradores.",
    trabajo_colaborativo: "Clave para la consecución de objetivos organizacionales.",
    orientacion_servicio: "Alinea al equipo con las necesidades del cliente.",
    compromiso_organizacional: "Refuerza la cultura y los valores de la empresa.",
    comunicacion_efectiva: "Mejora la coordinación y el entendimiento entre equipos.",
    excelencia: "Establece un estándar de calidad compartido.",
    adaptacion_cambio: "Prepara a la organización para entornos cambiantes.",
    liderazgo_equipos: "Relevante en empresas con múltiples líderes y jefaturas.",
    innovacion_creatividad: "Impulsa la diferenciación y la mejora continua.",
    integridad: "Esencial para generar confianza y transparencia.",
    resiliencia: "Necesaria para sostener el desempeño en entornos exigentes.",
    desarrollo_personas: "Potencia el crecimiento del talento interno.",
    accountability: "Fomenta la responsabilidad individual y colectiva.",
    inteligencia_emocional: "Clave para el clima organizacional y el liderazgo efectivo.",
    vision_sistemica: "Permite tomar decisiones con impacto en toda la organización.",
    orientacion_resultados: "Enfoca al equipo en el logro de metas concretas.",
    planificacion_organizacion: "Optimiza el uso del tiempo y los recursos.",
    autonomia_iniciativa: "Reduce la dependencia y agiliza la toma de decisiones.",
    gestion_tiempo: "Mejora la productividad y el cumplimiento de plazos.",
    competencia_digital: "Necesaria para operar en entornos tecnológicos modernos.",
    negociacion: "Facilita acuerdos y relaciones de colaboración.",
    pensamiento_critico: "Mejora la calidad de las decisiones en contextos complejos."
  };

  // Decide sugerida_como_transversal: if it's an "especifica" but scored in top 8
  const topIds = sorted.slice(0, 8).map(c => c.id);
  const recomendacion = sorted.slice(0, 8).map((c, i) => ({
    id: c.id,
    prioridad: i + 1,
    razon: reasons[c.id] || "Recomendada según el perfil de tu empresa.",
    sugerida_como_transversal: c.tipo === "especifica" && topIds.includes(c.id)
  }));

  return {
    recomendacion_general: rule.extra + " Se preseleccionaron las competencias más relevantes para tu empresa.",
    competencias: recomendacion
  };
}

// Job title → competency mapping
const CARGO_KEYWORDS = [
  { words:["ventas","comercial","ejecutivo","asesor comercial","account"], comps:["orientacion_servicio","negociacion","orientacion_resultados","comunicacion_efectiva","proactividad"] },
  { words:["jefe","gerente","subgerente","director","coordinador","supervisor","lider"], comps:["liderazgo_equipos","planificacion_organizacion","orientacion_resultados","comunicacion_efectiva","vision_sistemica"] },
  { words:["rrhh","recursos humanos","personas","talent","seleccion","capacitacion"], comps:["desarrollo_personas","comunicacion_efectiva","inteligencia_emocional","planificacion_organizacion","orientacion_servicio"] },
  { words:["ingeniero","técnico","desarrollador","programador","software","datos","data"], comps:["pensamiento_critico","competencia_digital","planificacion_organizacion","autonomia_iniciativa","innovacion_creatividad"] },
  { words:["contab","finanz","audit","tesor","contralor","presupuesto"], comps:["integridad","orientacion_resultados","planificacion_organizacion","pensamiento_critico","accountability"] },
  { words:["enfermer","medico","médico","doctor","kinesi","paramédico","matron","fonoaud"], comps:["orientacion_servicio","comunicacion_efectiva","resiliencia","trabajo_colaborativo","integridad"] },
  { words:["operario","produccion","planta","bodega","almacen","despacho","logist"], comps:["planificacion_organizacion","gestion_tiempo","trabajo_colaborativo","orientacion_resultados","accountability"] },
  { words:["marketing","comunicacion","diseño","contenido","community","publicidad"], comps:["innovacion_creatividad","comunicacion_efectiva","competencia_digital","orientacion_servicio","pensamiento_critico"] },
  { words:["legal","abogado","compliance","juridico","contrato"], comps:["integridad","pensamiento_critico","comunicacion_efectiva","accountability","vision_sistemica"] },
  { words:["admin","secretaria","recepcion","asistente","back office","soporte"], comps:["gestion_tiempo","comunicacion_efectiva","planificacion_organizacion","orientacion_servicio","trabajo_colaborativo"] },
  { words:["profesor","docente","educador","instructor","tutor","facilitador"], comps:["comunicacion_efectiva","desarrollo_personas","innovacion_creatividad","compromiso_organizacional","resiliencia"] },
  { words:["cajero","vendedor tienda","atencion al cliente","servicio al cliente"], comps:["orientacion_servicio","comunicacion_efectiva","resiliencia","trabajo_colaborativo","integridad"] },
  { words:["project","proyecto","pmo","implementacion"], comps:["planificacion_organizacion","liderazgo_equipos","comunicacion_efectiva","orientacion_resultados","gestion_tiempo"] },
  { words:["calidad","qa","quality","proceso","iso","mejora continua"], comps:["excelencia","pensamiento_critico","planificacion_organizacion","orientacion_resultados","accountability"] },
  { words:["compras","abastecimiento","procurement","proveedor"], comps:["negociacion","planificacion_organizacion","pensamiento_critico","orientacion_resultados","integridad"] }
];

function matchCargoToComps(cargo) {
  const lower = cargo.toLowerCase();
  for (const rule of CARGO_KEYWORDS) {
    if (rule.words.some(w => lower.includes(w))) {
      return rule.comps;
    }
  }
  // Generic fallback
  return ["orientacion_resultados","trabajo_colaborativo","comunicacion_efectiva","accountability","planificacion_organizacion"];
}

function groupCargosByFamily(cargos, industria) {
  // Assign each cargo a "profile" based on keyword match
  const profiles = cargos.map(cargo => ({
    cargo,
    comps: matchCargoToComps(cargo),
    key: CARGO_KEYWORDS.findIndex(r => r.words.some(w => cargo.toLowerCase().includes(w)))
  }));

  // Group by key (same rule = same family)
  const groups = {};
  profiles.forEach(p => {
    const k = p.key === -1 ? "general" : String(p.key);
    if (!groups[k]) groups[k] = { cargos: [], comps: p.comps };
    groups[k].cargos.push(p.cargo);
  });

  // Family name heuristics
  const FAMILY_NAMES = {
    "0":"Equipo Comercial","1":"Liderazgo y Gestión","2":"Recursos Humanos","3":"Tecnología e Ingeniería",
    "4":"Finanzas y Control","5":"Área Clínica / Asistencial","6":"Operaciones y Logística",
    "7":"Marketing y Comunicaciones","8":"Legal y Compliance","9":"Administración y Soporte",
    "10":"Docencia y Formación","11":"Atención al Cliente","12":"Gestión de Proyectos",
    "13":"Calidad y Procesos","14":"Abastecimiento y Compras","general":"Cargos Generales"
  };

  const familias = Object.entries(groups).map(([k, g]) => {
    const compIds = [...new Set(g.comps)].slice(0, 4);
    const competencias = compIds.map(id => {
      const c = DICCIONARIO.find(d => d.id === id);
      return c ? { id: c.id, nombre: c.nombre, descripcion: c.definicion.slice(0, 80) + "...", es_del_diccionario: true, indicadores: c.indicadores.slice(0, 3) } : null;
    }).filter(Boolean);
    return { nombre: FAMILY_NAMES[k] || "Familia de Cargos", cargos: g.cargos, competencias };
  });

  return { familias };
}

function buildCronograma(formData, selTransv, familiasConSel) {
  const esPrimera = formData.tieneEval === "no";
  const tieneEsp = familiasConSel.length > 0;
  const semanas = esPrimera ? 12 : 8;

  const fases = [
    {
      numero:1, nombre:"Planificación", semanas:"Sem 1–2", color:"#1E3A6E",
      descripcion:"Define el alcance, cronograma y equipo responsable del proceso.",
      tareas:[
        `Establecer objetivos: ${formData.objetivos.slice(0,2).map(id=>OBJETIVOS_OPTIONS.find(o=>o.id===id)?.label||id).join(", ")}`,
        "Definir participantes y evaluadores",
        "Elaborar plan de comunicación interna"
      ],
      entregable:"Plan de evaluación aprobado"
    },
    {
      numero:2, nombre:"Diseño del proceso", semanas:`Sem ${esPrimera?"3–4":"2–3"}`, color:"#F0B429",
      descripcion:"Configura los formularios, escalas y herramientas de evaluación.",
      tareas:[
        `Confirmar metodología: ${formData.metodologia}`,
        `Cargar competencias transversales seleccionadas (${selTransv.length})`,
        tieneEsp ? `Asignar competencias específicas a ${familiasConSel.length} familia(s) de cargo` : "Revisar criterios de evaluación por cargo",
        "Definir escala de respuesta y ponderaciones"
      ],
      entregable:"Formularios de evaluación configurados"
    },
    {
      numero:3, nombre:"Sensibilización", semanas:`Sem ${esPrimera?"5–6":"3–4"}`, color:"#059669",
      descripcion:"Prepara a evaluadores y evaluados para participar con claridad.",
      tareas:[
        "Capacitar a evaluadores: criterios y uso de la plataforma",
        "Comunicar el proceso a todos los colaboradores",
        "Resolver dudas y gestionar inquietudes del equipo"
      ],
      entregable:"Equipo capacitado y comunicado"
    },
    {
      numero:4, nombre:"Ejecución", semanas:`Sem ${esPrimera?"7–9":"5–6"}`, color:"#7C3AED",
      descripcion:"Lanzamiento y seguimiento activo del proceso de evaluación.",
      tareas:[
        "Lanzar la evaluación en la plataforma",
        "Monitorear avance y tasas de respuesta",
        "Enviar recordatorios a quienes no hayan completado"
      ],
      entregable:"Evaluaciones completadas"
    },
    {
      numero:5, nombre:"Análisis de Resultados", semanas:`Sem ${esPrimera?"10–12":"7–8"}`, color:"#DC2626",
      descripcion:"Analiza los resultados y genera planes de desarrollo.",
      tareas:[
        "Revisar reportes generales y por área",
        "Identificar brechas de competencias prioritarias",
        "Construir planes de acción y desarrollo para colaboradores",
        "Entregar retroalimentación individual a cada evaluado"
      ],
      entregable:"Planes de desarrollo individuales"
    }
  ];

  const recomendaciones = [
    esPrimera ? "Para la primera evaluación, es clave la sensibilización: explica el por qué del proceso antes de lanzarlo." : "Aprovecha los resultados anteriores para mostrar la evolución del equipo.",
    tieneEsp ? "Usa las competencias específicas por familia para dar retroalimentación más relevante a cada cargo." : "Considera agregar competencias específicas por cargo en tu próxima evaluación.",
    `Con metodología "${formData.metodologia}", asegúrate de que los criterios sean claros y objetivos para todos los evaluadores.`,
    `Frecuencia ${formData.frecuencia}: mantén instancias de feedback intermedio para que la evaluación no sea una sorpresa.`
  ];

  return {
    duracion_total: `${semanas} semanas`,
    resumen: `Plan de evaluación de desempeño para ${formData.empresa||"tu empresa"} (${formData.industria}). ${esPrimera?"Primera evaluación: se incluye etapa extendida de sensibilización.":"Proceso optimizado considerando experiencia previa."} Incluye ${selTransv.length} competencia(s) transversal(es)${tieneEsp?` y ${familiasConSel.length} familia(s) con competencias específicas`:""}.`,
    fases,
    recomendaciones_clave: recomendaciones,
    proximos_pasos: esPrimera
      ? "Tras completar la primera evaluación, analiza los resultados con líderes y planifica la segunda con ajustes según el aprendizaje obtenido."
      : "Incorpora los aprendizajes de este ciclo: ajusta las competencias, agrega familias de cargo si aún no las tienes, y profundiza los planes de desarrollo."
  };
}

// ============================================================
// CONSTANTS
// ============================================================
const INDUSTRIAS = ["Tecnología / Software","Servicios Financieros / Banca","Salud / Clínicas","Educación","Retail / Comercio","Manufactura / Industria","Consultoría / Servicios Profesionales","Construcción / Inmobiliaria","Logística / Transporte","Alimentos y Bebidas","Energía / Utilities","Gobierno / Sector Público","ONG / Sin fines de lucro","Otro"];
const TAMANIOS = ["1–50 colaboradores","51–200 colaboradores","201–500 colaboradores","501–1.000 colaboradores","Más de 1.000 colaboradores"];
const OBJETIVOS_OPTIONS = [
  {id:"feedback",       label:"Retroalimentación y desarrollo personal", desc:"Identificar fortalezas y áreas de mejora"},
  {id:"rendimiento",    label:"Mejora del rendimiento",                  desc:"Establecer metas claras y orientar cómo alcanzarlas"},
  {id:"decisiones_rrhh",label:"Decisiones de RRHH",                     desc:"Apoyar promociones y compensaciones"},
  {id:"capacitacion",   label:"Necesidades de capacitación",             desc:"Cerrar brechas de habilidades"},
  {id:"motivacion",     label:"Motivación y compromiso",                 desc:"Reconocer y recompensar el buen desempeño"},
  {id:"aprendizaje",    label:"Cultura de aprendizaje",                  desc:"Fomentar el desarrollo como parte del trabajo"},
  {id:"lideres",        label:"Identificación de líderes",               desc:"Detectar potencial para roles futuros"},
  {id:"objetivos_claros",label:"Objetivos claros",                       desc:"Alinear esfuerzos con metas organizacionales"}
];
const METODOLOGIAS = [
  {id:"competencias", label:"Por Competencias",                desc:"Se evalúan competencias transversales y/o específicas del cargo"},
  {id:"objetivos",    label:"Por Objetivos",                   desc:"Se evalúa el cumplimiento de metas específicas y medibles"},
  {id:"ambos",        label:"Ambos (Competencias + Objetivos)", desc:"Combina evaluación de competencias con cumplimiento de objetivos"}
];
const FRECUENCIAS = ["Anual (1 vez al año)","Semestral (2 veces al año)","Trimestral (4 veces al año)"];
const FAM_COLORS = ["#1E3A6E","#059669","#D97706","#7C3AED","#DC2626","#0891B2","#B45309","#4F46E5"];

// ============================================================
// STYLES
// ============================================================
const C = {primary:"#1E3A6E",primaryLight:"#EEF2F8",accent:"#F0B429",accentLight:"#FFFBEB",bg:"#F0F4F8",white:"#FFFFFF",border:"#E2E8F0",borderMid:"#CBD5E1",text:"#0F172A",muted:"#64748B",success:"#059669",successLight:"#ECFDF5",error:"#DC2626"};
const inp = {width:"100%",padding:"10px 12px",border:`1px solid ${C.border}`,borderRadius:"8px",fontSize:"14px",color:C.text,background:C.white,outline:"none",boxSizing:"border-box",fontFamily:"inherit"};
const card = {background:C.white,borderRadius:"12px",border:`1px solid ${C.border}`,padding:"20px"};
const btnP = {background:C.primary,color:"#fff",border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"14px",fontWeight:"500",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"inherit"};
const btnS = {background:"transparent",color:C.muted,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 20px",fontSize:"14px",fontWeight:"500",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"inherit"};
const btnA = {background:C.accent,color:C.primary,border:"none",borderRadius:"8px",padding:"10px 20px",fontSize:"14px",fontWeight:"600",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"inherit"};

function Lbl({children,req}) { return <div style={{fontSize:"13px",fontWeight:"500",color:C.text,marginBottom:"5px"}}>{children}{req&&<span style={{color:C.error}}> *</span>}</div>; }
function Stepper({step}) {
  const labels=["Organización","Objetivos","Competencias","Cronograma"];
  return (
    <div style={{display:"flex",alignItems:"flex-start",marginBottom:"26px"}}>
      {labels.map((label,i)=>{
        const n=i+1,done=step>n,active=step===n;
        return (
          <div key={i} style={{display:"flex",alignItems:"flex-start",flex:i<labels.length-1?1:"none"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"}}>
              <div style={{width:"28px",height:"28px",borderRadius:"50%",background:done?C.success:active?C.primary:C.border,color:(done||active)?"#fff":C.muted,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:"600"}}>{done?"✓":n}</div>
              <span style={{fontSize:"10px",color:active?C.primary:C.muted,fontWeight:active?"600":"400",whiteSpace:"nowrap"}}>{label}</span>
            </div>
            {i<labels.length-1&&<div style={{flex:1,height:"2px",background:done?C.success:C.border,margin:"13px 5px 0"}}/>}
          </div>
        );
      })}
    </div>
  );
}
function CheckRow({checked,onToggle,color,children}) {
  return (
    <div onClick={onToggle} style={{display:"flex",gap:"9px",cursor:"pointer",padding:"9px 11px",border:`1.5px solid ${checked?(color||C.primary):C.border}`,borderRadius:"8px",background:checked?(color+"15"):"transparent",alignItems:"flex-start",marginBottom:"5px"}}>
      <div style={{width:"15px",height:"15px",borderRadius:"3px",flexShrink:0,marginTop:"2px",border:`2px solid ${checked?(color||C.primary):C.borderMid}`,background:checked?(color||C.primary):"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
        {checked&&<span style={{color:"#fff",fontSize:"9px",fontWeight:"bold"}}>✓</span>}
      </div>
      <div style={{flex:1}}>{children}</div>
    </div>
  );
}

// ============================================================
// STEP 0: WELCOME
// ============================================================
function WelcomeStep({onNext}) {
  return (
    <div style={{textAlign:"center",padding:"28px 12px"}}>
      <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"60px",height:"60px",borderRadius:"14px",background:C.primaryLight,marginBottom:"16px"}}>
        <span style={{fontSize:"26px"}}>📋</span>
      </div>
      <h1 style={{fontSize:"23px",fontWeight:"700",color:C.primary,margin:"0 0 10px",lineHeight:"1.3"}}>Tu primera evaluación de desempeño</h1>
      <p style={{fontSize:"14px",color:C.muted,maxWidth:"460px",margin:"0 auto 22px",lineHeight:"1.6"}}>Te guiamos paso a paso para diseñar un proceso personalizado basado en el Diccionario de Competencias Buk.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"8px",maxWidth:"560px",margin:"0 auto 22px"}}>
        {[{icon:"🏢",t:"Organización",d:"Cultura e industria"},{icon:"🎯",t:"Objetivos",d:"Qué buscas lograr"},{icon:"📖",t:"Competencias Buk",d:"22 competencias"},{icon:"📅",t:"Cronograma",d:"Plan de implementación"}].map((item,i)=>(
          <div key={i} style={{background:C.primaryLight,borderRadius:"9px",padding:"11px 8px"}}>
            <div style={{fontSize:"18px",marginBottom:"4px"}}>{item.icon}</div>
            <div style={{fontSize:"11px",fontWeight:"600",color:C.primary,marginBottom:"2px"}}>{item.t}</div>
            <div style={{fontSize:"10px",color:C.muted,lineHeight:"1.4"}}>{item.d}</div>
          </div>
        ))}
      </div>
      <button style={{...btnP,padding:"11px 26px",fontSize:"14px"}} onClick={onNext}>Comenzar →</button>
      <p style={{fontSize:"10px",color:C.muted,marginTop:"12px"}}>Nuevo Diccionario de Competencias Buk · Creado por Andrea Vargas</p>
    </div>
  );
}

// ============================================================
// STEP 1: ORGANIZATION
// ============================================================
function OrgStep({data,onChange,onNext,onPrev}) {
  const valid=data.industria&&data.tamanio&&data.cultura?.trim().length>20&&data.valores?.trim().length>10;
  return (
    <div>
      <h2 style={{fontSize:"19px",fontWeight:"700",color:C.primary,margin:"0 0 4px"}}>Tu organización</h2>
      <p style={{color:C.muted,fontSize:"13px",marginBottom:"16px"}}>Esta información permite personalizar las competencias y el plan.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
        <div><Lbl>Nombre de la empresa</Lbl><input style={inp} placeholder="Ej: Empresa ABC" value={data.empresa} onChange={e=>onChange("empresa",e.target.value)}/></div>
        <div><Lbl req>Industria / Sector</Lbl>
          <select style={inp} value={data.industria} onChange={e=>onChange("industria",e.target.value)}>
            <option value="">Selecciona...</option>
            {INDUSTRIAS.map(i=><option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div><Lbl req>Tamaño</Lbl>
          <select style={inp} value={data.tamanio} onChange={e=>onChange("tamanio",e.target.value)}>
            <option value="">Selecciona...</option>
            {TAMANIOS.map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div><Lbl>¿Han tenido evaluaciones antes?</Lbl>
          <div style={{display:"flex",gap:"7px",marginTop:"4px"}}>
            {[{v:"si",l:"Sí"},{v:"no",l:"No, es la primera vez"}].map(opt=>(
              <button key={opt.v} onClick={()=>onChange("tieneEval",opt.v)} style={{flex:1,padding:"8px",borderRadius:"7px",fontSize:"12px",fontWeight:data.tieneEval===opt.v?"600":"400",cursor:"pointer",border:`1.5px solid ${data.tieneEval===opt.v?C.primary:C.border}`,background:data.tieneEval===opt.v?C.primaryLight:C.white,color:data.tieneEval===opt.v?C.primary:C.muted,fontFamily:"inherit"}}>{opt.l}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop:"12px"}}>
        <Lbl req>Cultura organizacional</Lbl>
        <textarea style={{...inp,minHeight:"76px",resize:"vertical"}} placeholder="Ej: Empresa dinámica con foco en la innovación y trabajo en equipo. Valoramos la autonomía y el ownership..." value={data.cultura} onChange={e=>onChange("cultura",e.target.value)}/>
        <div style={{fontSize:"10px",color:data.cultura?.length>20?C.muted:C.error,marginTop:"2px"}}>{data.cultura?.length<20?"Mínimo 20 caracteres":`${data.cultura.length} caracteres`}</div>
      </div>
      <div style={{marginTop:"12px"}}>
        <Lbl req>Valores principales</Lbl>
        <textarea style={{...inp,minHeight:"52px",resize:"vertical"}} placeholder="Ej: Integridad, innovación, orientación al cliente, colaboración..." value={data.valores} onChange={e=>onChange("valores",e.target.value)}/>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"18px"}}>
        <button style={btnS} onClick={onPrev}>← Volver</button>
        <button style={{...btnP,opacity:valid?1:0.45,cursor:valid?"pointer":"not-allowed"}} onClick={()=>valid&&onNext()} disabled={!valid}>Continuar →</button>
      </div>
    </div>
  );
}

// ============================================================
// STEP 2: OBJECTIVES
// ============================================================
function ObjectivesStep({data,onChange,onNext,onPrev}) {
  const valid=data.objetivos.length>0&&data.metodologia&&data.frecuencia;
  const toggle=id=>onChange("objetivos",data.objetivos.includes(id)?data.objetivos.filter(o=>o!==id):[...data.objetivos,id]);
  return (
    <div>
      <h2 style={{fontSize:"19px",fontWeight:"700",color:C.primary,margin:"0 0 4px"}}>¿Qué buscas lograr?</h2>
      <p style={{color:C.muted,fontSize:"13px",marginBottom:"12px"}}>Selecciona todos los objetivos que aplican.</p>
      <Lbl req>Objetivos de la evaluación</Lbl>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px",marginBottom:"16px",marginTop:"5px"}}>
        {OBJETIVOS_OPTIONS.map(obj=>{
          const sel=data.objetivos.includes(obj.id);
          return (<CheckRow key={obj.id} checked={sel} onToggle={()=>toggle(obj.id)} color={C.primary}>
            <div style={{fontSize:"12px",fontWeight:"500",color:sel?C.primary:C.text}}>{obj.label}</div>
            <div style={{fontSize:"11px",color:C.muted,marginTop:"1px",lineHeight:"1.3"}}>{obj.desc}</div>
          </CheckRow>);
        })}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
        <div><Lbl req>Metodología</Lbl>
          <select style={inp} value={data.metodologia} onChange={e=>onChange("metodologia",e.target.value)}>
            <option value="">Selecciona...</option>
            {METODOLOGIAS.map(m=><option key={m.id} value={m.label}>{m.label}</option>)}
          </select>
          {data.metodologia&&<div style={{fontSize:"10px",color:C.muted,marginTop:"3px"}}>{METODOLOGIAS.find(m=>m.label===data.metodologia)?.desc}</div>}
        </div>
        <div><Lbl req>Frecuencia</Lbl>
          <select style={inp} value={data.frecuencia} onChange={e=>onChange("frecuencia",e.target.value)}>
            <option value="">Selecciona...</option>
            {FRECUENCIAS.map(f=><option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"18px"}}>
        <button style={btnS} onClick={onPrev}>← Volver</button>
        <button style={{...btnP,opacity:valid?1:0.45,cursor:valid?"pointer":"not-allowed"}} onClick={()=>valid&&onNext()} disabled={!valid}>Continuar →</button>
      </div>
    </div>
  );
}

// ============================================================
// TAB CARGOS — standalone component so input keeps focus
// ============================================================
function TabCargos({ cargos, onCargosChange, onAnalyzeCargos, familiasResult, onGoToEspecificas }) {
  const [cargoInput, setCargoInput] = useState("");

  const addCargo = () => {
    const v = cargoInput.trim();
    if (v && !cargos.includes(v)) onCargosChange([...cargos, v]);
    setCargoInput("");
  };
  const removeCargo = i => onCargosChange(cargos.filter((_, j) => j !== i));
  const handleKey = e => { if (e.key === "Enter") { e.preventDefault(); addCargo(); } };

  return (
    <div>
      <p style={{color:C.muted,fontSize:"12px",marginBottom:"12px",lineHeight:"1.5"}}>
        Ingresa los cargos de tu organización. Los agruparemos en <strong>familias</strong> y asignaremos competencias específicas del Diccionario Buk para cada una.
      </p>
      <Lbl>Agregar cargo</Lbl>
      <div style={{display:"flex",gap:"7px",marginBottom:"9px"}}>
        <input
          style={{...inp, flex:1}}
          placeholder="Ej: Jefe de Ventas, Enfermera, Analista Contable..."
          value={cargoInput}
          onChange={e => setCargoInput(e.target.value)}
          onKeyDown={handleKey}
          autoComplete="off"
        />
        <button
          onClick={addCargo}
          style={{...btnP, padding:"10px 14px", flexShrink:0}}
          disabled={!cargoInput.trim()}
        >+ Agregar</button>
      </div>

      {cargos.length === 0 ? (
        <div style={{border:`1px dashed ${C.borderMid}`,borderRadius:"8px",padding:"20px",textAlign:"center",color:C.muted,fontSize:"12px"}}>
          Aún no has ingresado cargos.<br/>
          <span style={{fontSize:"11px"}}>Agrega varios y haz clic en "Analizar cargos".</span>
        </div>
      ) : (
        <div>
          <div style={{fontSize:"11px",fontWeight:"500",color:C.muted,marginBottom:"5px"}}>
            {cargos.length} cargo{cargos.length !== 1 ? "s" : ""} ingresado{cargos.length !== 1 ? "s" : ""}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:"12px"}}>
            {cargos.map((c, i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:"4px",background:C.primaryLight,border:`1px solid #C7D7EE`,borderRadius:"20px",padding:"3px 10px 3px 11px"}}>
                <span style={{fontSize:"11px",fontWeight:"500",color:C.primary}}>{c}</span>
                <span onClick={() => removeCargo(i)} style={{cursor:"pointer",color:C.muted,fontSize:"13px",fontWeight:"bold",lineHeight:1,padding:"0 2px"}}>×</span>
              </div>
            ))}
          </div>

          {!familiasResult ? (
            <button onClick={onAnalyzeCargos} style={{...btnP, width:"100%", justifyContent:"center", padding:"11px"}}>
              🔍 Analizar cargos y sugerir familias →
            </button>
          ) : (
            <div>
              <div style={{background:C.successLight,border:`1px solid #6EE7B7`,borderRadius:"8px",padding:"12px 14px",marginBottom:"10px"}}>
                <div style={{fontSize:"13px",fontWeight:"600",color:"#065F46",marginBottom:"4px"}}>
                  ✅ ¡Análisis completado! Se encontraron {familiasResult.familias?.length} familia{familiasResult.familias?.length !== 1 ? "s" : ""} de cargo.
                </div>
                <div style={{fontSize:"12px",color:"#047857",marginBottom:"10px"}}>
                  {familiasResult.familias?.map(f => f.nombre).join(", ")}
                </div>
                <button onClick={onGoToEspecificas} style={{...btnP, background:C.success, padding:"9px 18px", fontSize:"13px"}}>
                  Ver competencias específicas sugeridas →
                </button>
              </div>
              <button onClick={onAnalyzeCargos} style={{...btnS, width:"100%", justifyContent:"center", padding:"8px", fontSize:"12px"}}>
                🔄 Volver a analizar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================
// STEP 3: COMPETENCIAS
// ============================================================
function CompetenciasStep({transRecs, cargos, onCargosChange, familiasResult, onAnalyzeCargos, selTransv, onToggleTransv, selEsp, onToggleEsp, onNext, onPrev}) {
  const [tab, setTab] = useState("transversales");

  const totalSel = selTransv.length + selEsp.length;

  // IDs of competencias ya seleccionadas como transversales
  const transvIds = new Set(selTransv);

  // ---- TRANSVERSALES ----
  const TabTransv = () => {
    const recIds = transRecs?.competencias.map(r => r.id) || [];
    const sorted = [
      ...DICCIONARIO.filter(c => recIds.includes(c.id)).sort((a, b) => {
        return (transRecs.competencias.find(r => r.id === a.id)?.prioridad || 99) -
               (transRecs.competencias.find(r => r.id === b.id)?.prioridad || 99);
      }),
      ...DICCIONARIO.filter(c => !recIds.includes(c.id))
    ];
    return (
      <div>
        {transRecs?.recomendacion_general && (
          <div style={{background:C.accentLight,border:`1px solid ${C.accent}`,borderRadius:"8px",padding:"9px 12px",marginBottom:"10px",display:"flex",gap:"7px"}}>
            <span style={{fontSize:"13px",flexShrink:0}}>💡</span>
            <p style={{fontSize:"12px",color:"#92400E",margin:0,lineHeight:"1.5"}}>{transRecs.recomendacion_general}</p>
          </div>
        )}
        <div style={{display:"flex",gap:"10px",marginBottom:"6px",flexWrap:"wrap"}}>
          <span style={{fontSize:"11px",color:C.muted,display:"flex",alignItems:"center",gap:"3px"}}><span style={{width:"8px",height:"8px",borderRadius:"2px",background:C.primary,display:"inline-block"}}></span>Transversal</span>
          <span style={{fontSize:"11px",color:C.muted,display:"flex",alignItems:"center",gap:"3px"}}><span style={{width:"8px",height:"8px",borderRadius:"2px",background:"#9333EA",display:"inline-block"}}></span>Específica</span>
          <span style={{fontSize:"11px",color:"#92400E",display:"flex",alignItems:"center",gap:"3px"}}><span>⭐</span>Recomendada como transversal</span>
        </div>
        <p style={{fontSize:"11px",color:C.muted,marginBottom:"8px"}}>Del <strong>Nuevo Diccionario Buk</strong> (7 transversales + 15 específicas). Puedes elegir cualquiera como transversal.</p>
        <div style={{maxHeight:"440px",overflowY:"auto",paddingRight:"2px"}}>
          {sorted.map(comp => {
            const rec = transRecs?.competencias.find(r => r.id === comp.id);
            const isSel = selTransv.includes(comp.id);
            const isRec = !!rec;
            const isSugTrans = rec?.sugerida_como_transversal;
            const pri = rec?.prioridad;
            const badgeColor = comp.tipo === "transversal" ? C.primary : "#9333EA";
            // Check if also in específicas
            const alsoInEsp = selEsp.some(key => {
              const [fi, ci] = key.split("::");
              const fam = familiasResult?.familias?.[+fi];
              const espComp = fam?.competencias?.[+ci];
              return espComp?.id === comp.id;
            });
            return (
              <div key={comp.id} style={{border:`1.5px solid ${isSel ? comp.color : isRec ? "#E9D5FF" : C.border}`,borderRadius:"9px",padding:"9px 12px",cursor:"pointer",background:isSel ? comp.colorLight : isRec ? "#FAFAFE" : "transparent",marginBottom:"5px",opacity:1}}>
                {/* Alert: also in específicas */}
                {isSel && alsoInEsp && (
                  <div style={{background:"#FEF9C3",border:"1px solid #FDE047",borderRadius:"6px",padding:"5px 9px",marginBottom:"6px",fontSize:"10px",color:"#854D0E",display:"flex",gap:"5px",alignItems:"center"}}>
                    <span>⚠️</span>
                    <span>Esta competencia también está seleccionada como <strong>específica</strong>. Para evitar medirla dos veces, desmarcarla en la pestaña Específicas.</span>
                  </div>
                )}
                <div style={{display:"flex",gap:"8px",alignItems:"flex-start"}} onClick={() => onToggleTransv(comp.id)}>
                  <div style={{width:"15px",height:"15px",borderRadius:"3px",flexShrink:0,marginTop:"2px",border:`2px solid ${isSel ? comp.color : C.borderMid}`,background:isSel ? comp.color : "transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {isSel && <span style={{color:"#fff",fontSize:"9px",fontWeight:"bold"}}>✓</span>}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:"5px",flexWrap:"wrap",marginBottom:"2px"}}>
                      <span style={{fontSize:"13px",fontWeight:"600",color:C.text}}>{comp.nombre}</span>
                      <span style={{fontSize:"9px",padding:"1px 5px",borderRadius:"8px",background:badgeColor+"18",color:badgeColor,border:`1px solid ${badgeColor}33`,fontWeight:"500"}}>{comp.tipo === "transversal" ? "Transversal" : "Específica"}</span>
                      {pri === 1 && <span style={{fontSize:"9px",padding:"1px 5px",borderRadius:"8px",background:"#FEF3C7",color:"#92400E",fontWeight:"600"}}>⭐ Top prioridad</span>}
                      {pri === 2 && <span style={{fontSize:"9px",padding:"1px 5px",borderRadius:"8px",background:"#FEF3C7",color:"#92400E",fontWeight:"500"}}>⭐ Alta prioridad</span>}
                      {isSugTrans && <span style={{fontSize:"9px",padding:"1px 5px",borderRadius:"8px",background:"#EDE9FE",color:"#6B21A8",fontWeight:"600",border:"1px solid #C4B5FD"}}>↑ Recom. como transversal</span>}
                    </div>
                    <p style={{fontSize:"11px",color:C.muted,margin:"0 0 3px",lineHeight:"1.4"}}>{comp.definicion}</p>
                    {rec?.razon && (
                      <div style={{fontSize:"11px",color:"#78350F",background:C.accentLight,borderRadius:"5px",padding:"4px 8px",marginBottom:"4px",borderLeft:`2px solid ${C.accent}`}}>{rec.razon}</div>
                    )}
                  </div>
                </div>
                {/* Indicadores — outside the toggle onClick to avoid conflict */}
                <div style={{paddingLeft:"23px",marginTop:"4px"}}>
                  <details onClick={e => e.stopPropagation()}>
                    <summary style={{fontSize:"10px",color:comp.color,cursor:"pointer",fontWeight:"500",userSelect:"none"}}>
                      ▸ Ver {comp.indicadores.length} indicadores
                    </summary>
                    <ul style={{marginTop:"4px",paddingLeft:"14px",marginBottom:0}}>
                      {comp.indicadores.map((ind, j) => (
                        <li key={j} style={{fontSize:"10px",color:C.muted,marginBottom:"2px",lineHeight:"1.5"}}>{ind}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ---- ESPECÍFICAS ----
  const TabEspecificas = () => {
    if (!familiasResult) return (
      <div style={{border:`1px dashed ${C.borderMid}`,borderRadius:"8px",padding:"26px",textAlign:"center",color:C.muted,fontSize:"12px"}}>
        Primero ingresa tus cargos en <strong>"Cargos"</strong> y haz clic en Analizar.<br/>
        <span style={{fontSize:"11px",marginTop:"3px",display:"block"}}>Se asignarán competencias del Diccionario Buk a cada familia.</span>
      </div>
    );
    return (
      <div>
        <p style={{fontSize:"11px",color:C.muted,marginBottom:"10px"}}>
          Competencias del <strong>Diccionario Buk</strong> sugeridas por familia. Las que ya están como <strong>transversales</strong> aparecen bloqueadas para evitar medición doble.
        </p>
        <div style={{maxHeight:"440px",overflowY:"auto",paddingRight:"2px"}}>
          {familiasResult.familias?.map((fam, fi) => {
            const color = FAM_COLORS[fi % FAM_COLORS.length];
            const famSelCount = fam.competencias?.filter((_, ci) => selEsp.includes(`${fi}::${ci}`)).length || 0;
            return (
              <div key={fi} style={{border:`1px solid ${C.border}`,borderRadius:"10px",overflow:"hidden",marginBottom:"10px"}}>
                <div style={{background:color+"18",borderBottom:`1px solid ${C.border}`,padding:"9px 13px"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"3px"}}>
                    <div style={{fontSize:"13px",fontWeight:"600",color}}>{fam.nombre}</div>
                    <span style={{fontSize:"10px",background:color+"22",color,padding:"2px 7px",borderRadius:"10px",fontWeight:"500",border:`1px solid ${color}44`}}>{famSelCount}/{fam.competencias?.length}</span>
                  </div>
                  {fam.cargos?.length > 0 && (
                    <div style={{display:"flex",flexWrap:"wrap",gap:"3px"}}>
                      {fam.cargos.map((c, ci) => (
                        <span key={ci} style={{fontSize:"10px",background:color+"15",color,padding:"1px 7px",borderRadius:"10px",border:`1px solid ${color}30`}}>{c}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{padding:"7px"}}>
                  {fam.competencias?.map((comp, ci) => {
                    const key = `${fi}::${ci}`;
                    const isSel = selEsp.includes(key);
                    // Block if already selected as transversal
                    const isTransv = transvIds.has(comp.id);
                    return (
                      <div key={ci}
                        onClick={() => !isTransv && onToggleEsp(key)}
                        style={{display:"flex",gap:"9px",padding:"8px 9px",borderRadius:"7px",cursor:isTransv ? "not-allowed" : "pointer",background:isTransv ? "#F1F5F9" : isSel ? color+"12" : "transparent",border:`1px solid ${isTransv ? C.border : isSel ? color+"40" : "transparent"}`,marginBottom:"3px",opacity:isTransv ? 0.6 : 1}}
                      >
                        <div style={{width:"14px",height:"14px",borderRadius:"3px",flexShrink:0,marginTop:"2px",border:`2px solid ${isTransv ? C.borderMid : isSel ? color : C.borderMid}`,background:isTransv ? "#E2E8F0" : isSel ? color : "transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                          {isSel && !isTransv && <span style={{color:"#fff",fontSize:"9px",fontWeight:"bold"}}>✓</span>}
                          {isTransv && <span style={{color:C.muted,fontSize:"9px"}}>—</span>}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{display:"flex",alignItems:"center",gap:"5px",flexWrap:"wrap",marginBottom:"1px"}}>
                            <span style={{fontSize:"12px",fontWeight:"500",color:isTransv ? C.muted : isSel ? color : C.text}}>{comp.nombre}</span>
                            {comp.es_del_diccionario && <span style={{fontSize:"9px",padding:"0px 5px",borderRadius:"6px",background:"#EFF6FF",color:"#1D4ED8",border:"1px solid #BFDBFE",fontWeight:"500"}}>📖 Buk</span>}
                            {isTransv && <span style={{fontSize:"9px",padding:"1px 6px",borderRadius:"6px",background:"#E0E7FF",color:"#3730A3",border:"1px solid #C7D2FE",fontWeight:"500"}}>✓ Ya es transversal</span>}
                          </div>
                          {isTransv
                            ? <div style={{fontSize:"10px",color:C.muted,fontStyle:"italic"}}>Ya seleccionada como transversal — se medirá para todos.</div>
                            : <div style={{fontSize:"10px",color:C.muted,lineHeight:"1.3"}}>{comp.descripcion}</div>
                          }
                          {/* Indicadores */}
                          {!isTransv && (
                            <div style={{marginTop:"3px"}}>
                              <details onClick={e => e.stopPropagation()}>
                                <summary style={{fontSize:"10px",color:color,cursor:"pointer",fontWeight:"500",userSelect:"none"}}>
                                  ▸ Ver {comp.indicadores?.length || 0} indicadores
                                </summary>
                                <ul style={{marginTop:"4px",paddingLeft:"12px",marginBottom:0}}>
                                  {comp.indicadores?.map((ind, k) => (
                                    <li key={k} style={{fontSize:"10px",color:C.muted,marginBottom:"2px",lineHeight:"1.4"}}>{ind}</li>
                                  ))}
                                </ul>
                              </details>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const tabs = [
    {id:"transversales", label:"Transversales", badge:selTransv.length, icon:"🏛️"},
    {id:"cargos", label:"Cargos", badge:cargos.length, icon:"👥"},
    {id:"especificas", label:"Específicas por cargo", badge:selEsp.length, icon:"🎯"}
  ];

  return (
    <div>
      <h2 style={{fontSize:"19px",fontWeight:"700",color:C.primary,margin:"0 0 3px"}}>Competencias a evaluar</h2>
      <p style={{color:C.muted,fontSize:"12px",marginBottom:"12px"}}>Basado en el <strong>Nuevo Diccionario de Competencias Buk</strong> — 7 transversales + 15 específicas.</p>
      <div style={{display:"flex",gap:"3px",background:C.bg,borderRadius:"9px",padding:"3px",marginBottom:"14px"}}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{flex:1,padding:"7px 5px",borderRadius:"6px",fontSize:"11px",fontWeight:tab===t.id?"600":"400",cursor:"pointer",border:"none",background:tab===t.id?C.white:"transparent",color:tab===t.id?C.primary:C.muted,fontFamily:"inherit",boxShadow:tab===t.id?"0 1px 3px rgba(0,0,0,0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"4px"}}>
            <span style={{fontSize:"12px"}}>{t.icon}</span>
            <span>{t.label}</span>
            {t.badge > 0 && <span style={{background:tab===t.id?C.primary:C.borderMid,color:tab===t.id?"#fff":C.muted,borderRadius:"9px",padding:"0 5px",fontSize:"9px",fontWeight:"600"}}>{t.badge}</span>}
          </button>
        ))}
      </div>
      {tab === "transversales" && <TabTransv />}
      {tab === "cargos" && (
        <TabCargos
          cargos={cargos}
          onCargosChange={onCargosChange}
          onAnalyzeCargos={onAnalyzeCargos}
          familiasResult={familiasResult}
          onGoToEspecificas={() => setTab("especificas")}
        />
      )}
      {tab === "especificas" && <TabEspecificas />}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:`1px solid ${C.border}`}}>
        <button style={btnS} onClick={onPrev}>← Volver</button>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          {totalSel > 0 && <span style={{fontSize:"11px",color:C.muted}}>{totalSel} seleccionada{totalSel !== 1 ? "s" : ""}</span>}
          <button style={{...btnP,opacity:selTransv.length>=1?1:0.45,cursor:selTransv.length>=1?"pointer":"not-allowed"}} onClick={() => selTransv.length >= 1 && onNext()} disabled={selTransv.length < 1}>
            Generar Cronograma →
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// EXPORT HELPERS
// ============================================================
function buildExportHTML(cron, formData, transvNames, espPorFamilia) {
  const fecha = new Date().toLocaleDateString("es-CL", {year:"numeric",month:"long",day:"numeric"});
  const empresa = formData.empresa || "Mi Empresa";

  const fasesHTML = (cron.fases || []).map(fase => `
    <div class="fase">
      <div class="fase-header" style="border-left:4px solid ${fase.color||"#1E3A6E"}">
        <div class="fase-title">
          <span class="fase-num" style="background:${fase.color||"#1E3A6E"}">${fase.numero}</span>
          <strong>${fase.nombre}</strong>
        </div>
        <span class="fase-sem">${fase.semanas}</span>
      </div>
      <p class="fase-desc">${fase.descripcion}</p>
      <ul class="fase-tareas">
        ${(fase.tareas||[]).map(t=>`<li>${t}</li>`).join("")}
      </ul>
      ${fase.entregable ? `<div class="entregable">✅ Entregable: ${fase.entregable}</div>` : ""}
    </div>`).join("");

  const transvHTML = transvNames.map(c =>
    `<span class="badge" style="background:${c.colorLight};color:${c.color};border:1px solid ${c.color}">${c.tipo==="especifica"?"⭐ ":""}${c.nombre}</span>`
  ).join("");

  const espHTML = espPorFamilia.map((fp,i) => {
    const colors = ["#1E3A6E","#059669","#D97706","#7C3AED","#DC2626","#0891B2","#B45309","#4F46E5"];
    const color = colors[i % colors.length];
    return `<div style="margin-bottom:6px">
      <span style="font-size:11px;font-weight:600;color:${color}">${fp.familia}: </span>
      ${fp.competencias.map(c=>`<span class="badge-esp" style="background:${color}18;color:${color};border:1px solid ${color}30">${c}</span>`).join("")}
    </div>`;
  }).join("");

  const recsHTML = (cron.recomendaciones_clave||[]).map(r=>
    `<li>${r}</li>`
  ).join("");

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Plan de Evaluación · ${empresa}</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F0F4F8;color:#0F172A;padding:24px}
  .page{max-width:780px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 16px rgba(0,0,0,0.08)}
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:18px;border-bottom:2px solid #E2E8F0}
  .logo{font-size:11px;color:#64748B;margin-top:4px}
  h1{font-size:22px;font-weight:700;color:#1E3A6E;margin-bottom:4px}
  .subtitle{font-size:13px;color:#64748B}
  .chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
  .chip{background:#EEF2F8;border-radius:6px;padding:5px 12px}
  .chip-lbl{font-size:9px;color:#64748B;display:block}
  .chip-val{font-size:12px;font-weight:600;color:#1E3A6E}
  .resumen{font-size:12px;color:#64748B;line-height:1.6;margin-bottom:18px}
  .comp-box{background:#EEF2F8;border:1px solid #C7D7EE;border-radius:8px;padding:14px;margin-bottom:18px}
  .comp-lbl{font-size:10px;font-weight:600;color:#64748B;margin-bottom:6px;letter-spacing:.5px}
  .badges{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px}
  .badge{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:500;display:inline-block}
  .badge-esp{padding:2px 8px;border-radius:10px;font-size:10px;font-weight:500;display:inline-block;margin-right:3px}
  h2{font-size:14px;font-weight:600;color:#0F172A;margin-bottom:10px}
  .fase{margin-bottom:12px}
  .fase-header{padding:8px 12px;background:#F8FAFC;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;align-items:center}
  .fase-title{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600}
  .fase-num{width:22px;height:22px;border-radius:50%;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
  .fase-sem{font-size:10px;color:#64748B;background:#E2E8F0;padding:2px 8px;border-radius:4px}
  .fase-desc{font-size:11px;color:#64748B;padding:6px 12px 4px;line-height:1.5}
  .fase-tareas{padding:0 12px 6px 28px;list-style:disc}
  .fase-tareas li{font-size:11px;color:#0F172A;margin-bottom:2px;line-height:1.5}
  .entregable{margin:4px 12px 8px;background:#ECFDF5;border-radius:4px;padding:5px 10px;font-size:10px;color:#065F46;font-weight:500}
  .recs{background:#EEF2F8;border:1px solid #C7D7EE;border-radius:8px;padding:14px;margin:14px 0}
  .recs h3{font-size:12px;font-weight:600;color:#1E3A6E;margin-bottom:8px}
  .recs ul{padding-left:18px}
  .recs li{font-size:12px;color:#1E3A6E;margin-bottom:5px;line-height:1.4}
  .proximos{background:#FFFBEB;border:1px solid #F0B429;border-radius:7px;padding:10px 14px;margin-bottom:16px}
  .proximos h3{font-size:11px;font-weight:600;color:#92400E;margin-bottom:3px}
  .proximos p{font-size:11px;color:#78350F;line-height:1.5}
  .footer{margin-top:20px;padding-top:14px;border-top:1px solid #E2E8F0;font-size:10px;color:#94A3B8;text-align:center}
  @media print{
    body{background:#fff;padding:0}
    .page{box-shadow:none;border-radius:0;padding:20px}
    .no-print{display:none!important}
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <h1>Plan de Evaluación de Desempeño</h1>
      <div class="subtitle">${empresa} · Generado el ${fecha}</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:12px;font-weight:600;color:#1E3A6E">Tu primera evaluación</div>
      <div class="logo">Nuevo Diccionario de Competencias Buk<br/>Creado por Andrea Vargas</div>
    </div>
  </div>

  <div class="chips">
    <div class="chip"><span class="chip-lbl">Duración</span><span class="chip-val">${cron.duracion_total}</span></div>
    <div class="chip"><span class="chip-lbl">Metodología</span><span class="chip-val">${(formData.metodologia||"").split("(")[0].trim()}</span></div>
    <div class="chip"><span class="chip-lbl">Frecuencia</span><span class="chip-val">${(formData.frecuencia||"").split("(")[0].trim()}</span></div>
    <div class="chip"><span class="chip-lbl">Industria</span><span class="chip-val">${formData.industria||""}</span></div>
    <div class="chip"><span class="chip-lbl">Tamaño</span><span class="chip-val">${formData.tamanio||""}</span></div>
  </div>

  <p class="resumen">${cron.resumen}</p>

  <div class="comp-box">
    ${transvNames.length > 0 ? `<div class="comp-lbl">COMPETENCIAS TRANSVERSALES</div><div class="badges">${transvHTML}</div>` : ""}
    ${espPorFamilia.length > 0 ? `<div class="comp-lbl" style="margin-top:8px">COMPETENCIAS ESPECÍFICAS POR FAMILIA</div>${espHTML}` : ""}
  </div>

  <h2>Cronograma de Implementación</h2>
  ${fasesHTML}

  ${recsHTML ? `<div class="recs"><h3>💡 Recomendaciones clave</h3><ul>${recsHTML}</ul></div>` : ""}
  ${cron.proximos_pasos ? `<div class="proximos"><h3>Próximos pasos</h3><p>${cron.proximos_pasos}</p></div>` : ""}

  <div class="footer">
    Nuevo Diccionario de Competencias Buk (7 transversales · 15 específicas) · Creado por Andrea Vargas
  </div>
</div>
</body>
</html>`;
}

function downloadHTML(html, filename) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

function printPDF(html) {
  const win = window.open("", "_blank", "width=900,height=700");
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 600);
}

// ============================================================
// STEP 4: CRONOGRAMA
// ============================================================
function CronogramaStep({cron,formData,selTransv,selEsp,familiasResult,onPrev,onRestart}) {
  const [exporting, setExporting] = useState(false);

  if(!cron) return null;

  const transvNames=selTransv.map(id=>{const c=DICCIONARIO.find(d=>d.id===id);return c?{nombre:c.nombre,color:c.color,colorLight:c.colorLight,tipo:c.tipo}:null;}).filter(Boolean);
  const espPorFamilia=[];
  if(familiasResult?.familias){familiasResult.familias.forEach((fam,fi)=>{const sel=fam.competencias?.filter((_,ci)=>selEsp.includes(`${fi}::${ci}`)).map(c=>c.nombre)||[];if(sel.length>0)espPorFamilia.push({familia:fam.nombre,competencias:sel});});}

  const empresa = formData.empresa || "evaluacion";
  const filename = `Plan_Evaluacion_${empresa.replace(/\s+/g,"_")}.html`;
  const html = buildExportHTML(cron, formData, transvNames, espPorFamilia);

  const handleDownload = () => { setExporting(true); downloadHTML(html, filename); setTimeout(()=>setExporting(false), 1000); };
  const handlePDF = () => { printPDF(html); };

  return (
    <div>
      <h2 style={{fontSize:"19px",fontWeight:"700",color:C.primary,margin:"0 0 4px"}}>Plan de Evaluación{formData.empresa?` · ${formData.empresa}`:""}</h2>

      {/* Export bar */}
      <div style={{background:"linear-gradient(135deg,#1E3A6E,#2D5099)",borderRadius:"10px",padding:"12px 16px",marginBottom:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"}}>
        <div>
          <div style={{fontSize:"13px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>¿Listo para compartir este plan?</div>
          <div style={{fontSize:"11px",color:"#93C5FD"}}>Exporta el cronograma completo con todas las competencias seleccionadas.</div>
        </div>
        <div style={{display:"flex",gap:"8px",flexShrink:0}}>
          <button onClick={handlePDF} style={{background:"transparent",color:"#fff",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"7px",padding:"7px 14px",fontSize:"12px",fontWeight:"500",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:"5px"}}>
            🖨️ Guardar como PDF
          </button>
          <button onClick={handleDownload} style={{background:C.accent,color:C.primary,border:"none",borderRadius:"7px",padding:"7px 14px",fontSize:"12px",fontWeight:"600",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:"5px"}}>
            {exporting ? "✓ Descargado" : "⬇️ Descargar HTML"}
          </button>
        </div>
      </div>

      <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"10px"}}>
        {[{label:"Duración",val:cron.duracion_total},{label:"Metodología",val:formData.metodologia?.split("(")[0].trim()},{label:"Frecuencia",val:formData.frecuencia?.split("(")[0].trim()},{label:"Transversales",val:`${transvNames.length}`},{label:"Familias",val:`${espPorFamilia.length}`}].map((item,i)=>(
          <div key={i} style={{background:C.primaryLight,borderRadius:"5px",padding:"4px 10px"}}>
            <div style={{fontSize:"9px",color:C.muted}}>{item.label}</div>
            <div style={{fontSize:"12px",fontWeight:"600",color:C.primary}}>{item.val}</div>
          </div>
        ))}
      </div>
      <p style={{color:C.muted,fontSize:"12px",marginBottom:"12px",lineHeight:"1.5"}}>{cron.resumen}</p>
      <div style={{...card,padding:"12px",marginBottom:"12px",background:C.primaryLight,border:`1px solid #C7D7EE`}}>
        {transvNames.length>0&&(
          <div style={{marginBottom:espPorFamilia.length>0?"8px":"0"}}>
            <div style={{fontSize:"10px",fontWeight:"600",color:C.muted,marginBottom:"4px"}}>COMPETENCIAS TRANSVERSALES</div>
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap"}}>
              {transvNames.map((c,i)=><span key={i} style={{padding:"2px 8px",borderRadius:"20px",fontSize:"11px",fontWeight:"500",background:c.colorLight,color:c.color,border:`1px solid ${c.color}`,display:"flex",alignItems:"center",gap:"3px"}}>{c.tipo==="especifica"&&<span style={{fontSize:"9px"}}>⭐</span>}{c.nombre}</span>)}
            </div>
            {transvNames.some(c=>c.tipo==="especifica")&&<div style={{fontSize:"10px",color:"#6B21A8",marginTop:"3px"}}>⭐ Originalmente específica, recomendada como transversal para tu empresa</div>}
          </div>
        )}
        {espPorFamilia.length>0&&(
          <div>
            <div style={{fontSize:"10px",fontWeight:"600",color:C.muted,marginBottom:"4px"}}>COMPETENCIAS ESPECÍFICAS POR FAMILIA</div>
            {espPorFamilia.map((fp,i)=>{const color=FAM_COLORS[i%FAM_COLORS.length];return(<div key={i} style={{marginBottom:"4px"}}><span style={{fontSize:"10px",fontWeight:"600",color}}>{fp.familia}: </span>{fp.competencias.map((c,ci)=><span key={ci} style={{fontSize:"10px",background:color+"15",color,padding:"1px 6px",borderRadius:"10px",marginRight:"3px",border:`1px solid ${color}30`}}>{c}</span>)}</div>);})}
          </div>
        )}
      </div>
      <div style={{fontSize:"12px",fontWeight:"600",color:C.text,marginBottom:"8px"}}>Cronograma de Implementación</div>
      <div style={{position:"relative",paddingLeft:"22px"}}>
        <div style={{position:"absolute",left:"7px",top:"14px",bottom:"14px",width:"2px",background:C.border}}/>
        {cron.fases?.map((fase,i)=>(
          <div key={i} style={{position:"relative",marginBottom:"9px"}}>
            <div style={{position:"absolute",left:"-18px",top:"9px",width:"20px",height:"20px",borderRadius:"50%",background:fase.color||C.primary,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:"700"}}>{fase.numero}</div>
            <div style={{...card,padding:"10px 12px",borderLeft:`3px solid ${fase.color||C.primary}`}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"2px"}}>
                <span style={{fontSize:"13px",fontWeight:"600",color:C.text}}>{fase.nombre}</span>
                <span style={{fontSize:"10px",color:C.muted,background:C.bg,padding:"1px 6px",borderRadius:"4px"}}>{fase.semanas}</span>
              </div>
              <p style={{fontSize:"11px",color:C.muted,margin:"0 0 5px",lineHeight:"1.4"}}>{fase.descripcion}</p>
              {fase.tareas?.map((t,j)=><div key={j} style={{display:"flex",gap:"5px",marginBottom:"2px"}}><span style={{color:fase.color||C.primary,fontSize:"11px",flexShrink:0}}>•</span><span style={{fontSize:"11px",color:C.text}}>{t}</span></div>)}
              {fase.entregable&&<div style={{marginTop:"5px",background:C.successLight,borderRadius:"4px",padding:"4px 8px",display:"flex",gap:"4px",alignItems:"center"}}><span style={{fontSize:"11px"}}>✅</span><span style={{fontSize:"10px",color:"#065F46",fontWeight:"500"}}>Entregable: {fase.entregable}</span></div>}
            </div>
          </div>
        ))}
      </div>
      {cron.recomendaciones_clave&&(
        <div style={{background:C.primaryLight,border:`1px solid #C7D7EE`,borderRadius:"9px",padding:"11px 13px",marginTop:"7px",marginBottom:"9px"}}>
          <div style={{fontSize:"12px",fontWeight:"600",color:C.primary,marginBottom:"6px"}}>💡 Recomendaciones clave</div>
          {cron.recomendaciones_clave.map((r,i)=><div key={i} style={{display:"flex",gap:"6px",marginBottom:"4px"}}><span style={{color:C.accent,fontWeight:"bold",flexShrink:0}}>→</span><span style={{fontSize:"12px",color:C.primary,lineHeight:"1.4"}}>{r}</span></div>)}
        </div>
      )}
      {cron.proximos_pasos&&<div style={{background:C.accentLight,border:`1px solid ${C.accent}`,borderRadius:"7px",padding:"9px 12px",marginBottom:"12px"}}><div style={{fontSize:"11px",fontWeight:"600",color:"#92400E",marginBottom:"2px"}}>Próximos pasos</div><p style={{fontSize:"11px",color:"#78350F",margin:0,lineHeight:"1.5"}}>{cron.proximos_pasos}</p></div>}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:`1px solid ${C.border}`}}>
        <button style={btnS} onClick={onPrev}>← Ajustar competencias</button>
        <button style={btnA} onClick={onRestart}>Crear otra evaluación</button>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [step,setStep]=useState(0);
  const [formData,setFormData]=useState({empresa:"",industria:"",tamanio:"",tieneEval:"",cultura:"",valores:"",objetivos:[],metodologia:"",frecuencia:""});
  const [transRecs,setTransRecs]=useState(null);
  const [selTransv,setSelTransv]=useState([]);
  const [cargos,setCargos]=useState([]);
  const [familiasResult,setFamiliasResult]=useState(null);
  const [selEsp,setSelEsp]=useState([]);
  const [cron,setCron]=useState(null);

  const upd=(k,v)=>setFormData(p=>({...p,[k]:v}));

  const toStep3=()=>{
    const recs=buildTransversalesRecs(formData);
    setTransRecs(recs);
    setSelTransv(recs.competencias.filter(c=>c.prioridad<=4).map(c=>c.id));
    setStep(3);
  };

  const handleAnalyzeCargos=()=>{
    const result=groupCargosByFamily(cargos,formData.industria);
    setFamiliasResult(result);
    setSelEsp([]);
  };

  const toStep4=()=>{
    const familiasConSel=[];
    if(familiasResult?.familias){familiasResult.familias.forEach((fam,fi)=>{const sel=fam.competencias?.filter((_,ci)=>selEsp.includes(`${fi}::${ci}`)).map(c=>c.nombre)||[];if(sel.length>0)familiasConSel.push({familia:fam.nombre,competencias:sel});});}
    const result=buildCronograma(formData,selTransv,familiasConSel);
    setCron(result);
    setStep(4);
  };

  const toggleTransv=id=>setSelTransv(p=>p.includes(id)?p.filter(c=>c!==id):[...p,id]);
  const toggleEsp=key=>setSelEsp(p=>p.includes(key)?p.filter(k=>k!==key):[...p,key]);

  const restart=()=>{
    setStep(0);setFormData({empresa:"",industria:"",tamanio:"",tieneEval:"",cultura:"",valores:"",objetivos:[],metodologia:"",frecuencia:""});
    setTransRecs(null);setSelTransv([]);setCargos([]);setFamiliasResult(null);setSelEsp([]);setCron(null);
  };

  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
      <div style={{maxWidth:"760px",margin:"0 auto",padding:"20px 14px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"30px",height:"30px",borderRadius:"7px",background:C.primary,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{color:C.accent,fontSize:"14px",fontWeight:"700"}}>E</span>
            </div>
            <div>
              <div style={{fontSize:"13px",fontWeight:"700",color:C.primary,lineHeight:1}}>Tu primera evaluación de desempeño</div>
              <div style={{fontSize:"9px",color:C.muted}}>Creado por Andrea Vargas</div>
            </div>
          </div>
          {step>0&&<button style={{...btnS,padding:"5px 10px",fontSize:"11px"}} onClick={restart}>Reiniciar</button>}
        </div>
        <div style={card}>
          {step===0&&<WelcomeStep onNext={()=>setStep(1)}/>}
          {step>=1&&step<=4&&<Stepper step={step}/>}
          {step===1&&<OrgStep data={formData} onChange={upd} onNext={()=>setStep(2)} onPrev={()=>setStep(0)}/>}
          {step===2&&<ObjectivesStep data={formData} onChange={upd} onNext={toStep3} onPrev={()=>setStep(1)}/>}
          {step===3&&<CompetenciasStep transRecs={transRecs} cargos={cargos} onCargosChange={setCargos} familiasResult={familiasResult} onAnalyzeCargos={handleAnalyzeCargos} selTransv={selTransv} onToggleTransv={toggleTransv} selEsp={selEsp} onToggleEsp={toggleEsp} onNext={toStep4} onPrev={()=>setStep(2)}/>}
          {step===4&&<CronogramaStep cron={cron} formData={formData} selTransv={selTransv} selEsp={selEsp} familiasResult={familiasResult} onPrev={()=>setStep(3)} onRestart={restart}/>}
        </div>
        <div style={{textAlign:"center",marginTop:"10px"}}>
          <span style={{fontSize:"9px",color:C.muted}}>Nuevo Diccionario de Competencias Buk (7 transversales · 15 específicas) · Creado por Andrea Vargas</span>
        </div>
      </div>
    </div>
  );
}
