// AddBookIntentHandler.js
const { Book } = require('./Library');

function createAddBookHandler(libraryInstance) {
    return {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
                handlerInput.requestEnvelope.request.intent.name === 'AddBookIntent';
        },
        handle(handlerInput) {
            const { request } = handlerInput.requestEnvelope;
            const intent = request.intent;

            const title = intent.slots.title.value;
            const author = intent.slots.author.value;
            const genre = intent.slots.genre.value;
            const pages = parseInt(intent.slots.pages.value);

            if (!title || !author || !genre || isNaN(pages)) {
                return handlerInput.responseBuilder
                    .speak("Missing or invalid information to add the book. Please provide title, author, genre, and number of pages.")
                    .getResponse();
            }

            const newBook = new Book(title, author, genre, pages);
            const success = libraryInstance.add_media(newBook);

            const speakOutput = success
                ? `Book '${title}' by ${author} added successfully.`
                : `A book with the title '${title}' already exists.`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
    };
}

module.exports = createAddBookHandler;
