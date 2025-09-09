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
                    .speak("Por favor dame el título del libro que buscas")
                    .getResponse();
            }

            const found = libraryInstance.find_media(title);
            const speakOutput = found
                ? found.get_description()
                : `Ningún libro con el título '${title}' se encontró en tu librería.`;

            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
    };
}

module.exports = createSearchBookHandler;
