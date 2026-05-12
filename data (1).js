/* ═══════════════════════════════════════════════════════════════
   Listo Spanish — Static data file

   This file holds all the educational content arrays that drive
   the app: vocabulary topics, grammar lessons, reading passages,
   writing tasks, badges and so on. Pulled out of index.html in
   May 2026 so the main app file stays readable.

   IMPORTANT — these are declared with `const` at top level so they
   become globals. Don't change them to `let` or wrap in IIFE; the
   main app code references them by bare name from many functions.

   Loading order: this script MUST be loaded before the main
   inline <script> in index.html. The <script src="data.js">
   tag is placed right before the inline script for this reason.
   ═══════════════════════════════════════════════════════════════ */

// ── TOPICS ──
const TOPICS=[
  /* ── KS2 ORIGINAL 10 ── */
  {id:'greetings',name:'Greetings',icon:'👋',color:'#FF6B35',level:'ks2',year:'y34',words:[
    {es:'Hola',en:'Hello',emoji:'👋'},{es:'Adiós',en:'Goodbye',emoji:'🚪'},
    {es:'Buenos días',en:'Good morning',emoji:'🌅'},{es:'Buenas tardes',en:'Good afternoon',emoji:'☀️'},
    {es:'Por favor',en:'Please',emoji:'🙏'},{es:'Gracias',en:'Thank you',emoji:'💛'},
    {es:'De nada',en:"You're welcome",emoji:'😊'},{es:'Muy bien',en:'Very well',emoji:'✅'},
    {es:'Hasta luego',en:'See you later',emoji:'👋'},{es:'Hola a todos',en:'Hello everyone',emoji:'👐'}
  ]},
  {id:'numbers',name:'Numbers 1–10',icon:'🔢',color:'#4ECDC4',level:'ks2',year:'y34',words:[
    {es:'uno',en:'one',emoji:'1️⃣'},{es:'dos',en:'two',emoji:'2️⃣'},{es:'tres',en:'three',emoji:'3️⃣'},
    {es:'cuatro',en:'four',emoji:'4️⃣'},{es:'cinco',en:'five',emoji:'5️⃣'},{es:'seis',en:'six',emoji:'6️⃣'},
    {es:'siete',en:'seven',emoji:'7️⃣'},{es:'ocho',en:'eight',emoji:'8️⃣'},{es:'nueve',en:'nine',emoji:'9️⃣'},
    {es:'diez',en:'ten',emoji:'🔟'}
  ]},
  {id:'animals',name:'Animals',icon:'🐾',color:'#9B59B6',level:'ks2',year:'y34',words:[
    {es:'perro',en:'dog',emoji:'🐶'},{es:'gato',en:'cat',emoji:'🐱'},{es:'pájaro',en:'bird',emoji:'🐦'},
    {es:'pez',en:'fish',emoji:'🐟'},{es:'caballo',en:'horse',emoji:'🐴'},{es:'vaca',en:'cow',emoji:'🐄'},
    {es:'conejo',en:'rabbit',emoji:'🐰'},{es:'ratón',en:'mouse',emoji:'🐭'},
    {es:'elefante',en:'elephant',emoji:'🐘'},{es:'león',en:'lion',emoji:'🦁'}
  ]},
  {id:'colours',name:'Colours',icon:'🎨',color:'#E74C3C',level:'ks2',year:'y34',words:[
    {es:'rojo',en:'red',emoji:'🔴'},{es:'azul',en:'blue',emoji:'🔵'},{es:'verde',en:'green',emoji:'🟢'},
    {es:'amarillo',en:'yellow',emoji:'🟡'},{es:'naranja',en:'orange',emoji:'🟠'},{es:'morado',en:'purple',emoji:'🟣'},
    {es:'negro',en:'black',emoji:'⚫'},{es:'blanco',en:'white',emoji:'⚪'},{es:'rosa',en:'pink',emoji:'🩷'},
    {es:'marrón',en:'brown',emoji:'🟤'}
  ]},
  {id:'food',name:'Food & drink',icon:'🍽️',color:'#F39C12',level:'ks2',year:'y34',words:[
    {es:'agua',en:'water',emoji:'💧'},{es:'leche',en:'milk',emoji:'🥛'},{es:'pan',en:'bread',emoji:'🍞'},
    {es:'manzana',en:'apple',emoji:'🍎'},{es:'plátano',en:'banana',emoji:'🍌'},{es:'naranja',en:'orange',emoji:'🍊'},
    {es:'queso',en:'cheese',emoji:'🧀'},{es:'pizza',en:'pizza',emoji:'🍕'},
    {es:'helado',en:'ice cream',emoji:'🍦'},{es:'zumo',en:'juice',emoji:'🧃'}
  ]},
  {id:'family',name:'Family',icon:'👨‍👩‍👧‍👦',color:'#27AE60',level:'ks2',year:'y34',words:[
    {es:'madre',en:'mother',emoji:'👩'},{es:'padre',en:'father',emoji:'👨'},
    {es:'hermana',en:'sister',emoji:'👧'},{es:'hermano',en:'brother',emoji:'👦'},
    {es:'abuela',en:'grandmother',emoji:'👵'},{es:'abuelo',en:'grandfather',emoji:'👴'},
    {es:'tía',en:'aunt',emoji:'🙍'},{es:'tío',en:'uncle',emoji:'🙍‍♂️'},
    {es:'bebé',en:'baby',emoji:'👶'},{es:'familia',en:'family',emoji:'👨‍👩‍👧‍👦'}
  ]},
  {id:'classroom',name:'Classroom',icon:'🏫',color:'#3498DB',level:'ks2',year:'y34',words:[
    {es:'libro',en:'book',emoji:'📖'},{es:'lápiz',en:'pencil',emoji:'✏️'},
    {es:'mesa',en:'table',emoji:'🪑'},{es:'silla',en:'chair',emoji:'💺'},
    {es:'mochila',en:'backpack',emoji:'🎒'},{es:'bolígrafo',en:'pen',emoji:'🖊️'},
    {es:'regla',en:'ruler',emoji:'📏'},{es:'tijeras',en:'scissors',emoji:'✂️'},
    {es:'papel',en:'paper',emoji:'📄'},{es:'pizarra',en:'board',emoji:'🖥️'}
  ]},
  {id:'body',name:'Body parts',icon:'🧍',color:'#E91E8C',level:'ks2',year:'y34',words:[
    {es:'cabeza',en:'head',emoji:'👤'},{es:'ojos',en:'eyes',emoji:'👀'},
    {es:'nariz',en:'nose',emoji:'👃'},{es:'boca',en:'mouth',emoji:'👄'},
    {es:'orejas',en:'ears',emoji:'👂'},{es:'brazos',en:'arms',emoji:'💪'},
    {es:'manos',en:'hands',emoji:'🤲'},{es:'piernas',en:'legs',emoji:'🦵'},
    {es:'pies',en:'feet',emoji:'🦶'},{es:'pelo',en:'hair',emoji:'💇'}
  ]},
  {id:'weather',name:'Weather',icon:'🌤️',color:'#00BCD4',level:'ks2',year:'y56',words:[
    {es:'sol',en:'sun',emoji:'☀️'},{es:'lluvia',en:'rain',emoji:'🌧️'},
    {es:'nieve',en:'snow',emoji:'❄️'},{es:'viento',en:'wind',emoji:'💨'},
    {es:'nubes',en:'clouds',emoji:'☁️'},{es:'arcoíris',en:'rainbow',emoji:'🌈'},
    {es:'trueno',en:'thunder',emoji:'⛈️'},{es:'calor',en:'heat',emoji:'🌡️'},
    {es:'frío',en:'cold',emoji:'🥶'},{es:'tormenta',en:'storm',emoji:'🌪️'}
  ]},
  {id:'days',name:'Days & months',icon:'📅',color:'#795548',level:'ks2',year:'y56',words:[
    {es:'lunes',en:'Monday',emoji:'📅'},{es:'martes',en:'Tuesday',emoji:'📅'},
    {es:'miércoles',en:'Wednesday',emoji:'📅'},{es:'jueves',en:'Thursday',emoji:'📅'},
    {es:'viernes',en:'Friday',emoji:'🎉'},{es:'sábado',en:'Saturday',emoji:'😎'},
    {es:'domingo',en:'Sunday',emoji:'☀️'},{es:'enero',en:'January',emoji:'❄️'},
    {es:'febrero',en:'February',emoji:'💕'},{es:'marzo',en:'March',emoji:'🌱'}
  ]},
  /* ── KS2 NEW: EVERYDAY WORLD ── */
  {id:'clothes',name:'Clothes',icon:'👕',color:'#8E44AD',level:'ks2',year:'y56',words:[
    {es:'camisa',en:'shirt',emoji:'👔'},{es:'pantalones',en:'trousers',emoji:'👖'},
    {es:'zapatos',en:'shoes',emoji:'👟'},{es:'calcetines',en:'socks',emoji:'🧦'},
    {es:'abrigo',en:'coat',emoji:'🧥'},{es:'vestido',en:'dress',emoji:'👗'},
    {es:'falda',en:'skirt',emoji:'🩱'},{es:'gorra',en:'cap',emoji:'🧢'},
    {es:'bufanda',en:'scarf',emoji:'🧣'},{es:'guantes',en:'gloves',emoji:'🧤'}
  ]},
  {id:'house',name:'House & home',icon:'🏠',color:'#C0392B',level:'ks2',year:'y78',words:[
    {es:'cocina',en:'kitchen',emoji:'🍳'},{es:'dormitorio',en:'bedroom',emoji:'🛏️'},
    {es:'baño',en:'bathroom',emoji:'🚿'},{es:'salón',en:'living room',emoji:'🛋️'},
    {es:'jardín',en:'garden',emoji:'🌱'},{es:'puerta',en:'door',emoji:'🚪'},
    {es:'ventana',en:'window',emoji:'🪟'},{es:'escalera',en:'stairs',emoji:'🪜'},
    {es:'mesa',en:'table',emoji:'🍽️'},{es:'cama',en:'bed',emoji:'🛏️'}
  ]},
  {id:'town',name:'Town & places',icon:'🏙️',color:'#2980B9',level:'ks2',year:'y78',words:[
    {es:'tienda',en:'shop',emoji:'🏪'},{es:'colegio',en:'school',emoji:'🏫'},
    {es:'hospital',en:'hospital',emoji:'🏥'},{es:'parque',en:'park',emoji:'🌳'},
    {es:'biblioteca',en:'library',emoji:'📚'},{es:'mercado',en:'market',emoji:'🛒'},
    {es:'iglesia',en:'church',emoji:'⛪'},{es:'playa',en:'beach',emoji:'🏖️'},
    {es:'montaña',en:'mountain',emoji:'⛰️'},{es:'ciudad',en:'city',emoji:'🌆'}
  ]},
  {id:'transport',name:'Transport',icon:'🚗',color:'#16A085',level:'ks2',year:'y78',words:[
    {es:'coche',en:'car',emoji:'🚗'},{es:'autobús',en:'bus',emoji:'🚌'},
    {es:'tren',en:'train',emoji:'🚂'},{es:'avión',en:'aeroplane',emoji:'✈️'},
    {es:'bicicleta',en:'bicycle',emoji:'🚲'},{es:'barco',en:'boat',emoji:'⛵'},
    {es:'moto',en:'motorbike',emoji:'🏍️'},{es:'taxi',en:'taxi',emoji:'🚕'},
    {es:'metro',en:'underground',emoji:'🚇'},{es:'camión',en:'lorry',emoji:'🚛'}
  ]},
  {id:'shopping',name:'Shopping',icon:'🛍️',color:'#D35400',level:'ks2',year:'y78',words:[
    {es:'dinero',en:'money',emoji:'💰'},{es:'precio',en:'price',emoji:'🏷️'},
    {es:'caro',en:'expensive',emoji:'💸'},{es:'barato',en:'cheap',emoji:'🪙'},
    {es:'comprar',en:'to buy',emoji:'🛒'},{es:'vender',en:'to sell',emoji:'💼'},
    {es:'grande',en:'big',emoji:'🔺'},{es:'pequeño',en:'small',emoji:'🔻'},
    {es:'color',en:'colour',emoji:'🎨'},{es:'talla',en:'size',emoji:'📏'}
  ]},
  {id:'technology',name:'Technology',icon:'💻',color:'#1ABC9C',level:'ks2',year:'y9',words:[
    {es:'ordenador',en:'computer',emoji:'💻'},{es:'teléfono',en:'phone',emoji:'📱'},
    {es:'internet',en:'internet',emoji:'🌐'},{es:'juego',en:'game',emoji:'🎮'},
    {es:'música',en:'music',emoji:'🎵'},{es:'foto',en:'photo',emoji:'📷'},
    {es:'vídeo',en:'video',emoji:'📹'},{es:'pantalla',en:'screen',emoji:'🖥️'},
    {es:'ratón',en:'mouse',emoji:'🖱️'},{es:'teclado',en:'keyboard',emoji:'⌨️'}
  ]},
  {id:'nature',name:'Nature',icon:'🌿',color:'#27AE60',level:'ks2',year:'y9',words:[
    {es:'árbol',en:'tree',emoji:'🌳'},{es:'flor',en:'flower',emoji:'🌸'},
    {es:'río',en:'river',emoji:'🏞️'},{es:'mar',en:'sea',emoji:'🌊'},
    {es:'tierra',en:'earth',emoji:'🌍'},{es:'sol',en:'sun',emoji:'☀️'},
    {es:'luna',en:'moon',emoji:'🌙'},{es:'estrella',en:'star',emoji:'⭐'},
    {es:'hierba',en:'grass',emoji:'🌿'},{es:'piedra',en:'stone',emoji:'🪨'}
  ]},
  /* ── KS2 NEW: ME & MY LIFE ── */
  {id:'feelings',name:'Feelings',icon:'😀',color:'#F39C12',level:'ks2',year:'y56',words:[
    {es:'feliz',en:'happy',emoji:'😊'},{es:'triste',en:'sad',emoji:'😢'},
    {es:'enfadado',en:'angry',emoji:'😠'},{es:'asustado',en:'scared',emoji:'😨'},
    {es:'cansado',en:'tired',emoji:'😴'},{es:'aburrido',en:'bored',emoji:'😑'},
    {es:'emocionado',en:'excited',emoji:'🤩'},{es:'nervioso',en:'nervous',emoji:'😬'},
    {es:'contento',en:'pleased',emoji:'😁'},{es:'sorprendido',en:'surprised',emoji:'😲'}
  ]},
  {id:'sports',name:'Sports & hobbies',icon:'⚽',color:'#2ECC71',level:'ks2',year:'y56',words:[
    {es:'fútbol',en:'football',emoji:'⚽'},{es:'natación',en:'swimming',emoji:'🏊'},
    {es:'ciclismo',en:'cycling',emoji:'🚴'},{es:'tenis',en:'tennis',emoji:'🎾'},
    {es:'bailar',en:'dancing',emoji:'💃'},{es:'dibujar',en:'drawing',emoji:'✏️'},
    {es:'leer',en:'reading',emoji:'📖'},{es:'cocinar',en:'cooking',emoji:'🍳'},
    {es:'cantar',en:'singing',emoji:'🎤'},{es:'jugar',en:'playing',emoji:'🎲'}
  ]},
  {id:'music',name:'Music & arts',icon:'🎵',color:'#9B59B6',level:'ks2',year:'y56',words:[
    {es:'guitarra',en:'guitar',emoji:'🎸'},{es:'piano',en:'piano',emoji:'🎹'},
    {es:'tambor',en:'drum',emoji:'🥁'},{es:'flauta',en:'flute',emoji:'🪈'},
    {es:'canción',en:'song',emoji:'🎵'},{es:'pintura',en:'painting',emoji:'🎨'},
    {es:'dibujo',en:'drawing',emoji:'✏️'},{es:'teatro',en:'theatre',emoji:'🎭'},
    {es:'danza',en:'dance',emoji:'💃'},{es:'escultura',en:'sculpture',emoji:'🗿'}
  ]},
  {id:'health',name:'Health & body',icon:'🍎',color:'#E74C3C',level:'ks2',year:'y9',words:[
    {es:'enfermo',en:'ill',emoji:'🤒'},{es:'sano',en:'healthy',emoji:'💪'},
    {es:'medicina',en:'medicine',emoji:'💊'},{es:'médico',en:'doctor',emoji:'👨‍⚕️'},
    {es:'dolor',en:'pain',emoji:'🤕'},{es:'fiebre',en:'fever',emoji:'🌡️'},
    {es:'descanso',en:'rest',emoji:'😴'},{es:'ejercicio',en:'exercise',emoji:'🏃'},
    {es:'fruta',en:'fruit',emoji:'🍎'},{es:'verdura',en:'vegetable',emoji:'🥦'}
  ]},
  {id:'subjects',name:'School subjects',icon:'🎒',color:'#3498DB',level:'ks2',year:'y56',words:[
    {es:'matemáticas',en:'maths',emoji:'➕'},{es:'inglés',en:'English',emoji:'🇬🇧'},
    {es:'español',en:'Spanish',emoji:'🇪🇸'},{es:'ciencias',en:'science',emoji:'🔬'},
    {es:'historia',en:'history',emoji:'📜'},{es:'geografía',en:'geography',emoji:'🌍'},
    {es:'arte',en:'art',emoji:'🎨'},{es:'música',en:'music',emoji:'🎵'},
    {es:'educación física',en:'PE',emoji:'🏃'},{es:'tecnología',en:'technology',emoji:'💻'}
  ]},
  {id:'celebrations',name:'Celebrations',icon:'🎉',color:'#E91E63',level:'ks2',year:'y56',words:[
    {es:'cumpleaños',en:'birthday',emoji:'🎂'},{es:'Navidad',en:'Christmas',emoji:'🎄'},
    {es:'fiesta',en:'party',emoji:'🎉'},{es:'regalo',en:'present',emoji:'🎁'},
    {es:'globo',en:'balloon',emoji:'🎈'},{es:'pastel',en:'cake',emoji:'🎂'},
    {es:'vela',en:'candle',emoji:'🕯️'},{es:'música',en:'music',emoji:'🎵'},
    {es:'baile',en:'dance',emoji:'💃'},{es:'felicitaciones',en:'congratulations',emoji:'🏆'}
  ]},
  /* ── KS2 NEW: LANGUAGE BUILDING BLOCKS ── */
  {id:'numbers2',name:'Numbers 11–100',icon:'🔢',color:'#00897B',level:'ks2',year:'y78',words:[
    {es:'once',en:'eleven',emoji:'1️⃣1️⃣'},{es:'doce',en:'twelve',emoji:'1️⃣2️⃣'},
    {es:'trece',en:'thirteen',emoji:'1️⃣3️⃣'},{es:'veinte',en:'twenty',emoji:'2️⃣0️⃣'},
    {es:'veintiuno',en:'twenty-one',emoji:'2️⃣1️⃣'},{es:'treinta',en:'thirty',emoji:'3️⃣0️⃣'},
    {es:'cuarenta',en:'forty',emoji:'4️⃣0️⃣'},{es:'cincuenta',en:'fifty',emoji:'5️⃣0️⃣'},
    {es:'cien',en:'one hundred',emoji:'💯'},{es:'mil',en:'one thousand',emoji:'🔢'}
  ]},
  {id:'time',name:'Time & routines',icon:'⏰',color:'#546E7A',level:'ks2',year:'y78',words:[
    {es:'mañana',en:'morning',emoji:'🌅'},{es:'tarde',en:'afternoon',emoji:'🌤️'},
    {es:'noche',en:'night',emoji:'🌙'},{es:'hoy',en:'today',emoji:'📅'},
    {es:'ayer',en:'yesterday',emoji:'⬅️'},{es:'mañana',en:'tomorrow',emoji:'➡️'},
    {es:'ahora',en:'now',emoji:'⏱️'},{es:'siempre',en:'always',emoji:'♾️'},
    {es:'nunca',en:'never',emoji:'🚫'},{es:'a veces',en:'sometimes',emoji:'↔️'}
  ]},
  {id:'directions',name:'Directions',icon:'📍',color:'#FF7043',level:'ks2',year:'y9',words:[
    {es:'izquierda',en:'left',emoji:'⬅️'},{es:'derecha',en:'right',emoji:'➡️'},
    {es:'arriba',en:'up',emoji:'⬆️'},{es:'abajo',en:'down',emoji:'⬇️'},
    {es:'todo recto',en:'straight on',emoji:'⬆️'},{es:'cerca',en:'near',emoji:'📍'},
    {es:'lejos',en:'far',emoji:'🗺️'},{es:'aquí',en:'here',emoji:'👇'},
    {es:'allí',en:'there',emoji:'👉'},{es:'gira',en:'turn',emoji:'🔄'}
  ]},
  {id:'adjectives',name:'Adjectives',icon:'✨',color:'#7B1FA2',level:'ks2',year:'y78',words:[
    {es:'grande',en:'big',emoji:'🔺'},{es:'pequeño',en:'small',emoji:'🔻'},
    {es:'rápido',en:'fast',emoji:'💨'},{es:'lento',en:'slow',emoji:'🐢'},
    {es:'bonito',en:'beautiful',emoji:'🌸'},{es:'feo',en:'ugly',emoji:'🤢'},
    {es:'nuevo',en:'new',emoji:'✨'},{es:'viejo',en:'old',emoji:'🏚️'},
    {es:'fácil',en:'easy',emoji:'😌'},{es:'difícil',en:'difficult',emoji:'🤔'}
  ]},
  {id:'verbs',name:'Action verbs',icon:'🏃',color:'#D84315',level:'ks2',year:'y78',words:[
    {es:'correr',en:'to run',emoji:'🏃'},{es:'saltar',en:'to jump',emoji:'🦘'},
    {es:'comer',en:'to eat',emoji:'🍽️'},{es:'beber',en:'to drink',emoji:'🥤'},
    {es:'dormir',en:'to sleep',emoji:'😴'},{es:'hablar',en:'to speak',emoji:'💬'},
    {es:'escribir',en:'to write',emoji:'✏️'},{es:'leer',en:'to read',emoji:'📖'},
    {es:'escuchar',en:'to listen',emoji:'👂'},{es:'mirar',en:'to look',emoji:'👀'}
  ]},
  {id:'questions',name:'Question words',icon:'❓',color:'#0288D1',level:'ks2',year:'y78',words:[
    {es:'qué',en:'what',emoji:'❓'},{es:'quién',en:'who',emoji:'👤'},
    {es:'dónde',en:'where',emoji:'📍'},{es:'cuándo',en:'when',emoji:'📅'},
    {es:'por qué',en:'why',emoji:'🤔'},{es:'cómo',en:'how',emoji:'💭'},
    {es:'cuánto',en:'how much',emoji:'💰'},{es:'cuántos',en:'how many',emoji:'🔢'},
    {es:'cuál',en:'which',emoji:'☝️'},{es:'verdad',en:'right / true',emoji:'✅'}
  ]},
  {id:'connectives',name:'Connectives',icon:'🔗',color:'#6D4C41',level:'ks2',year:'y9',words:[
    {es:'y',en:'and',emoji:'➕'},{es:'pero',en:'but',emoji:'↔️'},
    {es:'porque',en:'because',emoji:'💡'},{es:'también',en:'also',emoji:'✅'},
    {es:'sin embargo',en:'however',emoji:'🔄'},{es:'primero',en:'first',emoji:'1️⃣'},
    {es:'después',en:'after',emoji:'➡️'},{es:'finalmente',en:'finally',emoji:'🏁'},
    {es:'o',en:'or',emoji:'🔀'},{es:'si',en:'if',emoji:'🤔'}
  ]}
];

