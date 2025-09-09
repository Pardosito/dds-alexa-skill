// SearchBookIntentHandler.js
function createSearchBookHandler(libraryInstance) {
    return {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
                handlerInput.requestEnvelope.request.intent.name === 'SearchBookIntent';
        },
        handle(handlerInput) {
            const { request } = handlerInput.requestEnvelope;
            const intent = request.intent;

            const title = intent.slots.title.value;
            if (!title) {
                return handlerInput.responseBuilder
                    .speak("Please provide the title of the book you are searching for.")
                    .getResponse();
            }

            const found = libraryInstance.find_media(title);
            const speakOutput = found
                ? found.get_description()
                : `No book with the title '${title}' was found in your library.`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
    };
}

module.exports = createSearchBookHandler;
