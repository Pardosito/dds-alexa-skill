const Book = require('./models/Book');
const libraryInstance = require('./models/libraryInstance');

const AddBookIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AddBookIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;

        const title = slots.title.value;
        const author = slots.author.value;
        const genre = slots.genre.value;
        const pages = parseInt(slots.pages.value, 10);

        if (!title || !author || !genre || isNaN(pages)) {
            const speakOutput = "Por favor, proporciona todos los datos del libro: título, autor, género y número de páginas.";
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }

        const newBook = new Book(title, author, genre, 'pendiente', pages);
        libraryInstance.add_media(newBook);

        const speakOutput = `El libro "${title}" de ${author} ha sido agregado a tu biblioteca.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};