// ── VIDEOS ──
const VIDEOS={
  greetings:[{id:'-hceggEiwr4',title:'Greetings with Cirilo',channel:'El Recreo Spanish',desc:'Hola, Adiós, Buenos días and more.',tags:['song','vocab']},{id:'oUvyhStbFy8',title:'Greetings Song',channel:'Rockalingua',desc:'Catchy song covering everyday Spanish greetings.',tags:['song']}],
  numbers:[{id:'oUvyhStbFy8',title:'Los Números',channel:'Rockalingua',desc:'Catchy song for numbers 1-10.',tags:['song','vocab']},{id:'ZiNFXntWOJw',title:'Colours and Numbers',channel:'Rockalingua',desc:'Two topics in one song.',tags:['song']}],
  animals:[{id:'mqTKdztf40M',title:'Los Animales',channel:'Spanish Songs for Kids',desc:'Fun animal song for KS2.',tags:['song','vocab']},{id:'ldF4o3jc07A',title:'Animals Song',channel:'Sing with Señor',desc:'High-energy animal vocabulary song.',tags:['song']}],
  colours:[{id:'gBeYkZiaSB8',title:'Los Colores',channel:'ChuChu TV Español',desc:'Learn all the main colours in Spanish.',tags:['song','vocab']},{id:'xDa22ECW7GY',title:'Colors in Spanish',channel:'Spanish for Little Learners',desc:'Native speaker teaches colours.',tags:['vocab']}],
  food:[{id:'NRb54NXWq7k',title:'La Comida Song',channel:'Vivamos Spanish',desc:'Key food vocabulary song.',tags:['song','vocab']},{id:'ALBBusQEXNA',title:'Te Gusta?',channel:'Super Simple Español',desc:'Food likes and dislikes.',tags:['song','structure']}],
  family:[{id:'_T1svGpYS28',title:'La Familia',channel:'Rockalingua',desc:'Family members song.',tags:['song','vocab']},{id:'AgCmDQFuFE8',title:'Family Members',channel:'Educational Videos for Kids',desc:'Clear family vocabulary video.',tags:['vocab']}],
  classroom:[{id:'W-2SjVT28ak',title:'Materiales Escolares',channel:'The Language Project',desc:'Classroom objects song.',tags:['song','vocab']},{id:'jww7Jz79dWM',title:'Classroom Objects',channel:'Beginner Spanish Lessons',desc:'Simple classroom vocabulary.',tags:['vocab']}],
  body:[{id:'pOg6y-Q59eM',title:'Las Partes del Cuerpo',channel:'Rockalingua',desc:'Classic body parts song.',tags:['song','vocab']},{id:'yjIc4jOMjRw',title:'Body Parts with Lyrics',channel:'Lingopie Music',desc:'Sing-along with lyrics.',tags:['song']}],
  weather:[{id:'K91FAXSL8GY',title:'El Tiempo',channel:'Spanish Songs for Kids',desc:'Weather vocabulary song.',tags:['song','vocab']},{id:'eRG-2-NJruw',title:'Spanish Weather',channel:'GaMar Talk',desc:'How to say the weather.',tags:['vocab','structure']}],
  days:[{id:'y1JXoP393-o',title:'Days and Months',channel:'Basho and Friends',desc:'All 7 days and 12 months in one song.',tags:['song','vocab']},{id:'9j1ueJ_XdFM',title:'Days of the Week',channel:'Spanish Songs for Kids',desc:'Simple days of the week song.',tags:['song']}]
};

// ── SB_SENTENCES ──
const SB_SENTENCES={
  1:[
    {en:'The dog is big',es:['El','perro','es','grande'],distractors:['gato','pequeño','la','un']},
    {en:'I like apples',es:['Me','gustan','las','manzanas'],distractors:['no','gusta','perros','el']},
    {en:'The cat is small',es:['El','gato','es','pequeño'],distractors:['grande','perro','la','un']},
    {en:'I have a book',es:['Tengo','un','libro'],distractors:['tienes','una','mesa','el']},
    {en:'The sun is yellow',es:['El','sol','es','amarillo'],distractors:['luna','rojo','la','un']},
    {en:'I am happy',es:['Estoy','contento'],distractors:['triste','eres','soy','muy']},
    {en:'The water is cold',es:['El','agua','está','fría'],distractors:['caliente','la','es','un']},
    {en:'I have a dog',es:['Tengo','un','perro'],distractors:['gato','una','tienes','el']}
  ],
  2:[
    {en:'My mother is tall',es:['Mi','madre','es','alta'],distractors:['padre','baja','la','tu']},
    {en:'I like playing football',es:['Me','gusta','jugar','al','fútbol'],distractors:['no','gustan','la','tenis']},
    {en:'My dog is very big',es:['Mi','perro','es','muy','grande'],distractors:['gato','pequeño','la','tu']},
    {en:'I can speak Spanish',es:['Puedo','hablar','español'],distractors:['inglés','hablas','puedes','bien']},
    {en:'Today it is raining',es:['Hoy','está','lloviendo'],distractors:['mañana','hace','sol','nieva']},
    {en:'I have two brothers',es:['Tengo','dos','hermanos'],distractors:['tres','hermanas','tienes','un']},
    {en:'The food is very good',es:['La','comida','está','muy','buena'],distractors:['mala','el','agua','rica']},
    {en:'I live in England',es:['Vivo','en','Inglaterra'],distractors:['España','vives','trabajo','Francia']}
  ],
  3:[
    {en:'I would like a glass of water',es:['Quisiera','un','vaso','de','agua'],distractors:['quiero','una','copa','leche']},
    {en:'My favourite colour is blue',es:['Mi','color','favorito','es','el','azul'],distractors:['rojo','verde','tu','la']},
    {en:'At the weekend I play football',es:['El','fin','de','semana','juego','al','fútbol'],distractors:['tenis','lunes','juega','un']},
    {en:'I think Spanish is fun',es:['Creo','que','el','español','es','divertido'],distractors:['aburrido','pienso','inglés','muy']},
    {en:'My family lives in a house',es:['Mi','familia','vive','en','una','casa'],distractors:['piso','tu','viven','el']},
    {en:'I want to visit Spain one day',es:['Quiero','visitar','España','algún','día'],distractors:['Italia','quiero','un','Francia']},
    {en:'In Spain people eat late',es:['En','España','la','gente','come','tarde'],distractors:['temprano','Italia','el','una']},
    {en:'I have been learning Spanish for two years',es:['Llevo','dos','años','aprendiendo','español'],distractors:['tres','meses','inglés','seis']}
  ]
};

// ── CULTURE_FACTS ──
const CULTURE_FACTS=[
  {country:'Spain',flag:'🇪🇸',category:'Language',fact:'Spanish is spoken by over 500 million people worldwide — the second most spoken language by native speakers!'},
  {country:'Mexico',flag:'🇲🇽',category:'Food',fact:'Mexico gave the world chocolate, tomatoes, corn and chillies. The word "chocolate" comes from the Aztec word "xocolatl".'},
  {country:'Spain',flag:'🇪🇸',category:'Festival',fact:'La Tomatina in Buñol, Spain sees thousands of people throw over 150,000 tomatoes at each other in one hour!'},
  {country:'Argentina',flag:'🇦🇷',category:'Sport',fact:'Argentina has won the FIFA World Cup 3 times. Lionel Messi, widely considered the greatest footballer ever, is Argentine.'},
  {country:'Colombia',flag:'🇨🇴',category:'Nature',fact:'Colombia is home to over 1,900 species of birds — more than any other country on Earth!'},
  {country:'Spain',flag:'🇪🇸',category:'History',fact:'Spanish developed from Latin brought by Romans over 2,000 years ago. It spread worldwide during the Age of Exploration.'},
  {country:'Peru',flag:'🇵🇪',category:'History',fact:'Machu Picchu was built by the Inca Empire around 1450 AD. It sits 2,430 metres above sea level — one of the New Seven Wonders of the World!'},
  {country:'Mexico',flag:'🇲🇽',category:'Festival',fact:'Día de los Muertos is a Mexican holiday where families remember loved ones who have passed — celebrated on 1–2 November each year.'},
  {country:'Spain',flag:'🇪🇸',category:'Food',fact:'Paella is a famous rice dish from Valencia, Spain — cooked with saffron, vegetables, seafood or meat in a wide flat pan.'},
  {country:'Cuba',flag:'🇨🇺',category:'Music',fact:'Cuba gave the world salsa music! The rhythm blends African percussion with Spanish guitar and is danced all over the world.'},
  {country:'Brazil',flag:'🇧🇷',category:'Language',fact:'Brazil is the only South American country where Portuguese, not Spanish, is the official language.'},
  {country:'Spain',flag:'🇪🇸',category:'Sport',fact:'FC Barcelona and Real Madrid are two of the most famous football clubs in the world — both based in Spain!'}
];

// ── CULTURE_QUIZ ──
const CULTURE_QUIZ=[
  {q:'How many people speak Spanish worldwide?',opts:['100 million','250 million','500 million','1 billion'],correct:2},
  {q:'Which country has the most Spanish speakers?',opts:['Spain','Colombia','Mexico','Argentina'],correct:2},
  {q:'What food did Mexico give to the world?',opts:['Pizza','Chocolate','Sushi','Curry'],correct:1},
  {q:'What is La Tomatina?',opts:['A dance','A tomato-throwing festival','A type of food','A football team'],correct:1},
  {q:'How many times has Argentina won the World Cup?',opts:['1','2','3','4'],correct:2},
  {q:'Where is Machu Picchu?',opts:['Mexico','Colombia','Spain','Peru'],correct:3},
  {q:'What language do people speak in Brazil?',opts:['Spanish','French','Portuguese','Italian'],correct:2},
  {q:'What is Día de los Muertos?',opts:['A harvest festival','A day to remember loved ones','A food festival','New Year'],correct:1},
  {q:'What is paella cooked in?',opts:['A pot','A bowl','A wide flat pan','A clay dish'],correct:2},
  {q:'Which country gave the world salsa music?',opts:['Spain','Mexico','Argentina','Cuba'],correct:3}
];

// ── ALL_BADGES ──
const ALL_BADGES=[
  {id:'first_word',icon:'⭐',name:'First Steps',desc:'Complete your first quiz',check:()=>Object.values(progress).some(v=>v>0)},
  {id:'speed_demon',icon:'⚡',name:'Speed Demon',desc:'Score 100+ in Speed Round',check:()=>Object.values(speedBests).some(v=>v>=100)},
  {id:'perfect',icon:'🏆',name:'Perfecto!',desc:'Score 8/8 in Learn mode',check:()=>Object.values(progress).some(v=>v>=8)},
  {id:'streak_3',icon:'🔥',name:'On Fire',desc:'Get a 3-day streak',check:()=>streak>=3},
  {id:'vocab_half',icon:'📚',name:'Word Collector',desc:'Complete 5 vocab topics',check:()=>Object.values(progress).filter(v=>v>=7).length>=5},
  {id:'vocab_all',icon:'🎓',name:'Vocab Master',desc:'Complete all 30 topics',check:()=>Object.values(progress).filter(v=>v>=7).length>=TOPICS.length},
  {id:'scramble_ace',icon:'🧩',name:'Puzzle Pro',desc:'Score 150+ in Scramble',check:()=>Object.values(scrambleBests).some(v=>v>=150)},
  {id:'sentence_1',icon:'🧱',name:'Sentence Starter',desc:'Complete 3 Level 1 sentences correctly',check:()=>(sbProgress[1]||0)>=3},
  {id:'sentence_all',icon:'💬',name:'Sentence Builder',desc:'Complete all 3 sentence levels',check:()=>(sbProgress[1]||0)>=3&&(sbProgress[2]||0)>=3&&(sbProgress[3]||0)>=3},
  {id:'culture_5',icon:'🌍',name:'World Explorer',desc:'Answer 5 culture quiz questions correctly',check:()=>cultureScore>=5},
  {id:'xp_500',icon:'💎',name:'XP Champion',desc:'Earn 500 XP total',check:()=>xp>=500},
  {id:'srs_10',icon:'🧠',name:'Brain Trainer',desc:'Master 10 words in Smart Review',check:()=>srsGetMasteredCount()>=10},
  {id:'srs_all',icon:'🌟',name:'Memory Master',desc:'Master every word across all topics',check:()=>srsGetMasteredCount()>=TOPICS.reduce((a,t)=>a+t.words.length,0)}
];

