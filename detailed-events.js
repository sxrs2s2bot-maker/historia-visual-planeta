const newImages = {
  rockShelter: 'assets/generated/11-human-rock-shelter.webp',
  coastal: 'assets/generated/12-coastal-migration.webp',
  iceCamp: 'assets/generated/13-ice-age-camp.webp',
  ritual: 'assets/generated/14-neolithic-ritual.webp',
  farming: 'assets/generated/15-early-agriculture.webp',
  irrigation: 'assets/generated/16-ancient-city-irrigation.webp',
  writing: 'assets/generated/17-writing-symbols.webp',
  engineering: 'assets/generated/18-ancient-engineering.webp',
  knowledge: 'assets/generated/19-knowledge-routes.webp',
  navigation: 'assets/generated/20-sailing-navigation.webp',
  industry: 'assets/generated/21-industrial-engine.webp',
  digital: 'assets/generated/22-digital-earth.webp'
};

export function buildDetailedEvents(images) {
  return [
    {
      order: 3825, id: 'coastal-foraging-sapiens', era: 'Pleistoceno tardío africano', date: 'Hace 160.000–70.000 años', dateShort: '160–70 ka', type: 'Subsistencia', color: '#38bdf8', image: newImages.coastal,
      title: 'Costas, mariscos y refugios africanos de sapiens',
      summary: 'Comunidades sapiens explotan costas, mariscos, pigmentos y recursos estacionales mucho antes de la gran dispersión global.',
      details: 'En yacimientos costeros africanos aparecen conchas, hogares, pigmentos y herramientas que muestran dietas flexibles y planificación. Las costas ofrecían alimentos relativamente predecibles cuando los interiores cambiaban por clima. Este hito es más minucioso que decir simplemente “sapiens aparece”: muestra una forma concreta de sobrevivir, recordar lugares, moverse por estaciones y usar materiales simbólicos en paisajes reales.',
      why: 'Ayuda a entender que la expansión posterior se apoyó en conocimientos ecológicos detallados, no solo en anatomía moderna.'
    },
    {
      order: 3860, id: 'ochre-workshops', era: 'Pleistoceno tardío africano', date: 'Hace 100.000–70.000 años', dateShort: '100–70 ka', type: 'Símbolo y tecnología', color: '#f97316', image: newImages.rockShelter,
      title: 'Talleres de ocre: color, mezcla y memoria material',
      summary: 'Humanos preparan pigmentos con recetas y recipientes, combinando química práctica con comunicación simbólica.',
      details: 'El ocre pudo servir para decorar cuerpos, tratar pieles, proteger materiales o marcar identidades. En algunos yacimientos se observan mezclas preparadas, conchas usadas como recipientes y selección de minerales. No es un simple “arte”: implica memoria de recetas, transporte de materias primas y aprendizaje social. Esta escala permite ver la cultura como una tecnología cotidiana acumulativa.',
      why: 'Muestra pensamiento simbólico y técnico antes de la explosión artística más conocida del Paleolítico europeo.'
    },
    {
      order: 3885, id: 'projectile-technology', era: 'Pleistoceno tardío', date: 'Hace 75.000–50.000 años', dateShort: '75–50 ka', type: 'Tecnología de caza', color: '#f59e0b', image: newImages.rockShelter,
      title: 'Proyectiles compuestos: puntas, adhesivos y caza a distancia',
      summary: 'Puntas de piedra, mangos y resinas permiten armas compuestas más eficaces y seguras para cazar.',
      details: 'Fabricar un proyectil compuesto exige una cadena de acciones: tallar la punta, preparar adhesivo, fijarla al mango y conocer cómo vuela o penetra. Estas armas aumentan distancia y seguridad frente a presas peligrosas. También requieren enseñanza precisa. El detalle importa porque no es una herramienta aislada, sino un sistema técnico con materiales distintos coordinados por conocimiento compartido.',
      why: 'Refleja una mente tecnológica capaz de integrar materiales, gestos y aprendizaje en soluciones complejas.'
    },
    {
      order: 4080, id: 'fire-stick-land-management', era: 'Sahul pleistoceno', date: 'Hace 50.000–35.000 años', dateShort: '50–35 ka', type: 'Ecología humana', color: '#fb7185', image: newImages.coastal,
      title: 'Gestión del paisaje con fuego en Sahul',
      summary: 'Poblaciones de Australia y Nueva Guinea usan fuego de forma selectiva para modificar mosaicos de vegetación.',
      details: 'El fuego no solo calienta o cocina: también gestiona paisajes. Quemar en momentos concretos puede favorecer brotes, abrir corredores, atraer animales o reducir combustible acumulado. En Sahul, las prácticas humanas se integraron durante milenios en ecologías locales. Esta mirada minuciosa evita presentar la llegada humana como una simple fecha migratoria: muestra convivencia activa con el territorio.',
      why: 'Anticipa una idea clave del Antropoceno: los humanos transforman ecosistemas mucho antes de la industria.'
    },
    {
      order: 4210, id: 'tailored-clothing-needles', era: 'Paleolítico superior', date: 'Hace 45.000–25.000 años', dateShort: '45–25 ka', type: 'Tecnología cotidiana', color: '#fbbf24', image: newImages.iceCamp,
      title: 'Agujas, ropa ajustada y supervivencia en el frío',
      summary: 'Herramientas finas de hueso permiten coser prendas complejas y ocupar regiones frías con más seguridad.',
      details: 'La ropa rara vez fosiliza, pero agujas, punzones y raspadores indican trabajo sofisticado de pieles y fibras. Una prenda ajustada conserva calor mucho mejor que una piel colgada sobre el cuerpo. Esto hizo posible vivir en estepas frías, cuidar bebés, moverse largas distancias y sostener campamentos de invierno. La tecnología decisiva no siempre es monumental: a veces cabe en una aguja.',
      why: 'Conecta clima, cuerpo y cultura material: los humanos sobreviven adaptando el entorno inmediato que llevan puesto.'
    },
    {
      order: 4230, id: 'venus-figurines', era: 'Paleolítico superior', date: 'Hace 40.000–25.000 años', dateShort: '40–25 ka', type: 'Arte portátil', color: '#f472b6', image: newImages.rockShelter,
      title: 'Figurillas portátiles y símbolos transportables',
      summary: 'Pequeñas figuras talladas permiten llevar imágenes, identidades y quizá relatos más allá de una cueva concreta.',
      details: 'Las figurillas paleolíticas aparecen en materiales como marfil, hueso o piedra. Algunas representan cuerpos humanos, animales o formas híbridas. A diferencia del arte rupestre fijo, un objeto portátil viaja con la persona o el grupo. Esto abre otra dimensión de la cultura simbólica: memoria compartida que cabe en la mano, intercambiable, heredable y conectada con redes sociales amplias.',
      why: 'Hace visible que el simbolismo paleolítico no estaba atado a un lugar: también circulaba con las personas.'
    },
    {
      order: 4325, id: 'ice-age-dwellings', era: 'Última glaciación', date: 'Hace 27.000–15.000 años', dateShort: '27–15 ka', type: 'Arquitectura temprana', color: '#93c5fd', image: newImages.iceCamp,
      title: 'Campamentos de invierno y viviendas de hueso de mamut',
      summary: 'En regiones frías, grupos humanos construyen refugios duraderos con huesos, pieles y organización colectiva.',
      details: 'Algunos yacimientos de Eurasia conservan estructuras hechas con huesos de mamut, hogares y zonas de actividad. Construirlas exigía planificar materiales pesados, mantener fuego, almacenar recursos y organizar el trabajo del grupo. Estas viviendas muestran que los cazadores-recolectores podían crear arquitectura compleja cuando el ambiente lo requería. No eran “nómadas simples”, sino ingenieros de contextos extremos.',
      why: 'Rellena el salto entre cuevas paleolíticas y aldeas agrícolas mostrando arquitectura cazadora-recolectora avanzada.'
    },
    {
      order: 4380, id: 'fishing-hooks-nets', era: 'Pleistoceno final', date: 'Hace 23.000–14.000 años', dateShort: '23–14 ka', type: 'Tecnología acuática', color: '#06b6d4', image: newImages.coastal,
      title: 'Anzuelos, redes y pesca especializada',
      summary: 'La captura sistemática de peces y recursos acuáticos añade proteína estable y nuevas técnicas de fabricación.',
      details: 'Anzuelos de concha o hueso, pesos de red y restos de peces muestran una relación cada vez más especializada con ríos, lagos y costas. Pescar exige conocer ciclos, corrientes, mareas y comportamiento animal. También requiere fibras, nudos y herramientas pequeñas. Este detalle añade una economía acuática a la historia humana, no solo caza de grandes mamíferos.',
      why: 'Explica cómo recursos predecibles de agua dulce y mar favorecieron asentamientos, navegación y crecimiento demográfico.'
    },
    {
      order: 4740, id: 'natufian-sedentism', era: 'Epipaleolítico levantino', date: 'Hace 15.000–11.500 años', dateShort: '15–11,5 ka', type: 'Sedentarismo temprano', color: '#d97706', image: newImages.ritual,
      title: 'Natufienses: aldeas antes de la agricultura plena',
      summary: 'Cazadores-recolectores levantinos viven en asentamientos más duraderos, recolectan cereales silvestres y entierran a sus muertos.',
      details: 'El Natufiense muestra que la sedentarización puede preceder a la domesticación completa. Algunas comunidades explotaban cereales silvestres, molían granos, construían casas semienterradas y mantenían cementerios. Esto rompe la secuencia simple “agricultura y luego aldeas”. La vida fija comenzó en parte por abundancia local, memoria de lugares y redes sociales complejas antes de campos plenamente domesticados.',
      why: 'Reduce un gran salto temporal: entre el Paleolítico móvil y el Neolítico agrícola existieron formas intermedias muy importantes.'
    },
    {
      order: 4860, id: 'gobekli-tepe-ritual', era: 'Neolítico precerámico', date: 'Hace 11.600–10.200 años', dateShort: '11,6–10,2 ka', type: 'Ritual y cooperación', color: '#facc15', image: newImages.ritual,
      title: 'Göbekli Tepe y arquitectura ritual temprana',
      summary: 'Grandes recintos con pilares tallados muestran cooperación ritual antes de ciudades y estados.',
      details: 'Göbekli Tepe no es una ciudad ni un templo en sentido moderno, pero sus pilares monumentales con animales tallados prueban coordinación de trabajo, símbolos compartidos y lugares de reunión regional. Su importancia está en el orden: arquitectura ritual compleja aparece en sociedades todavía cercanas a la caza-recolección. La religión, la fiesta y la cooperación pudieron impulsar sedentarismo tanto como la economía.',
      why: 'Matiza la idea de que primero viene la agricultura práctica y solo después la arquitectura simbólica compleja.'
    },
    {
      order: 4920, id: 'domesticated-wheat-barley', era: 'Neolítico del Próximo Oriente', date: 'Hace 10.500–9.000 años', dateShort: '10,5–9 ka', type: 'Domesticación vegetal', color: '#84cc16', image: newImages.farming,
      title: 'Trigo y cebada domesticados cambian su anatomía',
      summary: 'Cereales seleccionados por humanos retienen semillas y se vuelven dependientes de cosecha y siembra.',
      details: 'La domesticación vegetal deja señales concretas: espigas que no se rompen solas, semillas más grandes y ciclos ajustados al cultivo. Los humanos seleccionaban sin conocer genética, guardando semillas de plantas útiles. A cambio, los cereales se adaptaron al campo humano. Este hito convierte la agricultura en un proceso evolutivo bilateral, no solo una técnica inventada.',
      why: 'Muestra el mecanismo fino por el que una práctica diaria transforma especies y dietas durante generaciones.'
    },
    {
      order: 4980, id: 'goat-sheep-herding', era: 'Neolítico', date: 'Hace 10.500–8.500 años', dateShort: '10,5–8,5 ka', type: 'Domesticación animal', color: '#a3e635', image: newImages.farming,
      title: 'Cabras y ovejas: rebaños, leche y lana incipiente',
      summary: 'La gestión de rebaños transforma movilidad, alimento, paisaje y relación diaria con animales domesticados.',
      details: 'Domesticar cabras y ovejas no significa encerrar animales de golpe. Implica controlar reproducción, proteger crías, seleccionar temperamento y mover rebaños por pastos. Primero importan carne, leche y pieles; después la lana será decisiva. La vida pastoral crea nuevas rutas, conflictos por pastos y paisajes abiertos. Los animales se convierten en capital vivo.',
      why: 'Añade precisión a la revolución agrícola al mostrar que plantas y animales cambiaron sociedades de formas distintas.'
    },
    {
      order: 5020, id: 'yangtze-rice', era: 'Neolítico chino', date: 'Hace 9.000–7.000 años', dateShort: '9–7 ka', type: 'Agricultura regional', color: '#65a30d', image: newImages.farming,
      title: 'Arroz del Yangtsé y paisajes inundados',
      summary: 'Comunidades del valle del Yangtsé domestican arroz y aprenden a manejar campos húmedos y estacionales.',
      details: 'El arroz requiere una relación distinta con el agua que los cereales secos del Próximo Oriente. Manejar humedales, inundación, canales y calendarios de siembra produjo paisajes agrícolas propios. Esta domesticación independiente alimentará densas poblaciones asiáticas durante milenios. Añadirla evita que la historia agrícola parezca centrada solo en trigo y cebada.',
      why: 'Muestra que la agricultura fue plural: diferentes plantas obligaron a inventar diferentes ecologías humanas.'
    },
    {
      order: 5060, id: 'maize-domestication', era: 'Neolítico americano', date: 'Hace 9.000–6.000 años', dateShort: '9–6 ka', type: 'Agricultura regional', color: '#eab308', image: newImages.farming,
      title: 'Maíz desde teosinte: una domesticación radical',
      summary: 'Poblaciones mesoamericanas transforman una gramínea silvestre en uno de los cultivos centrales del mundo.',
      details: 'El maíz desciende del teosinte, una planta con mazorcas pequeñas y granos duros. La selección humana modificó arquitectura, tamaño, cubierta de semillas y rendimiento. Fue un proceso largo, acompañado por calabaza, frijol y sistemas agrícolas regionales. Este detalle muestra la potencia de la domesticación: crear una planta que parece muy distinta de su ancestro silvestre.',
      why: 'Explica una base alimentaria americana que luego cambiará dietas globales tras el intercambio colombino.'
    },
    {
      order: 5160, id: 'early-irrigation-canals', era: 'Neolítico/Calcolítico', date: 'Hace 8.000–5.500 años', dateShort: '8–5,5 ka', type: 'Agua e infraestructura', color: '#22d3ee', image: newImages.irrigation,
      title: 'Canales de riego y agricultura hidráulica temprana',
      summary: 'Comunidades canalizan agua para estabilizar cosechas, aumentando producción y coordinación social.',
      details: 'El riego no es solo cavar zanjas: exige calendario, mantenimiento, reparto de turnos, resolución de conflictos y vigilancia de salinización. En llanuras aluviales, controlar agua permitió cultivar donde la lluvia era insuficiente o irregular. La infraestructura hidráulica hizo la agricultura más productiva, pero también más dependiente de organización colectiva y autoridad local.',
      why: 'Conecta tecnología ambiental con la aparición de administración, desigualdad y poder territorial.'
    },
    {
      order: 5220, id: 'plough-and-traction', era: 'Neolítico tardío/Calcolítico', date: 'Hace 6.500–5.000 años', dateShort: '6,5–5 ka', type: 'Agricultura', color: '#a3e635', image: newImages.farming,
      title: 'Arado y animales de tiro multiplican la superficie cultivable',
      summary: 'La tracción animal permite trabajar suelos más pesados y ampliar campos, excedentes y jerarquías rurales.',
      details: 'El arado cambia la escala del cultivo al aprovechar fuerza de bueyes u otros animales. Permite abrir suelos que serían costosos con azadas manuales, pero exige alimentar animales, poseer equipo y organizar campos. Esto puede aumentar excedentes y también diferencias entre hogares. Es una tecnología agrícola con consecuencias sociales, no solo productivas.',
      why: 'Aclara cómo algunas aldeas pasaron de horticultura intensiva a economías agrarias capaces de sostener ciudades.'
    },
    {
      order: 5280, id: 'woven-textiles', era: 'Neolítico/Calcolítico', date: 'Hace 8.000–5.000 años', dateShort: '8–5 ka', type: 'Textiles', color: '#f472b6', image: newImages.rockShelter,
      title: 'Telares, fibras y tejidos: la tecnología blanda',
      summary: 'Lino, lana y fibras vegetales se convierten en ropa, bolsas, velas, cuerdas y objetos de intercambio.',
      details: 'Los textiles se conservan mal, pero pesas de telar, husos e impresiones revelan una industria compleja. Hilar y tejer requieren tiempo, destreza y organización doméstica. Los tejidos abrigan, almacenan, adornan y transportan; más tarde harán posible velas y comercio. Esta tecnología blanda suele invisibilizarse frente a piedra y metal, aunque estructuró la vida diaria.',
      why: 'Recupera un tipo de innovación fundamental, muchas veces ausente porque desaparece del registro arqueológico.'
    },
    {
      order: 5385, id: 'proto-cuneiform-accounting', era: 'Uruk tardío', date: 'Hace 5.300–5.000 años', dateShort: '5,3–5 ka', type: 'Contabilidad', color: '#facc15', image: newImages.writing,
      title: 'Fichas, tablillas y contabilidad proto-cuneiforme',
      summary: 'La escritura nace registrando cebada, ganado, trabajo y raciones antes de narrar literatura o historia.',
      details: 'Los primeros sistemas escritos mesopotámicos están llenos de cuentas. Signos, sellos y tablillas permitían saber quién debía qué, cuánta cebada entraba o cuántos trabajadores recibían raciones. La escritura surge como una herramienta administrativa concreta, no como poesía desde el primer día. Ese origen burocrático explica su poder: convertir obligaciones en memoria verificable.',
      why: 'Hace más precisa la invención de la escritura mostrando qué problemas sociales resolvía al principio.'
    },
    {
      order: 5520, id: 'indus-urban-water', era: 'Civilización del Indo', date: 'Hace 4.600–3.900 años', dateShort: '2600–1900 a. C.', type: 'Urbanismo', color: '#06b6d4', image: newImages.irrigation,
      title: 'Ciudades del Indo: drenaje, pozos y planificación urbana',
      summary: 'Harappa y Mohenjo-daro muestran urbanismo con agua doméstica, drenajes y barrios planificados.',
      details: 'Las ciudades del Indo destacan por pozos, baños, drenajes cubiertos y planificación modular. Su poder político es menos evidente que en Egipto o Mesopotamia, pero su infraestructura urbana fue sofisticada. Este evento amplía la mirada: la ciudad antigua no fue solo palacio y templo, también gestión de agua, higiene, artesanía y coordinación de barrios.',
      why: 'Introduce una tradición urbana muy avanzada que no encaja del todo en el modelo clásico de reyes monumentales.'
    },
    {
      order: 5540, id: 'pyramid-state-labor', era: 'Egipto del Reino Antiguo', date: 'Hace 4.600–4.500 años', dateShort: '2600–2500 a. C.', type: 'Estado y arquitectura', color: '#f59e0b', image: newImages.engineering,
      title: 'Pirámides y coordinación estatal del trabajo',
      summary: 'La construcción monumental egipcia combina agricultura del Nilo, administración, especialistas y legitimidad sagrada.',
      details: 'Las pirámides no son solo tumbas espectaculares. Requieren excedentes agrícolas, canteras, transporte, alimentación de trabajadores, geometría práctica y autoridad religiosa-política. Su construcción muestra cómo un Estado puede convertir ciclos agrícolas y creencias en arquitectura de escala inédita. El detalle importante es logístico: miles de tareas coordinadas durante años.',
      why: 'Permite ver el poder estatal temprano como capacidad de movilizar trabajo, conocimiento e ideología.'
    },
    {
      order: 5580, id: 'bronze-chariot-warfare', era: 'Bronce medio/tardío', date: 'Hace 4.000–3.200 años', dateShort: '2000–1200 a. C.', type: 'Guerra y movilidad', color: '#fb7185', image: newImages.engineering,
      title: 'Carros de guerra y movilidad aristocrática',
      summary: 'Ruedas ligeras con radios, caballos entrenados y metalurgia crean una nueva élite militar móvil.',
      details: 'El carro de guerra combina varias innovaciones: ruedas ligeras, arneses, caballos, bronce, entrenamiento y caminos adecuados. En algunos imperios se convirtió en símbolo de élite y herramienta militar. No servía igual en todos los terrenos, pero transformó prestigio, diplomacia y batalla. Es un ejemplo de tecnología compuesta que reorganiza jerarquías sociales.',
      why: 'Rellena el salto entre rueda genérica e imperios militares mostrando una aplicación concreta y poderosa.'
    },
    {
      order: 5620, id: 'alphabetic-writing', era: 'Bronce tardío/Hierro temprano', date: 'Hace 3.800–2.800 años', dateShort: '1800–800 a. C.', type: 'Escritura', color: '#facc15', image: newImages.writing,
      title: 'Alfabetos: menos signos para escribir más lenguas',
      summary: 'Sistemas alfabéticos reducen el número de signos y facilitan adaptar la escritura a comunidades distintas.',
      details: 'Los alfabetos no hacen automáticamente sociedades alfabetizadas, pero simplifican el aprendizaje respecto a sistemas con cientos de signos. Desde escrituras semíticas hasta fenicio, griego y derivados, los alfabetos viajaron con comercio, colonización y administración. Al separar sonidos en unidades pequeñas, hicieron la escritura más flexible para lenguas diferentes.',
      why: 'Aumenta la portabilidad de la escritura y prepara tradiciones literarias, religiosas y administrativas extensas.'
    },
    {
      order: 5660, id: 'coinage-markets', era: 'Edad del Hierro', date: 'Hace 2.700–2.400 años', dateShort: '700–400 a. C.', type: 'Economía', color: '#eab308', image: newImages.engineering,
      title: 'Monedas acuñadas y mercados más impersonales',
      summary: 'Piezas metálicas garantizadas por autoridad política facilitan pagos, impuestos, soldados y comercio cotidiano.',
      details: 'La moneda acuñada concentra metal, sello y confianza pública. Permite comparar precios, pagar ejércitos, recaudar tributos y comerciar con desconocidos de forma más fluida. No reemplaza trueque, crédito o redistribución, pero añade una herramienta económica muy potente. La autoridad política queda inscrita en objetos que circulan de mano en mano.',
      why: 'Conecta Estado, metalurgia y mercado en una tecnología social que todavía estructura la economía.'
    },
    {
      order: 5710, id: 'roman-concrete-aqueducts', era: 'Antigüedad clásica', date: 'Hace 2.300–1.700 años', dateShort: '300 a. C.–300 d. C.', type: 'Ingeniería', color: '#9ca3af', image: newImages.engineering,
      title: 'Hormigón romano, acueductos y ciudad hidráulica',
      summary: 'Materiales duraderos y redes de agua permiten urbes densas, baños, fuentes y puertos artificiales.',
      details: 'La ingeniería romana combinó hormigón puzolánico, arcos, pendientes precisas y mantenimiento institucional. Los acueductos no eran solo monumentos: abastecían fuentes, baños, letrinas y barrios. El agua pública sostenía densidad urbana y cultura cívica. Este nivel de infraestructura muestra que la vida urbana antigua dependía de sistemas técnicos invisibles y continuos.',
      why: 'Hace concreta la escala imperial: no solo conquistas, sino infraestructuras que sostienen hábitos urbanos.'
    },
    {
      order: 5740, id: 'paper-making-china', era: 'China Han y pos-Han', date: 'Hace 2.100–1.600 años', dateShort: '100 a. C.–400 d. C.', type: 'Soporte de conocimiento', color: '#fcd34d', image: newImages.knowledge,
      title: 'Fabricación de papel: pulpa, fibras y archivos ligeros',
      summary: 'El papel hecho con fibras procesadas abarata documentos y aumenta la escala de administración y aprendizaje.',
      details: 'Fabricar papel implica macerar fibras, formar hojas, prensar y secar. Comparado con bambú, seda o pergamino, podía ser más ligero y barato. En China impulsó burocracia, literatura, educación y circulación técnica. Esta versión minuciosa separa el soporte material de la idea abstracta de “conocimiento”: sin superficies accesibles, escribir mucho es más difícil.',
      why: 'Revela que la historia intelectual depende de materiales humildes, baratos y reproducibles.'
    },
    {
      order: 5800, id: 'woodblock-printing', era: 'Asia oriental medieval', date: 'Siglos VII–X', dateShort: '600–900', type: 'Impresión', color: '#facc15', image: newImages.knowledge,
      title: 'Impresión xilográfica: textos multiplicados antes de Gutenberg',
      summary: 'Bloques tallados permiten reproducir sutras, calendarios, imágenes y documentos en Asia oriental medieval.',
      details: 'La impresión con bloques de madera requiere tallar una página completa en relieve, entintarla y presionarla contra papel. Fue muy útil para textos repetidos, imágenes religiosas y documentos oficiales. Aunque menos flexible que tipos móviles para ciertos usos, multiplicó copias siglos antes de la imprenta europea. Añade precisión global a la historia de la información.',
      why: 'Evita presentar la reproducción masiva de textos como un invento exclusivamente europeo y tardío.'
    },
    {
      order: 5840, id: 'gunpowder-weapons', era: 'Medieval', date: 'Siglos IX–XV', dateShort: '800–1400', type: 'Tecnología militar', color: '#ef4444', image: newImages.engineering,
      title: 'Pólvora: de alquimia a armas de asedio',
      summary: 'Una mezcla química china se convierte gradualmente en cohetes, bombas, cañones y guerra de pólvora.',
      details: 'La pólvora nació en contextos alquímicos y rituales, pero sus propiedades explosivas transformaron la guerra. Su difusión por Eurasia permitió armas incendiarias, artillería y cambios en fortificaciones. La transición fue gradual: no sustituyó de golpe a arcos o espadas. Pero introdujo energía química concentrada en el campo de batalla y en la política imperial.',
      why: 'Muestra cómo una fórmula química puede alterar arquitectura, ejércitos y equilibrio de poder.'
    },
    {
      order: 5880, id: 'compass-navigation', era: 'Medieval', date: 'Siglos XI–XIII', dateShort: '1000–1200', type: 'Navegación', color: '#38bdf8', image: newImages.navigation,
      title: 'Brújula magnética y navegación más segura',
      summary: 'La orientación magnética ayuda a navegar con menos dependencia de costas visibles y cielos despejados.',
      details: 'La brújula no reemplazó conocimiento de vientos, corrientes y estrellas, pero añadió una referencia constante. En rutas marítimas largas, reducir incertidumbre significaba menos riesgo y más planificación comercial. Su difusión conectó tecnologías chinas, islámicas y europeas. El mundo oceánico posterior depende de esta acumulación de instrumentos y saberes náuticos.',
      why: 'Prepara la navegación de larga distancia que terminará conectando océanos y continentes de forma permanente.'
    },
    {
      order: 5920, id: 'universities-scholastic-networks', era: 'Medieval', date: 'Siglos XI–XIII', dateShort: '1000–1200', type: 'Instituciones de conocimiento', color: '#a78bfa', image: newImages.knowledge,
      title: 'Universidades y redes de estudio medievales',
      summary: 'Bolonia, París, Oxford y otros centros organizan enseñanza, debate, grados y comunidades letradas duraderas.',
      details: 'Las universidades medievales fueron corporaciones de maestros y estudiantes con reglas, currículos y disputas intelectuales. No eran ciencia moderna, pero sí instituciones para conservar, debatir y transmitir saber. Derecho, medicina, teología y artes liberales ganaron espacios especializados. Este hito añade una infraestructura social del conocimiento entre monasterios, cortes e imprenta.',
      why: 'Explica cómo el aprendizaje se institucionaliza antes de laboratorios modernos y academias científicas.'
    },
    {
      order: 5960, id: 'mechanical-clocks', era: 'Baja Edad Media', date: 'Siglos XIII–XIV', dateShort: '1200–1300', type: 'Tiempo y coordinación', color: '#60a5fa', image: newImages.engineering,
      title: 'Relojes mecánicos y tiempo urbano medido',
      summary: 'Máquinas de escape y campanas públicas convierten el tiempo en una señal regular para trabajo y ciudad.',
      details: 'Los relojes mecánicos no solo dicen la hora: disciplinan horarios colectivos. Monasterios, ciudades y mercados pudieron coordinar rezos, turnos, comercio y administración con más precisión. El tiempo pasó a sentirse como una secuencia medible y pública, no solo como luz solar o estaciones. Esta tecnología cultural prepara hábitos modernos de puntualidad y productividad.',
      why: 'Muestra que la tecnología también transforma la experiencia humana del tiempo cotidiano.'
    },
    {
      order: 6020, id: 'portolan-maps', era: 'Medieval tardío/Moderno temprano', date: 'Siglos XIII–XV', dateShort: '1200–1400', type: 'Cartografía', color: '#22d3ee', image: newImages.navigation,
      title: 'Cartas portulanas y navegación mediterránea precisa',
      summary: 'Mapas de costas, rumbos y puertos ayudan a convertir experiencia marinera en conocimiento visual compartido.',
      details: 'Las cartas portulanas representaban líneas de rumbo, costas y puertos con gran utilidad práctica para marinos. No eran mapas globales modernos, pero sí herramientas excelentes para navegación regional. Al fijar rutas y peligros sobre superficies consultables, transformaron experiencia acumulada en infraestructura visual. La cartografía se vuelve una tecnología de viaje, comercio y poder.',
      why: 'Rellena el paso entre saber navegar y construir mapas útiles para expansión marítima.'
    },
    {
      order: 6120, id: 'atlantic-slave-trade-plantations', era: 'Edad Moderna', date: 'Siglos XVI–XIX', dateShort: '1500–1800s', type: 'Colonialismo', color: '#dc2626', image: newImages.navigation,
      title: 'Plantaciones atlánticas y trata esclavista',
      summary: 'Azúcar, algodón, tabaco y metales conectan violencia colonial, trabajo esclavo y mercados mundiales.',
      details: 'El mundo atlántico moderno se construyó con navegación, capital, armas y esclavización masiva de africanos. Las plantaciones transformaron paisajes tropicales y consumos europeos, mientras destruyeron vidas, familias y sociedades. Este evento hace más explícita la cara humana y ecológica del intercambio colombino: no fue solo movimiento de cultivos, sino un sistema violento de extracción global.',
      why: 'Es imprescindible para entender riqueza moderna, racismo estructural, diásporas y transformación ambiental atlántica.'
    },
    {
      order: 6260, id: 'steam-engine-watt', era: 'Industrialización temprana', date: '1712–1780', dateShort: '1712–1780', type: 'Máquinas', color: '#f97316', image: newImages.industry,
      title: 'Máquinas de vapor: de bombear minas a mover fábricas',
      summary: 'Newcomen y Watt convierten calor fósil en trabajo mecánico útil para minas, talleres, transporte e industria.',
      details: 'La máquina de vapor nació resolviendo un problema concreto: sacar agua de minas. Las mejoras de Watt aumentaron eficiencia y ampliaron usos. Convertir carbón en movimiento mecánico liberó producción de ríos y fuerza animal. Este detalle reduce el gran bloque “Revolución Industrial” a una transición técnica observable: calor, pistón, bomba, rueda y fábrica.',
      why: 'Explica el mecanismo energético que permitió multiplicar producción y emisiones en la era industrial.'
    },
    {
      order: 6320, id: 'smallpox-vaccination', era: 'Medicina moderna', date: '1796', dateShort: '1796', type: 'Vacunación', color: '#10b981', image: newImages.knowledge,
      title: 'Vacunación contra la viruela',
      summary: 'Jenner sistematiza una práctica preventiva que demuestra que el cuerpo puede entrenarse contra enfermedad.',
      details: 'La variolización existía antes en varias culturas, pero la vacuna de Jenner contra la viruela ofreció una vía más segura y reproducible. La idea de prevenir enfermedad antes de que aparezca transformó salud pública. Con campañas globales posteriores, la viruela sería erradicada. Este hito introduce una medicina poblacional basada en inmunidad, confianza y logística.',
      why: 'Abre la historia moderna de vacunas y demuestra que una enfermedad humana podía eliminarse del planeta.'
    },
    {
      order: 6460, id: 'urban-sanitation', era: 'Siglo XIX', date: '1840–1890', dateShort: '1840–1890', type: 'Salud pública', color: '#2dd4bf', image: newImages.irrigation,
      title: 'Alcantarillado, agua potable y salud urbana',
      summary: 'Ciudades industriales reducen epidemias al separar agua limpia, residuos y vivienda mediante infraestructura pública.',
      details: 'Antes de antibióticos, el gran avance sanitario fue muchas veces agua limpia. Mapas de cólera, alcantarillas, filtración y normas urbanas redujeron enfermedades transmitidas por agua contaminada. Esta infraestructura no era glamurosa, pero salvó millones de vidas. También mostró que la salud depende de diseño urbano, inversión pública y conocimiento ambiental.',
      why: 'Conecta medicina, ingeniería y política: vivir más no depende solo de médicos, sino de ciudades bien diseñadas.'
    },
    {
      order: 6650, id: 'assembly-line', era: 'Segunda industrialización', date: '1908–1914', dateShort: '1908–1914', type: 'Producción masiva', color: '#f59e0b', image: newImages.industry,
      title: 'Cadena de montaje y producción en masa',
      summary: 'La fábrica reorganiza tiempo, piezas y trabajadores para producir objetos baratos en cantidades enormes.',
      details: 'La cadena de montaje de Ford no inventó todas sus piezas, pero combinó estandarización, flujo continuo y división extrema del trabajo. El resultado fue producción más barata y consumo masivo, junto con monotonía laboral y disciplina fabril. Este hito hace concreta la modernidad material: no solo máquinas, sino organización precisa de movimientos humanos y objetos.',
      why: 'Explica cómo la industria pasó de fabricar más a fabricar masivamente para sociedades de consumo.'
    },
    {
      order: 6830, id: 'transistor', era: 'Siglo XX', date: '1947', dateShort: '1947', type: 'Electrónica', color: '#60a5fa', image: newImages.digital,
      title: 'Transistor: el interruptor microscópico de la era digital',
      summary: 'Un dispositivo semiconductor reemplaza válvulas grandes y abre el camino a radios pequeñas, ordenadores y chips.',
      details: 'El transistor puede amplificar o conmutar señales usando materiales semiconductores. Frente a las válvulas de vacío, era más pequeño, eficiente y fiable. Su miniaturización permitió circuitos integrados y microprocesadores. La revolución digital tiene raíces físicas muy concretas: controlar electrones dentro de cristales dopados con precisión industrial.',
      why: 'Es el ladrillo tecnológico que hace posibles computación ubicua, Internet, satélites modernos e inteligencia artificial.'
    },
    {
      order: 6870, id: 'dna-double-helix', era: 'Biología molecular', date: '1953', dateShort: '1953', type: 'Genética', color: '#c084fc', image: newImages.digital,
      title: 'Doble hélice del ADN y código molecular de la herencia',
      summary: 'La estructura del ADN explica cómo la información biológica puede copiarse, mutar y expresarse.',
      details: 'Watson, Crick, Franklin, Wilkins y otros trabajaron sobre datos de difracción, química y modelos para revelar la doble hélice. La complementariedad de bases sugería un mecanismo de copia. Esta idea conectó evolución, desarrollo, enfermedad y biotecnología. La vida podía leerse como información molecular, pero encarnada en células y organismos.',
      why: 'Prepara genómica, medicina molecular, biotecnología y una comprensión más profunda de la evolución.'
    },
    {
      order: 7060, id: 'integrated-circuit-microchip', era: 'Siglo XX', date: '1958–1971', dateShort: '1958–1971', type: 'Microelectrónica', color: '#8b5cf6', image: newImages.digital,
      title: 'Circuito integrado y microprocesador',
      summary: 'Muchos transistores se integran en chips, concentrando cálculo en piezas cada vez más pequeñas y baratas.',
      details: 'El circuito integrado redujo conexiones manuales y permitió fabricar sistemas electrónicos completos sobre una oblea. El microprocesador concentró una unidad de cálculo programable en un chip. Esta miniaturización siguió curvas de mejora durante décadas, abaratando computadoras y sensores. El mundo digital no sería global sin producción masiva de chips.',
      why: 'Convierte el transistor en infraestructura planetaria y abre computación personal, móvil y embebida.'
    },
    {
      order: 7120, id: 'arpanet-packet-switching', era: 'Redes digitales', date: '1969–1983', dateShort: '1969–1983', type: 'Internet temprano', color: '#7dd3fc', image: newImages.digital,
      title: 'ARPANET, conmutación de paquetes y TCP/IP',
      summary: 'Redes experimentales dividen mensajes en paquetes y crean protocolos comunes para conectar computadores distintos.',
      details: 'Internet no nació como una página web, sino como redes que podían enviar paquetes por rutas variables y hablar mediante protocolos compartidos. ARPANET, correo electrónico temprano y TCP/IP establecieron principios de interoperabilidad. La clave minuciosa es arquitectura: dividir, enrutar, recomponer y permitir que redes heterogéneas funcionen como una red de redes.',
      why: 'Explica la base técnica de la conectividad global antes de la web, redes sociales y servicios en la nube.'
    },
    {
      order: 7160, id: 'personal-computer-gui', era: 'Final siglo XX', date: '1977–1990', dateShort: '1977–1990', type: 'Computación personal', color: '#a78bfa', image: newImages.digital,
      title: 'Ordenador personal e interfaces gráficas',
      summary: 'La computación sale de laboratorios y empresas para entrar en hogares, escuelas y escritorios creativos.',
      details: 'Microprocesadores baratos, pantallas, teclados, ratones e interfaces gráficas hicieron que personas no especialistas pudieran usar computadoras. La programación, edición de texto, juegos, diseño y hojas de cálculo cambiaron trabajo y cultura. Este hito baja la revolución digital a una escala humana: una máquina interactiva en una mesa, no solo centros de cálculo.',
      why: 'Transforma la relación cotidiana con información, creatividad y productividad antes de la web masiva.'
    },
    {
      order: 7270, id: 'gps-satellite-navigation', era: 'Final siglo XX', date: '1978–1995', dateShort: '1978–1995', type: 'Navegación espacial', color: '#38bdf8', image: newImages.digital,
      title: 'GPS: posición planetaria por satélites y relojes atómicos',
      summary: 'Constelaciones orbitales permiten saber ubicación y tiempo precisos en cualquier punto de la Tierra.',
      details: 'El GPS combina satélites, señales de radio, relatividad, relojes atómicos y receptores portátiles. Al principio militar, se volvió infraestructura civil para mapas, logística, agricultura, emergencias y teléfonos. Este evento conecta era espacial con vida diaria: la posición geográfica se convierte en dato continuo, barato y computable.',
      why: 'Hace que el planeta sea navegable digitalmente y permite servicios modernos basados en ubicación.'
    },
    {
      order: 7420, id: 'world-wide-web', era: 'Final siglo XX', date: '1989–1993', dateShort: '1989–1993', type: 'Web', color: '#60a5fa', image: newImages.digital,
      title: 'World Wide Web: documentos enlazados sobre Internet',
      summary: 'URLs, HTTP y HTML convierten Internet en un espacio navegable de páginas conectadas por enlaces.',
      details: 'La web de Tim Berners-Lee no fue todo Internet, pero sí la capa que lo hizo navegable para millones. Un enlace permite saltar entre documentos remotos; un navegador convierte protocolos en experiencia visual. La web hizo publicar más fácil, mezcló ciencia, comercio y cultura, y abrió la puerta a buscadores, redes sociales y aplicaciones web.',
      why: 'Explica cómo una infraestructura técnica se convierte en espacio público global de información.'
    },
    {
      order: 7640, id: 'crispr-gene-editing', era: 'Siglo XXI', date: 'Desde 2012', dateShort: '2012+', type: 'Biotecnología', color: '#c084fc', image: newImages.digital,
      title: 'CRISPR y edición genética programable',
      summary: 'Herramientas derivadas de defensas bacterianas permiten cortar y editar ADN con una precisión nueva.',
      details: 'CRISPR-Cas convirtió un sistema inmune microbiano en herramienta de laboratorio. Al guiar una enzima hacia una secuencia concreta, investigadores pueden modificar genes en células, plantas, animales o terapias. Sus posibilidades incluyen agricultura, medicina y ciencia básica, pero también dilemas éticos profundos. Es una tecnología molecular con consecuencias sociales directas.',
      why: 'Cierra el arco iniciado por genómica: ya no solo leemos ADN, también podemos reescribirlo.'
    }
  ].filter(event => ![
    'venus-figurines',
    'woven-textiles',
    'coinage-markets',
    'universities-scholastic-networks'
  ].includes(event.id));
}
