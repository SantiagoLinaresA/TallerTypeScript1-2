var Serie = /** @class */ (function () {
    function Serie(id, name, channel, description, seasons, image, url) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.channel = channel;
        this.seasons = seasons;
        this.url = url;
    }
    return Serie;
}());
export { Serie };