// ── GCSE_TOPICS ──
const GCSE_TOPICS = [

  /* ── AQA Theme 1: People and lifestyle ── */
  {id:'gcse_identity',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 1: Identity and relationships with others',
   edxContext:'My personal world',
   name:'Identity & relationships',icon:'👤',color:'#1a2744',
   words:[
    {es:'la personalidad',en:'personality',emoji:'🧠'},{es:'el caracter',en:'character',emoji:'✨'},
    {es:'simpático/a',en:'friendly',emoji:'😊'},{es:'trabajador/a',en:'hardworking',emoji:'💪'},
    {es:'egoísta',en:'selfish',emoji:'😤'},{es:'generoso/a',en:'generous',emoji:'💝'},
    {es:'la amistad',en:'friendship',emoji:'🤝'},{es:'el novio / la novia',en:'boyfriend / girlfriend',emoji:'💑'},
    {es:'la pareja',en:'partner/couple',emoji:'💑'},{es:'llevarse bien con',en:'to get on well with',emoji:'😊'},
    {es:'discutir',en:'to argue',emoji:'😠'},{es:'confiar en',en:'to trust',emoji:'🤝'},
    {es:'la igualdad',en:'equality',emoji:'⚖️'},{es:'respetar',en:'to respect',emoji:'🙏'},
    {es:'la orientación sexual',en:'sexual orientation',emoji:'🏳️‍🌈'}
  ]},

  {id:'gcse_health',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 2: Healthy living and lifestyle',
   edxContext:'Lifestyle and wellbeing',
   name:'Healthy living & lifestyle',icon:'🥗',color:'#27AE60',
   words:[
    {es:'la salud',en:'health',emoji:'❤️'},{es:'estar en forma',en:'to be fit',emoji:'💪'},
    {es:'hacer ejercicio',en:'to exercise',emoji:'🏃'},{es:'la dieta equilibrada',en:'balanced diet',emoji:'🥗'},
    {es:'fumar',en:'to smoke',emoji:'🚬'},{es:'el alcohol',en:'alcohol',emoji:'🍺'},
    {es:'el bienestar',en:'wellbeing',emoji:'😌'},{es:'el estrés',en:'stress',emoji:'😰'},
    {es:'relajarse',en:'to relax',emoji:'🧘'},{es:'dormir bien',en:'to sleep well',emoji:'😴'},
    {es:'la enfermedad',en:'illness',emoji:'🤒'},{es:'el médico',en:'doctor',emoji:'👨‍⚕️'},
    {es:'saludable',en:'healthy',emoji:'✅'},{es:'perjudicial',en:'harmful',emoji:'⚠️'},
    {es:'adelgazar',en:'to lose weight',emoji:'⚖️'}
  ]},

  {id:'gcse_education',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 3: Education and work',
   edxContext:'Studying and my future',
   name:'Education & school life',icon:'🏫',color:'#2980B9',
   words:[
    {es:'la asignatura',en:'subject',emoji:'📚'},{es:'el horario',en:'timetable',emoji:'📅'},
    {es:'el uniforme',en:'uniform',emoji:'👔'},{es:'las normas',en:'rules',emoji:'📋'},
    {es:'el recreo',en:'break time',emoji:'⏰'},{es:'la nota',en:'grade/mark',emoji:'📊'},
    {es:'aprobar',en:'to pass',emoji:'✅'},{es:'suspender',en:'to fail',emoji:'❌'},
    {es:'los deberes',en:'homework',emoji:'📝'},{es:'el/la profesor/a',en:'teacher',emoji:'👩‍🏫'},
    {es:'la biblioteca',en:'library',emoji:'📚'},{es:'el laboratorio',en:'laboratory',emoji:'🔬'},
    {es:'el patio',en:'playground',emoji:'⛹️'},{es:'la clase',en:'classroom/lesson',emoji:'🏫'},
    {es:'el instituto',en:'secondary school',emoji:'🏫'}
  ]},

  /* ── AQA Theme 2: Popular culture ── */
  {id:'gcse_freetime',spec:'both',tier:'foundation',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 1: Free-time activities',
   edxContext:'Lifestyle and wellbeing',
   name:'Free-time activities',icon:'⚽',color:'#D35400',
   words:[
    {es:'el tiempo libre',en:'free time',emoji:'⏳'},{es:'el deporte',en:'sport',emoji:'⚽'},
    {es:'el partido',en:'match/game',emoji:'🏟️'},{es:'el equipo',en:'team',emoji:'👥'},
    {es:'ganar',en:'to win',emoji:'🏆'},{es:'perder',en:'to lose',emoji:'😢'},
    {es:'la película',en:'film',emoji:'🎬'},{es:'el programa',en:'programme/show',emoji:'📺'},
    {es:'la canción',en:'song',emoji:'🎵'},{es:'el concierto',en:'concert',emoji:'🎸'},
    {es:'leer',en:'to read',emoji:'📖'},{es:'dibujar',en:'to draw',emoji:'✏️'},
    {es:'ir de compras',en:'to go shopping',emoji:'🛍️'},{es:'el videojuego',en:'video game',emoji:'🎮'},
    {es:'hacer deporte',en:'to do sport',emoji:'🏃'}
  ]},

  {id:'gcse_festivals',spec:'both',tier:'foundation',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 2: Customs, festivals and celebrations',
   edxContext:'My personal world',
   name:'Festivals & celebrations',icon:'🎉',color:'#8E44AD',
   words:[
    {es:'la fiesta',en:'party/festival',emoji:'🎉'},{es:'la Navidad',en:'Christmas',emoji:'🎄'},
    {es:'la Semana Santa',en:'Holy Week',emoji:'✝️'},{es:'el Año Nuevo',en:'New Year',emoji:'🎆'},
    {es:'celebrar',en:'to celebrate',emoji:'🥂'},{es:'los fuegos artificiales',en:'fireworks',emoji:'🎆'},
    {es:'el desfile',en:'parade',emoji:'🎊'},{es:'el regalo',en:'gift/present',emoji:'🎁'},
    {es:'la tradición',en:'tradition',emoji:'🏛️'},{es:'la costumbre',en:'custom/habit',emoji:'📜'},
    {es:'reunirse',en:'to meet up/gather',emoji:'👨‍👩‍👧‍👦'},{es:'la corrida de toros',en:'bullfight',emoji:'🐂'},
    {es:'el carnaval',en:'carnival',emoji:'🎭'},{es:'disfrutar',en:'to enjoy',emoji:'😄'},
    {es:'la boda',en:'wedding',emoji:'💒'}
  ]},

  {id:'gcse_celebrity',spec:'both',tier:'higher',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 3: Celebrity culture',
   edxContext:'Media and technology',
   name:'Celebrity culture',icon:'⭐',color:'#F39C12',
   words:[
    {es:'famoso/a',en:'famous',emoji:'⭐'},{es:'la fama',en:'fame',emoji:'🌟'},
    {es:'el/la cantante',en:'singer',emoji:'🎤'},{es:'el actor / la actriz',en:'actor/actress',emoji:'🎭'},
    {es:'el/la deportista',en:'sportsperson',emoji:'🏅'},{es:'influencer',en:'influencer',emoji:'📱'},
    {es:'las redes sociales',en:'social media',emoji:'📱'},{es:'el seguidor',en:'follower',emoji:'👥'},
    {es:'tener éxito',en:'to be successful',emoji:'🏆'},{es:'la red carpet',en:'red carpet',emoji:'🟥'},
    {es:'admirar',en:'to admire',emoji:'👏'},{es:'criticar',en:'to criticise',emoji:'👎'},
    {es:'el talento',en:'talent',emoji:'💫'},{es:'el escándalo',en:'scandal',emoji:'😱'},
    {es:'la entrevista',en:'interview',emoji:'🎙️'}
  ]},

  /* ── AQA Theme 3: Communication and the world around us ── */
  {id:'gcse_travel',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 1: Travel and tourism',
   edxContext:'Travel and tourism',
   name:'Travel & tourism',icon:'✈️',color:'#16A085',
   words:[
    {es:'el viaje',en:'journey/trip',emoji:'🧳'},{es:'el vuelo',en:'flight',emoji:'✈️'},
    {es:'el aeropuerto',en:'airport',emoji:'🛫'},{es:'la estación de tren',en:'train station',emoji:'🚉'},
    {es:'el billete',en:'ticket',emoji:'🎟️'},{es:'el alojamiento',en:'accommodation',emoji:'🏨'},
    {es:'el hotel',en:'hotel',emoji:'🏨'},{es:'la pensión',en:'guesthouse/B&B',emoji:'🏠'},
    {es:'reservar',en:'to book/reserve',emoji:'📅'},{es:'el turista',en:'tourist',emoji:'📸'},
    {es:'el monumento',en:'monument',emoji:'🏛️'},{es:'la playa',en:'beach',emoji:'🏖️'},
    {es:'la montaña',en:'mountain',emoji:'⛰️'},{es:'el extranjero',en:'abroad',emoji:'🌍'},
    {es:'el pasaporte',en:'passport',emoji:'📘'}
  ]},

  {id:'gcse_technology',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 2: Media and technology',
   edxContext:'Media and technology',
   name:'Media & technology',icon:'💻',color:'#2980B9',
   words:[
    {es:'las redes sociales',en:'social media',emoji:'📱'},{es:'el móvil',en:'mobile phone',emoji:'📱'},
    {es:'la aplicación',en:'app',emoji:'📲'},{es:'navegar por internet',en:'to browse the internet',emoji:'🌐'},
    {es:'descargar',en:'to download',emoji:'⬇️'},{es:'subir',en:'to upload',emoji:'⬆️'},
    {es:'el mensaje',en:'message',emoji:'💬'},{es:'la contraseña',en:'password',emoji:'🔐'},
    {es:'en línea',en:'online',emoji:'🌐'},{es:'la pantalla',en:'screen',emoji:'📺'},
    {es:'el ordenador',en:'computer',emoji:'💻'},{es:'la tableta',en:'tablet',emoji:'📱'},
    {es:'el vídeo',en:'video',emoji:'🎬'},{es:'compartir',en:'to share',emoji:'🔗'},
    {es:'la privacidad',en:'privacy',emoji:'🔒'}
  ]},

  {id:'gcse_environment',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'My neighbourhood',
   name:'Environment & local area',icon:'🌍',color:'#27AE60',
   words:[
    {es:'el medio ambiente',en:'the environment',emoji:'🌍'},{es:'el cambio climático',en:'climate change',emoji:'🌡️'},
    {es:'la contaminación',en:'pollution',emoji:'🏭'},{es:'el reciclaje',en:'recycling',emoji:'♻️'},
    {es:'la energía renovable',en:'renewable energy',emoji:'☀️'},{es:'el calentamiento global',en:'global warming',emoji:'🔥'},
    {es:'proteger',en:'to protect',emoji:'🛡️'},{es:'el bosque',en:'forest',emoji:'🌲'},
    {es:'la inundación',en:'flood',emoji:'🌊'},{es:'la sequía',en:'drought',emoji:'🏜️'},
    {es:'los residuos',en:'waste/rubbish',emoji:'🗑️'},{es:'el barrio',en:'neighbourhood',emoji:'🏘️'},
    {es:'las instalaciones',en:'facilities',emoji:'🏢'},{es:'la pobreza',en:'poverty',emoji:'💔'},
    {es:'resolver',en:'to solve/resolve',emoji:'💡'}
  ]},

  {id:'gcse_future',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'Studying and my future',
   name:'Future plans & careers',icon:'🚀',color:'#6D4C41',
   words:[
    {es:'el futuro',en:'the future',emoji:'🔮'},{es:'el trabajo',en:'job/work',emoji:'💼'},
    {es:'la carrera',en:'career',emoji:'🎓'},{es:'la universidad',en:'university',emoji:'🏛️'},
    {es:'la formación profesional',en:'vocational training',emoji:'🔧'},{es:'el sueldo',en:'salary',emoji:'💰'},
    {es:'el jefe / la jefa',en:'boss/manager',emoji:'👔'},{es:'solicitar',en:'to apply for',emoji:'📝'},
    {es:'el currículum',en:'CV/résumé',emoji:'📄'},{es:'la entrevista de trabajo',en:'job interview',emoji:'🤝'},
    {es:'el voluntariado',en:'voluntary work',emoji:'❤️'},{es:'el paro',en:'unemployment',emoji:'😟'},
    {es:'ganar',en:'to earn',emoji:'💵'},{es:'ambicioso/a',en:'ambitious',emoji:'🌟'},
    {es:'el sueño',en:'dream',emoji:'💭'}
  ]},

  /* ── Edexcel-specific context ── */
  {id:'gcse_neighbourhood',spec:'edx',tier:'foundation',
   aqaTheme:'',aqaTopic:'',
   edxContext:'My neighbourhood',
   name:'My neighbourhood',icon:'🏘️',color:'#546E7A',
   words:[
    {es:'el barrio',en:'neighbourhood/area',emoji:'🏘️'},{es:'el ayuntamiento',en:'town hall',emoji:'🏛️'},
    {es:'la tienda',en:'shop',emoji:'🛍️'},{es:'el mercado',en:'market',emoji:'🛒'},
    {es:'la farmacia',en:'pharmacy',emoji:'💊'},{es:'el banco',en:'bank',emoji:'🏦'},
    {es:'el polideportivo',en:'sports centre',emoji:'🏊'},{es:'la biblioteca',en:'library',emoji:'📚'},
    {es:'el transporte público',en:'public transport',emoji:'🚌'},{es:'el voluntariado',en:'volunteering',emoji:'🤝'},
    {es:'la comunidad',en:'community',emoji:'👥'},{es:'la zona',en:'area/zone',emoji:'📍'},
    {es:'las afueras',en:'outskirts/suburbs',emoji:'🌆'},{es:'el centro',en:'town centre',emoji:'🏙️'},
    {es:'mejorar',en:'to improve',emoji:'⬆️'}
  ]},

  /* ── Higher tier topics ── */
  {id:'gcse_social_issues',spec:'both',tier:'higher',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'My neighbourhood',
   name:'Social issues',icon:'🌐',color:'#E74C3C',
   words:[
    {es:'la desigualdad',en:'inequality',emoji:'⚖️'},{es:'la discriminación',en:'discrimination',emoji:'🚫'},
    {es:'el racismo',en:'racism',emoji:'✊'},{es:'los derechos humanos',en:'human rights',emoji:'🕊️'},
    {es:'la inmigración',en:'immigration',emoji:'🌍'},{es:'el refugiado',en:'refugee',emoji:'🏕️'},
    {es:'la pobreza',en:'poverty',emoji:'💔'},{es:'la falta de',en:'lack of',emoji:'❌'},
    {es:'luchar contra',en:'to fight against',emoji:'✊'},{es:'la justicia',en:'justice',emoji:'⚖️'},
    {es:'la sociedad',en:'society',emoji:'👥'},{es:'el gobierno',en:'government',emoji:'🏛️'},
    {es:'las manifestaciones',en:'demonstrations/protests',emoji:'📢'},{es:'resolver',en:'to resolve',emoji:'💡'},
    {es:'el bienestar social',en:'social welfare',emoji:'❤️'}
  ]},

  {id:'gcse_essay_phrases',spec:'both',tier:'higher',
   aqaTheme:'',aqaTopic:'',
   edxContext:'',
   name:'Essay & opinion phrases',icon:'✍️',color:'#34495E',
   words:[
    {es:'en mi opinión',en:'in my opinion',emoji:'💭'},{es:'desde mi punto de vista',en:'from my point of view',emoji:'👁️'},
    {es:'hay que reconocer que',en:'one must recognise that',emoji:'🔍'},{es:'sin embargo',en:'however',emoji:'↔️'},
    {es:'por otro lado',en:'on the other hand',emoji:'👉'},{es:'a pesar de esto',en:'despite this',emoji:'🛡️'},
    {es:'en conclusión',en:'in conclusion',emoji:'🏁'},{es:'cabe destacar que',en:'it is worth noting that',emoji:'📌'},
    {es:'no cabe duda de que',en:'there is no doubt that',emoji:'✅'},{es:'es evidente que',en:'it is evident that',emoji:'💡'},
    {es:'me parece fundamental',en:'I think it is fundamental',emoji:'🔑'},{es:'a largo plazo',en:'in the long term',emoji:'📅'},
    {es:'en definitiva',en:'in short/ultimately',emoji:'📍'},{es:'cada vez más',en:'more and more',emoji:'📈'},
    {es:'aunque',en:'although/even though',emoji:'↔️'}
  ]},

  /* ── NEW TOPICS: AQA Theme 1 additions ── */
  {id:'gcse_family',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 1: Identity and relationships with others',
   edxContext:'My personal world',
   name:'Family & home life',icon:'🏠',color:'#2C3E50',
   words:[
    {es:'la madre',en:'mother',emoji:'👩',tier:'F'},{es:'el padre',en:'father',emoji:'👨',tier:'F'},
    {es:'el hermano / la hermana',en:'brother / sister',emoji:'👧',tier:'F'},{es:'los abuelos',en:'grandparents',emoji:'👴',tier:'F'},
    {es:'el hijo / la hija',en:'son / daughter',emoji:'👦',tier:'F'},{es:'el gemelo / la gemela',en:'twin',emoji:'👯',tier:'H'},
    {es:'la madrastra',en:'stepmother',emoji:'👩',tier:'H'},{es:'el padrastro',en:'stepfather',emoji:'👨',tier:'H'},
    {es:'llevarse bien',en:'to get on well',emoji:'🤝',tier:'F'},{es:'discutir',en:'to argue',emoji:'😠',tier:'F'},
    {es:'mudarse',en:'to move house',emoji:'📦',tier:'H'},{es:'la convivencia',en:'living together',emoji:'🏠',tier:'H'},
    {es:'el piso',en:'flat/apartment',emoji:'🏢',tier:'F'},{es:'la casa adosada',en:'semi-detached house',emoji:'🏠',tier:'H'},
    {es:'el hogar',en:'home',emoji:'🏡',tier:'F'},{es:'cuidar',en:'to look after/care for',emoji:'❤️',tier:'F'},
    {es:'el matrimonio',en:'marriage',emoji:'💍',tier:'H'},{es:'divorciarse',en:'to get divorced',emoji:'💔',tier:'H'},
    {es:'la familia monoparental',en:'single-parent family',emoji:'👤',tier:'H'},{es:'unido/a',en:'close-knit',emoji:'🤗',tier:'H'}
  ]},

  {id:'gcse_physical_appearance',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 1: Identity and relationships with others',
   edxContext:'My personal world',
   name:'Physical description',icon:'🧍',color:'#1ABC9C',
   words:[
    {es:'alto/a',en:'tall',emoji:'📏',tier:'F'},{es:'bajo/a',en:'short',emoji:'📐',tier:'F'},
    {es:'delgado/a',en:'slim/thin',emoji:'🪶',tier:'F'},{es:'gordo/a',en:'fat',emoji:'⚖️',tier:'F'},
    {es:'los ojos azules',en:'blue eyes',emoji:'👁️',tier:'F'},{es:'el pelo rizado',en:'curly hair',emoji:'🌀',tier:'F'},
    {es:'el pelo liso',en:'straight hair',emoji:'〰️',tier:'F'},{es:'calvo/a',en:'bald',emoji:'👨‍🦲',tier:'H'},
    {es:'tener pecas',en:'to have freckles',emoji:'🟤',tier:'H'},{es:'la barba',en:'beard',emoji:'🧔',tier:'F'},
    {es:'el bigote',en:'moustache',emoji:'👨',tier:'H'},{es:'llevar gafas',en:'to wear glasses',emoji:'👓',tier:'F'},
    {es:'parecer',en:'to seem/look like',emoji:'👀',tier:'H'},{es:'parecerse a',en:'to look like (someone)',emoji:'👯',tier:'H'},
    {es:'mediano/a',en:'medium (height/build)',emoji:'🔲',tier:'F'},{es:'la complexión',en:'build/physique',emoji:'💪',tier:'H'},
    {es:'atractivo/a',en:'attractive',emoji:'✨',tier:'F'},{es:'feo/a',en:'ugly',emoji:'😬',tier:'F'},
    {es:'mayor',en:'older/elderly',emoji:'👴',tier:'F'},{es:'joven',en:'young',emoji:'🧒',tier:'F'}
  ]},

  {id:'gcse_work_future',spec:'both',tier:'foundation',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 3: Education and work',
   edxContext:'Studying and my future',
   name:'Work & employment',icon:'💼',color:'#8E44AD',
   words:[
    {es:'el empleo',en:'employment/job',emoji:'💼',tier:'F'},{es:'el contrato',en:'contract',emoji:'📄',tier:'H'},
    {es:'a tiempo completo',en:'full-time',emoji:'⏰',tier:'H'},{es:'a tiempo parcial',en:'part-time',emoji:'⏱️',tier:'H'},
    {es:'el/la empresario/a',en:'businessman/woman',emoji:'👔',tier:'H'},{es:'autónomo/a',en:'self-employed',emoji:'🧑‍💻',tier:'H'},
    {es:'el salario mínimo',en:'minimum wage',emoji:'💰',tier:'H'},{es:'la baja por maternidad',en:'maternity leave',emoji:'🤱',tier:'H'},
    {es:'trabajar de',en:'to work as',emoji:'🔧',tier:'F'},{es:'el sindicato',en:'trade union',emoji:'✊',tier:'H'},
    {es:'la huelga',en:'strike',emoji:'🪧',tier:'H'},{es:'despedir',en:'to fire/sack',emoji:'🚪',tier:'H'},
    {es:'contratar',en:'to hire',emoji:'🤝',tier:'H'},{es:'la fábrica',en:'factory',emoji:'🏭',tier:'F'},
    {es:'la oficina',en:'office',emoji:'🏢',tier:'F'},{es:'el horario de trabajo',en:'working hours',emoji:'📅',tier:'H'},
    {es:'el aprendiz',en:'apprentice',emoji:'🎓',tier:'H'},{es:'las prácticas',en:'work experience',emoji:'🏢',tier:'F'},
    {es:'el ascenso',en:'promotion',emoji:'⬆️',tier:'H'},{es:'jubilarse',en:'to retire',emoji:'🏖️',tier:'H'}
  ]},

  /* ── NEW TOPICS: AQA Theme 2 additions ── */
  {id:'gcse_food_eating',spec:'both',tier:'foundation',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 1: Free-time activities',
   edxContext:'Lifestyle and wellbeing',
   name:'Food & eating out',icon:'🍽️',color:'#E74C3C',
   words:[
    {es:'el desayuno',en:'breakfast',emoji:'🥐',tier:'F'},{es:'el almuerzo',en:'lunch',emoji:'🥗',tier:'F'},
    {es:'la cena',en:'dinner/supper',emoji:'🍽️',tier:'F'},{es:'la merienda',en:'afternoon snack',emoji:'🥪',tier:'F'},
    {es:'pedir',en:'to order',emoji:'📋',tier:'F'},{es:'la carta / el menú',en:'menu',emoji:'📜',tier:'F'},
    {es:'el/la camarero/a',en:'waiter/waitress',emoji:'🧑‍🍳',tier:'F'},{es:'la propina',en:'tip',emoji:'💵',tier:'H'},
    {es:'llevar',en:'to take away',emoji:'🥡',tier:'H'},{es:'está rico/a',en:'it is delicious',emoji:'😋',tier:'F'},
    {es:'sabe a',en:'it tastes of',emoji:'👅',tier:'H'},{es:'la cuenta',en:'the bill',emoji:'🧾',tier:'F'},
    {es:'vegetariano/a',en:'vegetarian',emoji:'🥦',tier:'F'},{es:'alérgico/a a',en:'allergic to',emoji:'⚠️',tier:'H'},
    {es:'la receta',en:'recipe',emoji:'📖',tier:'F'},{es:'el ingrediente',en:'ingredient',emoji:'🧄',tier:'H'},
    {es:'cocinar',en:'to cook',emoji:'🍳',tier:'F'},{es:'el plato típico',en:'typical dish',emoji:'🥘',tier:'F'},
    {es:'la paella',en:'paella',emoji:'🥘',tier:'F'},{es:'la tortilla española',en:'Spanish omelette',emoji:'🍳',tier:'F'}
  ]},

  {id:'gcse_music_film',spec:'both',tier:'foundation',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 1: Free-time activities',
   edxContext:'Media and technology',
   name:'Music, film & TV',icon:'🎬',color:'#C0392B',
   words:[
    {es:'el género',en:'genre',emoji:'🎭',tier:'F'},{es:'la comedia',en:'comedy',emoji:'😂',tier:'F'},
    {es:'el drama',en:'drama',emoji:'🎭',tier:'F'},{es:'el documental',en:'documentary',emoji:'📹',tier:'F'},
    {es:'la banda sonora',en:'soundtrack',emoji:'🎵',tier:'H'},{es:'el estreno',en:'premiere/release',emoji:'🎬',tier:'H'},
    {es:'la actuación',en:'performance',emoji:'🎤',tier:'H'},{es:'dirigir',en:'to direct',emoji:'🎬',tier:'H'},
    {es:'el director / la directora',en:'director',emoji:'🎬',tier:'H'},{es:'el guión',en:'script/screenplay',emoji:'📝',tier:'H'},
    {es:'transmitir en directo',en:'to livestream',emoji:'📡',tier:'H'},{es:'la letra',en:'lyrics',emoji:'🎵',tier:'H'},
    {es:'el ritmo',en:'rhythm/beat',emoji:'🥁',tier:'F'},{es:'grabar',en:'to record',emoji:'⏺️',tier:'F'},
    {es:'la gira',en:'tour',emoji:'🚌',tier:'H'},{es:'la entrada',en:'ticket (event)',emoji:'🎟️',tier:'F'},
    {es:'el festival',en:'festival',emoji:'🎪',tier:'F'},{es:'la sala de cine',en:'cinema screen/hall',emoji:'🎦',tier:'F'},
    {es:'los subtítulos',en:'subtitles',emoji:'💬',tier:'H'},{es:'doblado/a',en:'dubbed',emoji:'🔊',tier:'H'}
  ]},

  {id:'gcse_sport_exercise',spec:'both',tier:'foundation',
   aqaTheme:'Theme 2: Popular culture',aqaTopic:'Topic 1: Free-time activities',
   edxContext:'Lifestyle and wellbeing',
   name:'Sport & exercise',icon:'🏅',color:'#E67E22',
   words:[
    {es:'el entrenamiento',en:'training',emoji:'🏋️',tier:'F'},{es:'el/la entrenador/a',en:'coach/trainer',emoji:'🧑‍🏫',tier:'F'},
    {es:'el estadio',en:'stadium',emoji:'🏟️',tier:'F'},{es:'el campeonato',en:'championship',emoji:'🏆',tier:'F'},
    {es:'la liga',en:'league',emoji:'📊',tier:'F'},{es:'el torneo',en:'tournament',emoji:'🏅',tier:'H'},
    {es:'lesionarse',en:'to get injured',emoji:'🤕',tier:'H'},{es:'el árbitro',en:'referee',emoji:'👨‍⚖️',tier:'H'},
    {es:'la afición',en:'fans/supporters',emoji:'📣',tier:'H'},{es:'marcar un gol',en:'to score a goal',emoji:'⚽',tier:'F'},
    {es:'empatar',en:'to draw/tie',emoji:'🤝',tier:'H'},{es:'el resultado',en:'result/score',emoji:'📊',tier:'F'},
    {es:'la natación',en:'swimming',emoji:'🏊',tier:'F'},{es:'el ciclismo',en:'cycling',emoji:'🚴',tier:'F'},
    {es:'el atletismo',en:'athletics',emoji:'🏃',tier:'F'},{es:'el baloncesto',en:'basketball',emoji:'🏀',tier:'F'},
    {es:'hacer footing',en:'to go jogging',emoji:'🏃',tier:'F'},{es:'el polideportivo',en:'sports centre',emoji:'🏢',tier:'F'},
    {es:'las pesas',en:'weights',emoji:'🏋️',tier:'H'},{es:'mantenerse en forma',en:'to keep fit',emoji:'💪',tier:'H'}
  ]},

  /* ── NEW TOPICS: AQA Theme 3 additions ── */
  {id:'gcse_shopping_money',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'My neighbourhood',
   name:'Shopping & money',icon:'🛍️',color:'#16A085',
   words:[
    {es:'la tienda',en:'shop',emoji:'🏪',tier:'F'},{es:'el centro comercial',en:'shopping centre',emoji:'🏬',tier:'F'},
    {es:'comprar',en:'to buy',emoji:'🛒',tier:'F'},{es:'vender',en:'to sell',emoji:'💰',tier:'F'},
    {es:'el precio',en:'price',emoji:'🏷️',tier:'F'},{es:'caro/a',en:'expensive',emoji:'💸',tier:'F'},
    {es:'barato/a',en:'cheap',emoji:'🪙',tier:'F'},{es:'las rebajas',en:'sales',emoji:'🏷️',tier:'H'},
    {es:'el descuento',en:'discount',emoji:'💲',tier:'H'},{es:'el probador',en:'fitting room',emoji:'🚪',tier:'H'},
    {es:'la talla',en:'size (clothing)',emoji:'📏',tier:'F'},{es:'la ropa de segunda mano',en:'second-hand clothes',emoji:'♻️',tier:'H'},
    {es:'devolver',en:'to return (an item)',emoji:'↩️',tier:'H'},{es:'el recibo',en:'receipt',emoji:'🧾',tier:'H'},
    {es:'pagar en efectivo',en:'to pay cash',emoji:'💵',tier:'F'},{es:'pagar con tarjeta',en:'to pay by card',emoji:'💳',tier:'F'},
    {es:'ahorrar',en:'to save (money)',emoji:'🏦',tier:'F'},{es:'gastar',en:'to spend (money)',emoji:'💸',tier:'F'},
    {es:'la moneda',en:'currency/coin',emoji:'🪙',tier:'F'},{es:'el presupuesto',en:'budget',emoji:'📊',tier:'H'}
  ]},

  {id:'gcse_town_directions',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'My neighbourhood',
   name:'Town & directions',icon:'🗺️',color:'#2980B9',
   words:[
    {es:'a la derecha',en:'on the right',emoji:'➡️',tier:'F'},{es:'a la izquierda',en:'on the left',emoji:'⬅️',tier:'F'},
    {es:'todo recto',en:'straight ahead',emoji:'⬆️',tier:'F'},{es:'girar',en:'to turn',emoji:'↪️',tier:'F'},
    {es:'la calle',en:'street',emoji:'🛣️',tier:'F'},{es:'la plaza',en:'square/plaza',emoji:'🏛️',tier:'F'},
    {es:'el semáforo',en:'traffic light',emoji:'🚦',tier:'F'},{es:'el cruce',en:'crossroads',emoji:'✝️',tier:'H'},
    {es:'el puente',en:'bridge',emoji:'🌉',tier:'F'},{es:'la rotonda',en:'roundabout',emoji:'🔄',tier:'H'},
    {es:'el aparcamiento',en:'car park',emoji:'🅿️',tier:'H'},{es:'la parada de autobús',en:'bus stop',emoji:'🚌',tier:'F'},
    {es:'el metro',en:'underground/metro',emoji:'🚇',tier:'F'},{es:'el tranvía',en:'tram',emoji:'🚊',tier:'H'},
    {es:'estar cerca de',en:'to be near to',emoji:'📍',tier:'F'},{es:'estar lejos de',en:'to be far from',emoji:'🗺️',tier:'F'},
    {es:'el plano',en:'map (city)',emoji:'🗺️',tier:'F'},{es:'perderse',en:'to get lost',emoji:'❓',tier:'H'},
    {es:'el edificio',en:'building',emoji:'🏢',tier:'F'},{es:'la catedral',en:'cathedral',emoji:'⛪',tier:'F'}
  ]},

  {id:'gcse_global_issues',spec:'both',tier:'higher',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 3: The environment and where people live',
   edxContext:'My neighbourhood',
   name:'Global & ethical issues',icon:'🌏',color:'#27AE60',
   words:[
    {es:'el comercio justo',en:'fair trade',emoji:'⚖️',tier:'H'},{es:'la sostenibilidad',en:'sustainability',emoji:'♻️',tier:'H'},
    {es:'el consumismo',en:'consumerism',emoji:'🛒',tier:'H'},{es:'la huella de carbono',en:'carbon footprint',emoji:'👣',tier:'H'},
    {es:'las energías renovables',en:'renewable energies',emoji:'☀️',tier:'H'},{es:'el panel solar',en:'solar panel',emoji:'☀️',tier:'H'},
    {es:'la deforestación',en:'deforestation',emoji:'🌲',tier:'H'},{es:'la biodiversidad',en:'biodiversity',emoji:'🦋',tier:'H'},
    {es:'el plástico de un solo uso',en:'single-use plastic',emoji:'🪣',tier:'H'},{es:'el vertedero',en:'landfill',emoji:'🗑️',tier:'H'},
    {es:'el agua potable',en:'drinking water',emoji:'💧',tier:'H'},{es:'la escasez',en:'scarcity/shortage',emoji:'⚠️',tier:'H'},
    {es:'el hambre',en:'hunger',emoji:'🍽️',tier:'H'},{es:'la guerra',en:'war',emoji:'⚔️',tier:'H'},
    {es:'la paz',en:'peace',emoji:'🕊️',tier:'F'},{es:'la ONG',en:'NGO/charity',emoji:'❤️',tier:'H'},
    {es:'concienciar',en:'to raise awareness',emoji:'📢',tier:'H'},{es:'el activismo',en:'activism',emoji:'✊',tier:'H'},
    {es:'reciclar',en:'to recycle',emoji:'♻️',tier:'F'},{es:'reducir',en:'to reduce',emoji:'⬇️',tier:'F'}
  ]},

  {id:'gcse_holidays_accommodation',spec:'both',tier:'foundation',
   aqaTheme:'Theme 3: Communication and the world around us',aqaTopic:'Topic 1: Travel and tourism',
   edxContext:'Travel and tourism',
   name:'Holidays & accommodation',icon:'🏖️',color:'#F39C12',
   words:[
    {es:'el camping',en:'campsite',emoji:'⛺',tier:'F'},{es:'el albergue juvenil',en:'youth hostel',emoji:'🏠',tier:'F'},
    {es:'el apartamento',en:'apartment',emoji:'🏢',tier:'F'},{es:'media pensión',en:'half board',emoji:'🍽️',tier:'H'},
    {es:'pensión completa',en:'full board',emoji:'🍽️🍽️',tier:'H'},{es:'la habitación individual',en:'single room',emoji:'🛏️',tier:'F'},
    {es:'la habitación doble',en:'double room',emoji:'🛏️🛏️',tier:'F'},{es:'quejarse',en:'to complain',emoji:'😤',tier:'H'},
    {es:'reclamar',en:'to claim/complain formally',emoji:'📝',tier:'H'},{es:'la recepción',en:'reception desk',emoji:'🏨',tier:'F'},
    {es:'hacer la maleta',en:'to pack a suitcase',emoji:'🧳',tier:'F'},{es:'el equipaje de mano',en:'hand luggage',emoji:'👜',tier:'H'},
    {es:'facturar',en:'to check in (bags)',emoji:'✈️',tier:'H'},{es:'la aduana',en:'customs',emoji:'🛃',tier:'H'},
    {es:'el seguro de viaje',en:'travel insurance',emoji:'🛡️',tier:'H'},{es:'la excursión',en:'excursion/trip',emoji:'🚌',tier:'F'},
    {es:'el crucero',en:'cruise',emoji:'🚢',tier:'H'},{es:'el bronceador',en:'suncream',emoji:'🧴',tier:'F'},
    {es:'perderse',en:'to get lost',emoji:'❓',tier:'H'},{es:'el guía turístico',en:'tour guide',emoji:'🗺️',tier:'H'}
  ]},

  {id:'gcse_school_pressures',spec:'both',tier:'higher',
   aqaTheme:'Theme 1: People and lifestyle',aqaTopic:'Topic 3: Education and work',
   edxContext:'Studying and my future',
   name:'School pressures & opinions',icon:'📊',color:'#C0392B',
   words:[
    {es:'la presión',en:'pressure',emoji:'😤',tier:'H'},{es:'el acoso escolar',en:'school bullying',emoji:'🚫',tier:'H'},
    {es:'el agotamiento',en:'exhaustion/burnout',emoji:'😓',tier:'H'},{es:'la motivación',en:'motivation',emoji:'💪',tier:'H'},
    {es:'el rendimiento',en:'performance/achievement',emoji:'📊',tier:'H'},{es:'el fracaso escolar',en:'school failure',emoji:'📉',tier:'H'},
    {es:'la igualdad de oportunidades',en:'equal opportunities',emoji:'⚖️',tier:'H'},{es:'el apoyo',en:'support',emoji:'🤝',tier:'F'},
    {es:'la beca',en:'scholarship/grant',emoji:'🎓',tier:'H'},{es:'el internado',en:'boarding school',emoji:'🏫',tier:'H'},
    {es:'la asistencia',en:'attendance',emoji:'✅',tier:'H'},{es:'faltar a clase',en:'to miss class',emoji:'🚪',tier:'H'},
    {es:'el suspenso',en:'fail grade',emoji:'❌',tier:'F'},{es:'la matrícula',en:'tuition fees/enrolment',emoji:'💰',tier:'H'},
    {es:'el intercambio',en:'exchange (programme)',emoji:'🔄',tier:'H'},{es:'el erasmus',en:'Erasmus programme',emoji:'🇪🇺',tier:'H'},
    {es:'el nivel',en:'level/standard',emoji:'📊',tier:'F'},{es:'mejorar',en:'to improve',emoji:'📈',tier:'F'},
    {es:'esforzarse',en:'to make an effort',emoji:'💪',tier:'H'},{es:'superar',en:'to overcome/surpass',emoji:'🏆',tier:'H'}
  ]},

  {id:'gcse_volunteering_community',spec:'edx',tier:'foundation',
   aqaTheme:'',aqaTopic:'',
   edxContext:'My neighbourhood',
   name:'Volunteering & community',icon:'🤝',color:'#27AE60',
   words:[
    {es:'el voluntariado',en:'voluntary work',emoji:'❤️',tier:'F'},{es:'ayudar',en:'to help',emoji:'🤝',tier:'F'},
    {es:'el refugio',en:'shelter',emoji:'🏠',tier:'H'},{es:'el banco de alimentos',en:'food bank',emoji:'🥫',tier:'H'},
    {es:'recaudar fondos',en:'to raise funds/money',emoji:'💰',tier:'H'},{es:'la donación',en:'donation',emoji:'💝',tier:'H'},
    {es:'el proyecto comunitario',en:'community project',emoji:'🏘️',tier:'H'},{es:'la organización benéfica',en:'charity',emoji:'❤️',tier:'H'},
    {es:'sensibilizar',en:'to raise awareness',emoji:'📢',tier:'H'},{es:'colaborar',en:'to collaborate',emoji:'🤝',tier:'H'},
    {es:'el ayuntamiento',en:'town hall/council',emoji:'🏛️',tier:'F'},{es:'el vecino / la vecina',en:'neighbour',emoji:'👥',tier:'F'},
    {es:'el barrio',en:'neighbourhood',emoji:'🏘️',tier:'F'},{es:'la asociación',en:'association/group',emoji:'👥',tier:'H'},
    {es:'la campaña',en:'campaign',emoji:'📢',tier:'H'},{es:'el ciudadano',en:'citizen',emoji:'🏛️',tier:'H'},
    {es:'el compromiso',en:'commitment',emoji:'✊',tier:'H'},{es:'dedicar tiempo',en:'to dedicate time',emoji:'⏰',tier:'H'},
    {es:'apoyar',en:'to support',emoji:'💪',tier:'F'},{es:'participar',en:'to participate',emoji:'🙋',tier:'F'}
  ]}
];

