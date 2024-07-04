// Import necessary modules and libraries
import { Router } from "express";
import * as controller from '../controller/controller.js';
import Auth from "../middleware/auth.js";

const router = Router();
router.route('/fetch').get(controller.fetchData);
router.route('/addPlan').get(controller.addPlan);
export default router;




