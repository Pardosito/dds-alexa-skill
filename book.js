class Book extends Media {
        constructor() {
            this._pages;
            this._bookDescription;
        }

        get_pages() {
            return this._pages;
        }

        set_pages(pages) {
            if (typeof(pages) != "Number" || pages == "" || pages == "0") {
                throw new Error("Invalid pages");
            }

            this._pages = pages;
        }

        get_description() {
            if (this._bookDescription == '') {
                throw new Error("Book has no description");
            }

            return this._bookDescription;
        }

        set_description(description) {
            if (typeof(description) != "String" || description == '') {
                throw new Error("Invalid description");
            }

            this._bookDescription = description;
        }

        get_reading_time() {
            if (this._pages = 0 || this._pages == '') {
                throw new Error("Unable to calculate, book has no pages");
            }

            time_in_minutes = this.get_pages() * 2; //Average reading time per page: 2 min aprox
            time_in_hours = time_in_minutes / 60;

            return time_in_hours;
        }
}