// ── AQA_THEMES ──
const AQA_THEMES = [
  {id:'t1',num:'1',name:'People and lifestyle',color:'#003087',
   topicIds:['gcse_identity','gcse_family','gcse_physical_appearance','gcse_health','gcse_education','gcse_school_pressures','gcse_work_future']},
  {id:'t2',num:'2',name:'Popular culture',color:'#8B1A2B',
   topicIds:['gcse_freetime','gcse_food_eating','gcse_music_film','gcse_sport_exercise','gcse_festivals','gcse_celebrity']},
  {id:'t3',num:'3',name:'Communication and the world around us',color:'#27AE60',
   topicIds:['gcse_travel','gcse_holidays_accommodation','gcse_town_directions','gcse_shopping_money','gcse_technology','gcse_environment','gcse_global_issues','gcse_future']}
];

// ── EDX_CONTEXTS ──
const EDX_CONTEXTS = [
  {id:'c1',num:'1',name:'My personal world',color:'#8B1A2B',
   topicIds:['gcse_identity','gcse_family','gcse_physical_appearance','gcse_festivals']},
  {id:'c2',num:'2',name:'Lifestyle and wellbeing',color:'#27AE60',
   topicIds:['gcse_health','gcse_freetime','gcse_food_eating','gcse_sport_exercise']},
  {id:'c3',num:'3',name:'My neighbourhood',color:'#546E7A',
   topicIds:['gcse_environment','gcse_neighbourhood','gcse_town_directions','gcse_shopping_money','gcse_volunteering_community']},
  {id:'c4',num:'4',name:'Media and technology',color:'#2980B9',
   topicIds:['gcse_technology','gcse_celebrity','gcse_music_film']},
  {id:'c5',num:'5',name:'Studying and my future',color:'#6D4C41',
   topicIds:['gcse_education','gcse_school_pressures','gcse_work_future','gcse_future']},
  {id:'c6',num:'6',name:'Travel and tourism',color:'#16A085',
   topicIds:['gcse_travel','gcse_holidays_accommodation']}
];

// ── AI_CHARACTERS ──
const AI_CHARACTERS=[
  {
    id:'pablo',
    name:'Pablo',
    emoji:'🧑‍🎓',
    age:11,
    location:'Madrid',
    color:'#5B2FCC',
    bg:'#F4F0FF',
    description:'A friendly Spanish boy your age who loves football and animals',
    systemPrompt:`You are Pablo, an 11-year-old boy from Madrid, Spain. You are friendly, enthusiastic and love football and animals. You are chatting with a KS2 student who is learning Spanish. Your job is to help them practise Spanish in a fun, supportive way.

RULES:
- Keep ALL your responses SHORT — maximum 2-3 sentences
- Use simple A1/A2 Spanish vocabulary appropriate for KS2
- Always respond primarily in Spanish, but add the English translation in brackets after each Spanish sentence so the student understands
- If the student writes in English, gently encourage them to try in Spanish and give them a starter phrase
- If the student makes a Spanish mistake, kindly correct it and show the right version
- Be warm, encouraging and use emojis occasionally
- Never use complex grammar
- Never use markdown formatting like *asterisks* or **bold** — plain text only
- If the student seems stuck, offer them 2-3 short phrases they could say next`,
    scenarios:[
      {id:'greet',title:'Say hello!',icon:'👋',starter:'¡Hola! Me llamo Pablo. ¿Cómo te llamas? (Hi! My name is Pablo. What is your name?)'},
      {id:'family',title:'Talk about family',icon:'👨‍👩‍👧‍👦',starter:'¡Hola! ¿Tienes hermanos o hermanas? (Hi! Do you have brothers or sisters?)'},
      {id:'animals',title:'Favourite animals',icon:'🐾',starter:'¡Hola! ¿Tienes un animal en casa? (Hi! Do you have a pet at home?)'},
      {id:'football',title:'Talk about football',icon:'⚽',starter:'¡Hola! ¿Te gusta el fútbol? Yo soy del Real Madrid. (Hi! Do you like football? I support Real Madrid.)'},
    ]
  },
  {
    id:'sofia',
    name:'Señora Sofía',
    emoji:'👩‍🏫',
    age:null,
    location:'Barcelona',
    color:'#00C9A7',
    bg:'#E0FAF4',
    description:'A kind Spanish teacher who helps you practise in class',
    systemPrompt:`You are Señora Sofía, a kind and patient Spanish teacher in Barcelona. You are helping a KS2 student practise their Spanish conversation. 

RULES:
- Keep ALL responses SHORT — maximum 2-3 sentences
- Use simple A1 Spanish with English translations in brackets after each Spanish phrase
- Praise effort warmly — say things like "¡Muy bien!" or "¡Excelente!"
- Ask simple questions to keep the conversation going
- If the student writes in English, give them the Spanish version and ask them to try
- Correct mistakes gently: "Almost! In Spanish we say..."
- Give sentence starters when the student is stuck
- Focus topics on school
- Never use markdown like *asterisks* or **bold** — plain text only, subjects, daily routine`,
    scenarios:[
      {id:'class',title:'Classroom chat',icon:'🏫',starter:'¡Buenos días! ¿Cómo estás hoy? (Good morning! How are you today?)'},
      {id:'subjects',title:'School subjects',icon:'📚',starter:'¿Cuál es tu asignatura favorita? (What is your favourite subject?)'},
      {id:'routine',title:'Daily routine',icon:'⏰',starter:'¿A qué hora te levantas por la mañana? (What time do you get up in the morning?)'},
      {id:'weather',title:'Talk about weather',icon:'🌤️',starter:'¡Hola! ¿Qué tiempo hace hoy donde vives? (Hi! What is the weather like today where you live?)'},
    ]
  },
  {
    id:'miguel',
    name:'Miguel',
    emoji:'👨‍🍳',
    age:null,
    location:'Seville',
    color:'#EF9F27',
    bg:'#FAEEDA',
    description:'A friendly café owner in Seville — order food and drinks!',
    systemPrompt:`You are Miguel, a friendly café owner in Seville, Spain. A KS2 student is visiting your café and practising ordering food and drinks in Spanish.

RULES:
- Keep ALL responses SHORT — 2-3 sentences max
- Play the role of a helpful waiter/café owner
- Use simple Spanish with English translations in brackets
- If they order correctly in Spanish, be enthusiastic: "¡Perfecto! / ¡Excelente elección!"
- If they order in English, say something like: "En español, puedes decir... (In Spanish, you can say...)" and give them the phrase
- Keep the menu simple: drinks (agua, zumo, leche, café), food (bocadillo, pizza, pastel, manzana)
- Tell them prices in Spanish
- Never use markdown like *asterisks* or **bold** — plain text only (e.g. "Son dos euros.")
- Be warm and Mediterranean in personality`,
    scenarios:[
      {id:'order',title:'Order a drink',icon:'🥤',starter:'¡Buenos días! Bienvenido a mi café. ¿Qué quieres beber? (Good morning! Welcome to my café. What would you like to drink?)'},
      {id:'food',title:'Order food',icon:'🍽️',starter:'¡Hola! ¿Tienes hambre? ¿Qué quieres comer hoy? (Hi! Are you hungry? What would you like to eat today?)'},
      {id:'full',title:'Full café visit',icon:'☕',starter:'¡Bienvenido! Tenemos bocadillos, zumos y pasteles. ¿Qué deseas? (Welcome! We have sandwiches, juices and cakes. What would you like?)'},
    ]
  },
  {
    id:'lucia',
    name:'Lucía',
    emoji:'🧒',
    age:10,
    location:'Valencia',
    color:'#E74C3C',
    bg:'#FDEDEC',
    description:'A Spanish girl who wants to be your penfriend',
    systemPrompt:`You are Lucía, a 10-year-old girl from Valencia, Spain. You are writing to a new penfriend who is learning Spanish. You love dancing, reading and the beach.

RULES:
- Keep ALL responses SHORT — 2-3 sentences max
- Write in simple Spanish with English translations in brackets
- Be curious and friendly — ask questions about the student's life
- Topics: hobbies, family, food, school, favourite things, Valencia/Spain
- If they write in English, encourage them: "¡Intenta en español! (Try in Spanish!) You could say..."
- Correct mistakes gently and encouragingly
- Use casual friendly language
- Never use markdown like *asterisks* or **bold** — plain text only like a real pen pal`,
    scenarios:[
      {id:'intro',title:'Introduce yourself',icon:'✉️',starter:'¡Hola amigo/a! Me llamo Lucía. Tengo diez años. ¿Y tú? (Hi friend! My name is Lucía. I am ten. And you?)'},
      {id:'hobbies',title:'Talk about hobbies',icon:'🎭',starter:'Me gusta mucho bailar y leer. ¿Qué te gusta hacer? (I really like dancing and reading. What do you like doing?)'},
      {id:'food',title:'Favourite foods',icon:'🍊',starter:'En Valencia comemos mucha paella y naranjas. ¿Cuál es tu comida favorita? (In Valencia we eat lots of paella and oranges. What is your favourite food?)'},
    ]
  }
];

