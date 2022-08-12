import Source, {SourceDocument} from "../models/Source.model";
import {DocumentDefinition, FilterQuery} from "mongoose";


export async function getAllSources() {
    try {
        let sources = await Source.find() as SourceDocument[];
        return sources;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function addSource(input: DocumentDefinition<SourceDocument>) {
    try {
        return Source.create(input)
    } catch (e: any) {
        throw new Error(e);
    }
}


export async function deleteSource(_id: string) {
    try {
        return Source.deleteOne({_id})
    } catch (e: any) {
        throw new Error(e);
    }
}

export function findItem(query: FilterQuery<SourceDocument>) {
    return Source.findOne(query);
}

export function changeState(_id: string, state: boolean) {
    return Source.findByIdAndUpdate({_id}, {state})
}

export function changeName(_id: string, name: string) {
    return Source.findByIdAndUpdate({_id}, {name})
}
