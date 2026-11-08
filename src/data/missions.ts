export interface Mission {
    id: number;
    title: string;
    question: string;
    instruction: string;
    audio: string;
    celebrationAudio: string;
    successMessage: string;
    type: 'drag-single' | 'choice-two' | 'collect-multi' | 'choice-three' | 'thumbs' | 'choice-scene' | 'drag-target' | 'sort-bins';
}

export const MISSIONS: Mission[] = [
    {
        id: 1,
        title: "1. La botella perdida",
        question: "¿Dónde debemos poner la botella?",
        instruction: "Lleva la botella al tacho verde",
        audio: "/Audios/Kermit 1.mp3",
        celebrationAudio: "/Audios/kermit 1 respuesta.mp3",
        successMessage: "¡Muy bien! La basura va al tacho.",
        type: 'drag-single'
    },
    {
        id: 2,
        title: "2. El río feliz",
        question: "¿Cuál río queremos para nuestros peces?",
        instruction: "Toca el río limpio",
        audio: "/Audios/KERMIT 2.mp3",
        celebrationAudio: "/Audios/kermit 2 respuesta.mp3",
        successMessage: "¡Excelente! Cuidemos nuestro río.",
        type: 'choice-two'
    },
    {
        id: 3,
        title: "3. Limpiemos el Huallaga",
        question: "¡Ayúdame a limpiar el río! Recoge la basura.",
        instruction: "Arrastra o toca solo los residuos al tacho",
        audio: "/Audios/kermit 3.mp3",
        celebrationAudio: "/Audios/kermit 3 ganador.mp3",
        successMessage: "¡Qué río más limpio!",
        type: 'collect-multi'
    },
    {
        id: 4,
        title: "4. ¿Basura o naturaleza?",
        question: "¿Cuál de estos no debe estar en el río?",
        instruction: "Toca la botella de plástico",
        audio: "/Audios/kermit 4.mp3",
        celebrationAudio: "/Audios/kermit 4 ganador.mp3",
        successMessage: "¡Muy bien!",
        type: 'choice-three'
    },
    {
        id: 5,
        title: "5. ¿Está bien hacerlo?",
        question: "¿Está bien tirar basura al río?",
        instruction: "Toca el 👎 (pulgar abajo)",
        audio: "/Audios/kermit 5.mp3",
        celebrationAudio: "/Audios/kermit 5 respuesta.mp3",
        successMessage: "¡Muy bien! Cuida el río.",
        type: 'thumbs'
    },
    {
        id: 6,
        title: "6. ¿Quién cuida el río?",
        question: "¿Quién está cuidando nuestro río?",
        instruction: "Toca al niño que recoge la basura",
        audio: "/Audios/kermit 6.mp3",
        celebrationAudio: "/Audios/kermit 6 ganador.mp3",
        successMessage: "¡Excelente Eco Explorador!",
        type: 'choice-scene'
    },
    {
        id: 7,
        title: "7. Ayuda al bagre",
        question: "¿Dónde quiere vivir nuestro amigo bagre?",
        instruction: "Arrastra o toca al bagre hacia el río limpio",
        audio: "/Audios/kermit 7.mp3",
        celebrationAudio: "/Audios/kermit 7 ganador.mp3",
        successMessage: "¡Qué feliz se siente!",
        type: 'drag-target'
    },
    {
        id: 8,
        title: "8. Cada cosa en su lugar",
        question: "¿En qué tacho va nuestra botella?",
        instruction: "Toca el tacho correcto de plástico",
        audio: "/Audios/kermit 8.mp3",
        celebrationAudio: "/Audios/kermit 8 ganador.mp3",
        successMessage: "¡Excelente reciclador!",
        type: 'sort-bins'
    }
];