// ── GCSE_AI_CHARACTERS ──
const GCSE_AI_CHARACTERS=[
  {
    id:'gcse_examiner',
    name:'Señor Vega',
    emoji:'🎙️',
    location:'GCSE Speaking Examiner',
    color:'#1a2744',
    bg:'#eef2ff',
    description:'Conducts your GCSE-style speaking exam — Photo card, Role play & General conversation',
    systemPrompt:`You are Señor Vega, a GCSE Spanish speaking examiner. You are conducting a formal speaking assessment with a GCSE student (aged 15-16) preparing for AQA or Edexcel exams.

RULES:
- Respond ONLY in Spanish — no English translations. This is exam practice.
- Keep responses to 2-3 sentences maximum.
- Ask follow-up questions to push for extended responses, just as a real examiner would.
- Use B1-level Spanish. Do not simplify vocabulary.
- If the student replies in English, say: "Por favor, intenta responder en español." and repeat the question.
- If the student makes a grammar mistake, note it briefly at the end in [brackets] so they can learn: e.g. [Nota: debería ser 'fui', no 'fue'].
- Push for opinions, reasons, and time frames: past, present, future.
- Never use markdown formatting like *asterisks* or **bold** — plain text only.
- Phrase types to elicit: "¿Por qué?", "¿Qué opinas de...?", "¿Qué harás en el futuro?", "¿Qué hiciste...?"`,
    scenarios:[
      {id:'photo_identity',title:'Photo card: Identity & relationships',icon:'🪪',
       starter:'Mira esta foto. ¿Qué ves en la foto? (Look at this photo. Imagine it shows two friends spending time together.) Describe lo que ves y lo que están haciendo las personas.'},
      {id:'photo_environment',title:'Photo card: Environment',icon:'🌍',
       starter:'Mira esta foto. Imagina que muestra un problema medioambiental en una ciudad. ¿Qué ves en la foto? Describe la situación y da tu opinión.'},
      {id:'roleplay_hotel',title:'Role play: At the hotel',icon:'🏨',
       starter:'Vamos a hacer un juego de rol. Tú eres un turista en un hotel en España. Yo soy el recepcionista. Hay un problema con tu habitación. Empieza la conversación.'},
      {id:'roleplay_restaurant',title:'Role play: At the restaurant',icon:'🍽️',
       starter:'Juego de rol: Estás en un restaurante en Madrid. Yo soy el camarero. Quieres pedir comida, preguntar sobre los ingredientes y pagar la cuenta. Empieza.'},
      {id:'convo_technology',title:'General conversation: Technology',icon:'💻',
       starter:'Háblame de tu uso de las redes sociales. ¿Cuánto tiempo pasas en internet cada día y qué opinas de las redes sociales?'},
      {id:'convo_environment',title:'General conversation: Environment',icon:'♻️',
       starter:'¿Qué haces tú para proteger el medio ambiente? ¿Crees que los jóvenes de hoy se preocupan suficientemente por el cambio climático?'},
      {id:'convo_future',title:'General conversation: Future plans',icon:'🎓',
       starter:'¿Qué planes tienes para el futuro? ¿Vas a ir a la universidad o prefieres trabajar directamente? ¿Por qué?'},
      {id:'convo_health',title:'General conversation: Health & lifestyle',icon:'🥗',
       starter:'¿Llevas una vida sana? Habla de tu dieta, el deporte que practicas y lo que haces para mantenerte en forma.'},
    ]
  },
  {
    id:'gcse_penpal',
    name:'Isabel',
    emoji:'🧑‍💻',
    location:'Bilbao, Spain',
    color:'#8B1A2B',
    bg:'#fdf2f4',
    description:'A Spanish student your age — chat naturally about GCSE topics in real Spanish',
    systemPrompt:`You are Isabel, a 16-year-old student from Bilbao, Spain. You are chatting with a British student who is preparing for GCSE Spanish. You are friendly, opinionated and curious.

RULES:
- Write ONLY in Spanish — no English translations. The student needs real immersion.
- Keep responses to 3-4 sentences. Be natural and conversational.
- Use B1 Spanish — contractions, opinions, casual register but no slang that would confuse.
- Ask genuine questions about the student's life, opinions, and experiences.
- Topics you know about: technology, music, sport, school life, environment, food, travel, films.
- If the student writes in English, reply: "¡Venga, en español!" and rephrase your last question simply.
- If they make a grammar error, incorporate the correct form naturally in your reply without explicitly flagging it.
- Never use markdown like *asterisks* or **bold** — plain text only.`,
    scenarios:[
      {id:'school',title:'School life',icon:'🏫',
       starter:'¡Hola! Soy Isabel. Estoy en el último año del instituto — ¡qué estrés los exámenes! ¿Cómo es tu colegio? ¿Qué asignaturas estudias?'},
      {id:'freetime',title:'Free time & hobbies',icon:'🎮',
       starter:'Hola, ¿qué haces en tu tiempo libre? Yo escucho mucha música y salgo con mis amigos los fines de semana. ¿Y tú?'},
      {id:'environment',title:'Environment & global issues',icon:'🌿',
       starter:'Oye, ¿qué opinas del cambio climático? En mi ciudad están intentando reducir el tráfico en el centro. ¿Hacéis algo así en tu ciudad?'},
      {id:'future',title:'Future plans',icon:'✈️',
       starter:'El año que viene termino el bachillerato. Quiero estudiar periodismo en la universidad. ¿Tú qué quieres hacer después del colegio?'},
    ]
  },
  {
    id:'gcse_shopkeeper',
    name:'Don Ramón',
    emoji:'🛍️',
    location:'Granada market',
    color:'#16A085',
    bg:'#e8f8f5',
    description:'A market trader in Granada — practise transactions, complaints and negotiation',
    systemPrompt:`You are Don Ramón, a market stallholder in Granada, Spain. A GCSE student is practising Spanish transactions with you. You sell clothes, souvenirs and food.

RULES:
- Respond ONLY in Spanish — no English. This is immersive GCSE role-play practice.
- Keep responses to 2-3 sentences.
- Use natural shopkeeper language: prices, sizes, colours, offers, complaints.
- If the student uses English, respond: "Lo siento, no hablo inglés muy bien. ¿Puede repetir en español?" 
- React naturally to what they say — if they complain about price, negotiate; if they ask for a different size, check stock.
- Useful phrases to model: "¿En qué le puedo ayudar?", "¿Qué talla busca?", "Le puedo ofrecer un descuento", "¿Tiene el recibo?", "Lo siento, no hay devoluciones".
- Never use markdown like *asterisks* or **bold** — plain text only.`,
    scenarios:[
      {id:'clothes',title:'Buying clothes',icon:'👕',
       starter:'¡Buenas tardes! ¿En qué le puedo ayudar? Tenemos una oferta especial hoy en camisetas y pantalones.'},
      {id:'complaint',title:'Making a complaint',icon:'😤',
       starter:'Bienvenido. ¿Qué le pasa? ¿Hay algún problema con lo que compró?'},
      {id:'souvenir',title:'Buying souvenirs',icon:'🎁',
       starter:'¡Hola! ¿Busca algo especial? Tenemos recuerdos típicos de Granada — cerámicas, abanicos, castañuelas...'},
    ]
  },
  {
    id:'gcse_doctor',
    name:'Dra. Morales',
    emoji:'👩‍⚕️',
    location:'Medical centre, Málaga',
    color:'#E74C3C',
    bg:'#fdf0f0',
    description:'A doctor in Málaga — describe symptoms, discuss health and lifestyle',
    systemPrompt:`You are Dra. Morales, a doctor at a medical centre in Málaga, Spain. A GCSE student is practising a medical role-play and health conversation with you.

RULES:
- Respond ONLY in Spanish. No English translations.
- Keep responses to 2-3 sentences.
- Ask about symptoms, duration, lifestyle choices.
- Give advice using the imperative or "debería + infinitive".
- React naturally: if they describe serious symptoms, suggest tests; if minor, give simple advice.
- Useful register: "¿Desde cuándo tiene estos síntomas?", "¿Tiene fiebre?", "Debería descansar más", "Le voy a recetar...".
- If student writes in English, reply: "Por favor, intente explicarlo en español. ¿Qué le duele?"
- Never use markdown like *asterisks* or **bold** — plain text only.`,
    scenarios:[
      {id:'illness',title:'Describing an illness',icon:'🤒',
       starter:'Buenos días. Siéntese, por favor. ¿Qué le pasa? ¿Cómo se encuentra hoy?'},
      {id:'lifestyle',title:'Lifestyle consultation',icon:'🏃',
       starter:'Vamos a hablar de su estilo de vida. ¿Come bien? ¿Hace ejercicio regularmente? ¿Duerme suficiente?'},
      {id:'injury',title:'Sports injury',icon:'🦵',
       starter:'Hola. Veo que viene usted con un problema físico. ¿Dónde le duele exactamente? ¿Cuándo ocurrió?'},
    ]
  }
];

// ── READINGS ──
const READINGS=[
  /* ── TOPIC-LINKED ── */
  {
    id:'animals_farm',title:'La granja',topic:'animals',level:'A1',
    type:'topic',icon:'🐾',
    text:`En la granja hay muchos animales. Hay una vaca grande y un caballo marrón. También hay un perro pequeño que se llama Spot. El gato duerme en el sol. Los conejos juegan en el jardín. ¡Me gustan mucho los animales de la granja!`,
    vocab:[{es:'la granja',en:'the farm'},{es:'duerme',en:'sleeps'},{es:'juegan',en:'play'},{es:'el sol',en:'the sun'}],
    questions:[
      {type:'mc',q:'What colour is the horse?',opts:['Black','Brown','White','Grey'],correct:1},
      {type:'tf',q:'The cat plays in the garden.',correct:false,explanation:'The cat sleeps in the sun.'},
      {type:'tf',q:'The dog is called Spot.',correct:true,explanation:'The text says "se llama Spot".'},
      {type:'fill',q:'The _____ sleeps in the sun.',answer:'cat',hint:'gato'},
      {type:'mc',q:'Where do the rabbits play?',opts:['In the house','In the field','In the garden','On the farm'],correct:2}
    ]
  },
  {
    id:'food_cafe',title:'En el café',topic:'food',level:'A1',
    type:'topic',icon:'🍽️',
    text:`María va al café con su madre. Pide un zumo de naranja y un bocadillo de queso. Su madre toma un café y una manzana. El bocadillo es muy rico. María bebe el zumo rápidamente. ¡Tiene mucha hambre!`,
    vocab:[{es:'pide',en:'orders'},{es:'toma',en:'has/takes'},{es:'rico',en:'delicious'},{es:'hambre',en:'hunger'}],
    questions:[
      {type:'mc',q:'What does María order to drink?',opts:['Water','Milk','Orange juice','Coffee'],correct:2},
      {type:'tf',q:'María orders a ham sandwich.',correct:false,explanation:'She orders a cheese sandwich (bocadillo de queso).'},
      {type:'fill',q:'María drinks the juice ___________.',answer:'quickly',hint:'rápidamente'},
      {type:'mc',q:'What does María\'s mother eat?',opts:['A sandwich','A banana','A pizza','An apple'],correct:3},
      {type:'tf',q:'María is very hungry.',correct:true,explanation:'The text says "¡Tiene mucha hambre!"'}
    ]
  },
  {
    id:'weather_day',title:'El tiempo hoy',topic:'weather',level:'A1',
    type:'topic',icon:'🌤️',
    text:`Hoy hace mucho sol en Madrid. No hay nubes en el cielo. Hace calor — ¡treinta grados! Los niños juegan en el parque. Pero mañana va a llover. Va a haber tormenta por la tarde. ¡Qué pena!`,
    vocab:[{es:'el cielo',en:'the sky'},{es:'grados',en:'degrees'},{es:'mañana',en:'tomorrow'},{es:'qué pena',en:'what a shame'}],
    questions:[
      {type:'mc',q:'Where is it sunny today?',opts:['Barcelona','Seville','Madrid','Valencia'],correct:2},
      {type:'tf',q:'It is 13 degrees today.',correct:false,explanation:'It is 30 degrees (treinta grados).'},
      {type:'fill',q:'Tomorrow it is going to ______.',answer:'rain',hint:'llover'},
      {type:'tf',q:'There will be a storm in the afternoon.',correct:true,explanation:'"Va a haber tormenta por la tarde."'},
      {type:'mc',q:'What are the children doing?',opts:['Swimming','Playing in the park','Sleeping','Watching TV'],correct:1}
    ]
  },
  {
    id:'family_home',title:'Mi familia',topic:'family',level:'A1',
    type:'topic',icon:'👨‍👩‍👧‍👦',
    text:`Me llamo Sofía y tengo once años. Vivo con mi madre, mi padre y mi hermano pequeño. Mi hermano se llama Pablo y tiene ocho años. Mi abuela vive cerca de nuestra casa. Los domingos comemos juntos en casa de mi abuela. ¡Es mi día favorito!`,
    vocab:[{es:'tengo',en:'I have/I am (age)'},{es:'vivo',en:'I live'},{es:'cerca',en:'nearby'},{es:'juntos',en:'together'}],
    questions:[
      {type:'mc',q:'How old is Sofía?',opts:['8','9','10','11'],correct:3},
      {type:'tf',q:'Sofía has a younger brother.',correct:true,explanation:'Pablo is 8 and Sofía is 11.'},
      {type:'fill',q:'Her brother is called ______.',answer:'Pablo',hint:'se llama...'},
      {type:'mc',q:'When do they eat at grandma\'s house?',opts:['Saturdays','Fridays','Sundays','Every day'],correct:2},
      {type:'tf',q:'Grandma lives far away.',correct:false,explanation:'"Mi abuela vive cerca" — grandma lives nearby.'}
    ]
  },
  {
    id:'classroom_day',title:'Un día en el colegio',topic:'classroom',level:'A1',
    type:'topic',icon:'🏫',
    text:`En mi clase hay veinte alumnos. Tenemos muchos libros y lápices. Mi profesora se llama señora García. Hoy estudiamos matemáticas y español. En mi mochila tengo mi libro, mi bolígrafo y mi regla. Me gusta mucho el español.`,
    vocab:[{es:'alumnos',en:'pupils'},{es:'estudiamos',en:'we study'},{es:'mi profesora',en:'my teacher (female)'},{es:'la mochila',en:'the backpack'}],
    questions:[
      {type:'mc',q:'How many pupils are in the class?',opts:['10','15','20','25'],correct:2},
      {type:'tf',q:'The teacher is called Mrs García.',correct:true,explanation:'"Mi profesora se llama señora García."'},
      {type:'fill',q:'Today they study maths and ______.',answer:'Spanish',hint:'español'},
      {type:'mc',q:'What is NOT mentioned as being in the backpack?',opts:['Book','Pen','Ruler','Scissors'],correct:3},
      {type:'tf',q:'The narrator dislikes Spanish.',correct:false,explanation:'"Me gusta mucho el español" — I really like Spanish.'}
    ]
  },
  /* ── STANDALONE ── */
  {
    id:'postcard_spain',title:'Una postal de España',topic:null,level:'A1',
    type:'standalone',icon:'📮',
    text:`¡Hola Ana! Estoy en Barcelona con mi familia. Hace mucho calor aquí — ¡treinta y cinco grados! Hoy visitamos la Sagrada Familia. Es muy bonita. Comemos paella todos los días. ¡Está riquísima! Mañana vamos a la playa. Un abrazo, Luisa.`,
    vocab:[{es:'visitamos',en:'we visit'},{es:'bonita',en:'beautiful'},{es:'todos los días',en:'every day'},{es:'un abrazo',en:'a hug'}],
    questions:[
      {type:'mc',q:'Where is Luisa writing from?',opts:['Madrid','Seville','Valencia','Barcelona'],correct:3},
      {type:'tf',q:'It is cold in Barcelona.',correct:false,explanation:'It is 35 degrees — very hot!'},
      {type:'fill',q:'They eat paella ________________.',answer:'every day',hint:'todos los días'},
      {type:'mc',q:'Where are they going tomorrow?',opts:['The mountains','The museum','The beach','The restaurant'],correct:2},
      {type:'tf',q:'Luisa thinks the Sagrada Familia is beautiful.',correct:true,explanation:'"Es muy bonita."'}
    ]
  },
  {
    id:'dialogue_shop',title:'En la tienda',topic:null,level:'A1',
    type:'standalone',icon:'🛍️',
    text:`— Buenos días. ¿Puedo ayudarle?\n— Sí, busco una camiseta roja.\n— ¿Qué talla?\n— Talla mediana, por favor.\n— Aquí tiene. Cuesta doce euros.\n— ¿Tiene en azul también?\n— Sí, claro. Aquí está.\n— Perfecto. Me llevo la azul. Gracias.\n— De nada. ¡Hasta luego!`,
    vocab:[{es:'busco',en:'I am looking for'},{es:'la talla',en:'the size'},{es:'cuesta',en:'it costs'},{es:'me llevo',en:'I\'ll take'}],
    questions:[
      {type:'mc',q:'What is the customer looking for?',opts:['Blue trousers','A red T-shirt','A blue coat','Red shoes'],correct:1},
      {type:'tf',q:'The T-shirt costs twenty euros.',correct:false,explanation:'It costs twelve euros (doce euros).'},
      {type:'fill',q:'The customer asks for size ______.',answer:'medium',hint:'mediana'},
      {type:'mc',q:'Which colour does the customer buy?',opts:['Red','Green','White','Blue'],correct:3},
      {type:'tf',q:'The shop also has the item in blue.',correct:true,explanation:'"Sí, claro. Aquí está."'}
    ]
  },
  {
    id:'letter_penpal',title:'Una carta de mi amigo',topic:null,level:'A1',
    type:'standalone',icon:'✉️',
    text:`¡Hola! Me llamo Carlos y tengo doce años. Vivo en Sevilla, en el sur de España. Me gustan mucho los deportes — juego al fútbol todos los sábados. También me gusta escuchar música y leer libros. Mi asignatura favorita es las ciencias. ¿Y tú? ¿Cuáles son tus pasatiempos? Un saludo, Carlos.`,
    vocab:[{es:'el sur',en:'the south'},{es:'los deportes',en:'sports'},{es:'la asignatura',en:'the subject'},{es:'los pasatiempos',en:'hobbies'}],
    questions:[
      {type:'mc',q:'How old is Carlos?',opts:['10','11','12','13'],correct:2},
      {type:'tf',q:'Carlos lives in northern Spain.',correct:false,explanation:'Sevilla is in the south (el sur) of Spain.'},
      {type:'fill',q:'Carlos plays football every ________.',answer:'Saturday',hint:'sábados'},
      {type:'mc',q:'What is Carlos\'s favourite subject?',opts:['Maths','Spanish','PE','Science'],correct:3},
      {type:'tf',q:'Carlos asks about the reader\'s hobbies.',correct:true,explanation:'"¿Cuáles son tus pasatiempos?"'}
    ]
  }
];

