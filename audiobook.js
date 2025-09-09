class Audiobook extends Media {
    constructor() {
        this._duration;
        this._audiobookDescription;
    }

    get_duration() {
        return this._duration;
    }

    set_duration(duration) {
        if (typeof(duration) != "Number" || duration == '' || duration == 0) {
            throw new Error("Invalid duration");
        }

        this._duration = duration;
    }


    get_description() {
        if (this._audiobookDescription == '') {
            throw new Error("Book has no description");
        }

        return this._audiobookDescription
    }

    set_description(description) {
        if (typeof(description) != "String" || description == '') {
            throw new Error("Invalid description");
        }

        this._bookDescription = description;
    }

    get_reading_time() {
        if (this._duration = 0 || this._duration == '') {
            throw new Error("Unable to calculate, audiobook has no duration");
        }

        time_duration = this._duration * 0.95;

        return time_duration;
    }
}