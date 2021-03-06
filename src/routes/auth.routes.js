import { Router } from "express";
import {
  logout,
  refreshToken,
  signin,
  signup,
  profile,
} from "../controllers/auth.controller.js";
import { verifyAccessToken } from "../helpers/jwt_helpers.js";

const router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/refresh-token", refreshToken);

router.delete("/logout", logout);

router.get("/profile", verifyAccessToken, profile);

export default router;
