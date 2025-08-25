import { healthCheck } from "@/controllers/health-check";
import { Router } from "express";
const router = Router();

router.get("/health", healthCheck);

export { router };
