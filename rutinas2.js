const ROUTINES = {
  peso: {
    gimnasio: {
      principiante: [
        { tipo: "Full Body A", ejercicios: [
          {n:"Cinta (cardio moderado)", s:"3", r:"12 min", t:"15"},
          {n:"Sentadilla en máquina", s:"3", r:"15 reps", t:"8"},
          {n:"Press pecho máquina", s:"3", r:"12 reps", t:"7"},
          {n:"Remo en polea", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Cardio + Core", ejercicios: [
          {n:"Elíptica", s:"1", r:"20 min", t:"20"},
          {n:"Plancha", s:"3", r:"30 seg", t:"5"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"},
          {n:"Mountain climbers", s:"3", r:"20 reps", t:"6"}
        ]},
        { tipo: "Full Body B", ejercicios: [
          {n:"Bicicleta estática", s:"1", r:"15 min", t:"15"},
          {n:"Leg press", s:"3", r:"15 reps", t:"8"},
          {n:"Jalón al pecho", s:"3", r:"12 reps", t:"7"},
          {n:"Press hombro máquina", s:"3", r:"12 reps", t:"7"}
        ]}
      ],
      intermedio: [
        { tipo: "Upper + HIIT", ejercicios: [
          {n:"Press banca", s:"4", r:"12 reps", t:"9"},
          {n:"Remo con barra", s:"4", r:"10 reps", t:"9"},
          {n:"Press militar", s:"3", r:"12 reps", t:"7"},
          {n:"HIIT cinta (30/30)", s:"1", r:"10 min", t:"10"}
        ]},
        { tipo: "Lower + cardio", ejercicios: [
          {n:"Sentadilla libre", s:"4", r:"12 reps", t:"10"},
          {n:"Peso muerto rumano", s:"4", r:"10 reps", t:"10"},
          {n:"Estocadas", s:"3", r:"12 reps", t:"7"},
          {n:"Elíptica intervalos", s:"1", r:"10 min", t:"10"}
        ]},
        { tipo: "Full body metabólico", ejercicios: [
          {n:"Burpees", s:"4", r:"12 reps", t:"8"},
          {n:"Goblet squat", s:"4", r:"15 reps", t:"7"},
          {n:"Remo mancuerna", s:"4", r:"12 reps", t:"7"},
          {n:"Box jumps", s:"3", r:"10 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "Push + cardio", ejercicios: [
          {n:"Press banca inclinado", s:"5", r:"8 reps", t:"10"},
          {n:"Dips lastrado", s:"4", r:"10 reps", t:"8"},
          {n:"Press Arnold", s:"4", r:"10 reps", t:"8"},
          {n:"HIIT 20/40", s:"1", r:"15 min", t:"10"}
        ]},
        { tipo: "Pull + cardio", ejercicios: [
          {n:"Dominadas lastradas", s:"5", r:"6 reps", t:"10"},
          {n:"Remo Pendlay", s:"4", r:"8 reps", t:"9"},
          {n:"Curl barra EZ", s:"3", r:"10 reps", t:"6"},
          {n:"Cinta intervalos", s:"1", r:"12 min", t:"10"}
        ]},
        { tipo: "Legs + core", ejercicios: [
          {n:"Sentadilla búlgara", s:"4", r:"10 reps", t:"10"},
          {n:"Peso muerto", s:"4", r:"8 reps", t:"10"},
          {n:"Prensa unilateral", s:"3", r:"12 reps", t:"8"},
          {n:"Rueda abdominal", s:"4", r:"12 reps", t:"6"}
        ]}
      ]
    },
    casa: {
      principiante: [
        { tipo: "Full Body A", ejercicios: [
          {n:"Jumping jacks", s:"3", r:"30 seg", t:"5"},
          {n:"Sentadillas", s:"3", r:"15 reps", t:"6"},
          {n:"Flexiones rodillas", s:"3", r:"10 reps", t:"6"},
          {n:"Plancha", s:"3", r:"20 seg", t:"5"}
        ]},
        { tipo: "Cardio suave", ejercicios: [
          {n:"Marcha en el lugar", s:"1", r:"10 min", t:"10"},
          {n:"Step-ups (silla)", s:"3", r:"12 reps", t:"6"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"},
          {n:"Elevaciones de cadera", s:"3", r:"15 reps", t:"6"}
        ]},
        { tipo: "Full Body B", ejercicios: [
          {n:"Skipping suave", s:"3", r:"30 seg", t:"5"},
          {n:"Sentadilla sumo", s:"3", r:"15 reps", t:"6"},
          {n:"Superman", s:"3", r:"12 reps", t:"5"},
          {n:"Fondos tríceps silla", s:"3", r:"10 reps", t:"6"}
        ]}
      ],
      intermedio: [
        { tipo: "HIIT cuerpo completo", ejercicios: [
          {n:"Burpees", s:"4", r:"10 reps", t:"8"},
          {n:"Flexiones", s:"4", r:"15 reps", t:"7"},
          {n:"Saltos de tijera", s:"3", r:"30 seg", t:"6"},
          {n:"Mountain climbers", s:"3", r:"20 reps", t:"6"}
        ]},
        { tipo: "Tren inferior", ejercicios: [
          {n:"Sentadilla búlgara", s:"4", r:"12 reps", t:"10"},
          {n:"Hip thrust con mochila", s:"4", r:"15 reps", t:"8"},
          {n:"Estocadas inversas", s:"3", r:"12 reps", t:"7"},
          {n:"Sentadilla saltando", s:"3", r:"10 reps", t:"6"}
        ]},
        { tipo: "Upper + core", ejercicios: [
          {n:"Flexiones diamante", s:"4", r:"12 reps", t:"8"},
          {n:"Remo con mochila", s:"4", r:"12 reps", t:"8"},
          {n:"Plancha lateral", s:"3", r:"30 seg", t:"6"},
          {n:"Elevación de piernas", s:"3", r:"15 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "Push explosivo", ejercicios: [
          {n:"Flexiones con aplauso", s:"5", r:"10 reps", t:"8"},
          {n:"Fondos entre sillas", s:"4", r:"12 reps", t:"7"},
          {n:"Pica push-up", s:"4", r:"10 reps", t:"7"},
          {n:"Burpees con salto", s:"4", r:"12 reps", t:"7"}
        ]},
        { tipo: "Pull + core", ejercicios: [
          {n:"Dominadas barra puerta", s:"5", r:"8 reps", t:"10"},
          {n:"Remo invertido mesa", s:"4", r:"12 reps", t:"8"},
          {n:"L-sit (suelo)", s:"3", r:"20 seg", t:"6"},
          {n:"Rueda abdominal", s:"4", r:"10 reps", t:"6"}
        ]},
        { tipo: "Legs power", ejercicios: [
          {n:"Pistol squat asistido", s:"4", r:"8 reps", t:"10"},
          {n:"Saltos al cajón", s:"4", r:"10 reps", t:"8"},
          {n:"Nordic curl", s:"3", r:"6 reps", t:"8"},
          {n:"Sentadilla sissy", s:"3", r:"12 reps", t:"6"}
        ]}
      ]
    }
  },
  masa: {
    gimnasio: {
      principiante: [
        { tipo: "Pecho & Tríceps", ejercicios: [
          {n:"Press banca plano", s:"4", r:"10 reps", t:"10"},
          {n:"Press inclinado mancuernas", s:"3", r:"12 reps", t:"8"},
          {n:"Extensión tríceps polea", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Espalda & Bíceps", ejercicios: [
          {n:"Jalón al pecho", s:"4", r:"10 reps", t:"10"},
          {n:"Remo en polea baja", s:"3", r:"12 reps", t:"8"},
          {n:"Curl de bíceps", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Piernas", ejercicios: [
          {n:"Sentadilla en Smith", s:"4", r:"10 reps", t:"10"},
          {n:"Leg press", s:"3", r:"12 reps", t:"8"},
          {n:"Extensión cuádriceps", s:"3", r:"12 reps", t:"7"}
        ]}
      ],
      intermedio: [
        { tipo: "Push (PPL)", ejercicios: [
          {n:"Press banca", s:"4", r:"8 reps", t:"10"},
          {n:"Press inclinado barra", s:"4", r:"8 reps", t:"9"},
          {n:"Press militar", s:"3", r:"10 reps", t:"8"},
          {n:"Fondos lastre", s:"3", r:"8 reps", t:"8"}
        ]},
        { tipo: "Pull (PPL)", ejercicios: [
          {n:"Peso muerto", s:"4", r:"6 reps", t:"12"},
          {n:"Dominadas supino", s:"4", r:"8 reps", t:"9"},
          {n:"Remo barra", s:"4", r:"8 reps", t:"9"},
          {n:"Curl martillo", s:"3", r:"10 reps", t:"6"}
        ]},
        { tipo: "Legs (PPL)", ejercicios: [
          {n:"Sentadilla trasera", s:"5", r:"8 reps", t:"12"},
          {n:"Prensa 45°", s:"4", r:"10 reps", t:"9"},
          {n:"Peso muerto rumano", s:"4", r:"10 reps", t:"8"},
          {n:"Gemelos de pie", s:"4", r:"15 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "Pecho & Hombros", ejercicios: [
          {n:"Press banca barra 5x5", s:"5", r:"5 reps", t:"12"},
          {n:"Press inclinado 30°", s:"4", r:"6 reps", t:"10"},
          {n:"Press Arnold", s:"4", r:"8 reps", t:"8"},
          {n:"Aperturas cables", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Espalda & Bíceps", ejercicios: [
          {n:"Peso muerto sumo", s:"4", r:"5 reps", t:"12"},
          {n:"Remo Pendlay", s:"5", r:"5 reps", t:"11"},
          {n:"Dominadas lastradas", s:"4", r:"6 reps", t:"9"},
          {n:"Curl concentración", s:"3", r:"10 reps", t:"6"}
        ]},
        { tipo: "Piernas & Core", ejercicios: [
          {n:"Sentadilla frontal", s:"5", r:"5 reps", t:"12"},
          {n:"Sentadilla búlgara", s:"4", r:"8 reps", t:"10"},
          {n:"Curl femoral", s:"4", r:"10 reps", t:"8"},
          {n:"Rueda abdominal", s:"4", r:"12 reps", t:"6"}
        ]}
      ]
    },
    casa: {
      principiante: [
        { tipo: "Pecho & Tríceps", ejercicios: [
          {n:"Flexiones estándar", s:"4", r:"12 reps", t:"8"},
          {n:"Flexiones inclinadas", s:"3", r:"12 reps", t:"7"},
          {n:"Fondos tríceps silla", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Espalda & Bíceps", ejercicios: [
          {n:"Remo mochila cargada", s:"4", r:"12 reps", t:"9"},
          {n:"Remo invertido mesa", s:"3", r:"12 reps", t:"8"},
          {n:"Curl mancuernas casa", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Piernas", ejercicios: [
          {n:"Sentadillas", s:"4", r:"15 reps", t:"7"},
          {n:"Estocadas alternas", s:"3", r:"12 reps", t:"7"},
          {n:"Hip thrust suelo", s:"4", r:"15 reps", t:"7"}
        ]}
      ],
      intermedio: [
        { tipo: "Push", ejercicios: [
          {n:"Flexiones manos juntas", s:"4", r:"12 reps", t:"8"},
          {n:"Pica push-up", s:"4", r:"10 reps", t:"8"},
          {n:"Fondos sillas", s:"4", r:"12 reps", t:"7"},
          {n:"Flexiones declinadas", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Pull", ejercicios: [
          {n:"Dominadas barra puerta", s:"5", r:"8 reps", t:"12"},
          {n:"Remo toalla puerta", s:"4", r:"12 reps", t:"8"},
          {n:"Remo mochila", s:"4", r:"12 reps", t:"8"}
        ]},
        { tipo: "Legs", ejercicios: [
          {n:"Sentadilla búlgara", s:"4", r:"12 reps", t:"10"},
          {n:"Hip thrust con mochila", s:"4", r:"15 reps", t:"8"},
          {n:"Sentadilla sissy", s:"3", r:"12 reps", t:"7"},
          {n:"Puente glúteo unilateral", s:"3", r:"12 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "Push explosivo", ejercicios: [
          {n:"Flexiones aplauso", s:"5", r:"10 reps", t:"9"},
          {n:"Pica push-up strict", s:"5", r:"10 reps", t:"9"},
          {n:"Fondos profundos", s:"4", r:"12 reps", t:"8"},
          {n:"Flexiones con elevación", s:"4", r:"10 reps", t:"7"}
        ]},
        { tipo: "Pull avanzado", ejercicios: [
          {n:"Dominadas pronas estrictas", s:"5", r:"8 reps", t:"12"},
          {n:"Dominadas supinas", s:"4", r:"8 reps", t:"10"},
          {n:"Remo invertido elevado", s:"4", r:"12 reps", t:"8"}
        ]},
        { tipo: "Legs power", ejercicios: [
          {n:"Pistol squat", s:"5", r:"6 reps", t:"12"},
          {n:"Sentadilla saltando", s:"4", r:"10 reps", t:"8"},
          {n:"Nordic curl sofa", s:"4", r:"6 reps", t:"9"},
          {n:"Glute drive unilateral", s:"3", r:"12 reps", t:"6"}
        ]}
      ]
    }
  },
  forma: {
    gimnasio: {
      principiante: [
        { tipo: "Full Body suave", ejercicios: [
          {n:"Cinta ritmo moderado", s:"1", r:"15 min", t:"15"},
          {n:"Sentadilla en máquina", s:"3", r:"12 reps", t:"7"},
          {n:"Remo en polea", s:"3", r:"12 reps", t:"7"},
          {n:"Plancha", s:"3", r:"20 seg", t:"5"}
        ]},
        { tipo: "Movilidad + cardio", ejercicios: [
          {n:"Elíptica", s:"1", r:"15 min", t:"15"},
          {n:"Estiramientos dinámicos", s:"1", r:"10 min", t:"10"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"}
        ]},
        { tipo: "Full body mantenimiento", ejercicios: [
          {n:"Bicicleta estática", s:"1", r:"15 min", t:"15"},
          {n:"Press pecho máquina", s:"3", r:"12 reps", t:"7"},
          {n:"Jalón al pecho", s:"3", r:"12 reps", t:"7"}
        ]}
      ],
      intermedio: [
        { tipo: "Tonificación superior", ejercicios: [
          {n:"Press banca", s:"3", r:"12 reps", t:"8"},
          {n:"Remo con barra", s:"3", r:"12 reps", t:"8"},
          {n:"Elíptica", s:"1", r:"15 min", t:"15"}
        ]},
        { tipo: "Tonificación inferior", ejercicios: [
          {n:"Sentadilla libre", s:"3", r:"12 reps", t:"8"},
          {n:"Estocadas", s:"3", r:"12 reps", t:"7"},
          {n:"Cinta intervalos", s:"1", r:"12 min", t:"12"}
        ]},
        { tipo: "Full body equilibrado", ejercicios: [
          {n:"Goblet squat", s:"3", r:"12 reps", t:"7"},
          {n:"Remo mancuerna", s:"3", r:"12 reps", t:"7"},
          {n:"Plancha", s:"3", r:"30 seg", t:"5"}
        ]}
      ],
      avanzado: [
        { tipo: "Fuerza funcional", ejercicios: [
          {n:"Sentadilla búlgara", s:"4", r:"10 reps", t:"9"},
          {n:"Press Arnold", s:"4", r:"10 reps", t:"8"},
          {n:"Dominadas", s:"3", r:"8 reps", t:"8"}
        ]},
        { tipo: "Cardio + fuerza", ejercicios: [
          {n:"HIIT cinta", s:"1", r:"15 min", t:"15"},
          {n:"Peso muerto rumano", s:"4", r:"10 reps", t:"9"},
          {n:"Rueda abdominal", s:"3", r:"12 reps", t:"6"}
        ]},
        { tipo: "Full body avanzado", ejercicios: [
          {n:"Burpees", s:"4", r:"12 reps", t:"8"},
          {n:"Prensa unilateral", s:"3", r:"12 reps", t:"8"},
          {n:"Curl barra EZ", s:"3", r:"10 reps", t:"6"}
        ]}
      ]
    },
    casa: {
      principiante: [
        { tipo: "Full Body suave", ejercicios: [
          {n:"Marcha en el lugar", s:"1", r:"10 min", t:"10"},
          {n:"Sentadillas", s:"3", r:"12 reps", t:"6"},
          {n:"Plancha", s:"3", r:"20 seg", t:"5"}
        ]},
        { tipo: "Movilidad", ejercicios: [
          {n:"Estiramientos dinámicos", s:"1", r:"10 min", t:"10"},
          {n:"Step-ups (silla)", s:"3", r:"10 reps", t:"6"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"}
        ]},
        { tipo: "Full Body mantenimiento", ejercicios: [
          {n:"Skipping suave", s:"3", r:"30 seg", t:"5"},
          {n:"Flexiones rodillas", s:"3", r:"10 reps", t:"6"},
          {n:"Superman", s:"3", r:"12 reps", t:"5"}
        ]}
      ],
      intermedio: [
        { tipo: "Tonificación general", ejercicios: [
          {n:"Flexiones", s:"3", r:"12 reps", t:"7"},
          {n:"Sentadilla sumo", s:"3", r:"15 reps", t:"7"},
          {n:"Plancha lateral", s:"3", r:"25 seg", t:"6"}
        ]},
        { tipo: "Cardio liviano", ejercicios: [
          {n:"Saltos de tijera", s:"3", r:"30 seg", t:"6"},
          {n:"Mountain climbers", s:"3", r:"20 reps", t:"6"},
          {n:"Estocadas inversas", s:"3", r:"12 reps", t:"7"}
        ]},
        { tipo: "Full body equilibrado", ejercicios: [
          {n:"Remo con mochila", s:"3", r:"12 reps", t:"8"},
          {n:"Hip thrust con mochila", s:"3", r:"15 reps", t:"7"},
          {n:"Elevación de piernas", s:"3", r:"15 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "Fuerza funcional", ejercicios: [
          {n:"Flexiones con aplauso", s:"4", r:"10 reps", t:"8"},
          {n:"Dominadas barra puerta", s:"4", r:"8 reps", t:"10"},
          {n:"Sentadilla saltando", s:"3", r:"10 reps", t:"7"}
        ]},
        { tipo: "Cardio + fuerza", ejercicios: [
          {n:"Burpees con salto", s:"4", r:"12 reps", t:"7"},
          {n:"L-sit (suelo)", s:"3", r:"20 seg", t:"6"},
          {n:"Rueda abdominal", s:"4", r:"10 reps", t:"6"}
        ]},
        { tipo: "Full body avanzado", ejercicios: [
          {n:"Pica push-up", s:"4", r:"10 reps", t:"7"},
          {n:"Nordic curl", s:"3", r:"6 reps", t:"8"},
          {n:"Remo invertido mesa", s:"3", r:"12 reps", t:"8"}
        ]}
      ]
    }
  },
  resistencia: {
    gimnasio: {
      principiante: [
        { tipo: "Cardio base", ejercicios: [
          {n:"Cinta ritmo continuo", s:"1", r:"20 min", t:"20"},
          {n:"Bicicleta estática", s:"1", r:"10 min", t:"10"},
          {n:"Plancha", s:"3", r:"20 seg", t:"5"}
        ]},
        { tipo: "Intervalos suaves", ejercicios: [
          {n:"Elíptica intervalos", s:"1", r:"18 min", t:"18"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"},
          {n:"Mountain climbers", s:"3", r:"20 reps", t:"6"}
        ]},
        { tipo: "Resistencia mixta", ejercicios: [
          {n:"Remo en máquina", s:"1", r:"15 min", t:"15"},
          {n:"Sentadilla en máquina", s:"3", r:"15 reps", t:"7"},
          {n:"Superman", s:"3", r:"12 reps", t:"5"}
        ]}
      ],
      intermedio: [
        { tipo: "Cardio intervalado", ejercicios: [
          {n:"HIIT cinta (30/30)", s:"1", r:"20 min", t:"20"},
          {n:"Sentadilla libre", s:"3", r:"15 reps", t:"8"},
          {n:"Rueda abdominal", s:"3", r:"12 reps", t:"6"}
        ]},
        { tipo: "Resistencia muscular", ejercicios: [
          {n:"Remo en máquina", s:"1", r:"20 min", t:"20"},
          {n:"Estocadas", s:"4", r:"15 reps", t:"8"},
          {n:"Burpees", s:"4", r:"12 reps", t:"8"}
        ]},
        { tipo: "Circuito metabólico", ejercicios: [
          {n:"Elíptica intervalos", s:"1", r:"18 min", t:"18"},
          {n:"Box jumps", s:"3", r:"10 reps", t:"6"},
          {n:"Goblet squat", s:"3", r:"15 reps", t:"7"}
        ]}
      ],
      avanzado: [
        { tipo: "Cardio largo", ejercicios: [
          {n:"Cinta carrera continua", s:"1", r:"30 min", t:"30"},
          {n:"Plancha", s:"3", r:"45 seg", t:"6"}
        ]},
        { tipo: "HIIT avanzado", ejercicios: [
          {n:"HIIT 20/40", s:"1", r:"25 min", t:"25"},
          {n:"Burpees con salto", s:"4", r:"12 reps", t:"7"},
          {n:"Rueda abdominal", s:"4", r:"12 reps", t:"6"}
        ]},
        { tipo: "Resistencia funcional", ejercicios: [
          {n:"Remo en máquina", s:"1", r:"25 min", t:"25"},
          {n:"Sentadilla búlgara", s:"4", r:"12 reps", t:"9"},
          {n:"Mountain climbers", s:"4", r:"20 reps", t:"6"}
        ]}
      ]
    },
    casa: {
      principiante: [
        { tipo: "Cardio base", ejercicios: [
          {n:"Marcha en el lugar", s:"1", r:"15 min", t:"15"},
          {n:"Jumping jacks", s:"3", r:"30 seg", t:"5"},
          {n:"Plancha", s:"3", r:"20 seg", t:"5"}
        ]},
        { tipo: "Intervalos suaves", ejercicios: [
          {n:"Skipping suave", s:"3", r:"30 seg", t:"5"},
          {n:"Step-ups (silla)", s:"3", r:"12 reps", t:"6"},
          {n:"Crunchs", s:"3", r:"15 reps", t:"6"}
        ]},
        { tipo: "Resistencia mixta", ejercicios: [
          {n:"Sentadilla sumo", s:"3", r:"15 reps", t:"6"},
          {n:"Elevaciones de cadera", s:"3", r:"15 reps", t:"6"},
          {n:"Superman", s:"3", r:"12 reps", t:"5"}
        ]}
      ],
      intermedio: [
        { tipo: "Cardio intervalado", ejercicios: [
          {n:"Saltos de tijera", s:"4", r:"30 seg", t:"6"},
          {n:"Mountain climbers", s:"4", r:"20 reps", t:"6"},
          {n:"Burpees", s:"4", r:"10 reps", t:"8"}
        ]},
        { tipo: "Resistencia muscular", ejercicios: [
          {n:"Sentadilla búlgara", s:"4", r:"15 reps", t:"9"},
          {n:"Flexiones", s:"4", r:"15 reps", t:"7"},
          {n:"Plancha lateral", s:"3", r:"30 seg", t:"6"}
        ]},
        { tipo: "Circuito metabólico", ejercicios: [
          {n:"Sentadilla saltando", s:"4", r:"10 reps", t:"7"},
          {n:"Flexiones diamante", s:"3", r:"12 reps", t:"7"},
          {n:"Elevación de piernas", s:"3", r:"15 reps", t:"6"}
        ]}
      ],
      avanzado: [
        { tipo: "HIIT avanzado", ejercicios: [
          {n:"Burpees con salto", s:"5", r:"12 reps", t:"8"},
          {n:"Pica push-up", s:"4", r:"10 reps", t:"7"},
          {n:"Sentadilla saltando", s:"4", r:"12 reps", t:"7"}
        ]},
        { tipo: "Resistencia funcional", ejercicios: [
          {n:"Dominadas barra puerta", s:"4", r:"8 reps", t:"10"},
          {n:"Nordic curl sofa", s:"3", r:"6 reps", t:"8"},
          {n:"Mountain climbers", s:"4", r:"20 reps", t:"6"}
        ]},
        { tipo: "Cardio largo", ejercicios: [
          {n:"Skipping intervalos", s:"1", r:"20 min", t:"20"},
          {n:"Plancha", s:"3", r:"45 seg", t:"6"}
        ]}
      ]
    }
  }
};

const DAYS_NAMES = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
const DAYS_SHORT = ["L","M","X","J","V","S","D"];

let selections = { objetivo: null, nivel: null, lugar: null, dias: 3, tiempo: 45 };
let completedDays = {};
let routineDays = [];

function select(btn, gridId) {
  document.querySelectorAll('#' + gridId + ' .option-btn').forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  btn.classList.add('selected');
  btn.setAttribute('aria-checked', 'true');
  if (gridId === 'objetivo-grid') selections.objetivo = btn.dataset.val;
  if (gridId === 'nivel-grid') selections.nivel = btn.dataset.val;
  if (gridId === 'lugar-grid') selections.lugar = btn.dataset.val;
}

function selectChip(btn, gridId) {
  document.querySelectorAll('#' + gridId + ' .chip-btn').forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  btn.classList.add('selected');
  btn.setAttribute('aria-checked', 'true');
  if (gridId === 'dias-grid') selections.dias = parseInt(btn.dataset.val);
  if (gridId === 'tiempo-grid') selections.tiempo = parseInt(btn.dataset.val);
}

function getRoutineData() {
  const obj = selections.objetivo || 'masa';
  const lugar = selections.lugar || 'gimnasio';
  const nivel = selections.nivel || 'principiante';
  const db = ROUTINES[obj] || ROUTINES.masa;
  const byLugar = db[lugar] || db.gimnasio;
  return byLugar[nivel] || byLugar.principiante;
}

function generateRoutine() {
  const dias = selections.dias;
  const tiempo = selections.tiempo;
  const data = getRoutineData();
  completedDays = {};
  routineDays = [];
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';

  const trainIdx = [];
  const step = Math.floor(7 / dias);
  for (let i = 0; i < dias; i++) trainIdx.push(i * step);

  let dataIdx = 0;
  for (let d = 0; d < 7; d++) {
    const isTrain = trainIdx.includes(d);
    const dayKey = 'day-' + d;
    if (isTrain) {
      const session = data[dataIdx % data.length];
      dataIdx++;
      routineDays.push({ key: dayKey, name: DAYS_NAMES[d], session });

      const exHtml = session.ejercicios.map(e => `
        <div class="exercise-item">
          <div>
            <div class="ex-name">${e.n}</div>
            <div class="ex-detail">${e.s} series · ${e.r} · ~${e.t} min</div>
          </div>
          <span class="ex-badge">${e.t}m</span>
        </div>
      `).join('');

      const totalMins = session.ejercicios.reduce((s,e)=>s+parseInt(e.t),0);

      grid.innerHTML += `
        <div class="day-card" id="card-${dayKey}">
          <div class="day-header">
            <div>
              <div class="day-name">${DAYS_NAMES[d]}</div>
              <div class="day-type">${session.tipo}</div>
            </div>
            <button class="complete-btn" id="btn-${dayKey}" onclick="toggleComplete('${dayKey}')" aria-label="Marcar como completado">
              <i class="ti ti-check" aria-hidden="true"></i>
            </button>
          </div>
          <div class="day-body">
            <div class="day-meta">
              <span><i class="ti ti-clock" aria-hidden="true" style="font-size:13px"></i> ~${Math.min(totalMins, tiempo)} min</span>
              <span><i class="ti ti-list" aria-hidden="true" style="font-size:13px"></i> ${session.ejercicios.length} ejercicios</span>
            </div>
            <div class="exercise-list">${exHtml}</div>
          </div>
        </div>
      `;
    } else {
      grid.innerHTML += `
        <div class="rest-card">
          <i class="ti ti-moon" aria-hidden="true"></i>
          <div style="font-weight:600;color:var(--fit-text);margin-bottom:0.25rem">${DAYS_NAMES[d]}</div>
          <div style="font-size:0.82rem">Día de descanso activo</div>
        </div>
      `;
    }
  }

  renderProgress();
  document.getElementById('stat-total').textContent = dias;
  document.getElementById('routine-section').classList.add('visible');
  setTimeout(() => document.getElementById('routine-section').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function toggleComplete(key) {
  completedDays[key] = !completedDays[key];
  const card = document.getElementById('card-' + key);
  const btn = document.getElementById('btn-' + key);
  if (completedDays[key]) {
    card.classList.add('completed');
    btn.classList.add('done');
  } else {
    card.classList.remove('completed');
    btn.classList.remove('done');
  }
  renderProgress();
}

function renderProgress() {
  const total = routineDays.length;
  const done = routineDays.filter(d => completedDays[d.key]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('pct-label').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('stat-done').textContent = done;

  let racha = 0, current = 0;
  for (const d of routineDays) {
    if (completedDays[d.key]) { current++; racha = Math.max(racha, current); }
    else current = 0;
  }
  document.getElementById('stat-racha').textContent = '🔥 ' + racha;

  const trainKeys = new Set(routineDays.map(d => d.key));
  const dotsEl = document.getElementById('week-dots');
  dotsEl.innerHTML = DAYS_SHORT.map((s,i) => {
    const key = 'day-' + i;
    const isTrain = trainKeys.has(key);
    const isDone = completedDays[key];
    let cls = 'week-dot';
    if (isDone) cls += ' active';
    else if (isTrain) cls += ' training';
    return `<div class="week-dot-wrap"><div class="${cls}">${isDone ? '<i class="ti ti-check" style="font-size:13px"></i>' : s}</div><div class="week-dot-label">${s}</div></div>`;
  }).join('');
}

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));
