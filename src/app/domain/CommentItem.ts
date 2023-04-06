import { UserInfoService } from "../services/UserInfoService";

export class CommentItem {
    id: Number;
    newsId:Number;
    title: String;
    header: String;
    content: String;
    author: String;
    img: String;

    constructor(private userInfoService: UserInfoService) {
        this.id = 0;
        this.newsId = 0;
        this.title = "";
        this.header = "";
        this.content = "";
        this.author = userInfoService.getLoggedUserData().fullname();
        this.img = "";
    }

    
}