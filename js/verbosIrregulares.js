
    // VERBOS IRREGULARES

const listaVerbosIrregulares = [
    "Arise","Awake",
    "Be","Bear","Beat","Become","Begin","Bend","Bet","Bind","Bid","Bite","Bleed","Blow","Break","Breed","Bring","Build","Burn","Burst","Buy",
    "Cast","Catch","Come","Cost","Cut","Choose","Cling","Creep",
    "Deal","Dig","Do","Draw","Dream","Drink","Drive",
    "Eat","Fall","Feed","Feel","Fight","Find","Flee","Fly","Forbid","Forget","Forgive","Freeze",
    "Get","Give","Go","Grow","Grind",
    "Hang","Have","Hear","Hide","Hit","Hold","Hurt",
    "Keep","Know","Kneel","Knit",
    "Lay","Lead","Lean","Leap","Learn","Leave","Lend","Let","Light","Lose",
    "Make","Mean","Meet","Mistake","Overcome",
    "Pay","Put","Read","Ride","Ring","Rise","Run",
    "Say","See","Seek","Sell","Send","Set","Sew","Shake","Shear","Shine","Shoot","Show","Shrink","Shut","Sing","Sink","Sit","Sleep","Slide","Smell","Sow","Speak","Speed","Spell","Spend","Spill","Spin","Spit","Split","Spoil","Spread","Stand","Steal","Stick","Sting","Stink","Stride","Strike","Swear","Sweat","Sweep","Swell","Swim","Swing",
    "Take","Teach","Tell","Think","Throw",
    "Understand","Undertake","Wake","Wear","Weave","Weep","Wet","Win","Wind","Withdraw","Wring","Write"
];
const pasadoSimpleVerbos = [
    "Arose","Awoke",
    /*"Was/Were"*/"Was/Were","Bore","Beat","Became","Began","Bent","Bet","Bound","Bid","Bit","Bled","Blew","Broke","Bred","Brought","Built","Burnt/Burned","Burst","Bought",
    "Cast","Caught","Came","Cost","Cut","Chose","Clung","Crept",
    "Dealt","Dug","Did","Drew","Dreamt/Dreamed","Drank","Drove",
    "Ate","Fell","Fed","Felt","Fought","Found","Fled","Flew","Forbade","Forgot","Forgave","Froze",
    "Got","Gave","Went","Grew","Ground",
    "Hung","Had","Heard","Hid","Hit","Held","Hurt",
    "Kept","Knew","Knelt","Knit",
    "Laid","Led","Leant","Leapt","Learnt/Learned","Left","Lent","Let","Lit","Lost",
    "Made","Meant","Met","Mistook","Overcame",
    "Paid","Put","Read","Rode","Rang","Rose","Ran",
    "Said","Saw","Sought","Sold","Sent","Set","Sewed","Shook","Shore","Shone","Shot","Showed","Shrank","Shut","Sang","Sank","Sat","Slept","Slid","Smelt","Sowed","Spoke","Sped","Spelt","Spent","Spilt/Spilled","Spun","Spat","Split","Spoilt/Spoiled","Spread","Stood","Stole","Stuck","Stung","Stank/Stunk","Strode","Struck","Swore","Sweat","Swept","Swelled","Swam","Swung",
    "Took","Taught","Told","Thought","Threw",
    "Understood","Undertook","Woke","Wore","Wove","Wept","Wet","Won","Wound","Withdrew","Wrung","Wrote"
];
const pasadoParticipioVerbos = [
    "Arisen","Awoken",
    "Been","Born/Borne","Beaten","Become","Begun","Bent","Bet","Bound","Bid","Bitten","Bled","Blown","Broken","Bred","Brought","Built","Burnt/Burned","Burst","Bought",
    "Cast","Caught","Come","Cost","Cut","Chosen","Clung","Crept",
    "Dealt","Dug","Done","Drawn","Dreamt/Dreamed","Drunk","Driven",
    "Eaten","Fallen","Fed","Felt","Fought","Found","Fled","Flown","Forbidden","Forgotten","Forgiven","Frozen",
    "Got/Gotten","Given","Gone","Grown","Ground",
    "Hung","Had","Heard","Hidden","Hit","Held","Hurt",
    "Kept","Known","Knelt","Knit",
    "Laid","Led","Leant","Leapt","Learnt/Learned","Left","Lent","Let","Lit","Lost",
    "Made","Meant","Met","Mistaken","Overcome",
    "Paid","Put","Read","Ridden","Rung","Risen","Run",
    "Said","Seen","Sought","Sold","Sent","Set","Sewed/Sewn","Shaken","Shorn","Shone","Shot","Shown","Shrunk","Shut","Sung","Sunk","Sat","Slept","Slid","Smelt","Sowed/Sown","Spoken","Sped","Spelt","Spent","Spilt/Spilled","Spun","Spat","Split","Spoilt/Spoiled","Spread","Stood","Stolen","Stuck","Stung","Stunk","Stridden","Struck","Sworn","Sweat","Swept","Swollen","Swum","Swung",
    "Taken","Taught","Told","Thought","Thrown",
    "Understood","Undertaken","Woken","Worn","Woven","Wept","Wet","Won","Wound","Withdrawn","Wrung","Written" 
];
const traducirVerbosIrregulares = [ /*carry = llevar ?*/
    /*"Surgir, levantarse"*/
    "Surgir","Despertar",
    /*Ser/Estar*/"Ser",/*Dar a luz*/"Soportar","Golpear","Convertirse","Empezar","Doblar","Apostar","Atar","Pujar","Morder","Sangrar","Soplar","Romper","Criar",/*Traer/LLevar*/"Traer","Construir","Quemar","Reventar","Comprar",
    "Arrojar","Atrapar","Venir","Costar","Cortar",/*Elegir/Escoger*/"Elegir","Agarrarse","Arrastrarse",
    "Tratar","Cavar","Hacer","Dibujar","Soñar","Beber","Conducir",
    "Comer","Caer","Alimentar","Sentir","Pelear","Encontrar","Huir","Volar","Prohibir","Olvidar","Perdonar","Congelar",
    "Obtener","Dar","Ir","Crecer","Moler",
    "Colgar","Tener","Escuchar","Ocultar","Golpear","Sostener","Herir",
    "Mantener","Saber","Arrodillar","Tejer",
    "Poner","Dirigir","Apoyarse",/*Saltar o brincar*/"Saltar","Aprender","Irse","Prestar","Dejar","Encender","Perder",
    "Hacer","Significar","Reunirse","Equivocar","Superar",
    "Pagar","Poner","Leer","Montar","Llamar","Ascender","Correr",
    "Decir","Ver","Buscar","Vender","Enviar","Poner","Coser","Sacudir","Esquilar","Brillar","Disparar","Mostrar","Encogerse","Cerrar","Cantar","Hundir","Sentarse","Dormir","Resbalar","Oler","Sembrar","Hablar","Acelerar","Deletrear","Gastar","Derramar","Hilar","Escupir","Rajar","Estropear","Extender",/*"Estar de pie"*/"Estar de pie","Robar","Pegar","Picar","Apestar",/*Dar zancadas*/"Dar zancadas","Golpear","Jurar","Sudar","Barrer","Hinchar","Nadar","Balancear",
    "Tomar","Enseñar","Decir","Pensar","Arrojar",
    "Entender","Emprender","Despertar","Usar",/*Tejer 2*/"Tejer","Llorar","Mojar","Ganar","Enrollar","Retirar","Torcer","Escribir"
];

/*
Sweat  sudar   ed? => Sweated
*/