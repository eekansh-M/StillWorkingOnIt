import express from "express";
import path from "path";
import PageController from "../controllers/controllers.js";
const router = express.Router();

router.route("/").get(PageController.getHomepage);
router.route("/main").get(PageController.getMain);
router.route("/account").get(PageController.getAccount);
export default router;