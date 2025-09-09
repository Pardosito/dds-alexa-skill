class Library {
    constructor() {
        this._media_collection = [];
    }

    add_media(title, author) {
        this._media_collection.push({ title, author });
    }

    search_by_author() {
        return this._media_collection.map(media => `${media.title} by ${media.author}`).join(', ');
    }

    search_by_genre(genre) {
        return this._media_collection.filter(media => media.genre === genre);
    }

    find_media(title) {
        return this._media_collection.find(media => media.title === title);
    }

    get_all_media() {
        return this._media_collection;
    }
}