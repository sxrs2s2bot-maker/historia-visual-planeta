export function buildExtraEvents(images) {
  return [
    {
      id: 'sapiens-out-of-africa', era: 'Pleistoceno tardío', date: 'Hace 70.000–50.000 años', dateShort: '70–50 ka', type: 'Migración', color: '#f59e0b', image: images.human,
      title: 'Expansión principal de Homo sapiens fuera de África',
      summary: 'Poblaciones sapiens salen de África y se dispersan por Eurasia, encontrando otros humanos y ambientes nuevos.',
      details: 'La expansión de Homo sapiens no fue una marcha única ni inevitable. Hubo oleadas, retrocesos, mezclas con neandertales y denisovanos, y adaptaciones a costas, bosques, estepas y montañas. La cultura material, el lenguaje y redes sociales amplias facilitaron sobrevivir en paisajes desconocidos. Desde este momento, la historia humana se vuelve planetaria en una escala nueva.',
      why: 'Conecta la historia africana de nuestra especie con la ocupación de casi todos los continentes habitables.'
    },
    {
      id: 'sahul-colonization', era: 'Pleistoceno tardío', date: 'Hace 65.000–50.000 años', dateShort: '65–50 ka', type: 'Migración oceánica', color: '#38bdf8', image: images.ocean,
      title: 'Llegada humana a Sahul: Australia y Nueva Guinea',
      summary: 'Grupos humanos cruzan mares hasta Sahul, demostrando navegación, planificación y adaptación ecológica avanzada.',
      details: 'La colonización de Sahul exigió atravesar canales marítimos aun con niveles del mar más bajos. Eso implica conocimiento costero, cooperación y probablemente embarcaciones. En Australia y Nueva Guinea, las poblaciones desarrollaron tradiciones ecológicas y culturales de enorme duración. Este hito muestra que la expansión humana no fue solo caminar: también hubo exploración marítima temprana.',
      why: 'Prueba una capacidad humana temprana para cruzar barreras oceánicas y crear historias culturales duraderas.'
    },
    {
      id: 'upper-paleolithic-art', era: 'Pleistoceno tardío', date: 'Hace 45.000–25.000 años', dateShort: '45–25 ka', type: 'Arte y símbolo', color: '#f472b6', image: images.human,
      title: 'Arte rupestre, música y objetos simbólicos',
      summary: 'Cuevas, figuras, flautas y adornos revelan mundos simbólicos complejos y memoria cultural compartida.',
      details: 'El arte paleolítico no es decoración superficial. Pinturas, grabados, figuras animales, signos abstractos y música indican transmisión de relatos, identidad de grupo y pensamiento simbólico sofisticado. Aparece en distintas regiones, no como una única invención europea. Estos objetos conservan una parte de la mente social humana: imaginación, enseñanza y pertenencia.',
      why: 'Hace visible la cultura simbólica acumulativa que permite a los humanos vivir en mundos de significado compartido.'
    },
    {
      id: 'dog-domestication', era: 'Pleistoceno tardío', date: 'Hace 30.000–15.000 años', dateShort: '30–15 ka', type: 'Domesticación', color: '#f97316', image: images.human,
      title: 'Domesticación del perro',
      summary: 'Lobos y humanos entran en una relación cooperativa que termina creando el primer animal domesticado.',
      details: 'La domesticación del perro fue gradual: lobos menos temerosos pudieron acercarse a campamentos humanos, beneficiarse de restos y acabar integrándose en caza, vigilancia o compañía. Antes de la agricultura, ya existía una alianza interespecie. El perro muestra que la humanidad no transforma el planeta sola; lo hace también mediante relaciones evolutivas con otros animales.',
      why: 'Inicia la larga historia de domesticaciones que cambiarán ecosistemas, alimentación, trabajo y sociedad.'
    },
    {
      id: 'last-glacial-maximum', era: 'Última glaciación', date: 'Hace 26.500–19.000 años', dateShort: '26,5–19 ka', type: 'Clima', color: '#93c5fd', image: images.ocean,
      title: 'Máximo glacial: mares bajos y mundos de hielo',
      summary: 'Grandes mantos de hielo cubren el norte, el nivel del mar baja y los humanos se refugian y adaptan.',
      details: 'Durante el Último Máximo Glacial, enormes volúmenes de agua quedaron atrapados en hielo continental. Las costas estaban desplazadas, aparecieron puentes terrestres y muchas regiones eran frías, secas o ecológicamente distintas. Las poblaciones humanas sobrevivieron en refugios, costas y corredores favorables. Este contexto climático condiciona migraciones, recursos y paisajes arqueológicos hoy sumergidos.',
      why: 'Recuerda que la expansión humana reciente ocurrió dentro de un planeta climático muy diferente al actual.'
    },
    {
      id: 'americas-peopling', era: 'Pleistoceno final', date: 'Hace 20.000–14.000 años', dateShort: '20–14 ka', type: 'Migración', color: '#fbbf24', image: images.human,
      title: 'Poblamiento de América',
      summary: 'Seres humanos llegan a América por rutas costeras y/o interiores, ocupando rápidamente ambientes muy diversos.',
      details: 'El poblamiento americano probablemente combinó rutas por Beringia, costas del Pacífico y corredores libres de hielo cuando estuvieron disponibles. En pocos milenios aparecen evidencias desde Norteamérica hasta Sudamérica. Esto implicó adaptación a tundras, bosques, montañas, llanuras y costas. La historia humana se vuelve realmente global, con tradiciones americanas independientes y profundas.',
      why: 'Completa la ocupación humana de los grandes continentes y abre historias culturales americanas propias.'
    },
    {
      id: 'pleistocene-megafauna-losses', era: 'Pleistoceno final', date: 'Hace 50.000–10.000 años', dateShort: '50–10 ka', type: 'Extinción', color: '#ef4444', image: images.impact,
      title: 'Pérdida de megafauna en varios continentes',
      summary: 'Mamuts, perezosos gigantes y otros grandes animales desaparecen por combinaciones de clima y presión humana.',
      details: 'Las extinciones de megafauna no tienen una explicación única para todos los continentes. Cambios climáticos al final de la glaciación alteraron hábitats, y la llegada humana añadió caza, fuego y perturbación ecológica. La intensidad varió por región. El resultado fue una Tierra con menos grandes herbívoros y depredadores, cambiando vegetación, nutrientes y relaciones ecológicas.',
      why: 'Es una de las primeras señales de que humanos y clima juntos podían reconfigurar ecosistemas continentales.'
    },
    {
      id: 'younger-dryas', era: 'Transición al Holoceno', date: 'Hace 12.900–11.700 años', dateShort: '12,9–11,7 ka', type: 'Clima', color: '#60a5fa', image: images.ocean,
      title: 'Younger Dryas: retorno abrupto del frío',
      summary: 'Un episodio climático brusco enfría partes del hemisferio norte justo antes de la estabilidad holocena.',
      details: 'El Younger Dryas muestra que el clima puede cambiar rápido, no solo lentamente. Probablemente relacionado con alteraciones en circulación oceánica y deshielo, afectó disponibilidad de plantas, animales y asentamientos humanos. Algunas sociedades cazadoras-recolectoras intensificaron el uso de recursos locales. Es un recordatorio de que la agricultura surgirá tras un periodo de inestabilidad climática final.',
      why: 'Prepara el contraste con el Holoceno, la ventana climática relativamente estable donde florecen aldeas y agricultura.'
    },
    {
      id: 'holocene-stability', era: 'Holoceno', date: 'Desde hace 11.700 años', dateShort: '11,7 ka–hoy', type: 'Clima', color: '#22c55e', image: images.planet,
      title: 'Holoceno: estabilidad climática para sociedades complejas',
      summary: 'El clima se vuelve relativamente estable, favoreciendo sedentarismo, agricultura y crecimiento demográfico.',
      details: 'El Holoceno no fue perfectamente constante, pero sí más estable que la glaciación anterior. Estaciones, lluvias y costas relativamente previsibles permitieron experimentar con cultivo, almacenamiento y asentamientos permanentes. Esta estabilidad no causa automáticamente civilización, pero proporciona un marco ambiental en el que muchas sociedades pueden invertir en lugares, calendarios y excedentes.',
      why: 'Es el escenario climático de casi toda la historia agrícola, urbana y tecnológica humana.'
    },
    {
      id: 'fertile-crescent-agriculture', era: 'Neolítico', date: 'Hace 11.500–9.500 años', dateShort: '11,5–9,5 ka', type: 'Agricultura', color: '#84cc16', image: images.human,
      title: 'Agricultura en el Creciente Fértil',
      summary: 'Trigo, cebada, legumbres, cabras y ovejas convierten la producción de alimentos en una estrategia central.',
      details: 'La agricultura del Creciente Fértil no apareció de un día a otro. Comunidades que ya conocían plantas silvestres empezaron a seleccionar, sembrar, cosechar y almacenar con mayor intensidad. La domesticación cambió genomas de plantas y animales, y también cambió a los humanos: más sedentarismo, trabajo estacional, propiedad, enfermedades y crecimiento poblacional.',
      why: 'Inicia una transición alimentaria que multiplicará poblaciones y transformará paisajes de forma permanente.'
    },
    {
      id: 'independent-agriculture-centers', era: 'Neolítico global', date: 'Hace 10.000–4.000 años', dateShort: '10–4 ka', type: 'Agricultura', color: '#65a30d', image: images.human,
      title: 'Agriculturas independientes en varios continentes',
      summary: 'China, Mesoamérica, Andes, África y Nueva Guinea desarrollan cultivos propios y trayectorias locales.',
      details: 'La agricultura no fue una única invención exportada desde un centro. Arroz y mijo en China, maíz en Mesoamérica, papa y quinoa en los Andes, sorgo y mijo africano, taro o plátano en Oceanía muestran soluciones regionales. Cada domesticación creó paisajes, dietas y sociedades distintas. La diversidad agrícola mundial nace de muchos experimentos humanos con ecosistemas locales.',
      why: 'Evita una historia euroasiática única y muestra creatividad ecológica humana en múltiples regiones.'
    },
    {
      id: 'permanent-villages', era: 'Neolítico', date: 'Hace 10.000–8.000 años', dateShort: '10–8 ka', type: 'Asentamientos', color: '#d97706', image: images.human,
      title: 'Aldeas permanentes y vida sedentaria',
      summary: 'Casas, almacenes, cementerios y espacios rituales fijan comunidades a lugares concretos durante generaciones.',
      details: 'El sedentarismo modifica la relación con el territorio. Vivir en aldeas permite acumular alimentos, herramientas e historias familiares, pero también intensifica basura, enfermedades, conflictos y desigualdad. Lugares como Jericó, Çatalhöyük u otras aldeas tempranas muestran comunidades densas antes de los estados. El paisaje humano empieza a llenarse de arquitectura persistente.',
      why: 'Crea la base material para memoria local, propiedad, especialización y organización social más compleja.'
    },
    {
      id: 'pottery-storage', era: 'Neolítico', date: 'Hace 20.000–7.000 años', dateShort: '20–7 ka', type: 'Tecnología', color: '#fb923c', image: images.human,
      title: 'Cerámica, cocción y almacenamiento',
      summary: 'Recipientes de barro cocido permiten cocinar, fermentar, transportar y guardar alimentos de nuevas maneras.',
      details: 'La cerámica aparece incluso antes de la agricultura en algunas regiones, pero se vuelve crucial con aldeas y excedentes. Un recipiente resistente cambia la cocina: sopas, granos, leche fermentada y almacenamiento seco se hacen más fáciles. También permite estilos, marcas y tradiciones visuales. La tecnología cotidiana transforma nutrición, economía doméstica y arqueología futura.',
      why: 'Convierte el control de alimentos y líquidos en una infraestructura diaria de sociedades sedentarias.'
    },
    {
      id: 'copper-metallurgy', era: 'Calcolítico', date: 'Hace 7.000–5.000 años', dateShort: '7–5 ka', type: 'Metalurgia', color: '#f97316', image: images.human,
      title: 'Metalurgia temprana del cobre',
      summary: 'Minerales brillantes y hornos controlados abren el camino a herramientas, adornos y redes de intercambio.',
      details: 'Trabajar cobre exige reconocer minerales, dominar calor y experimentar con moldes o martillado. Al principio no sustituye a la piedra, pero introduce una lógica nueva: materiales transformados químicamente por fuego. La metalurgia impulsa especialización, comercio de minerales y prestigio. Más tarde, aleaciones como el bronce multiplicarán su impacto militar, agrícola y político.',
      why: 'Inicia una relación tecnológica con minerales que desembocará en edades del bronce, hierro e industria moderna.'
    },
    {
      id: 'wheel-and-transport', era: 'Calcolítico/Bronce temprano', date: 'Hace 5.500–5.000 años', dateShort: '5,5–5 ka', type: 'Transporte', color: '#eab308', image: images.human,
      title: 'Rueda, carros y transporte terrestre pesado',
      summary: 'La rueda combinada con ejes y animales de tiro cambia movimiento de cargas, comercio y guerra.',
      details: 'La rueda útil no es solo un círculo: requiere ejes, carpintería, caminos y animales capaces de tirar. Su adopción permitió mover alimentos, madera, piedra, personas y ejércitos con más eficiencia en ciertos paisajes. No reemplazó al transporte fluvial o marítimo, pero amplió la escala de conexiones terrestres y la capacidad logística de comunidades complejas.',
      why: 'Hace posible redes terrestres más densas y una logística que sostendrá ciudades, estados y ejércitos.'
    },
    {
      id: 'writing-invention', era: 'Bronce temprano', date: 'Hace 5.400–5.000 años', dateShort: '5,4–5 ka', type: 'Escritura', color: '#facc15', image: images.human,
      title: 'Invención de la escritura',
      summary: 'Marcas contables y signos se convierten en sistemas para registrar bienes, nombres, leyes y relatos.',
      details: 'La escritura surge ligada a administración, comercio y memoria institucional, especialmente en Mesopotamia y Egipto, con desarrollos independientes posteriores en China y Mesoamérica. Al fijar información fuera del cuerpo, las sociedades pueden acumular leyes, impuestos, historias y conocimiento técnico. También crea burocracias y desigualdades nuevas entre quienes escriben y quienes no.',
      why: 'Amplía radicalmente la memoria colectiva y permite instituciones que sobreviven a individuos concretos.'
    },
    {
      id: 'first-cities-states', era: 'Bronce temprano', date: 'Hace 5.500–4.500 años', dateShort: '5,5–4,5 ka', type: 'Urbanismo', color: '#d97706', image: images.human,
      title: 'Primeras ciudades y estados',
      summary: 'Uruk, Egipto y otros centros concentran población, templos, administración, oficios y poder político.',
      details: 'Las ciudades no son aldeas grandes únicamente. Reúnen especialistas, comerciantes, gobernantes, trabajadores, escribas y rituales en espacios densos. Requieren alimentos producidos fuera, coordinación de agua, construcción y defensa. Con ellas aparecen estados capaces de movilizar trabajo y registrar obligaciones. La vida humana gana escala, pero también jerarquía y dependencia institucional.',
      why: 'Crea la forma social que dominará buena parte de la historia humana: ciudad, administración y Estado.'
    },
    {
      id: 'bronze-age-networks', era: 'Edad del Bronce', date: 'Hace 4.500–3.200 años', dateShort: '4,5–3,2 ka', type: 'Comercio', color: '#fb7185', image: images.human,
      title: 'Redes de la Edad del Bronce',
      summary: 'Cobre, estaño, barcos, palacios y escribas conectan regiones lejanas en economías interdependientes.',
      details: 'El bronce requiere cobre y estaño, recursos que rara vez están juntos. Eso impulsó comercio de larga distancia, diplomacia, rutas marítimas y economías palaciales. Objetos, ideas, técnicas y personas circularon por Mediterráneo, Oriente Próximo y más allá. Estas redes muestran una globalización temprana regional, vulnerable a sequías, conflictos y rupturas logísticas.',
      why: 'Demuestra que la complejidad humana depende de conexiones extensas, no solo de inventos aislados.'
    },
    {
      id: 'iron-age', era: 'Edad del Hierro', date: 'Hace 3.200–2.500 años', dateShort: '3,2–2,5 ka', type: 'Metalurgia', color: '#9ca3af', image: images.human,
      title: 'Hierro, acero temprano y herramientas más accesibles',
      summary: 'La metalurgia del hierro expande herramientas resistentes y armas, cambiando agricultura, bosques y guerra.',
      details: 'El hierro no fue automáticamente mejor que el bronce, pero sus minerales eran más abundantes. Dominar hornos y carburación permitió producir herramientas y armas a mayor escala. Arados, hachas y utensilios resistentes facilitaron abrir tierras, cortar bosques y sostener poblaciones mayores. También transformaron la capacidad militar y la organización de imperios regionales.',
      why: 'Aumenta la capacidad humana de modificar paisajes y sostener estructuras políticas más amplias.'
    },
    {
      id: 'axial-age-ideas', era: 'Antigüedad', date: 'Hace 2.800–2.300 años', dateShort: '800–300 a. C.', type: 'Ideas', color: '#a78bfa', image: images.human,
      title: 'Tradiciones filosóficas y religiosas de la Era Axial',
      summary: 'Grecia, India, China y Oriente Próximo producen ideas éticas, filosóficas y espirituales muy duraderas.',
      details: 'Entre aproximadamente 800 y 300 a. C. florecieron tradiciones que aún estructuran culturas: filosofía griega, budismo, jainismo, confucianismo, daoísmo, profetismo hebreo y otras corrientes. No fue un fenómeno único coordinado, sino respuestas regionales a ciudades, imperios, guerra y cambio social. La humanidad empieza a reflexionar sistemáticamente sobre justicia, virtud, sufrimiento y conocimiento.',
      why: 'Crea lenguajes morales e intelectuales que siguen influyendo en política, religión y ciencia.'
    },
    {
      id: 'classical-empires-roads', era: 'Antigüedad clásica', date: 'Hace 2.300–1.700 años', dateShort: '300 a. C.–300 d. C.', type: 'Imperios', color: '#f59e0b', image: images.human,
      title: 'Imperios clásicos, carreteras y administración continental',
      summary: 'Roma, Han, Maurya y otros estados integran territorios enormes con leyes, caminos, impuestos y ejércitos.',
      details: 'Los imperios clásicos muestran una capacidad nueva de coordinación sobre millones de personas. Caminos, monedas, censos, funcionarios y ejércitos conectan regiones diversas. También generan explotación, esclavitud y violencia organizada. Su legado no está solo en monumentos: está en lenguas, derecho, burocracia, fronteras culturales y modelos de gobierno repetidos durante siglos.',
      why: 'Escala la organización humana hasta territorios continentales y deja infraestructuras políticas duraderas.'
    },
    {
      id: 'paper-knowledge', era: 'Antigüedad tardía', date: 'Hace 2.100–1.300 años', dateShort: '100 a. C.–700 d. C.', type: 'Conocimiento', color: '#fcd34d', image: images.human,
      title: 'Papel y circulación más barata del conocimiento',
      summary: 'El papel permite copiar, archivar y transportar información con menos coste que tablillas, seda o pergamino.',
      details: 'Desarrollado y perfeccionado en China, el papel se expandió lentamente por Eurasia. Al reducir el coste material de escribir, facilitó administración, literatura, educación y ciencia. No basta por sí solo para alfabetizar sociedades enteras, pero crea una infraestructura flexible para documentos. Mucho antes de la imprenta europea, el soporte físico del conocimiento ya estaba cambiando.',
      why: 'Hace más escalable la memoria escrita y prepara revoluciones posteriores de libros, burocracias y ciencia.'
    },
    {
      id: 'silk-road-exchanges', era: 'Antigüedad tardía/Medieval', date: 'Hace 2.100–600 años', dateShort: '100 a. C.–1400 d. C.', type: 'Intercambio', color: '#fb7185', image: images.human,
      title: 'Rutas de la Seda e intercambios afroeurasiáticos',
      summary: 'Caravanas, puertos y oasis mueven seda, especias, religiones, tecnologías, enfermedades e ideas.',
      details: 'Las Rutas de la Seda fueron redes cambiantes, no una sola carretera. Conectaron China, Asia Central, India, Persia, el Mediterráneo y rutas marítimas del Índico. Por ellas circularon mercancías, budismo, islam, técnicas, arte y patógenos. Enseñan que las civilizaciones no evolucionan aisladas: se transforman por contactos, traducciones y contagios biológicos.',
      why: 'Convierte Eurasia y África del norte en un sistema histórico interconectado durante siglos.'
    },
    {
      id: 'islamic-golden-age', era: 'Medieval', date: 'Siglos VIII–XIII', dateShort: '750–1250', type: 'Ciencia y cultura', color: '#22d3ee', image: images.human,
      title: 'Edad de oro islámica y transmisión científica',
      summary: 'Centros como Bagdad, Córdoba y El Cairo traducen, critican y amplían matemáticas, medicina y astronomía.',
      details: 'El mundo islámico medieval conectó herencias griegas, persas, indias y nuevas investigaciones. Álgebra, óptica, medicina, filosofía y astronomía avanzaron en instituciones, bibliotecas y redes urbanas. No fue solo conservación de textos antiguos: hubo crítica, síntesis y producción original. Ese conocimiento circularía después hacia Europa y otras regiones.',
      why: 'Muestra que la ciencia es una empresa multicultural de traducción, debate y acumulación.'
    },
    {
      id: 'black-death', era: 'Baja Edad Media', date: '1347–1353', dateShort: 's. XIV', type: 'Pandemia', color: '#64748b', image: images.impact,
      title: 'Peste Negra y shock demográfico eurasiático',
      summary: 'La peste bubónica mata a decenas de millones y altera economía, trabajo, religión y poder social.',
      details: 'La Peste Negra viajó por redes comerciales y ecológicas que conectaban roedores, pulgas, ciudades y rutas. Su mortalidad fue devastadora en Europa, Oriente Medio y partes de Asia. Al reducir poblaciones, cambió salarios, tierras, autoridad religiosa y sensibilidad cultural. Es un ejemplo brutal de cómo microbios y redes humanas pueden reordenar civilizaciones.',
      why: 'Expone la vulnerabilidad biológica de sociedades conectadas y el poder histórico de las pandemias.'
    },
    {
      id: 'printing-press', era: 'Edad Moderna temprana', date: 'Desde 1450', dateShort: '1450+', type: 'Información', color: '#facc15', image: images.human,
      title: 'Imprenta de tipos móviles en Europa',
      summary: 'La impresión mecánica multiplica libros, panfletos y mapas, acelerando educación, religión y ciencia.',
      details: 'La imprenta de Gutenberg combinó tipos móviles, prensa, tinta y papel en un sistema económicamente potente. No inventó la impresión mundial, pero sí cambió la escala europea de reproducción textual. Biblias, manuales, panfletos políticos, mapas y tratados científicos circularon con rapidez. La autoridad del conocimiento empezó a depender más de copias comparables y discusión pública.',
      why: 'Acelera la difusión de ideas y hace posible comunidades intelectuales más amplias y críticas.'
    },
    {
      id: 'columbian-exchange', era: 'Edad Moderna', date: 'Desde 1492', dateShort: '1492+', type: 'Intercambio planetario', color: '#ef4444', image: images.planet,
      title: 'Intercambio colombino y mundo oceánico conectado',
      summary: 'América, África y Eurasia quedan unidas por plantas, animales, metales, esclavitud, imperios y enfermedades.',
      details: 'El contacto transoceánico posterior a 1492 produjo una transformación biológica y social planetaria. Patógenos devastaron poblaciones indígenas americanas; cultivos como maíz, papa y mandioca cambiaron dietas globales; caballos, ganado y plantaciones alteraron paisajes. También se expandieron colonialismo y esclavitud atlántica. Es uno de los mayores cambios ecológicos humanos de la historia.',
      why: 'Une por primera vez todos los continentes habitados en un sistema económico, biológico y violento común.'
    },
    {
      id: 'scientific-revolution', era: 'Edad Moderna', date: 'Siglos XVI–XVII', dateShort: '1500–1700', type: 'Ciencia', color: '#38bdf8', image: images.planet,
      title: 'Revolución científica y método experimental',
      summary: 'Astronomía, física, anatomía y experimentación cambian cómo se valida el conocimiento sobre la naturaleza.',
      details: 'La revolución científica no fue una sustitución instantánea de superstición por razón, sino una reorganización de prácticas: observación precisa, matemáticas, instrumentos, publicación y crítica. Copérnico, Galileo, Kepler, Newton y muchos otros cambiaron el cosmos y la mecánica. La naturaleza empezó a describirse mediante leyes verificables y modelos cuantitativos.',
      why: 'Crea la base intelectual de la tecnología moderna y de una visión del planeta como sistema medible.'
    },
    {
      id: 'fossil-fuel-coal', era: 'Edad Moderna/Industrial', date: 'Siglos XVII–XIX', dateShort: '1600–1800s', type: 'Energía', color: '#475569', image: images.impact,
      title: 'Carbón fósil y nueva escala energética',
      summary: 'Sociedades industriales empiezan a usar energía acumulada durante millones de años en forma de carbón.',
      details: 'El carbón no es solo un combustible más: concentra energía solar antigua almacenada por ecosistemas del Carbonífero y otros periodos. Su uso masivo liberó producción de límites inmediatos de madera, viento, agua y músculo. Minería, vapor y metalurgia ampliaron fábricas y ciudades, pero también iniciaron emisiones de CO₂ a escala geológica humana.',
      why: 'Marca el paso hacia una civilización alimentada por reservas fósiles y capaz de alterar la atmósfera.'
    },
    {
      id: 'industrial-revolution', era: 'Edad Industrial', date: 'Desde finales del siglo XVIII', dateShort: '1750+', type: 'Industria', color: '#f97316', image: images.impact,
      title: 'Revolución Industrial',
      summary: 'Máquinas, fábricas, vapor y combustibles fósiles multiplican producción, urbanización y consumo material.',
      details: 'La Revolución Industrial transformó trabajo, tiempo y paisaje. Fábricas concentraron mano de obra, el vapor movió minas, trenes y barcos, y la producción textil y metalúrgica creció rápidamente. Elevó capacidades materiales y también generó explotación laboral, contaminación y desigualdades imperiales. Es el inicio visible de la aceleración tecnológica moderna.',
      why: 'Cambia la relación entre humanidad y planeta al multiplicar extracción, energía y transformación material.'
    },
    {
      id: 'darwin-evolution', era: 'Ciencia moderna', date: '1859', dateShort: '1859', type: 'Evolución', color: '#22c55e', image: images.cell,
      title: 'Darwin y la evolución por selección natural',
      summary: 'La selección natural ofrece un marco unificador para explicar diversidad, adaptación y parentesco de la vida.',
      details: 'Con El origen de las especies, Darwin y Wallace consolidaron una idea poderosa: las especies cambian y comparten ancestros, y la selección natural puede producir adaptación sin diseño externo. La biología ganó una historia profunda. Humanos, dinosaurios, microbios y plantas quedaron conectados por genealogías. La teoría evolucionaría con genética, fósiles y biología molecular.',
      why: 'Da sentido científico a toda la timeline biológica: la vida es descendencia con modificación.'
    },
    {
      id: 'germ-theory', era: 'Ciencia moderna', date: 'Siglo XIX', dateShort: '1800s', type: 'Medicina', color: '#2dd4bf', image: images.microbe,
      title: 'Teoría germinal de la enfermedad',
      summary: 'Microbios específicos se reconocen como causa de enfermedades, transformando higiene, cirugía y salud pública.',
      details: 'La teoría germinal cambió la medicina de forma práctica y conceptual. Pasteur, Koch, Lister y otros vincularon microorganismos con infección, fermentación y contagio. Esterilización, vacunas, agua limpia y control sanitario redujeron mortalidad. La humanidad empezó a combatir enfermedades entendiendo agentes invisibles, aunque los microbios siguieron evolucionando y resistiendo.',
      why: 'Aumenta esperanza de vida y demuestra que conocer lo invisible puede transformar sociedades enteras.'
    },
    {
      id: 'electric-communications', era: 'Edad Industrial', date: 'Siglos XIX–XX', dateShort: '1800s–1900s', type: 'Comunicación', color: '#60a5fa', image: images.planet,
      title: 'Electricidad, telégrafo, teléfono y radio',
      summary: 'La información empieza a viajar casi instantáneamente, separándose del transporte físico de mensajeros y barcos.',
      details: 'El telégrafo comprimió el tiempo político y comercial: noticias y órdenes cruzaban continentes en minutos. El teléfono añadió voz a distancia y la radio permitió comunicación masiva sin cables. La electrificación también cambió hogares, fábricas y ciudades. Por primera vez, la sociedad humana empezó a coordinarse a velocidad electromagnética.',
      why: 'Prepara el planeta conectado: mercados, guerras, noticias y culturas sincronizadas a distancia.'
    },
    {
      id: 'haber-bosch', era: 'Siglo XX', date: '1909–1913', dateShort: '1909–1913', type: 'Agricultura química', color: '#84cc16', image: images.oxygen,
      title: 'Proceso Haber-Bosch y fertilizantes sintéticos',
      summary: 'La fijación industrial de nitrógeno permite fertilizantes masivos y alimenta a miles de millones de personas.',
      details: 'El nitrógeno limita el crecimiento de plantas aunque abunde en la atmósfera. Haber-Bosch usa alta presión, temperatura y catalizadores para convertir N₂ en amoníaco. Esto multiplicó rendimientos agrícolas y sostuvo el crecimiento poblacional del siglo XX. También alteró ciclos globales de nitrógeno, contaminó aguas y facilitó explosivos industriales.',
      why: 'Es una intervención humana directa en un ciclo biogeoquímico fundamental del planeta.'
    },
    {
      id: 'antibiotics', era: 'Siglo XX', date: 'Desde 1928–1940s', dateShort: '1928+', type: 'Medicina', color: '#10b981', image: images.microbe,
      title: 'Antibióticos y control de infecciones bacterianas',
      summary: 'La penicilina y otros antibióticos convierten infecciones antes mortales en enfermedades tratables.',
      details: 'El descubrimiento y producción masiva de antibióticos transformó cirugía, partos, heridas y enfermedades bacterianas. La medicina moderna depende de ellos para procedimientos seguros. Pero su uso masivo también selecciona resistencias: la evolución microbiana responde a cada presión. Este hito muestra tanto el poder como los límites de intervenir en la vida microscópica.',
      why: 'Reduce mortalidad humana de forma enorme y revela una carrera evolutiva permanente con bacterias.'
    },
    {
      id: 'nuclear-age', era: 'Siglo XX', date: 'Desde 1945', dateShort: '1945+', type: 'Energía y riesgo', color: '#ef4444', image: images.impact,
      title: 'Edad nuclear',
      summary: 'La fisión nuclear introduce armas capaces de destruir ciudades y energía con enorme densidad material.',
      details: 'Las bombas de 1945 mostraron una capacidad destructiva sin precedentes, basada en procesos del núcleo atómico. Después llegaron arsenales, centrales nucleares, medicina nuclear y debates sobre residuos y accidentes. La humanidad adquirió poder de autodestrucción global y dejó señales radiactivas detectables. Es una frontera tecnológica, política y ética.',
      why: 'Introduce por primera vez un riesgo tecnológico humano de escala civilizatoria y huella geológica clara.'
    },
    {
      id: 'space-age', era: 'Siglo XX', date: 'Desde 1957', dateShort: '1957+', type: 'Espacio', color: '#7dd3fc', image: images.planet,
      title: 'Era espacial: la Tierra vista desde fuera',
      summary: 'Satélites, sondas y viajes humanos al espacio cambian comunicación, ciencia y conciencia planetaria.',
      details: 'Sputnik inauguró la presencia humana permanente de máquinas en órbita. Satélites meteorológicos, GPS, telecomunicaciones y observación terrestre se volvieron infraestructura diaria. Las misiones Apolo ofrecieron imágenes de la Tierra como un mundo finito y frágil. La exploración espacial también permitió comparar planetas y entender mejor clima, geología y origen del Sistema Solar.',
      why: 'Convierte a la humanidad en una especie capaz de observar su planeta como sistema completo desde fuera.'
    },
    {
      id: 'plate-tectonics', era: 'Ciencia del siglo XX', date: 'Décadas de 1960–1970', dateShort: '1960s–70s', type: 'Geología', color: '#ff7a3d', image: images.planet,
      title: 'Tectónica de placas: la Tierra como planeta dinámico',
      summary: 'La deriva continental, expansión oceánica y subducción se unifican en una teoría geológica global.',
      details: 'Aunque Wegener propuso la deriva continental antes, la tectónica de placas se consolidó con datos oceánicos, magnetismo, terremotos y mapas del fondo marino. Explica montañas, volcanes, terremotos, océanos y distribución de fósiles. De pronto la superficie terrestre se entiende como placas móviles sobre escalas de millones de años, conectando geología con clima y evolución.',
      why: 'Da el marco moderno para entender el escenario físico sobre el que ocurre toda la historia de la vida.'
    },
    {
      id: 'digital-revolution', era: 'Final siglo XX', date: 'Desde 1970–1990', dateShort: '1970s+', type: 'Información digital', color: '#a78bfa', image: images.human,
      title: 'Revolución digital e Internet',
      summary: 'Computadores, microchips e Internet convierten información, cálculo y comunicación en infraestructura global.',
      details: 'La digitalización transformó datos en bits copiables, procesables y transmisibles casi sin fricción. Microprocesadores, redes, software y web conectaron ciencia, comercio, cultura y vida personal. Esta revolución no solo acelera comunicación: cambia cómo se produce conocimiento, se coordinan economías y se almacenan recuerdos. También crea nuevas dependencias y vulnerabilidades.',
      why: 'Reorganiza la civilización alrededor de información computable y redes planetarias instantáneas.'
    },
    {
      id: 'great-acceleration', era: 'Antropoceno propuesto', date: 'Desde 1950', dateShort: '1950+', type: 'Cambio planetario', color: '#fb7185', image: images.planet,
      title: 'Gran Aceleración de población, consumo y huella humana',
      summary: 'Después de 1950 crecen de forma explosiva energía, fertilizantes, plásticos, transporte y transformación ambiental.',
      details: 'La Gran Aceleración describe curvas que se disparan juntas: población, PIB, agua usada, presas, fertilizantes, turismo, plásticos, CO₂ y pérdida de biodiversidad. No afecta a todos por igual; está impulsada sobre todo por economías industriales y consumo desigual. Pero sus efectos son planetarios. La humanidad se convierte en una fuerza comparable a procesos geológicos.',
      why: 'Resume el salto de impacto humano que hace plausible hablar de una época dominada por nuestra especie.'
    },
    {
      id: 'climate-change', era: 'Antropoceno propuesto', date: 'Siglos XX–XXI', dateShort: '1900s–hoy', type: 'Clima', color: '#ef4444', image: images.impact,
      title: 'Cambio climático antropogénico',
      summary: 'Gases de efecto invernadero de origen humano calientan atmósfera y océanos, alterando extremos y ecosistemas.',
      details: 'La quema de combustibles fósiles, deforestación e industria aumentan CO₂, metano y otros gases. El sistema climático responde con calentamiento, subida del nivel del mar, acidificación oceánica, olas de calor y cambios en lluvias. No es solo un problema futuro: ya modifica agricultura, salud, biodiversidad y riesgos costeros. Es geología acelerada por economía humana.',
      why: 'Es el mayor experimento involuntario de la civilización sobre el sistema climático que la sostiene.'
    },
    {
      id: 'biodiversity-crisis', era: 'Antropoceno propuesto', date: 'Siglos XX–XXI', dateShort: '1900s–hoy', type: 'Biodiversidad', color: '#dc2626', image: images.ediacaran,
      title: 'Crisis contemporánea de biodiversidad',
      summary: 'Hábitats destruidos, invasiones, contaminación, sobreexplotación y clima aceleran extinciones y declives.',
      details: 'La biodiversidad actual enfrenta presiones simultáneas: conversión de bosques y humedales, pesca excesiva, pesticidas, especies invasoras, fragmentación y calentamiento. Muchas poblaciones caen antes de que las especies se extingan formalmente. Esto empobrece funciones ecológicas como polinización, suelos, ciclos de nutrientes y resiliencia. No es solo pérdida estética, sino erosión de sistemas vivos.',
      why: 'Muestra que la sexta gran crisis biológica posible está ligada directamente a decisiones humanas.'
    },
    {
      id: 'genome-sequencing', era: 'Final siglo XX–XXI', date: 'Desde 1977–2003', dateShort: '1977–2003+', type: 'Genómica', color: '#c084fc', image: images.cell,
      title: 'Secuenciación genética y genoma humano',
      summary: 'Leer ADN a gran escala revela parentescos, enfermedades, migraciones y mecanismos íntimos de la vida.',
      details: 'La secuenciación del ADN convirtió la herencia en información legible. El Proyecto Genoma Humano fue un símbolo, pero la revolución continuó con genomas baratos de virus, plantas, animales y humanos antiguos. La biología evolutiva, medicina y arqueología cambiaron profundamente. También surgieron dilemas sobre privacidad, edición genética y desigualdad en acceso sanitario.',
      why: 'Permite reconstruir la historia de la vida desde dentro de sus moléculas y abre una biotecnología poderosa.'
    },
    {
      id: 'renewable-transition', era: 'Siglo XXI', date: 'Desde 2000', dateShort: '2000+', type: 'Energía', color: '#22c55e', image: images.oxygen,
      title: 'Transición energética solar, eólica y baterías',
      summary: 'Energías renovables modernas bajan de coste y empiezan a competir con combustibles fósiles a escala global.',
      details: 'Paneles solares, aerogeneradores, baterías e inteligencia de red han mejorado rápidamente. La transición no es automática: requiere minerales, redes, almacenamiento, políticas y justicia social. Pero por primera vez desde la industrialización existe una ruta tecnológica viable para reducir emisiones manteniendo servicios energéticos. Es una respuesta humana al cambio climático que nosotros mismos intensificamos.',
      why: 'Puede decidir si la civilización industrial reduce su presión climática o prolonga la crisis.'
    },
    {
      id: 'artificial-intelligence-age', era: 'Siglo XXI', date: 'Desde 2010–2020', dateShort: '2010s+', type: 'Inteligencia artificial', color: '#8b5cf6', image: images.human,
      title: 'Inteligencia artificial y automatización cognitiva',
      summary: 'Modelos de aprendizaje automático empiezan a realizar tareas de percepción, lenguaje, ciencia y creación.',
      details: 'La inteligencia artificial moderna combina datos masivos, redes neuronales, chips especializados y métodos estadísticos. Traducción, visión, generación de texto, diseño de proteínas y automatización de trabajo intelectual cambian rápidamente. Sus beneficios y riesgos dependen de energía, gobernanza, sesgos, concentración de poder y usos sociales. Es una nueva capa tecnológica sobre la cultura humana acumulativa.',
      why: 'Podría modificar cómo producimos conocimiento, trabajo y decisiones en una escala comparable a la imprenta o Internet.'
    }
  ].filter(event => ![
    'pottery-storage',
    'bronze-age-networks',
    'axial-age-ideas',
    'classical-empires-roads',
    'paper-knowledge'
  ].includes(event.id));
}
