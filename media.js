class Media {
    constructor() {
        if (this.constructor == Media) {
            throw new Error("Abstract class cannot be instantiated");
        }
        this._title;
        this._author;
        this._genre;
        this._status;
    }

    get_title() {
        return this._title;
    }

    set_title(title) {
        if (typeof(title) != "String" || title == '') {
            throw new Error("Invalid title.");
        }

        this._title = title;
    }

    get_author() {
        return this._author;
    }

    set_author(author) {
        if (typeof(author) != "String" || author == '') {
            throw new Error("Invalid author.");
        }

        this._author = author;
    }

    get_genre() {
        return this._genre;
    }

    set_genre(genre) {
        if (typeof(genre) != "String" || genre == '') {
            throw new Error("Invalid genre.");
        }

        this._genre = genre;
    }

    get_status() {
        return this._status;
    }

    set_status(status) {
        if (typeof(status) != "String" || status == '') {
            throw new Error("Invalid status.");
        }

        this._status = status;
    }

    get_description() {
        throw new Error("get_description method must be implemented");
    }

    set_description() {
        throw new Error("set_description method must be implemented");
    }

    get_reading_time() {
        throw new Error("get_reading_time mehtod must be implemented");
    }
}