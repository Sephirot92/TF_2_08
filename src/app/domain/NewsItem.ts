export class NewsItem {
    id: Number;
    title: String;
    header: String;
    content: String;
    author: String;
    img: String;

    constructor() {
        this.id = 0;
        this.title = "";
        this.header = "";
        this.content = "";
        this.author = "";
        this.img = "";
    }

    setAuthor(author: String) {
        this.author = author;
    }
}