import {Express, Request, Response} from "express";
import {
    handleAddSource, handleChangeName,
    handleDeleteSource,
    handleGetAllSources,
    handleStateChange
} from "./controllers/Source.controller";


export default function(app: Express) {


    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));


    app.get("/api/sources", handleGetAllSources);
    app.put("/api/source", handleStateChange);
    app.post("/api/source", handleAddSource);
    app.delete("/api/source", handleDeleteSource);
    app.put("/api/source/name", handleChangeName);

}
