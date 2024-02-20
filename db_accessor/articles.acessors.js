import Connection from "../db/connection";
import mongoose from "mongoose";
//import Article from "../models/article.js";
class ArticlesAccessor {
    getArticleByName(articleTitle){
        async getArticleByName(articleTitle){
            const articleGotFromTheDB = await Article.findOne({title: articleTitle});
        }
    } //name of your data inside
    getAllArticles() {

    }
}

// I think we gotta catch up in order to use this stuff(from Monday's stuff, I'll add it later)