import { AppError } from "../errors/AppError.js";
import type { Request, Response, NextFunction } from "express";
export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ success: false, error: err.message })
    } else if (err instanceof Error) {
        return res.status(500).json({ success: false, error: err.message })
    } else {
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }


}