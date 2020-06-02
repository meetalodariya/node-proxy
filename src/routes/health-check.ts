import { Router } from "express";
import healthCheckController from "../controllers/health-check";

const router = Router();

router.get("/organization", healthCheckController.getOrganization);
router.get("/healthcheck", healthCheckController.getCheck);

export default router;
