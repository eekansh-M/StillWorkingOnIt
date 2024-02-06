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
}

export default PageController;