const images = {
  planet: 'assets/generated/01-earth-forms.webp',
  ocean: 'assets/generated/02-oceans-crust.webp',
  microbe: 'assets/generated/03-first-life.webp',
  oxygen: 'assets/generated/04-oxygenation.webp',
  cell: 'assets/generated/05-eukaryotes.webp',
  ediacaran: 'assets/generated/06-ediacaran.webp',
  cambrian: 'assets/generated/07-cambrian.webp',
  dino: 'assets/generated/08-dinosaurs.webp',
  impact: 'assets/generated/09-kpg.webp',
  human: 'assets/generated/10-hominins.webp'
};

export const events = [
  {
    id: 'solar-system-accretion', era: 'Sistema Solar temprano', date: 'Hace 4.567–4.540 millones de años', dateShort: '4,57–4,54 Ga', type: 'Geología planetaria', color: '#ff7a3d', image: images.planet,
    title: 'La Tierra se forma en un disco de escombros',
    summary: 'Polvo, roca y metal chocan alrededor del Sol joven hasta construir un planeta caliente y estratificado.',
    details: 'La Tierra no aparece como un mundo terminado: crece por impactos repetidos y acumulación de material. Ese proceso fija su masa, su composición y su energía interna. La separación entre núcleo metálico, manto y corteza permitirá un planeta geológicamente activo durante miles de millones de años. Un impacto gigante probablemente origina la Luna, que influirá en mareas y estabilidad orbital.',
    why: 'Es el montaje físico del escenario: sin masa suficiente, núcleo, calor interno y Luna, la historia posterior habría sido radicalmente distinta.'
  },
  {
    id: 'first-crust-oceans', era: 'Hádico tardío', date: 'Hace 4.400–4.000 millones de años', dateShort: '4,4–4,0 Ga', type: 'Océanos', color: '#40c9ff', image: images.ocean,
    title: 'Corteza estable y océanos tempranos',
    summary: 'La superficie se enfría, aparece corteza y el vapor de agua condensa en mares persistentes.',
    details: 'Los circones más antiguos sugieren que la Tierra tuvo agua líquida y zonas relativamente frías muy pronto. No era un planeta tranquilo: seguían impactos y volcanismo intenso. Pero la combinación de roca, agua, minerales y energía crea entornos donde las reacciones químicas pueden concentrarse y repetirse. Es el paso de un planeta puramente fundido a un planeta con escenarios habitables.',
    why: 'El agua líquida y las superficies minerales son condiciones básicas para imaginar química prebiótica y vida temprana.'
  },
  {
    id: 'late-bombardment', era: 'Hádico/Arcaico inicial', date: 'Hace 4.100–3.800 millones de años', dateShort: '4,1–3,8 Ga', type: 'Impactos', color: '#fb923c', image: images.planet,
    title: 'Impactos gigantes y reinicios ambientales',
    summary: 'Grandes cuerpos siguen golpeando la Tierra y alteran océanos, atmósfera y corteza.',
    details: 'Los detalles del llamado bombardeo intenso tardío se debaten, pero los impactos fueron un componente real del ambiente temprano. Un gran impacto podía vaporizar agua local o globalmente, crear sistemas hidrotermales y exponer minerales reactivos. Si la vida estaba emergiendo, tuvo que hacerlo en un planeta con destrucciones periódicas y refugios quizá submarinos o subterráneos.',
    why: 'Explica por qué el origen de la vida probablemente ocurrió entre catástrofes, refugios y oportunidades químicas.'
  },
  {
    id: 'prebiotic-chemistry', era: 'Arcaico inicial', date: 'Antes de 3.800–3.500 millones de años', dateShort: '>3,5 Ga', type: 'Origen de la vida', color: '#2dd4bf', image: images.microbe,
    title: 'Química prebiótica: antes de las células',
    summary: 'Moléculas orgánicas, minerales, agua y energía producen sistemas químicos cada vez más complejos.',
    details: 'No sabemos el escenario exacto: se proponen respiraderos hidrotermales, charcas con ciclos húmedo-seco, superficies minerales y aportes extraterrestres. Lo importante es que antes de una célula moderna tuvo que aparecer algún sistema capaz de almacenar información, copiarse de forma imperfecta y aprovechar energía. Esta zona de incertidumbre conecta geología, química y biología.',
    why: 'Es la transición conceptual más profunda: de reacciones químicas a sistemas capaces de evolucionar.'
  },
  {
    id: 'first-life', era: 'Arcaico', date: 'Hace 3.800–3.500 millones de años', dateShort: '3,8–3,5 Ga', type: 'Vida microbiana', color: '#44d17a', image: images.microbe,
    title: 'Primeras evidencias de vida microbiana',
    summary: 'Señales geoquímicas y estructuras como estromatolitos indican ecosistemas de microorganismos.',
    details: 'Las evidencias más antiguas son difíciles de interpretar, pero hacia 3.500 millones de años ya hay señales sólidas de vida microbiana. Durante la inmensa mayoría de la historia terrestre, la vida fue microscópica. Estos organismos no eran simples “preludios”: transformaban minerales, gases y ciclos químicos. La Tierra se convierte en un planeta biológico mucho antes de animales, plantas o dinosaurios.',
    why: 'Marca el momento en que la vida empieza a ser una fuerza geológica, no solo una habitante pasiva.'
  },
  {
    id: 'anoxygenic-photosynthesis', era: 'Arcaico', date: 'Hace más de 3.400 millones de años', dateShort: '>3,4 Ga', type: 'Metabolismo', color: '#10b981', image: images.oxygen,
    title: 'Fotosíntesis temprana sin oxígeno',
    summary: 'Microbios aprenden a usar la luz como fuente de energía antes de liberar oxígeno al planeta.',
    details: 'La fotosíntesis no apareció de golpe en su forma moderna. Primero existieron metabolismos que capturaban luz sin romper agua ni producir oxígeno. Esta innovación amplió la energía disponible para la biosfera y preparó el terreno evolutivo para la fotosíntesis oxigénica. La vida empezó a aprovechar una fuente casi inagotable: el Sol.',
    why: 'Es una revolución energética previa a la atmósfera oxigenada.'
  },
  {
    id: 'cyanobacteria', era: 'Arcaico tardío', date: 'Hace 2.900–2.700 millones de años', dateShort: '2,9–2,7 Ga', type: 'Metabolismo', color: '#22c55e', image: images.oxygen,
    title: 'Cianobacterias y oxígeno como subproducto',
    summary: 'La fotosíntesis oxigénica usa agua y luz, liberando oxígeno que primero queda atrapado en minerales.',
    details: 'Las cianobacterias cambian la escala de la vida. Al usar agua como fuente de electrones, producen oxígeno. Al principio, ese gas reacciona con hierro y otros compuestos, por eso no se acumula inmediatamente en el aire. Pero el proceso, repetido durante millones de años, satura sumideros químicos y prepara una transformación atmosférica global.',
    why: 'Sin esta innovación no existiría respiración aeróbica eficiente ni animales grandes.'
  },
  {
    id: 'great-oxidation', era: 'Proterozoico temprano', date: 'Hace 2.400–2.100 millones de años', dateShort: '2,4–2,1 Ga', type: 'Atmósfera', color: '#7dd3fc', image: images.oxygen,
    title: 'Gran Oxidación: la vida cambia el aire',
    summary: 'El oxígeno se acumula en atmósfera y océanos, provocando crisis para anaerobios y nuevas oportunidades.',
    details: 'La Gran Oxidación es una revolución planetaria. El oxígeno era tóxico para muchos organismos anaerobios, pero abrió metabolismos muchísimo más rentables. También alteró minerales, océanos y clima, quizá reduciendo metano y favoreciendo glaciaciones. Es uno de los ejemplos más claros de retroalimentación: seres vivos modifican el planeta y el nuevo planeta cambia la evolución de la vida.',
    why: 'Demuestra que la biosfera puede transformar condiciones globales y reescribir las reglas evolutivas.'
  },
  {
    id: 'early-snowball', era: 'Proterozoico temprano', date: 'Hace 2.400–2.200 millones de años', dateShort: '2,4–2,2 Ga', type: 'Clima', color: '#93c5fd', image: images.ocean,
    title: 'Glaciaciones profundas tras el cambio atmosférico',
    summary: 'La modificación de gases de efecto invernadero pudo empujar al planeta a episodios de hielo extremo.',
    details: 'Si el oxígeno redujo el metano atmosférico, la Tierra perdió un potente calentador climático. El resultado pudo ser una serie de glaciaciones muy extensas. No es un evento aislado: conecta metabolismo microbiano, composición atmosférica y clima global. La vida sobrevive, pero la biosfera aprende a existir en un planeta capaz de oscilar entre estados extremos.',
    why: 'Introduce la relación crítica entre gases, clima y evolución.'
  },
  {
    id: 'eukaryotes', era: 'Proterozoico', date: 'Hace 1.900–1.600 millones de años', dateShort: '1,9–1,6 Ga', type: 'Complejidad celular', color: '#a78bfa', image: images.cell,
    title: 'Eucariotas: células con núcleo y mitocondrias',
    summary: 'Aparecen células complejas con compartimentos internos y una simbiosis bacteriana convertida en mitocondria.',
    details: 'La célula eucariota es una plataforma completamente nueva. Puede manejar genomas más grandes, cambiar de forma, engullir partículas y separar procesos dentro de compartimentos. La mitocondria aporta mucha más energía utilizable por célula. Sin esta transición no habría algas complejas, hongos, plantas ni animales. Es menos vistosa que un dinosaurio, pero mucho más fundamental.',
    why: 'Es la base celular de toda la vida compleja visible, desde algas y plantas hasta animales, hongos y humanos.'
  },
  {
    id: 'sexual-reproduction', era: 'Proterozoico', date: 'Hace 1.200–1.000 millones de años', dateShort: '1,2–1,0 Ga', type: 'Evolución', color: '#c084fc', image: images.cell,
    title: 'Sexo y recombinación aceleran la variación',
    summary: 'La reproducción sexual mezcla genomas y aumenta la capacidad de adaptación de linajes eucariotas.',
    details: 'El sexo tiene costes, pero genera combinaciones nuevas de genes y ayuda a separar mutaciones útiles de perjudiciales. En ambientes cambiantes, esa capacidad de recombinar información es muy poderosa. No es un evento puntual con fecha exacta, sino una transición gradual que será esencial para organismos multicelulares complejos.',
    why: 'Aumenta la creatividad evolutiva disponible para plantas, animales y hongos.'
  },
  {
    id: 'complex-multicellularity', era: 'Proterozoico tardío', date: 'Hace 1.200–800 millones de años', dateShort: '1,2–0,8 Ga', type: 'Multicelularidad', color: '#d946ef', image: images.ediacaran,
    title: 'Multicelularidad compleja en varios linajes',
    summary: 'Células cooperan, se especializan y construyen cuerpos con funciones internas repartidas.',
    details: 'La multicelularidad compleja exige adhesión, comunicación, desarrollo coordinado y control del conflicto entre células. Evoluciona más de una vez, pero en animales abre la posibilidad de tejidos, órganos y comportamientos. A partir de aquí la evolución puede trabajar con cuerpos, no solo con células individuales o colonias simples.',
    why: 'Convierte comunidades celulares en organismos con anatomía y desarrollo.'
  },
  {
    id: 'cryogenian-snowball', era: 'Criogénico', date: 'Hace 720–635 millones de años', dateShort: '720–635 Ma', type: 'Clima', color: '#60a5fa', image: images.ocean,
    title: 'Tierra bola de nieve y recuperación climática',
    summary: 'Glaciaciones extremas cubren gran parte del planeta antes de un deshielo con cambios químicos intensos.',
    details: 'Las glaciaciones criogénicas quizá llevaron hielo hasta latitudes bajas. La recuperación habría requerido acumulación volcánica de CO₂ y un efecto invernadero potente. Tras estos episodios, los océanos y ciclos de nutrientes cambiaron. No “crearon” animales por sí solas, pero forman el contexto ambiental anterior al auge de organismos grandes.',
    why: 'Es una de las mayores crisis climáticas conocidas antes de la expansión animal.'
  },
  {
    id: 'ediacaran-biota', era: 'Ediacárico', date: 'Hace 575–541 millones de años', dateShort: '575–541 Ma', type: 'Animales tempranos', color: '#f0abfc', image: images.ediacaran,
    title: 'Biota ediacárica: cuerpos grandes antes del Cámbrico',
    summary: 'Organismos blandos forman comunidades visibles en fondos marinos, algunos sin equivalentes modernos claros.',
    details: 'La vida grande no empieza de golpe en el Cámbrico. El Ediacárico muestra experimentos corporales: formas frondosas, discos, organismos segmentados y comunidades asociadas a tapetes microbianos. Algunos podrían ser animales tempranos; otros quizá ramas extinguidas. Su rareza es precisamente lo valioso: enseña que la evolución probó arquitecturas que no dominaron después.',
    why: 'Es el prólogo real de los animales complejos y evita una narrativa de aparición repentina.'
  },
  {
    id: 'cambrian-explosion', era: 'Cámbrico', date: 'Hace 541–520 millones de años', dateShort: '541–520 Ma', type: 'Animales', color: '#22d3ee', image: images.cambrian,
    title: 'Explosión cámbrica: depredación, ojos y cuerpos duros',
    summary: 'Se multiplican planes corporales animales, con conchas, patas, sentidos y nuevas relaciones ecológicas.',
    details: 'La explosión cámbrica fue rápida en escala geológica, no instantánea. La depredación impulsa defensas, movilidad y percepción. Los animales excavan sedimentos, construyen caparazones y cambian la química de los fondos marinos. Muchas ramas animales modernas tienen raíces en este intervalo, aunque el registro fósil también refleja mejor preservación de partes duras.',
    why: 'Establece ecosistemas animales reconocibles y una carrera evolutiva mucho más intensa.'
  },
  {
    id: 'ordovician-radiation', era: 'Ordovícico', date: 'Hace 485–444 millones de años', dateShort: '485–444 Ma', type: 'Biodiversificación', color: '#38bdf8', image: images.cambrian,
    title: 'Gran biodiversificación ordovícica',
    summary: 'Los mares se llenan de más especies, arrecifes y redes tróficas complejas.',
    details: 'Después del Cámbrico, la diversidad marina se amplifica de forma enorme. Braquiópodos, moluscos, equinodermos, corales tempranos y vertebrados sin mandíbulas ganan variedad. No es solo “más especies”: son ecosistemas más estructurados, con nichos diferenciados y mayor complejidad ecológica. La vida marina moderna empieza a parecer menos extraña.',
    why: 'Convierte la innovación cámbrica en ecosistemas marinos ricos y duraderos.'
  },
  {
    id: 'land-plants', era: 'Ordovícico–Silúrico', date: 'Hace 470–430 millones de años', dateShort: '470–430 Ma', type: 'Tierra firme', color: '#65a30d', image: images.ocean,
    title: 'Las plantas colonizan los continentes',
    summary: 'Descendientes de algas verdes se adaptan a la vida fuera del agua y empiezan a crear suelos.',
    details: 'Salir del agua exige resistir desecación, radiación y gravedad. Las primeras plantas eran pequeñas, pero cambiaron meteorización, retención de agua y ciclos de carbono. Sus asociaciones con hongos ayudaron a explotar minerales. Los continentes, antes casi desnudos, empiezan a convertirse en ecosistemas con materia orgánica, suelos y microhábitats.',
    why: 'Prepara la tierra firme para artrópodos, bosques y vertebrados terrestres.'
  },
  {
    id: 'jawed-fish', era: 'Silúrico–Devónico', date: 'Hace 430–390 millones de años', dateShort: '430–390 Ma', type: 'Vertebrados', color: '#06b6d4', image: images.cambrian,
    title: 'Peces con mandíbulas transforman los mares',
    summary: 'La evolución de mandíbulas cambia depredación, defensa y diversidad vertebrada.',
    details: 'Las mandíbulas derivan de arcos branquiales modificados y permiten morder, manipular presas y explotar dietas nuevas. Con ellas aparecen grandes depredadores y carreras armamentísticas en vertebrados. Esta innovación está en la base de tiburones, peces óseos, anfibios, reptiles, aves y mamíferos. Es una pieza anatómica que reorganiza ecosistemas enteros.',
    why: 'Da a los vertebrados una herramienta ecológica decisiva: morder y procesar alimento activamente.'
  },
  {
    id: 'tetrapods', era: 'Devónico', date: 'Hace 390–360 millones de años', dateShort: '390–360 Ma', type: 'Vertebrados', color: '#14b8a6', image: images.cambrian,
    title: 'De peces a tetrápodos: vertebrados salen del agua',
    summary: 'Peces de aletas lobuladas desarrollan extremidades y respiración aérea en ambientes someros.',
    details: 'La transición no fue un salto heroico a tierra seca. Ocurrió en ríos, pantanos y aguas poco profundas donde respirar aire y apoyarse en el fondo podía ayudar. Fósiles transicionales combinan rasgos de pez y tetrápodo: aletas robustas, cuello más móvil, pulmones y branquias. De estos linajes saldrán anfibios, reptiles, aves y mamíferos.',
    why: 'Es el origen profundo de todos los vertebrados terrestres, incluidos dinosaurios y humanos.'
  },
  {
    id: 'carboniferous-forests', era: 'Carbonífero', date: 'Hace 359–299 millones de años', dateShort: '359–299 Ma', type: 'Bosques', color: '#4ade80', image: images.dino,
    title: 'Bosques pantanosos cambian atmósfera y carbono',
    summary: 'Vegetación gigante cubre pantanos, aumenta almacenamiento de carbono y sostiene ecosistemas terrestres ricos.',
    details: 'Licopodios, helechos arborescentes y colas de caballo gigantes forman bosques extensos. Mucha biomasa queda enterrada y con el tiempo forma carbón. Ese enterramiento modifica oxígeno y CO₂, mientras artrópodos y anfibios diversifican ecosistemas terrestres. Es una etapa clave para suelos, clima y futuras reservas fósiles usadas por humanos.',
    why: 'Conecta evolución vegetal, clima antiguo y combustibles fósiles que alterarán la historia humana.'
  },
  {
    id: 'amniotic-egg', era: 'Carbonífero tardío', date: 'Hace 320–300 millones de años', dateShort: '320–300 Ma', type: 'Reproducción', color: '#a3e635', image: images.dino,
    title: 'Huevo amniota: reproducirse lejos del agua',
    summary: 'Membranas internas permiten a vertebrados completar su desarrollo en tierra firme.',
    details: 'El huevo amniota funciona como un entorno acuoso protegido. Libera a ciertos vertebrados de depender de charcas para reproducirse. De los amniotas surgirán dos grandes ramas: sinápsidos, camino a mamíferos, y saurópsidos, que incluyen reptiles, dinosaurios y aves. Es una innovación discreta, pero abre interiores continentales más secos.',
    why: 'Hace posible la expansión plena de vertebrados terrestres grandes.'
  },
  {
    id: 'permian-extinction', era: 'Fin del Pérmico', date: 'Hace 252 millones de años', dateShort: '252 Ma', type: 'Extinción masiva', color: '#ef4444', image: images.impact,
    title: 'La Gran Mortandad: mayor extinción conocida',
    summary: 'Volcanismo masivo, calentamiento, anoxia y acidificación eliminan gran parte de la vida marina y terrestre.',
    details: 'La extinción del Pérmico fue más severa que la de los dinosaurios. Se relaciona con las Traps Siberianas, emisiones gigantescas de gases y alteraciones del ciclo del carbono. Los océanos pierden oxígeno y muchas cadenas ecológicas colapsan. La recuperación tarda millones de años y el mundo que emerge en el Triásico será muy distinto.',
    why: 'Reinicia la biosfera y crea el contexto para el ascenso posterior de arcosaurios, dinosaurios y mamíferos.'
  },
  {
    id: 'dinosaurs-origin', era: 'Triásico', date: 'Hace 235–225 millones de años', dateShort: '235–225 Ma', type: 'Dinosaurios', color: '#84cc16', image: images.dino,
    title: 'Origen de los dinosaurios',
    summary: 'Pequeños arcosaurios bípedos aparecen en ecosistemas donde aún no son dominantes.',
    details: 'Los primeros dinosaurios no eran gigantes inevitables. Compartían el Triásico con muchos reptiles y parientes de mamíferos. Su postura erguida y locomoción eficiente pudieron ser ventajas, pero su dominio llegó después. Esta etapa corrige la idea de que los dinosaurios nacen como “reyes”: primero fueron una rama más en un mundo competitivo.',
    why: 'Introduce el linaje que dominará muchos ecosistemas terrestres durante más de 150 millones de años.'
  },
  {
    id: 'triassic-jurassic-extinction', era: 'Límite Triásico-Jurásico', date: 'Hace 201 millones de años', dateShort: '201 Ma', type: 'Extinción y radiación', color: '#65a30d', image: images.dino,
    title: 'Extinción Triásico-Jurásico y dominio dinosauriano',
    summary: 'Una crisis global elimina competidores y facilita la expansión de dinosaurios en el Jurásico.',
    details: 'El final del Triásico se vincula a volcanismo masivo asociado a la apertura del Atlántico. Muchos grupos desaparecen o retroceden. Los dinosaurios sobreviven y ocupan nichos liberados. Su éxito no fue solo una cuestión de superioridad anatómica: también dependió de una reestructuración ecológica provocada por extinción masiva.',
    why: 'Explica cómo los dinosaurios pasan de secundarios a protagonistas del Mesozoico.'
  },
  {
    id: 'first-mammals', era: 'Triásico tardío–Jurásico', date: 'Hace 225–160 millones de años', dateShort: '225–160 Ma', type: 'Mamíferos', color: '#facc15', image: images.human,
    title: 'Primeros mamíferos: pequeños, nocturnos y persistentes',
    summary: 'Mamíferos tempranos conviven con dinosaurios y desarrollan pelo, lactancia, oído fino y dientes especializados.',
    details: 'Durante el Mesozoico, muchos mamíferos fueron pequeños, pero no primitivos. Sus dientes diferenciados, oído medio y metabolismo les permitieron explotar nichos nocturnos e insectívoros. Evolucionaron durante más de 150 millones de años antes de la extinción K–Pg. Cuando los dinosaurios no avianos desaparezcan, los mamíferos ya tendrán una larga historia de adaptación.',
    why: 'Conecta el mundo de dinosaurios con el futuro ascenso de primates y humanos.'
  },
  {
    id: 'flowering-plants', era: 'Cretácico', date: 'Hace 140–100 millones de años', dateShort: '140–100 Ma', type: 'Plantas', color: '#fb7185', image: images.dino,
    title: 'Plantas con flor transforman los ecosistemas',
    summary: 'Las angiospermas diversifican flores, frutos y relaciones con insectos y vertebrados.',
    details: 'Las plantas con flor reestructuran bosques, dietas y polinización. Flores y frutos intensifican relaciones con insectos, aves y mamíferos. Su expansión modifica alimentos disponibles para herbívoros y crea cadenas ecológicas modernas. No es un detalle botánico: cambia la textura completa de los ecosistemas terrestres.',
    why: 'Muchas redes ecológicas actuales y alimentos humanos dependen de esta revolución vegetal.'
  },
  {
    id: 'birds-from-dinosaurs', era: 'Jurásico–Cretácico', date: 'Hace 160–100 millones de años', dateShort: '160–100 Ma', type: 'Dinosaurios/aves', color: '#bef264', image: images.dino,
    title: 'Aves: dinosaurios que aprenden a volar',
    summary: 'Terópodos emplumados dan origen a las aves, la rama dinosauriana que llega hasta hoy.',
    details: 'Las plumas probablemente surgieron antes del vuelo, para aislamiento, comunicación o exhibición. En algunos terópodos se combinan brazos modificados, plumas aerodinámicas y metabolismo alto. Las aves tempranas muestran rasgos mixtos de dinosaurio y ave. Por eso los dinosaurios no desaparecieron por completo: las aves modernas son dinosaurios vivos.',
    why: 'Cambia la narrativa de extinción: sobreviven dinosaurios avianos y se diversifican después.'
  },
  {
    id: 'kpg-extinction', era: 'Fin del Cretácico', date: 'Hace 66 millones de años', dateShort: '66 Ma', type: 'Extinción masiva', color: '#fb7185', image: images.impact,
    title: 'Impacto de Chicxulub y extinción K–Pg',
    summary: 'Un asteroide desencadena oscuridad, enfriamiento, incendios y colapso de cadenas alimentarias.',
    details: 'El impacto en Yucatán liberó energía enorme, polvo y aerosoles que redujeron la luz solar. La fotosíntesis cayó y muchas redes tróficas se rompieron. Desaparecen dinosaurios no avianos, pterosaurios, ammonites y muchos otros grupos. Sobreviven aves, mamíferos pequeños, cocodrilos, tortugas y linajes con refugios o dietas flexibles.',
    why: 'Reabre nichos terrestres y permite la gran radiación de mamíferos.'
  },
  {
    id: 'mammal-radiation', era: 'Paleógeno', date: 'Hace 66–50 millones de años', dateShort: '66–50 Ma', type: 'Mamíferos', color: '#f59e0b', image: images.human,
    title: 'Radiación de mamíferos tras la extinción',
    summary: 'Mamíferos placentarios y marsupiales aumentan tamaño, diversidad y roles ecológicos.',
    details: 'Tras la desaparición de grandes dinosaurios no avianos, los mamíferos ocupan nichos de herbívoros, carnívoros, trepadores, excavadores y nadadores. No ocurre en un día, pero sí con rapidez geológica. Esta expansión produce los marcos de muchos grupos modernos. Los primates forman parte de este nuevo mundo pos-K–Pg.',
    why: 'Convierte a los mamíferos en protagonistas ecológicos y prepara el origen de primates.'
  },
  {
    id: 'primates', era: 'Paleoceno–Eoceno', date: 'Hace 56–45 millones de años', dateShort: '56–45 Ma', type: 'Primates', color: '#fbbf24', image: images.human,
    title: 'Primeros primates verdaderos',
    summary: 'Mamíferos arborícolas desarrollan manos prensiles, visión frontal y aprendizaje flexible.',
    details: 'Vivir en árboles favorece agarre, coordinación visual y cálculo de distancias. Los primates desarrollan uñas, dedos sensibles, ojos frontales y cerebros relativamente grandes. Estas adaptaciones no apuntaban a humanos; servían para moverse, alimentarse y socializar en bosques. Mucho después serán reutilizadas para herramientas y cultura.',
    why: 'Establece rasgos anatómicos y cognitivos que heredarán simios y homininos.'
  },
  {
    id: 'apes', era: 'Mioceno', date: 'Hace 23–14 millones de años', dateShort: '23–14 Ma', type: 'Simios', color: '#d97706', image: images.human,
    title: 'Diversificación de los simios',
    summary: 'Hominoideos sin cola se expanden con hombros móviles, trepa compleja y conductas sociales avanzadas.',
    details: 'Los simios del Mioceno fueron diversos y ocuparon África y Eurasia. No eran simplemente monos grandes: su anatomía favorece trepar, colgarse y manipular. Cambios climáticos fragmentan bosques y transforman hábitats. De ese contexto surgirán las ramas que llevan a gibones, orangutanes, gorilas, chimpancés y humanos.',
    why: 'Sitúa nuestro origen dentro de una radiación de simios, no como una aparición aislada.'
  },
  {
    id: 'hominin-split', era: 'Mioceno tardío', date: 'Hace 7–6 millones de años', dateShort: '7–6 Ma', type: 'Homininos', color: '#f97316', image: images.human,
    title: 'Separación del linaje humano y chimpancé',
    summary: 'Poblaciones emparentadas se separan gradualmente y comienza la rama hominina africana.',
    details: 'La divergencia no fue un corte limpio entre “mono” y “humano”. Fue separación de poblaciones con mezcla posible y rasgos en mosaico. Los primeros candidatos homininos muestran dientes, cráneo o locomoción parcialmente distintos. Todavía no son humanos modernos, pero inauguran una trayectoria evolutiva propia dentro de los simios africanos.',
    why: 'Es el inicio de nuestra rama, aunque aún muy lejos de Homo sapiens.'
  },
  {
    id: 'bipedalism', era: 'Plioceno', date: 'Hace 4,4–3,2 millones de años', dateShort: '4,4–3,2 Ma', type: 'Homininos', color: '#fb923c', image: images.human,
    title: 'Bipedismo habitual en australopitecos',
    summary: 'Homininos caminan erguidos antes de tener cerebros grandes o tecnología compleja.',
    details: 'El bipedismo precede a la expansión cerebral. Fósiles como Lucy y huellas como Laetoli muestran cuerpos capaces de caminar erguidos, aunque aún con adaptaciones para trepar. Las causas pudieron incluir eficiencia energética, transporte, termorregulación o cambios de hábitat. Lo importante: primero cambió el cuerpo; después llegaron cerebros mayores y tecnología acumulativa.',
    why: 'Libera las manos y reorganiza el cuerpo hominino mucho antes de la cultura humana moderna.'
  },
  {
    id: 'stone-tools', era: 'Plioceno–Pleistoceno', date: 'Hace 3,3–2,6 millones de años', dateShort: '3,3–2,6 Ma', type: 'Tecnología', color: '#f59e0b', image: images.human,
    title: 'Primeras herramientas de piedra conocidas',
    summary: 'Homininos fabrican o usan herramientas para cortar, golpear y procesar alimentos.',
    details: 'La tecnología lítica más antigua conocida puede anteceder al género Homo. Esto significa que la cultura material no nació de golpe con humanos modernos. Las herramientas permiten acceder a carne, médula, plantas duras y nuevos recursos. Además dejan una huella arqueológica: podemos estudiar acciones aprendidas, repetidas y transmitidas.',
    why: 'Inicia una relación acumulativa entre manos, aprendizaje, dieta, cerebro y ambiente.'
  },
  {
    id: 'genus-homo', era: 'Pleistoceno temprano', date: 'Hace 2,8–1,8 millones de años', dateShort: '2,8–1,8 Ma', type: 'Homo', color: '#fbbf24', image: images.human,
    title: 'Aparece el género Homo',
    summary: 'Homininos con cerebros mayores relativos, cuerpos más eficientes y estrategias alimentarias flexibles se diversifican.',
    details: 'El origen de Homo no es una línea ordenada, sino un mosaico de especies y rasgos. Aumentan movilidad, procesamiento de alimentos y herramientas. Homo erectus/ergaster desarrollará piernas largas, resistencia y expansión territorial. Este periodo construye la base para humanos viajeros, cooperativos y tecnológicamente dependientes.',
    why: 'Marca el marco evolutivo que hará posible migraciones, cerebros mayores y tecnología persistente.'
  },
  {
    id: 'out-of-africa-erectus', era: 'Pleistoceno', date: 'Hace 1,9–1,0 millones de años', dateShort: '1,9–1,0 Ma', type: 'Migración', color: '#eab308', image: images.human,
    title: 'Homo erectus sale de África',
    summary: 'Humanos tempranos se expanden por Eurasia y se adaptan a paisajes muy diferentes.',
    details: 'La salida de África no fue una migración única y heroica, sino múltiples dispersiones, extinciones locales y adaptaciones. Homo erectus y formas relacionadas ocuparon regiones muy diversas. Su cuerpo eficiente para caminar largas distancias y su tecnología les dieron una flexibilidad nueva. La evolución humana se vuelve intercontinental.',
    why: 'Por primera vez, un hominino convierte la expansión geográfica en parte central de su historia.'
  },
  {
    id: 'fire-control', era: 'Pleistoceno', date: 'Hace 1.000.000–400.000 años', dateShort: '1 Ma–400 ka', type: 'Tecnología', color: '#fb7185', image: images.human,
    title: 'Control del fuego',
    summary: 'El fuego permite cocinar, calentarse, defenderse y extender actividad social más allá del día.',
    details: 'La evidencia temprana es compleja, pero cuando el fuego se vuelve habitual cambia la vida humana. Cocinar aumenta energía disponible y reduce costes digestivos. El calor permite ocupar regiones frías. La luz crea espacios sociales nocturnos donde se aprende, se comparte y se transmiten historias o técnicas. Es tecnología, ecología y vida social a la vez.',
    why: 'Transforma alimentación, territorio, cooperación humana y vida social diaria alrededor de un centro tecnológico compartido.'
  },
  {
    id: 'neanderthals-denisovans', era: 'Pleistoceno medio-tardío', date: 'Hace 700.000–40.000 años', dateShort: '700–40 ka', type: 'Humanidades arcaicas', color: '#c084fc', image: images.human,
    title: 'Neandertales, denisovanos y otras humanidades',
    summary: 'Varias poblaciones humanas conviven, se adaptan regionalmente y algunas se cruzan con Homo sapiens.',
    details: 'La evolución humana reciente no fue una escalera hacia nosotros. Neandertales y denisovanos tenían tecnología, adaptación ecológica y comportamientos complejos. El ADN antiguo muestra cruces con Homo sapiens; parte de ellos sigue en genomas actuales. Durante mucho tiempo hubo varias formas humanas compartiendo el planeta.',
    why: 'Rompe la narrativa lineal y muestra una evolución humana ramificada, con mezcla y coexistencia.'
  },
  {
    id: 'homo-sapiens', era: 'Pleistoceno tardío', date: 'Hace 300.000–200.000 años', dateShort: '300–200 ka', type: 'Homo sapiens', color: '#fbbf24', image: images.human,
    title: 'Homo sapiens aparece en África',
    summary: 'Poblaciones africanas muestran rasgos anatómicos modernos en un proceso gradual y regionalmente diverso.',
    details: 'Homo sapiens no surge como una especie terminada en un único punto. La evidencia apunta a redes africanas con poblaciones conectadas parcialmente y rasgos modernos acumulándose en mosaico. Cráneo, cara, comportamiento simbólico y tecnología no cambian todos a la vez. Nuestro origen es africano, pero complejo y distribuido.',
    why: 'Sitúa nuestra especie dentro de una historia africana profunda y no como aparición repentina.'
  },
  {
    id: 'symbolic-culture', era: 'Pleistoceno tardío', date: 'Hace 120.000–40.000 años', dateShort: '120–40 ka', type: 'Cultura', color: '#fcd34d', image: images.human,
    title: 'Cultura simbólica y expansión global de sapiens',
    summary: 'Pigmentos, adornos, arte, rituales y redes sociales amplias muestran cultura acumulativa cada vez más potente.',
    details: 'La cultura simbólica incluye ocre, objetos decorados, enterramientos, arte rupestre y comunicación compleja. No aparece solo en Europa ni en una fecha mágica: tiene raíces africanas y expresiones regionales. Combinada con lenguaje, cooperación y aprendizaje acumulativo, permite a Homo sapiens adaptarse culturalmente mucho más rápido que por evolución biológica.',
    why: 'Es el puente hacia una especie capaz de transformar el planeta mediante conocimiento compartido.'
  }
];
