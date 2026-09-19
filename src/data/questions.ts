export interface Question {
    text: string;
    options: string[];
    correct: number;
    explanation: string;
    bg: string;
}

export const QUESTIONS: Question[] = [
    {
        text: "¿Cuál de estos es un residuo plástico?",
        options: ["Botella de plástico", "Hoja de árbol", "Piedra", "Rama"],
        correct: 0,
        explanation: "Las botellas de plástico son uno de los residuos más comunes que contaminan ríos y riberas.",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Dónde debemos colocar los residuos plásticos?",
        options: ["En el río", "En el suelo", "En el recipiente correspondiente", "En la calle"],
        correct: 2,
        explanation: "Depositar los residuos en el recipiente correcto evita que lleguen al río Huallaga.",
        bg: "https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué debemos hacer con una botella de plástico que ya no usamos?",
        options: ["Tirarla al río", "Dejarla en la ribera", "Colocarla en el lugar adecuado para su disposición o reciclaje", "Dejarla en el suelo"],
        correct: 2,
        explanation: "Reciclar o disponer correctamente las botellas protege la ribera de Cayhuaynita.",
        bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué pasa cuando hay muchos residuos plásticos en la ribera de un río?",
        options: ["Se contamina el ambiente", "El río se vuelve más limpio", "Aparecen más peces", "No pasa nada"],
        correct: 0,
        explanation: "Los plásticos contaminan el agua, dañan la fauna y afectan la salud de las comunidades cercanas.",
        bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué animal puede verse afectado por los residuos plásticos en un río?",
        options: ["Un pez 🐟", "Una piedra", "Una botella", "Una bolsa"],
        correct: 0,
        explanation: "Los peces confunden el plástico con alimento, lo que puede causarles la muerte.",
        bg: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Cuál de estas acciones ayuda a reducir los residuos plásticos?",
        options: ["Usar menos plásticos de un solo uso", "Tirar botellas al río", "Dejar bolsas en la ribera", "Arrojar plástico al suelo"],
        correct: 0,
        explanation: "Reducir el uso de plásticos de un solo uso es la forma más efectiva de disminuir la contaminación.",
        bg: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Debemos arrojar residuos plásticos al río Huallaga?",
        options: ["Sí", "No", "A veces", "Cuando hay mucha basura"],
        correct: 1,
        explanation: "¡Nunca! El río Huallaga es fuente de vida para muchas comunidades y especies.",
        bg: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1920&auto=format&fit=crop"
    },
    {
        text: "¿Qué podemos hacer para mantener limpia la ribera del río Huallaga?",
        options: ["Arrojar plástico al agua", "Dejar botellas en la orilla", "Recoger y disponer correctamente los residuos", "Esparcir la basura"],
        correct: 2,
        explanation: "Recoger residuos y disponerlos correctamente protege el ecosistema del río Huallaga.",
        bg: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1920&auto=format&fit=crop"
    }
];
