import axios, { AxiosRequestConfig } from 'axios'

const RAINDROP_API_KEY = '08b59711-5b35-41b1-9cb9-21209af67983';
const LEARNLOG_COLLECTION_ID = 32688179;


// Create an axios instance
const RAINDROP_API = axios.create({
    baseURL: 'https://api.raindrop.io/rest/v1',
    headers: {
        'Authorization': `Bearer ${RAINDROP_API_KEY}`
    }
})

type Raindrop = {
    _id: number;
    link: string;
    title: string;
    excerpt: string;
    note: string;
    type: string;
    user: {
        $ref: string;
        $id: number;
    };
    cover: string;
    media: {
        link: string;
        type: string;
    }[];
    tags: string[];
    important: boolean;
    reminder: {
        date: null | string;
    };
    removed: boolean;
    created: string;
    lastUpdate: string;
    collection: {
        $ref: string;
        $id: number;
        oid: number;
    };
    highlights: any[];
    domain: string;
    creatorRef: {
        _id: number;
        avatar: string;
        name: string;
        email: string;
    };
    sort: number;
    collectionId: number;
}

type RaindropResponse = {
    items: Raindrop[]
}

export async function getLatest() {
    try {
        const response = await RAINDROP_API.get<RaindropResponse>(
            `/raindrops/${LEARNLOG_COLLECTION_ID}`
        )
        return response.data.items
    } catch (error) {
        console.log(error);
    }
}