// ── GCSE_SB_SENTENCES ──
const GCSE_SB_SENTENCES = {
  1:[
    {en:'In my opinion, the environment is very important',es:['En','mi','opinión','el','medio','ambiente','es','muy','importante'],distractors:['opinamos','la','interesante','un','bastante']},
    {en:'I used to play football every weekend',es:['Antes','jugaba','al','fútbol','todos','los','fines','de','semana'],distractors:['juego','jugué','cada','el','siempre']},
    {en:'My favourite subject is science because it is interesting',es:['Mi','asignatura','favorita','es','las','ciencias','porque','es','interesante'],distractors:['favorito','los','aburrida','la','ciencia']},
    {en:'I get on well with my family',es:['Me','llevo','bien','con','mi','familia'],distractors:['lleva','bueno','tu','mal','la']},
    {en:'There is a lot of pollution in big cities',es:['Hay','mucha','contaminación','en','las','ciudades','grandes'],distractors:['muchos','el','pequeñas','grande','una']},
    {en:'I would like to travel to South America',es:['Me','gustaría','viajar','a','América','del','Sur'],distractors:['gusta','viajo','por','la','Norte']},
    {en:'Healthy eating is essential for young people',es:['La','alimentación','sana','es','esencial','para','los','jóvenes'],distractors:['El','los','importantes','un','saludable']},
    {en:'Social media can be dangerous for teenagers',es:['Las','redes','sociales','pueden','ser','peligrosas','para','los','adolescentes'],distractors:['Los','puede','peligroso','la','jóvenes']}
  ],
  2:[
    {en:'Last summer I went to Spain with my family',es:['El','verano','pasado','fui','a','España','con','mi','familia'],distractors:['La','pasada','fue','por','tu']},
    {en:'When I was young I used to live in the countryside',es:['Cuando','era','joven','vivía','en','el','campo'],distractors:['fui','viví','la','pequeño','ciudad']},
    {en:'In the future I would like to be a doctor',es:['En','el','futuro','me','gustaría','ser','médico'],distractors:['la','voy','seré','sería','enfermero']},
    {en:'I think that we should protect the environment',es:['Creo','que','debemos','proteger','el','medio','ambiente'],distractors:['Pienso','debería','defender','la','naturaleza']},
    {en:'Although I like technology I prefer reading books',es:['Aunque','me','gusta','la','tecnología','prefiero','leer','libros'],distractors:['Si','gustaba','el','prefería','revistas']},
    {en:'The food was delicious and the service was excellent',es:['La','comida','estaba','deliciosa','y','el','servicio','era','excelente'],distractors:['El','fue','rica','la','malo']},
    {en:'It is important that young people exercise regularly',es:['Es','importante','que','los','jóvenes','hagan','ejercicio','regularmente'],distractors:['esencial','los','adolescentes','hacen','frecuentemente']},
    {en:'I booked a double room for three nights',es:['Reservé','una','habitación','doble','para','tres','noches'],distractors:['individual','dos','días','alquilé','por']}
  ],
  3:[
    {en:'If I had more money I would travel around the world',es:['Si','tuviera','más','dinero','viajaría','por','todo','el','mundo'],distractors:['tendría','mucho','recorrería','en','la']},
    {en:'It is essential that we reduce our carbon footprint',es:['Es','esencial','que','reduzcamos','nuestra','huella','de','carbono'],distractors:['importante','reducemos','nuestro','el','emisiones']},
    {en:'Not only is it expensive but it is also bad for the environment',es:['No','solo','es','caro','sino','que','también','es','malo','para','el','medio','ambiente'],distractors:['sólo','fue','cuesta','pero','perjudicial']},
    {en:'Despite this the unemployment rate continues to rise',es:['A','pesar','de','esto','la','tasa','de','desempleo','sigue','aumentando'],distractors:['Sin','embargo','el','paro','creciendo']},
    {en:'From my point of view renewable energies are the solution',es:['Desde','mi','punto','de','vista','las','energías','renovables','son','la','solución'],distractors:['opinión','el','los','serán','respuesta']},
    {en:'The more we recycle the better it is for future generations',es:['Cuanto','más','reciclemos','mejor','será','para','las','generaciones','futuras'],distractors:['Cuando','mucho','recicle','las','siguiente']},
    {en:'I would have studied harder if the exam had been more difficult',es:['Habría','estudiado','más','si','el','examen','hubiera','sido','más','difícil'],distractors:['habría','haber','fuera','sido','el']},
    {en:'In conclusion we must take action to combat climate change',es:['En','conclusión','debemos','tomar','medidas','para','combatir','el','cambio','climático'],distractors:['resumen','tomamos','acciones','la','calentamiento']}
  ],
  4:[
    {en:'It cannot be denied that social media has transformed the way we communicate',es:['No','cabe','duda','de','que','las','redes','sociales','han','transformado','la','forma','de','comunicarnos'],distractors:['puede','el','los','cambiado','comunicar']},
    {en:'Had the government invested more in education the results would have been better',es:['Si','el','gobierno','hubiera','invertido','más','en','educación','los','resultados','habrían','sido','mejores'],distractors:['habría','invertir','la','el','resultados']},
    {en:'It is worth noting that inequality continues to be a serious problem in society',es:['Cabe','destacar','que','la','desigualdad','sigue','siendo','un','problema','grave','en','la','sociedad'],distractors:['señalar','el','los','continúa','serio']},
    {en:'In the long term renewable energies will replace fossil fuels completely',es:['A','largo','plazo','las','energías','renovables','reemplazarán','a','los','combustibles','fósiles','por','completo'],distractors:['corto','los','reemplazará','el','totalmente']},
    {en:'More and more young people are using social media to raise awareness of global issues',es:['Cada','vez','más','jóvenes','utilizan','las','redes','sociales','para','concienciar','sobre','los','problemas','globales'],distractors:['veces','adolescentes','usan','el','mundiales']},
    {en:'Although unemployment has fallen living costs have risen considerably',es:['Aunque','el','desempleo','ha','bajado','el','coste','de','la','vida','ha','subido','considerablemente'],distractors:['el','paro','disminuido','la','bastante']}
  ]
};

// ── GCSE_READINGS ──
const GCSE_READINGS = [
  /* ── FOUNDATION TIER ── */
  {
    id:'gcse_identity_read',title:'Mi identidad',tier:'foundation',level:'B1',
    theme:'People and lifestyle',icon:'👤',type:'topic',
    text:`Me llamo Alejandro y tengo dieciséis años. Soy español pero vivo en Londres desde hace cinco años. Me considero una persona trabajadora y bastante simpática. Me llevo bien con mis amigos, aunque a veces discuto con mi hermano mayor. En mi tiempo libre me gusta escuchar música y jugar al baloncesto. Creo que es importante tener buenas relaciones con la familia y los amigos porque nos apoyan en los momentos difíciles.`,
    vocab:[{es:'me considero',en:'I consider myself'},{es:'a veces',en:'sometimes'},{es:'apoyan',en:'they support'},{es:'los momentos difíciles',en:'difficult times'}],
    questions:[
      {type:'mc',q:'How long has Alejandro lived in London?',opts:['3 years','5 years','7 years','10 years'],correct:1},
      {type:'tf',q:'Alejandro always gets on well with his brother.',correct:false,explanation:'"a veces discuto con mi hermano" — he sometimes argues with his brother.'},
      {type:'mc',q:'What does Alejandro do in his free time?',opts:['Plays football and reads','Listens to music and plays basketball','Watches TV and draws','Cycles and swims'],correct:1},
      {type:'fill',q:'Alejandro thinks it is important to have good __________ with family and friends.',answer:'relationships',hint:'relaciones'},
      {type:'mc',q:'How does Alejandro describe himself?',opts:['Lazy and shy','Selfish and ambitious','Hardworking and friendly','Creative and generous'],correct:2}
    ]
  },
  {
    id:'gcse_health_read',title:'Vivir sano',tier:'foundation',level:'B1',
    theme:'People and lifestyle',icon:'🥗',type:'topic',
    text:`Cada vez más jóvenes se preocupan por su salud. Muchos practican deporte regularmente y tratan de comer una dieta equilibrada. Sin embargo, el estrés de los exámenes puede ser muy perjudicial. Algunos estudiantes duermen poco y beben demasiadas bebidas energéticas. Los médicos recomiendan dormir al menos ocho horas y evitar el alcohol y el tabaco. En mi opinión, el bienestar mental es tan importante como la salud física.`,
    vocab:[{es:'se preocupan',en:'worry about'},{es:'perjudicial',en:'harmful'},{es:'al menos',en:'at least'},{es:'evitar',en:'to avoid'}],
    questions:[
      {type:'mc',q:'What do many young people try to do?',opts:['Sleep more','Eat a balanced diet and exercise','Avoid sport','Study less'],correct:1},
      {type:'tf',q:'Exam stress can be harmful to health.',correct:true,explanation:'"el estrés de los exámenes puede ser muy perjudicial"'},
      {type:'fill',q:'Doctors recommend sleeping at least ______ hours.',answer:'eight',hint:'ocho'},
      {type:'mc',q:'What do some students drink too much of?',opts:['Coffee','Alcohol','Energy drinks','Water'],correct:2},
      {type:'tf',q:'The writer thinks physical health is more important than mental health.',correct:false,explanation:'They say mental wellbeing is as important as physical health.'}
    ]
  },
  {
    id:'gcse_environment_read',title:'El medio ambiente',tier:'foundation',level:'B1',
    theme:'Communication and the world around us',icon:'🌍',type:'topic',
    text:`El cambio climático es uno de los problemas más graves del siglo veintiuno. La contaminación del aire y el calentamiento global afectan a todos los países del mundo. En España, las sequías son cada vez más frecuentes y los veranos son más calurosos. Para combatir este problema, es necesario reducir las emisiones de carbono y usar energías renovables como la energía solar y la eólica. Los gobiernos deben tomar medidas urgentes, pero los ciudadanos también pueden ayudar reciclando y usando el transporte público.`,
    vocab:[{es:'las sequías',en:'droughts'},{es:'calurosos',en:'hot'},{es:'las emisiones',en:'emissions'},{es:'eólica',en:'wind (energy)'}],
    questions:[
      {type:'mc',q:'Which problem does the text say is one of the most serious of the 21st century?',opts:['Poverty','Climate change','Unemployment','Immigration'],correct:1},
      {type:'tf',q:'Droughts in Spain are becoming less common.',correct:false,explanation:'"las sequías son cada vez más frecuentes" — droughts are more and more frequent.'},
      {type:'mc',q:'What two renewable energies are mentioned?',opts:['Solar and tidal','Wind and hydroelectric','Solar and wind','Nuclear and solar'],correct:2},
      {type:'fill',q:'Citizens can help by recycling and using ____________.',answer:'public transport',hint:'el transporte público'},
      {type:'mc',q:'Who does the text say must take urgent action?',opts:['Citizens','Young people','Governments','Scientists'],correct:2}
    ]
  },
  {
    id:'gcse_travel_read',title:'Las vacaciones',tier:'foundation',level:'B1',
    theme:'Communication and the world around us',icon:'✈️',type:'topic',
    text:`Este verano, mi familia y yo fuimos de vacaciones a Málaga, en el sur de España. Reservamos un apartamento cerca de la playa con antelación porque en julio hay muchísimos turistas. El primer día visitamos el centro histórico y comimos en un restaurante local. La comida estaba riquísima — pedimos gazpacho y pescado frito. Por desgracia, el tercer día perdí mi pasaporte y tuvimos que ir a la embajada. ¡Fue muy estresante! Pero en general, fue un viaje inolvidable.`,
    vocab:[{es:'con antelación',en:'in advance'},{es:'el centro histórico',en:'old town'},{es:'por desgracia',en:'unfortunately'},{es:'la embajada',en:'the embassy'}],
    questions:[
      {type:'mc',q:'Where did the writer go on holiday?',opts:['Madrid','Barcelona','Málaga','Sevilla'],correct:2},
      {type:'tf',q:'They booked the apartment last minute.',correct:false,explanation:'"Reservamos... con antelación" — they booked in advance.'},
      {type:'fill',q:'On the first day they visited the ____________.',answer:'old town',hint:'centro histórico'},
      {type:'mc',q:'What problem did they have on the third day?',opts:['They missed their flight','They lost their passport','They got food poisoning','The hotel was full'],correct:1},
      {type:'tf',q:'Despite the problem, the writer enjoyed the holiday.',correct:true,explanation:'"fue un viaje inolvidable" — it was an unforgettable trip.'}
    ]
  },
  /* ── HIGHER TIER ── */
  {
    id:'gcse_social_read',title:'Las redes sociales: ¿beneficio o riesgo?',tier:'higher',level:'B2',
    theme:'Popular culture',icon:'📱',type:'standalone',
    text:`Las redes sociales forman parte de la vida cotidiana de millones de jóvenes. Por un lado, permiten mantenerse en contacto con amigos y familiares, además de ser una fuente de información y entretenimiento. Sin embargo, cada vez son más los expertos que advierten sobre los peligros del uso excesivo: el acoso en línea, la adicción y los efectos negativos sobre la salud mental. Varios estudios han demostrado que los adolescentes que pasan más de tres horas diarias en redes sociales son más propensos a sufrir ansiedad y depresión. No cabe duda de que las redes sociales han transformado la comunicación, pero es fundamental que los jóvenes aprendan a usarlas de forma responsable.`,
    vocab:[{es:'la vida cotidiana',en:'daily life'},{es:'advierten',en:'warn'},{es:'propensos',en:'prone to'},{es:'el acoso en línea',en:'cyberbullying'}],
    questions:[
      {type:'mc',q:'What is one positive aspect of social media mentioned?',opts:['It improves exam results','It keeps people in contact with friends','It reduces stress','It helps people sleep'],correct:1},
      {type:'tf',q:'Experts agree social media is purely beneficial.',correct:false,explanation:'Experts warn about dangers including cyberbullying and mental health effects.'},
      {type:'mc',q:'According to studies, how many hours daily increases the risk of anxiety?',opts:['1 hour','2 hours','3 hours','5 hours'],correct:2},
      {type:'fill',q:'The writer says young people must learn to use social media ____________.',answer:'responsibly',hint:'de forma responsable'},
      {type:'mc',q:'Which mental health issues are mentioned?',opts:['Stress and insomnia','Anxiety and depression','Loneliness and anger','Eating disorders and stress'],correct:1}
    ]
  },
  {
    id:'gcse_future_read',title:'El trabajo del futuro',tier:'higher',level:'B2',
    theme:'People and lifestyle',icon:'🚀',type:'standalone',
    text:`Según los expertos, la inteligencia artificial va a transformar el mercado laboral de manera radical en las próximas décadas. Se estima que hasta el cuarenta por ciento de los empleos actuales podrían ser automatizados. Esto genera incertidumbre entre los jóvenes que están eligiendo sus carreras. No obstante, los especialistas señalan que surgirán nuevos empleos relacionados con la tecnología, el medio ambiente y los servicios sociales. Es posible que en el futuro la jornada laboral sea más corta y que el trabajo en remoto sea la norma. Lo que sí es seguro es que la formación continua será imprescindible para adaptarse a los cambios del mercado laboral.`,
    vocab:[{es:'el mercado laboral',en:'job market'},{es:'automatizados',en:'automated'},{es:'surgirán',en:'will emerge'},{es:'la jornada laboral',en:'working day'}],
    questions:[
      {type:'mc',q:'What percentage of jobs could be automated?',opts:['20%','30%','40%','50%'],correct:2},
      {type:'tf',q:'Experts say no new jobs will be created.',correct:false,explanation:'New jobs related to technology, environment and social services will emerge.'},
      {type:'fill',q:'In the future the working day may be ____________.',answer:'shorter',hint:'más corta'},
      {type:'mc',q:'What does the text say will be essential?',opts:['Learning a language','Moving abroad','Continuous training','Starting a business'],correct:2},
      {type:'tf',q:'Young people feel uncertain about their career choices because of AI.',correct:true,explanation:'"Esto genera incertidumbre entre los jóvenes que están eligiendo sus carreras."'}
    ]
  },
  {
    id:'gcse_global_read',title:'La desigualdad global',tier:'higher',level:'B2',
    theme:'Communication and the world around us',icon:'🌏',type:'standalone',
    text:`A pesar de los avances tecnológicos y económicos de las últimas décadas, la desigualdad entre países ricos y pobres sigue siendo uno de los mayores retos de nuestro tiempo. Millones de personas en el mundo en desarrollo carecen de acceso a agua potable, atención médica y educación de calidad. Las organizaciones no gubernamentales trabajan incansablemente para mejorar estas condiciones, pero sus esfuerzos no son suficientes sin el compromiso de los gobiernos y las empresas multinacionales. Cabe destacar que el comercio justo y la inversión en infraestructuras pueden marcar una diferencia significativa. En definitiva, la solidaridad internacional no es solo una cuestión moral sino también una necesidad económica.`,
    vocab:[{es:'carecen de',en:'lack'},{es:'incansablemente',en:'tirelessly'},{es:'el compromiso',en:'commitment'},{es:'marcar una diferencia',en:'to make a difference'}],
    questions:[
      {type:'mc',q:'What does the text say people in developing countries lack?',opts:['Jobs and housing','Clean water, healthcare and education','Electricity and transport','Food and clothing'],correct:1},
      {type:'tf',q:'NGOs alone can solve global inequality.',correct:false,explanation:'Their efforts are not enough without commitment from governments and multinationals.'},
      {type:'mc',q:'What two things does the text say can make a significant difference?',opts:['Aid and charity','Fair trade and infrastructure investment','Technology and education','Tourism and trade'],correct:1},
      {type:'fill',q:'The writer says international solidarity is not just a moral issue but also an __________ necessity.',answer:'economic',hint:'económica'},
      {type:'tf',q:'Global inequality has disappeared due to technological advances.',correct:false,explanation:'Despite advances, inequality "sigue siendo uno de los mayores retos" — remains one of the biggest challenges.'}
    ]
  }
];


