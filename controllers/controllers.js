import path from "path";

class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/index.html");
        
    }

    static getMain(req, res) {
        res.sendFile(path.resolve() + "/main.html");
    }

    static getAccount(req, res) {
        res.sendFile(path.resolve() + "/account.html");
    }
    static getarticles(req,res){
        res.render("articles", {});
    }
}

export default PageController;