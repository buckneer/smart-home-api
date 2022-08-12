import {Request, Response} from 'express';
import log from '../utils';
import {addSource, changeName, changeState, deleteSource, getAllSources} from "../services/Source.service";
import {SourceDocument} from "../models/Source.model";


export async function handleGetAllSources(req: Request, res: Response) {
    try {
        let sources = await getAllSources();
        return res.send(JSON.stringify(sources))
    } catch (e: any) {
        log.error(e.message);
        return res.status(409).send(e.message)
    }
}

// export async function handle(req: Request, res: Response) {
//     try {
//
//     } catch (e: any) {
//         log.error(e.message);
//         return res.status(409).send(e.message)
//     }
// }

export async function handleAddSource(req: Request, res: Response) {
    try {
        let newSource = {
            name: req.body.name,
            state: false
        }

        let savedSource = await addSource(newSource) as SourceDocument;

        return res.send(JSON.stringify(savedSource))

    } catch (e: any) {
        log.error(e.message);
        return res.status(409).send(e.message)
    }
}

export async function handleDeleteSource(req: Request, res: Response) {
    try {
        let _id = req.body.id;

        let response = await deleteSource(_id);

        return res.sendStatus(200);
    } catch (e: any) {
        log.error(e.message);
        return res.status(409).send(e.message)
    }
}

export async function handleChangeName(req: Request, res: Response) {
    try {
        let id = req.body.id;
        let name = req.body.name;

        let newItem = await changeName(id, name) as SourceDocument;
        newItem.state = name;

        return res.send(newItem.toJSON())
    } catch (e: any) {
        log.error(e.message);
        return res.status(409).send(e.message)
    }
}

// export async function handleFindItem(req: Request, res: Response) {
//     try {
//
//     } catch (e: any) {
//         log.error(e.message);
//         return res.status(409).send(e.message)
//     }
// }






export async function handleStateChange(req: Request, res: Response) {
    try {
        let id = req.body.id;
        let state = req.body.state;

        let newItem = await changeState(id, state) as SourceDocument;
        newItem.state = state;

        return res.send(newItem.toJSON())
    } catch (e: any) {
        log.error(e.message);
        return res.status(409).send(e.message)
    }
}
