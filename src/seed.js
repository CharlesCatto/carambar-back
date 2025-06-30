const Joke = require('./models/joke.model');
const jokes = [
    {
        question: "Quelle est la femelle du hamster ?",
        answer: "L'Amsterdam",
        category: "jeu de mots"
    },
    {
        question: "Que dit un oignon quand il se cogne ?",
        answer: "Aïe",
        category: "nature"
    },
    {
        question: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?",
        answer: "Parce que sinon ils tombent dans le bateau.",
        category: "absurde"
    },
    {
        question: "Quel est le comble pour un électricien ?",
        answer: "De ne pas être au courant.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les squelettes ne se battent-ils jamais entre eux ?",
        answer: "Parce qu’ils n’ont pas le cœur à ça.",
        category: "humour noir"
    },
    {
        question: "Quel est le sport préféré des insectes ?",
        answer: "Le criquet.",
        category: "nature"
    },
    {
        question: "Quel est le comble pour un jardinier ?",
        answer: "C’est de raconter des salades.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les poissons vivent-ils dans l'eau salée ?",
        answer: "Parce que l’eau poivrée les ferait éternuer.",
        category: "nature"
    },
    {
        question: "Qu’est-ce qui est jaune et qui attend ?",
        answer: "Jonathan.",
        category: "absurde"
    },
    {
        question: "Quel est l’animal le plus heureux ?",
        answer: "Le hibou, parce que sa femme est chouette.",
        category: "jeu de mots"
    },
    {
        question: "Quel est le comble pour un facteur ?",
        answer: "De perdre son sang-froid.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les maths sont tristes ?",
        answer: "Parce qu'elles ont trop de problèmes.",
        category: "école"
    },
    {
        question: "Quel est le fruit le plus patient ?",
        answer: "La poire, parce qu’elle attend.",
        category: "nature"
    },
    {
        question: "Que fait une fraise sur un cheval ?",
        answer: "Tagada tagada !",
        category: "absurde"
    },
    {
        question: "Pourquoi les poules n’ont-elles pas de seins ?",
        answer: "Parce que les coqs n’ont pas de mains.",
        category: "absurde"
    },
    {
        question: "Que dit une imprimante dans l’eau ?",
        answer: "J’ai papier !",
        category: "technologie"
    },
    {
        question: "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
        answer: "Parce que sinon ils tombent sur le pont.",
        category: "absurde"
    },
    {
        question: "Quel est le comble pour un écolier ?",
        answer: "Ne pas être au courant du programme.",
        category: "école"
    },
    {
        question: "Pourquoi les girafes ont-elles un long cou ?",
        answer: "Parce que leurs pieds sentent mauvais.",
        category: "absurde"
    },
    {
        question: "Qu’est-ce qui court et qui se jette ?",
        answer: "Un steak haché.",
        category: "absurde"
    },
    {
        question: "Pourquoi les vampires ne bronzent-ils jamais ?",
        answer: "Parce qu’ils évitent les coups de soleil.",
        category: "humour noir"
    },
    {
        question: "Quel est le comble pour un boulanger ?",
        answer: "C’est de ne pas être dans son pain.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les abeilles vont-elles à l’école ?",
        answer: "Pour avoir de bonnes notes en butinage.",
        category: "nature"
    },
    {
        question: "Que fait un crocodile quand il rencontre une superbe femelle ?",
        answer: "Il Lacoste.",
        category: "jeu de mots"
    },
    {
        question: "Quel est le comble pour un musicien ?",
        answer: "De perdre la mesure.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les montagnes ne se rencontrent jamais ?",
        answer: "Parce qu’elles sont trop fières.",
        category: "absurde"
    },
    {
        question: "Comment appelle-t-on un chat qui a tout compris ?",
        answer: "Un chat-luminé.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les feuilles tombent-elles en automne ?",
        answer: "Parce qu’elles se laissent aller.",
        category: "nature"
    },
    {
        question: "Qu’est-ce qui est vert et qui pousse au fond du jardin ?",
        answer: "Un petit pois.",
        category: "absurde"
    },
    {
        question: "Pourquoi les fantômes détestent-ils la pluie ?",
        answer: "Parce qu’elle les traverse.",
        category: "humour noir"
    },
    {
        question: "Pourquoi les ordinateurs n’aiment-ils pas les vacances ?",
        answer: "Parce qu’ils préfèrent les pauses-cafés.",
        category: "technologie"
    },
    {
        question: "Quel est le comble pour un horloger ?",
        answer: "Perdre la notion du temps.",
        category: "jeu de mots"
    },
    {
        question: "Pourquoi les chauves-souris aiment la nuit ?",
        answer: "Parce que le jour, elles sont mal coiffées.",
        category: "humour noir"
    },
    {
        question: "Comment appelle-t-on un chien qui fait de la magie ?",
        answer: "Un labracadabrador.",
        category: "jeu de mots"
    },
    {
        question: "Que fait un mouton dans un bateau ?",
        answer: "Il fait bêêêler.",
        category: "absurde"
    },
    {
        question: "Quel est le comble pour un informaticien ?",
        answer: "Ne pas avoir la touche.",
        category: "technologie"
    },
    {
        question: "Pourquoi les mouettes volent au bord de la mer ?",
        answer: "Parce que si elles volaient au bord de l’eau douce, ce seraient des poulettes.",
        category: "absurde"
    },
    {
        question: "Que dit un citron quand il se fait écraser ?",
        answer: "Aïe, jus !",
        category: "jeu de mots"
    },
    {
        question: "Quel est le fruit le plus souriant ?",
        answer: "La banane.",
        category: "nature"
    },
    {
        question: "Pourquoi les clowns n’aiment pas l’ascenseur ?",
        answer: "Parce que ça les fait redescendre.",
        category: "absurde"
    }
];




async function seed() {
    try {
        await Joke.sync({ force: true }); 
        await Joke.bulkCreate(jokes);
        console.log('Database seeded with original format');
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

seed();