// ── GCSE_LISTENINGS ──
// Listening practice for GCSE. Audio uses the same Google Translate TTS pipeline
// as the rest of the app — synthesised voice, not real recordings. Slower than
// real-exam pace but builds the same skills: vocabulary recognition, gap-fill
// discipline, and the habit of answering on a limited number of replays.
//
// Schema:
//   id, title, tier ('foundation' | 'higher'), theme, icon, level,
//   speaker (description shown in UI, e.g. 'Spanish student, age 16'),
//   script (the Spanish text fed to TTS),
//   transcript (same as script — kept separate so we could swap in
//               a manual transcript later if we record real audio),
//   replayLimit (default 2 — matches real exam),
//   questions[] — same shape as GCSE_READINGS plus optional `audioSegment`
//                 for matching tasks (not used yet)
const GCSE_LISTENINGS = [
  /* ── FOUNDATION TIER ── */
  {
    id:'gcse_listen_school',
    title:'Mi instituto',
    tier:'foundation',
    level:'B1',
    theme:'Communication and the world around us',
    icon:'🏫',
    speaker:'Lucía, 15, talks about her school in Salamanca',
    replayLimit:2,
    script:'Hola, me llamo Lucía y voy a un instituto en Salamanca. Las clases empiezan a las ocho y media y terminan a las tres. Mi asignatura favorita es el inglés porque la profesora es muy simpática y las clases son interesantes. No me gustan las matemáticas porque son aburridas y difíciles. Durante el recreo, normalmente como un bocadillo con mis amigas en el patio. Después de las clases, voy a un club de teatro los martes y los jueves.',
    transcript:'Hola, me llamo Lucía y voy a un instituto en Salamanca. Las clases empiezan a las ocho y media y terminan a las tres. Mi asignatura favorita es el inglés porque la profesora es muy simpática y las clases son interesantes. No me gustan las matemáticas porque son aburridas y difíciles. Durante el recreo, normalmente como un bocadillo con mis amigas en el patio. Después de las clases, voy a un club de teatro los martes y los jueves.',
    questions:[
      {type:'mc',q:'What time do classes START?',opts:['8:00','8:15','8:30','9:00'],correct:2},
      {type:'mc',q:'What is Lucía\'s favourite subject?',opts:['Spanish','English','Maths','Drama'],correct:1},
      {type:'mc',q:'Why does Lucía dislike maths?',opts:['Bad teacher','Boring and difficult','Too easy','No friends in the class'],correct:1},
      {type:'tf',q:'Lucía eats lunch in the cafeteria.',correct:false,explanation:'"en el patio" — in the playground/courtyard.'},
      {type:'fill',q:'Lucía goes to a __________ club on Tuesdays and Thursdays.',answer:'drama',hint:'teatro'}
    ]
  },
  {
    id:'gcse_listen_weekend',
    title:'El fin de semana',
    tier:'foundation',
    level:'B1',
    theme:'My personal world',
    icon:'🎉',
    speaker:'Marcos, 16, describes his weekend in Madrid',
    replayLimit:2,
    script:'El sábado pasado fue genial. Por la mañana fui al parque con mi hermano y jugamos al fútbol durante dos horas. Después comimos en un restaurante mexicano con nuestros padres. La comida estaba muy rica pero un poco picante. Por la tarde, vi una película en el cine con mi mejor amigo. Era una película de acción y nos gustó mucho. El domingo no hice mucho porque tenía que estudiar para un examen de ciencias.',
    transcript:'El sábado pasado fue genial. Por la mañana fui al parque con mi hermano y jugamos al fútbol durante dos horas. Después comimos en un restaurante mexicano con nuestros padres. La comida estaba muy rica pero un poco picante. Por la tarde, vi una película en el cine con mi mejor amigo. Era una película de acción y nos gustó mucho. El domingo no hice mucho porque tenía que estudiar para un examen de ciencias.',
    questions:[
      {type:'mc',q:'How long did Marcos play football?',opts:['One hour','Two hours','Three hours','All morning'],correct:1},
      {type:'mc',q:'What type of restaurant did they eat at?',opts:['Italian','Spanish','Mexican','Chinese'],correct:2},
      {type:'tf',q:'Marcos found the food too sweet.',correct:false,explanation:'"un poco picante" — a little spicy, not sweet.'},
      {type:'mc',q:'What kind of film did he watch?',opts:['Comedy','Romance','Action','Horror'],correct:2},
      {type:'fill',q:'Marcos had to study for a __________ exam on Sunday.',answer:'science',hint:'ciencias'}
    ]
  },
  /* ── HIGHER TIER ── */
  {
    id:'gcse_listen_environment',
    title:'El medio ambiente',
    tier:'higher',
    level:'B2',
    theme:'Communication and the world around us',
    icon:'🌍',
    speaker:'Elena, university student, discusses environmental concerns',
    replayLimit:2,
    script:'Estoy bastante preocupada por el medio ambiente. Creo que el problema más grave es el cambio climático, aunque la contaminación del aire en las ciudades grandes también me preocupa muchísimo. Para hacer mi parte, intento reciclar todo lo que puedo y voy en bicicleta a la universidad en vez de coger el autobús. Sin embargo, pienso que los gobiernos deberían hacer mucho más. Si todos colaboráramos, podríamos salvar el planeta para las generaciones futuras.',
    transcript:'Estoy bastante preocupada por el medio ambiente. Creo que el problema más grave es el cambio climático, aunque la contaminación del aire en las ciudades grandes también me preocupa muchísimo. Para hacer mi parte, intento reciclar todo lo que puedo y voy en bicicleta a la universidad en vez de coger el autobús. Sin embargo, pienso que los gobiernos deberían hacer mucho más. Si todos colaboráramos, podríamos salvar el planeta para las generaciones futuras.',
    questions:[
      {type:'mc',q:'What does Elena consider the MOST serious problem?',opts:['Air pollution','Climate change','Plastic waste','Deforestation'],correct:1},
      {type:'tf',q:'Elena thinks individual action is enough to solve the problem.',correct:false,explanation:'She says "los gobiernos deberían hacer mucho más" — governments should do more.'},
      {type:'mc',q:'How does Elena get to university?',opts:['By bus','By car','By bicycle','On foot'],correct:2},
      {type:'fill',q:'Elena uses the conditional "podríamos" meaning "we __________" save the planet.',answer:'could',hint:'present conditional'},
      {type:'mc',q:'Who does Elena think should do more?',opts:['Schools','Companies','Governments','Parents'],correct:2}
    ]
  },
  {
    id:'gcse_listen_future',
    title:'Mis planes para el futuro',
    tier:'higher',
    level:'B2',
    theme:'My personal world',
    icon:'🎓',
    speaker:'Diego, 17, talks about his career ambitions',
    replayLimit:2,
    script:'Cuando termine el bachillerato, me gustaría estudiar medicina en la universidad. Aunque sé que es una carrera muy larga y exigente, siempre he querido ayudar a la gente. Si saco buenas notas, espero ir a una universidad en Barcelona. Mis padres me apoyan, aunque mi madre preferiría que estudiara derecho como mi hermano mayor. Antes de empezar la universidad, voy a tomarme un año sabático para viajar por Sudamérica y mejorar mi conocimiento del español latinoamericano.',
    transcript:'Cuando termine el bachillerato, me gustaría estudiar medicina en la universidad. Aunque sé que es una carrera muy larga y exigente, siempre he querido ayudar a la gente. Si saco buenas notas, espero ir a una universidad en Barcelona. Mis padres me apoyan, aunque mi madre preferiría que estudiara derecho como mi hermano mayor. Antes de empezar la universidad, voy a tomarme un año sabático para viajar por Sudamérica y mejorar mi conocimiento del español latinoamericano.',
    questions:[
      {type:'mc',q:'What does Diego want to study?',opts:['Law','Medicine','Engineering','Architecture'],correct:1},
      {type:'mc',q:'What is his mother\'s preference?',opts:['He should study medicine','He should study law','He should not go to university','He should travel first'],correct:1},
      {type:'tf',q:'Diego plans to start university immediately after bachillerato.',correct:false,explanation:'"voy a tomarme un año sabático" — he is going to take a gap year first.'},
      {type:'fill',q:'Diego will travel to Sudamérica to improve his __________ Spanish.',answer:'Latin American',hint:'latinoamericano'},
      {type:'mc',q:'Where would Diego LIKE to go to university?',opts:['Madrid','Barcelona','Valencia','Seville'],correct:1}
    ]
  }
];
// ── GRAMMAR_TOPICS ──
const GRAMMAR_TOPICS=[
  {
    id:'ser_estar',
    name:'Ser vs Estar',
    icon:'⚖️',
    color:'#5B2FCC',
    tagline:'Both mean "to be" — but used differently!',
    rules:[
      {rule:'Use SER for permanent things',examples:[
        {es:'Soy inglés',en:'I am English'},
        {es:'Ella es alta',en:'She is tall'},
        {es:'Es un perro',en:'It is a dog'}
      ]},
      {rule:'Use ESTAR for temporary states & places',examples:[
        {es:'Estoy cansado',en:'I am tired'},
        {es:'Está en el parque',en:'He is in the park'},
        {es:'Estamos contentos',en:'We are happy'}
      ]}
    ],
    drill:[
      {q:'I am English (permanent nationality)',opts:['Soy inglés','Estoy inglés','Es inglés','Estar inglés'],correct:0},
      {q:'She is tired (temporary feeling)',opts:['Ella es cansada','Ella estoy cansada','Ella está cansada','Ella ser cansada'],correct:2},
      {q:'The cat is in the garden (location)',opts:['El gato es en el jardín','El gato está en el jardín','El gato ser en el jardín','El gato estás en el jardín'],correct:1},
      {q:'He is a doctor (permanent job)',opts:['Él está médico','Él eres médico','Él es médico','Él estoy médico'],correct:2},
      {q:'We are happy today (temporary state)',opts:['Somos contentos','Estamos contentos','Están contentos','Sois contentos'],correct:1}
    ]
  },
  {
    id:'present_tense',
    name:'Present tense',
    icon:'🏃',
    color:'#00C9A7',
    tagline:'Regular -AR verbs in the present tense',
    rules:[
      {rule:'Remove -AR, then add these endings',examples:[
        {es:'habl-o',en:'I speak'},
        {es:'habl-as',en:'you speak'},
        {es:'habl-a',en:'he/she speaks'},
        {es:'habl-amos',en:'we speak'},
        {es:'habl-áis',en:'you all speak'},
        {es:'habl-an',en:'they speak'}
      ]},
      {rule:'Same pattern for other -AR verbs',examples:[
        {es:'cantar → canto',en:'I sing'},
        {es:'bailar → baila',en:'he/she dances'},
        {es:'escuchar → escuchan',en:'they listen'}
      ]}
    ],
    drill:[
      {q:'"I speak" — hablar',opts:['hablo','hablas','habla','hablamos'],correct:0},
      {q:'"She sings" — cantar',opts:['canto','cantas','canta','cantan'],correct:2},
      {q:'"We listen" — escuchar',opts:['escucho','escuchas','escucha','escuchamos'],correct:3},
      {q:'"They dance" — bailar',opts:['bailamos','bailan','bailas','bailo'],correct:1},
      {q:'"You (tú) speak" — hablar',opts:['hablo','habla','hablas','hablamos'],correct:2}
    ]
  },
  {
    id:'gender',
    name:'Gender & articles',
    icon:'🔤',
    color:'#EF9F27',
    tagline:'Every Spanish noun is masculine or feminine',
    rules:[
      {rule:'Masculine nouns use el / un',examples:[
        {es:'el perro',en:'the dog'},
        {es:'un libro',en:'a book'},
        {es:'el chico',en:'the boy'}
      ]},
      {rule:'Feminine nouns use la / una',examples:[
        {es:'la chica',en:'the girl'},
        {es:'una mesa',en:'a table'},
        {es:'la manzana',en:'the apple'}
      ]},
      {rule:'Most nouns ending in -o are masculine; -a are feminine',examples:[
        {es:'el gato / la gata',en:'the (male/female) cat'},
        {es:'el amigo / la amiga',en:'the (male/female) friend'}
      ]}
    ],
    drill:[
      {q:'Which article goes with "perro" (dog)?',opts:['la perro','el perro','una perro','los perro'],correct:1},
      {q:'Which article goes with "mesa" (table)?',opts:['el mesa','un mesa','la mesa','los mesa'],correct:2},
      {q:'"A book" in Spanish',opts:['una libro','el libro','un libro','la libro'],correct:2},
      {q:'Which is feminine?',opts:['el chico','el gato','el libro','la chica'],correct:3},
      {q:'"The apple" in Spanish',opts:['el manzana','un manzana','una manzana','la manzana'],correct:3}
    ]
  },
  {
    id:'questions',
    name:'Asking questions',
    icon:'❓',
    color:'#E74C3C',
    tagline:'How to ask questions in Spanish',
    rules:[
      {rule:'Question words always have an accent',examples:[
        {es:'¿Qué?',en:'What?'},
        {es:'¿Quién?',en:'Who?'},
        {es:'¿Dónde?',en:'Where?'},
        {es:'¿Cuándo?',en:'When?'},
        {es:'¿Por qué?',en:'Why?'},
        {es:'¿Cómo?',en:'How?'}
      ]},
      {rule:'Spanish uses ¿ at the start AND ? at the end',examples:[
        {es:'¿Cómo te llamas?',en:'What is your name?'},
        {es:'¿Dónde vives?',en:'Where do you live?'},
        {es:'¿Cuántos años tienes?',en:'How old are you?'}
      ]}
    ],
    drill:[
      {q:'How do you say "Where?" in Spanish?',opts:['Qué','Quién','Dónde','Cuándo'],correct:2},
      {q:'How do you say "Why?" in Spanish?',opts:['Cómo','Por qué','Dónde','Qué'],correct:1},
      {q:'Spanish questions start with...',opts:['!','¡','?','¿'],correct:3},
      {q:'How do you say "How?" in Spanish?',opts:['Qué','Cuándo','Cómo','Quién'],correct:2},
      {q:'"What is your name?" = ¿___ te llamas?',opts:['Dónde','Cuándo','Cómo','Por qué'],correct:2}
    ]
  },
  {
    id:'negatives',
    name:'Making negatives',
    icon:'🚫',
    color:'#9B59B6',
    tagline:'Saying "not" in Spanish is easy!',
    rules:[
      {rule:'Just put NO before the verb — that\'s it!',examples:[
        {es:'Hablo español',en:'I speak Spanish'},
        {es:'No hablo español',en:'I don\'t speak Spanish'},
        {es:'Tengo un perro',en:'I have a dog'},
        {es:'No tengo un perro',en:'I don\'t have a dog'}
      ]},
      {rule:'Common negative phrases',examples:[
        {es:'No sé',en:'I don\'t know'},
        {es:'No me gusta',en:'I don\'t like it'},
        {es:'No hay',en:'There isn\'t / There aren\'t'}
      ]}
    ],
    drill:[
      {q:'"I don\'t speak Spanish" — where does NO go?',opts:['After the verb','Before the verb','At the end','It\'s not needed'],correct:1},
      {q:'How do you say "I don\'t know"?',opts:['Sé no','No sé','No yo sé','Sé no yo'],correct:1},
      {q:'"I don\'t have a dog" in Spanish',opts:['Tengo no un perro','No tengo un perro','Tengo un no perro','Un perro no tengo'],correct:1},
      {q:'"I don\'t like it" in Spanish',opts:['Me no gusta','Gusta no me','No me gusta','Me gusta no'],correct:2},
      {q:'Which sentence is correct?',opts:['Hablo no inglés','No hablo inglés','Hablo inglés no','Inglés no hablo'],correct:1}
    ]
  },

  /* ── GCSE Grammar Topics ── */
  {
    id:'preterite',
    name:'Preterite tense',
    icon:'⏮️',
    color:'#003087',
    tagline:'Talk about completed actions in the past!',
    rules:[
      {rule:'Regular -AR verbs: remove -AR, add these endings',examples:[
        {es:'hablé',en:'I spoke'},
        {es:'hablaste',en:'you spoke'},
        {es:'habló',en:'he/she spoke'},
        {es:'hablamos',en:'we spoke'},
        {es:'hablaron',en:'they spoke'}
      ]},
      {rule:'Regular -ER/-IR verbs: remove ending, add these',examples:[
        {es:'comí',en:'I ate'},
        {es:'comiste',en:'you ate'},
        {es:'comió',en:'he/she ate'},
        {es:'comimos',en:'we ate'},
        {es:'comieron',en:'they ate'}
      ]},
      {rule:'Key irregular verbs (must memorise!)',examples:[
        {es:'fui / fuiste / fue',en:'I/you/he went (ir/ser)'},
        {es:'tuve / tuviste / tuvo',en:'I/you/he had (tener)'},
        {es:'hice / hiciste / hizo',en:'I/you/he did (hacer)'},
        {es:'fui al cine',en:'I went to the cinema'}
      ]}
    ],
    drill:[
      {q:'"I spoke" (hablar) in the preterite',opts:['hablo','hablaba','hablé','hablaré'],correct:2},
      {q:'"She ate" (comer) in the preterite',opts:['come','comía','comió','comerá'],correct:2},
      {q:'"We went" — ser/ir preterite (nosotros)',opts:['somos','íbamos','fuimos','iremos'],correct:2},
      {q:'"He did" (hacer) — preterite',opts:['hace','hacía','hará','hizo'],correct:3},
      {q:'"They spoke" (hablar) — preterite',opts:['hablan','hablaban','hablaron','hablarán'],correct:2}
    ]
  },
  {
    id:'imperfect',
    name:'Imperfect tense',
    icon:'🔁',
    color:'#546E7A',
    tagline:'Describe habitual or ongoing past actions!',
    rules:[
      {rule:'-AR imperfect endings',examples:[
        {es:'hablaba',en:'I used to speak / I was speaking'},
        {es:'hablabas',en:'you used to speak'},
        {es:'hablábamos',en:'we used to speak'},
        {es:'hablaban',en:'they used to speak'}
      ]},
      {rule:'-ER/-IR imperfect endings',examples:[
        {es:'comía',en:'I used to eat / I was eating'},
        {es:'comías',en:'you used to eat'},
        {es:'comíamos',en:'we used to eat'},
        {es:'comían',en:'they used to eat'}
      ]},
      {rule:'Use the imperfect for: habits, descriptions, ongoing actions',examples:[
        {es:'Cuando era niño, jugaba al fútbol',en:'When I was a child, I used to play football'},
        {es:'Hacía sol',en:'It was sunny'},
        {es:'Vivíamos en Madrid',en:'We used to live in Madrid'}
      ]}
    ],
    drill:[
      {q:'"I used to speak" (hablar) — imperfect',opts:['hablo','hablé','hablaba','hablaré'],correct:2},
      {q:'"She was eating" (comer) — imperfect',opts:['come','comió','comerá','comía'],correct:3},
      {q:'Which tense is used for habitual past actions?',opts:['Present','Preterite','Imperfect','Future'],correct:2},
      {q:'"We used to live" (vivir) — imperfect',opts:['vivimos','vivíamos','viviremos','vivimos'],correct:1},
      {q:'"It was sunny" — imperfect of hacer',opts:['hace sol','hizo sol','hacía sol','hará sol'],correct:2}
    ]
  },
  {
    id:'future_tense',
    name:'Future tense',
    icon:'🔮',
    color:'#16A085',
    tagline:'Talk about what WILL happen!',
    rules:[
      {rule:'Add these endings to the infinitive (same for all verbs)',examples:[
        {es:'hablaré',en:'I will speak'},
        {es:'hablarás',en:'you will speak'},
        {es:'hablará',en:'he/she will speak'},
        {es:'hablaremos',en:'we will speak'},
        {es:'hablarán',en:'they will speak'}
      ]},
      {rule:'Common irregular future stems',examples:[
        {es:'tener → tendré',en:'I will have'},
        {es:'hacer → haré',en:'I will do'},
        {es:'poder → podré',en:'I will be able to'},
        {es:'querer → querré',en:'I will want'},
        {es:'venir → vendré',en:'I will come'}
      ]},
      {rule:'Also use "ir a + infinitive" for near future',examples:[
        {es:'Voy a estudiar',en:'I am going to study'},
        {es:'Va a llover',en:'It is going to rain'}
      ]}
    ],
    drill:[
      {q:'"I will speak" (hablar) — future',opts:['hablo','hablé','hablaba','hablaré'],correct:3},
      {q:'"She will have" (tener) — future',opts:['tiene','tenía','tuvo','tendrá'],correct:3},
      {q:'"We will do" (hacer) — future',opts:['hacemos','hicimos','haremos','haríamos'],correct:2},
      {q:'"Going to study" — near future',opts:['estudio','estudié','voy a estudiar','estudiaré'],correct:2},
      {q:'"They will be able to" (poder) — future',opts:['pueden','pudieron','podrán','podrían'],correct:2}
    ]
  },
  {
    id:'conditional',
    name:'Conditional tense',
    icon:'💭',
    color:'#8E44AD',
    tagline:'Say what WOULD happen — for opinions, wishes, hypotheticals!',
    rules:[
      {rule:'Same stem as future, but different endings',examples:[
        {es:'hablaría',en:'I would speak'},
        {es:'hablarías',en:'you would speak'},
        {es:'hablaría',en:'he/she would speak'},
        {es:'hablaríamos',en:'we would speak'},
        {es:'hablarían',en:'they would speak'}
      ]},
      {rule:'Same irregular stems as future tense',examples:[
        {es:'tendría',en:'I would have'},
        {es:'haría',en:'I would do'},
        {es:'podría',en:'I would be able to'},
        {es:'sería',en:'I would be'}
      ]},
      {rule:'Use for: polite requests, wishes, hypotheticals',examples:[
        {es:'Me gustaría visitar España',en:'I would like to visit Spain'},
        {es:'Podría ayudarme?',en:'Could you help me?'},
        {es:'Sería fantástico',en:'It would be fantastic'}
      ]}
    ],
    drill:[
      {q:'"I would speak" — conditional of hablar',opts:['hablo','hablé','hablaré','hablaría'],correct:3},
      {q:'"I would like to go" — correct Spanish',opts:['quiero ir','querría ir','Me gustaría ir','quisiera'],correct:2},
      {q:'"She would have" — conditional of tener',opts:['tiene','tendrá','tendría','tuvo'],correct:2},
      {q:'Which tense expresses "would"?',opts:['Present','Preterite','Future','Conditional'],correct:3},
      {q:'"It would be fantastic" — correct Spanish',opts:['es fantástico','fue fantástico','será fantástico','sería fantástico'],correct:3}
    ]
  },
  {
    id:'subjunctive',
    name:'Subjunctive mood',
    icon:'🎭',
    color:'#E74C3C',
    tagline:'The subjunctive — express doubt, emotion, wishes and recommendations!',
    rules:[
      {rule:'Present subjunctive: swap vowels (AR→E, ER/IR→A)',examples:[
        {es:'hablar → hable / hables / hable',en:'(that) I/you/he speak'},
        {es:'comer → coma / comas / coma',en:'(that) I/you/he eat'},
        {es:'vivir → viva / vivas / viva',en:'(that) I/you/he live'}
      ]},
      {rule:'Use after: querer que, esperar que, recomendar que',examples:[
        {es:'Quiero que estudies',en:'I want you to study'},
        {es:'Espero que llegue',en:'I hope he arrives'},
        {es:'Recomiendo que visites Granada',en:'I recommend you visit Granada'}
      ]},
      {rule:'Use after: es importante que, es posible que, no creo que',examples:[
        {es:'Es importante que practiques',en:'It\'s important that you practise'},
        {es:'No creo que sea fácil',en:'I don\'t think it\'s easy'},
        {es:'Es posible que llueva',en:'It\'s possible it will rain'}
      ]}
    ],
    drill:[
      {q:'"I want you to study" — subjunctive of estudiar (tú)',opts:['estudias','estudiaste','estudies','estudiarás'],correct:2},
      {q:'"It\'s important that he arrives" — llegar (él)',opts:['llega','llegó','llegue','llegará'],correct:2},
      {q:'After "quiero que" you use the...',opts:['Infinitive','Present tense','Subjunctive','Future'],correct:2},
      {q:'"I don\'t think it\'s easy" — ser (subjunctive)',opts:['es','era','fue','sea'],correct:3},
      {q:'"I recommend you visit" — visitar (tú, subjunctive)',opts:['visitas','visitaste','visitarás','visites'],correct:3}
    ]
  },
  {
    id:'gustar_opinions',
    name:'Gustar & opinions',
    icon:'💬',
    color:'#E67E22',
    tagline:'Express likes, dislikes and opinions — essential for GCSE!',
    rules:[
      {rule:'Gustar works backwards — the thing liked is the subject',examples:[
        {es:'Me gusta el fútbol',en:'I like football (lit: football pleases me)'},
        {es:'Me gustan los deportes',en:'I like sports (plural — gustan)'},
        {es:'Le gusta bailar',en:'He/she likes to dance'}
      ]},
      {rule:'Indirect object pronouns with gustar',examples:[
        {es:'me gusta',en:'I like (it pleases me)'},
        {es:'te gusta',en:'you like'},
        {es:'le gusta',en:'he/she/it likes'},
        {es:'nos gusta',en:'we like'},
        {es:'les gusta',en:'they like'}
      ]},
      {rule:'Useful opinion phrases for GCSE writing/speaking',examples:[
        {es:'me encanta',en:'I love'},
        {es:'me interesa',en:'I find it interesting'},
        {es:'me parece + adj',en:'I find it + adjective'},
        {es:'no soporto',en:'I can\'t stand'},
        {es:'lo que más me gusta es',en:'what I like most is'}
      ]}
    ],
    drill:[
      {q:'"I like football" — correct Spanish',opts:['Gusto el fútbol','Me gusta el fútbol','Me gustan el fútbol','Gusta me el fútbol'],correct:1},
      {q:'"I like sports" (plural) — correct form',opts:['Me gusta los deportes','Me gustan los deportes','Me gusto los deportes','Me gustas los deportes'],correct:1},
      {q:'"She likes to dance" — correct pronoun',opts:['me le gusta','te gusta','le gusta','les gusta'],correct:2},
      {q:'"I love" (stronger than like)',opts:['me gusta','me gustan','me encanta','me interesa'],correct:2},
      {q:'"We like" — correct pronoun',opts:['le gusta','os gusta','nos gusta','me gusta'],correct:2}
    ]
  },
  {
    id:'plurals',
    name:'Making plurals',
    icon:'➕',
    color:'#3498DB',
    tagline:'How to turn one into many in Spanish',
    rules:[
      {rule:'Words ending in a vowel: add -s',examples:[
        {es:'libro → libros',en:'book → books'},
        {es:'casa → casas',en:'house → houses'},
        {es:'gato → gatos',en:'cat → cats'}
      ]},
      {rule:'Words ending in a consonant: add -es',examples:[
        {es:'animal → animales',en:'animal → animals'},
        {es:'profesor → profesores',en:'teacher → teachers'},
        {es:'ciudad → ciudades',en:'city → cities'}
      ]},
      {rule:'Words ending in -z: change z to c, then add -es',examples:[
        {es:'lápiz → lápices',en:'pencil → pencils'},
        {es:'pez → peces',en:'fish → fish (plural)'}
      ]}
    ],
    drill:[
      {q:'Plural of "perro"',opts:['perros','perres','perroes','perroses'],correct:0},
      {q:'Plural of "ciudad"',opts:['ciudads','ciudades','ciudadas','ciudadeses'],correct:1},
      {q:'Plural of "lápiz"',opts:['lápizes','lápizs','lápices','lápicees'],correct:2},
      {q:'Plural of "mesa"',opts:['mesaes','mesas','meses','mesases'],correct:1},
      {q:'Plural of "actor"',opts:['actoros','actors','actores','actoreses'],correct:2}
    ]
  },
  {
    id:'adjective_agreement',
    name:'Adjective agreement',
    icon:'🔗',
    color:'#E74C3C',
    tagline:'Adjectives must match their noun in gender and number',
    rules:[
      {rule:'Adjectives ending in -o change: -o (m), -a (f), -os (mp), -as (fp)',examples:[
        {es:'el chico alto',en:'the tall boy'},
        {es:'la chica alta',en:'the tall girl'},
        {es:'los chicos altos',en:'the tall boys'},
        {es:'las chicas altas',en:'the tall girls'}
      ]},
      {rule:'Adjectives ending in -e are the same for m/f, just add -s for plural',examples:[
        {es:'el chico inteligente',en:'the smart boy'},
        {es:'la chica inteligente',en:'the smart girl'},
        {es:'los chicos inteligentes',en:'the smart boys'}
      ]},
      {rule:'Adjectives usually come AFTER the noun (different from English!)',examples:[
        {es:'una casa grande',en:'a big house (NOT "una grande casa")'},
        {es:'un libro interesante',en:'an interesting book'}
      ]}
    ],
    drill:[
      {q:'"the tall girl"',opts:['la chico alto','la chica alta','la chico alta','las chica alta'],correct:1},
      {q:'"the smart boys"',opts:['los chicos inteligentes','los chicos inteligentos','las chicas inteligentes','los chico inteligente'],correct:0},
      {q:'"a big house"',opts:['una grande casa','un casa grande','una casa grande','una casa grandes'],correct:2},
      {q:'"the small dogs"',opts:['las perros pequeños','los perros pequeños','los perro pequeño','los perros pequeñas'],correct:1},
      {q:'"the red apples" (manzana = f)',opts:['las manzanas rojos','los manzanas rojas','las manzanas rojas','la manzanas roja'],correct:2}
    ]
  },
  {
    id:'possessives',
    name:'Possessives (mi, tu, su)',
    icon:'🔑',
    color:'#9B59B6',
    tagline:'How to say "my", "your", "his / her" in Spanish',
    rules:[
      {rule:'Singular forms — same for m/f',examples:[
        {es:'mi libro / mi casa',en:'my book / my house'},
        {es:'tu perro / tu madre',en:'your dog / your mother'},
        {es:'su coche / su hermana',en:'his/her car / his/her sister'}
      ]},
      {rule:'Plural — just add -s',examples:[
        {es:'mis libros',en:'my books'},
        {es:'tus amigos',en:'your friends'},
        {es:'sus padres',en:'his/her/their parents'}
      ]},
      {rule:'"Our" and "your (plural)" change for gender too',examples:[
        {es:'nuestro padre / nuestra madre',en:'our father / our mother'},
        {es:'nuestros libros / nuestras casas',en:'our books / our houses'},
        {es:'vuestro perro / vuestras casas',en:'your (pl) dog / your (pl) houses'}
      ]}
    ],
    drill:[
      {q:'"my friends"',opts:['mi amigos','mis amigos','mio amigos','mías amigos'],correct:1},
      {q:'"your (tú) sister"',opts:['tu hermana','tus hermana','tuyo hermana','su hermana'],correct:0},
      {q:'"our house" (casa = f)',opts:['nuestro casa','nuestros casa','nuestra casa','nuestras casa'],correct:2},
      {q:'"his books"',opts:['su libros','sus libros','suyos libros','suya libros'],correct:1},
      {q:'"our parents"',opts:['nuestro padres','nuestras padres','nuestros padres','nuestra padres'],correct:2}
    ]
  },
  {
    id:'numbers_dates',
    name:'Numbers, age & dates',
    icon:'📅',
    color:'#F39C12',
    tagline:'Counting, talking about your age and saying the date',
    rules:[
      {rule:'Numbers 1-20 are unique words to memorise',examples:[
        {es:'uno, dos, tres, cuatro, cinco',en:'1, 2, 3, 4, 5'},
        {es:'seis, siete, ocho, nueve, diez',en:'6, 7, 8, 9, 10'},
        {es:'once, doce, trece, catorce, quince',en:'11, 12, 13, 14, 15'}
      ]},
      {rule:'Tens (30s, 40s, 50s...) join with "y"',examples:[
        {es:'veinte → veintiuno, veintidós',en:'20 → 21, 22 (no "y" for the 20s)'},
        {es:'treinta y uno, treinta y dos',en:'31, 32 (use "y" from 30s onwards)'},
        {es:'cuarenta y cinco',en:'45'}
      ]},
      {rule:'Dates: "el [number] de [month]"',examples:[
        {es:'el cinco de mayo',en:'the 5th of May'},
        {es:'el doce de junio',en:'the 12th of June'}
      ]},
      {rule:'Age uses TENER (to have), not SER (to be)',examples:[
        {es:'Tengo doce años',en:'I am 12 (literally: I have 12 years)'},
        {es:'¿Cuántos años tienes?',en:'How old are you?'}
      ]}
    ],
    drill:[
      {q:'"35"',opts:['treinta cinco','treinta y cinco','treintaicinco','tres y cinco'],correct:1},
      {q:'"the 3rd of April"',opts:['el tres de abril','tres abril','el tercero abril','el tres por abril'],correct:0},
      {q:'"I am 14 years old"',opts:['Soy catorce','Soy catorce años','Tengo catorce años','Estoy catorce'],correct:2},
      {q:'"21 books" (libros = m)',opts:['veinte uno libros','veinte y uno libros','veintiuno libros','veintiún libros'],correct:3},
      {q:'"How old are you?"',opts:['¿Cuántos años eres?','¿Cuántos años tienes?','¿Cuándo años tienes?','¿Qué años tienes?'],correct:1}
    ]
  },
  {
    id:'tener',
    name:'Tener (to have)',
    icon:'🤲',
    color:'#16A085',
    tagline:'One of the most useful verbs — and full of idioms!',
    rules:[
      {rule:'Tener is irregular — memorise the present-tense forms',examples:[
        {es:'yo tengo',en:'I have'},
        {es:'tú tienes',en:'you have'},
        {es:'él/ella tiene',en:'he/she has'},
        {es:'nosotros tenemos',en:'we have'},
        {es:'vosotros tenéis',en:'you all have'},
        {es:'ellos tienen',en:'they have'}
      ]},
      {rule:'Use TENER for age, hunger, thirst, fear, heat — where English uses "to be"',examples:[
        {es:'Tengo hambre',en:'I am hungry'},
        {es:'Tienes sed',en:'You are thirsty'},
        {es:'Tenemos frío',en:'We are cold'},
        {es:'Tienen miedo',en:'They are afraid'}
      ]},
      {rule:'TENER QUE + infinitive = "to have to..."',examples:[
        {es:'Tengo que estudiar',en:'I have to study'},
        {es:'Tienes que ir al médico',en:'You have to go to the doctor'}
      ]}
    ],
    drill:[
      {q:'"We have"',opts:['tenemos','tienen','tenéis','tenemo'],correct:0},
      {q:'"I am hungry" (literally: I have hunger)',opts:['Soy hambre','Estoy hambre','Tengo hambre','Tener hambre'],correct:2},
      {q:'"She has a brother"',opts:['Ella tiene un hermano','Ella tienes un hermano','Ella tengo un hermano','Ella tenemos un hermano'],correct:0},
      {q:'"I have to work"',opts:['Tengo trabajar','Tengo que trabajar','Soy que trabajar','Tener trabajar'],correct:1},
      {q:'"They are cold"',opts:['Son fríos','Están fríos','Tienen frío','Tenemos frío'],correct:2}
    ]
  },
  {
    id:'ir_a_infinitive',
    name:'Near future (ir a + verb)',
    icon:'🚀',
    color:'#2980B9',
    tagline:'Talk about what you are going to do — the easy future tense',
    rules:[
      {rule:'Step 1 — conjugate IR (to go) for the right person',examples:[
        {es:'voy, vas, va',en:'I go, you go, he/she goes'},
        {es:'vamos, vais, van',en:'we go, you all go, they go'}
      ]},
      {rule:'Step 2 — add "a" + an infinitive verb',examples:[
        {es:'Voy a comer',en:'I am going to eat'},
        {es:'Vas a estudiar',en:'You are going to study'},
        {es:'Vamos a viajar',en:'We are going to travel'},
        {es:'Van a jugar al fútbol',en:'They are going to play football'}
      ]},
      {rule:'Use this for plans and predictions — works just like English "going to"',examples:[
        {es:'Mañana voy a ver una película',en:'Tomorrow I am going to watch a film'},
        {es:'¿Qué vas a hacer este fin de semana?',en:'What are you going to do this weekend?'}
      ]}
    ],
    drill:[
      {q:'"I am going to study"',opts:['Voy estudiar','Voy a estudio','Voy a estudiar','Va a estudiar'],correct:2},
      {q:'"We are going to travel"',opts:['Vamos viajar','Vamos a viajar','Vamos a viajamos','Van a viajar'],correct:1},
      {q:'"She is going to read"',opts:['Va a leer','Vas a leer','Voy a leer','Va leer'],correct:0},
      {q:'"They are going to play"',opts:['Van jugar','Van a jugar','Vamos a jugar','Va a jugar'],correct:1},
      {q:'"What are you (tú) going to do?"',opts:['¿Qué vas hacer?','¿Qué va a hacer?','¿Qué vas a hacer?','¿Qué va hacer?'],correct:2}
    ]
  },
  {
    id:'reflexive_verbs',
    name:'Reflexive verbs (daily routine)',
    icon:'🪥',
    color:'#27AE60',
    tagline:'Verbs where you do something to yourself — perfect for daily routines',
    rules:[
      {rule:'Reflexive verbs end in -se (e.g. levantarse = to get oneself up)',examples:[
        {es:'levantarse',en:'to get up'},
        {es:'ducharse',en:'to shower'},
        {es:'lavarse',en:'to wash oneself'},
        {es:'acostarse',en:'to go to bed'}
      ]},
      {rule:'Change "se" to match the person, and put it BEFORE the verb',examples:[
        {es:'me levanto',en:'I get up'},
        {es:'te duchas',en:'you shower'},
        {es:'se lava',en:'he/she washes'},
        {es:'nos acostamos',en:'we go to bed'}
      ]},
      {rule:'Use reflexive verbs to describe daily routines',examples:[
        {es:'Me despierto a las siete',en:'I wake up at 7'},
        {es:'Después me ducho y me visto',en:'Then I shower and get dressed'},
        {es:'Por la noche me acuesto a las diez',en:'At night I go to bed at 10'}
      ]}
    ],
    drill:[
      {q:'"I get up at 8"',opts:['Levanto a las ocho','Me levanto a las ocho','Te levantas a las ocho','Se levanta a las ocho'],correct:1},
      {q:'"She showers"',opts:['Me ducho','Te duchas','Se ducha','Nos duchamos'],correct:2},
      {q:'"We go to bed early"',opts:['Acostamos temprano','Nos acostamos temprano','Se acuestan temprano','Me acuesto temprano'],correct:1},
      {q:'"You (tú) wash your face"',opts:['Te lavas la cara','Me lavo la cara','Se lava la cara','Lavamos la cara'],correct:0},
      {q:'"I wake up at 7"',opts:['Despierto a las siete','Te despiertas a las siete','Me despierto a las siete','Se despierta a las siete'],correct:2}
    ]
  },
  {
    id:'comparatives',
    name:'Comparing things',
    icon:'📊',
    color:'#8E44AD',
    tagline:'Saying things are bigger, smaller or better than each other',
    rules:[
      {rule:'"More than" → MÁS + adjective + QUE',examples:[
        {es:'Madrid es más grande que Bilbao',en:'Madrid is bigger than Bilbao'},
        {es:'Soy más alto que mi hermano',en:'I am taller than my brother'},
        {es:'El español es más fácil que el inglés',en:'Spanish is easier than English'}
      ]},
      {rule:'"Less than" → MENOS + adjective + QUE',examples:[
        {es:'Hoy es menos caluroso que ayer',en:'Today is less hot than yesterday'},
        {es:'Soy menos rápido que ella',en:'I am less fast than her'}
      ]},
      {rule:'"As ___ as" → TAN + adjective + COMO',examples:[
        {es:'Mi casa es tan bonita como la tuya',en:'My house is as nice as yours'},
        {es:'Soy tan inteligente como mi hermana',en:'I am as smart as my sister'}
      ]},
      {rule:'A few comparatives are irregular — learn these!',examples:[
        {es:'mejor (better)',en:'NOT "más bueno"'},
        {es:'peor (worse)',en:'NOT "más malo"'},
        {es:'mayor (older / bigger)',en:'NOT "más viejo"'},
        {es:'menor (younger / smaller)',en:'NOT "más joven"'}
      ]}
    ],
    drill:[
      {q:'"Madrid is bigger than Bilbao"',opts:['Madrid es más grande que Bilbao','Madrid es muy grande que Bilbao','Madrid es grande más Bilbao','Madrid es tan grande como Bilbao'],correct:0},
      {q:'"I am as tall as you"',opts:['Soy más alto que tú','Soy menos alto que tú','Soy tan alto como tú','Soy más alto como tú'],correct:2},
      {q:'"This film is worse than the book"',opts:['Esta película es más mala que el libro','Esta película es peor que el libro','Esta película es menos buena que el libro','Esta película es mala que el libro'],correct:1},
      {q:'"My sister is older than me"',opts:['Mi hermana es más vieja que yo','Mi hermana es mayor que yo','Mi hermana es más mayor que yo','Mi hermana es vieja que yo'],correct:1},
      {q:'"Today is less cold than yesterday"',opts:['Hoy es más frío que ayer','Hoy es tan frío como ayer','Hoy es menos frío que ayer','Hoy es menos frío como ayer'],correct:2}
    ]
  }
];

