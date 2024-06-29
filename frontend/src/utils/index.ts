'use server';

import { Message } from "@/types";
import { apiServer } from "@/constants";

export async function fetchAllEmails(): Promise<Array<Message>> {
    const res = await fetch(`${apiServer}/v1/mails`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json(); 
}


export async function readEmail(id: number) {
    const res = await fetch(`${apiServer}/v1/mails/${id}`, {method: 'PATCH'});
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json(); 
}