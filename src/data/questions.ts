export interface Question {
    text: string;
    options: string[];
    correct: number;
    bg: string;
}

export const QUESTIONS: Question[] = [
    {
        text: "¿Cuál es la mejor forma de ahorrar agua en casa?",
        options: ["Dejar el grifo abierto", "Tomar duchas cortas", "Lavar el auto con manguera"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué gas es el principal causante del calentamiento global?",
        options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Por qué es importante plantar árboles?",
        options: ["Purifican el aire", "Ensucian las calles", "Consumen mucha agua"],
        correct: 0,
        bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué fuente de energía es considerada renovable y limpia?",
        options: ["Carbón", "Energía solar", "Petróleo"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Cuál es la función principal de la capa de ozono?",
        options: ["Calentar la Tierra", "Protegernos de los rayos ultravioleta", "Dar color al cielo"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué tipo de transporte es más ecológico para distancias cortas?",
        options: ["Bicicleta", "Avión", "Automóvil"],
        correct: 0,
        bg: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Cómo podemos evitar la contaminación de los océanos?",
        options: ["Usando más plásticos", "Evitando derramar químicos en desagües", "Tirando basura en la playa"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué significa hacer 'compost'?",
        options: ["Quemar basura", "Convertir residuos orgánicos en abono", "Enterrar plástico"],
        correct: 1,
        bg: "https://images.unsplash.com/photo-1416879598555-220b8f385c73?q=80&w=1920&auto=format&fit=crop"
    }
];