// ── WRITING_TASKS ──
const WRITING_TASKS = [
  // ── KS2 (Y3-6, simple, 40-50 words) ──
  {
    id:'wr_ks2_familia', title:'Mi familia', icon:'👨‍👩‍👧‍👦',
    level:'ks2', wordCount:40,
    prompt:'Write about your family in Spanish.',
    bullets:['Names and ages of family members','What they look like','One thing you do together']
  },
  {
    id:'wr_ks2_mascota', title:'Mi mascota', icon:'🐶',
    level:'ks2', wordCount:40,
    prompt:'Describe a pet (real or imaginary).',
    bullets:['What animal it is and its name','What colour and size it is','What it likes to do']
  },
  {
    id:'wr_ks2_colegio', title:'Mi colegio', icon:'🏫',
    level:'ks2', wordCount:50,
    prompt:'Write about your school.',
    bullets:['The name and type of your school','Your favourite subject and why','Something you do or do not like about it']
  },
  // ── KS3 (Y7-9, longer sentences, 60-90 words) ──
  {
    id:'wr_ks3_rutina', title:'Mi rutina diaria', icon:'⏰',
    level:'ks3', wordCount:70,
    prompt:'Describe your typical day from morning to night.',
    bullets:['What time you wake up and what you do in the morning','Your school day','What you do in the evening and when you go to bed']
  },
  {
    id:'wr_ks3_amigo', title:'Mi mejor amigo o amiga', icon:'🤝',
    level:'ks3', wordCount:80,
    prompt:'Describe your best friend.',
    bullets:['Their name, age, and where they live','What they look like','Their personality and what you do together']
  },
  {
    id:'wr_ks3_vacaciones', title:'Las vacaciones', icon:'🏖️',
    level:'ks3', wordCount:90,
    prompt:'Write about a holiday you went on.',
    bullets:['Where you went and with whom','What you did there','Whether you enjoyed it and why']
  },
  // ── GCSE Foundation (40 / 90 words, exam-aligned) ──
  {
    id:'wr_gcsef_familia', title:'GCSE-F · Mi familia (40)', icon:'👨‍👩‍👧',
    level:'gcse-f', wordCount:40,
    prompt:'Write 4 sentences in Spanish about your family.',
    bullets:['How many people there are in your family','One person you get on well with','An activity you do together','Your opinion of family life']
  },
  {
    id:'wr_gcsef_region', title:'GCSE-F · Mi región (90)', icon:'🏞️',
    level:'gcse-f', wordCount:90,
    prompt:'Write about the area where you live.',
    bullets:['Where it is and what it is like','What you can do there','A problem in your area','What you would change']
  },
  {
    id:'wr_gcsef_salud', title:'GCSE-F · La salud (90)', icon:'🍎',
    level:'gcse-f', wordCount:90,
    prompt:'Write about a healthy lifestyle.',
    bullets:['What you eat to be healthy','What sport or exercise you do','A bad habit you would like to give up','How you plan to stay healthy in the future']
  },
  // ── GCSE Higher (90 / 150 words, abstract topics) ──
  {
    id:'wr_gcseh_medio', title:'GCSE-H · El medio ambiente (90)', icon:'🌍',
    level:'gcse-h', wordCount:90,
    prompt:'Write about environmental issues.',
    bullets:['An environmental problem in your area','What you and your family do to help','What schools should do','Your hopes for the future']
  },
  {
    id:'wr_gcseh_tech', title:'GCSE-H · La tecnología (150)', icon:'📱',
    level:'gcse-h', wordCount:150,
    prompt:'Write about how technology affects young people today.',
    bullets:['How you use technology in daily life','The benefits for you','A negative impact on young people','What you would change about social media','Predictions for technology in the future']
  },
  {
    id:'wr_gcseh_estudios', title:'GCSE-H · Mis estudios (150)', icon:'🎓',
    level:'gcse-h', wordCount:150,
    prompt:'Write about your studies and future plans.',
    bullets:['Your favourite and least favourite subjects, with reasons','The pressure of GCSEs','What you plan to study after GCSE','What career you would like and why','Your dream for the future']
  }
];

// ── GCSE_GRAMMAR_IDS ──
const GCSE_GRAMMAR_IDS = ['preterite','imperfect','future_tense','conditional','subjunctive','gustar_opinions'];
