import * as learnlog from './sdk/raindrop.js'
import { getLatestProcessedDatetime } from './sdk/contentlayer.js'


function renameKeys(obj: any, newKeys: any) {
    const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}


async function main() {
    const latest_learnings = await learnlog.getLatest()
    const unprocessed_references = latest_learnings
        ?.filter(learning => {
            return new Date(learning.created).getTime() > getLatestProcessedDatetime().getTime()
        }) || []

    for (const learning of unprocessed_references) {
        let {
            collection,
            collectionId,
            media,
            removed,
            creatorRef,
            sort,
            ...l
        } = renameKeys(learning, {
            created: 'created_at',
            lastUpdate: 'updated_at',
            creatorRef: 'user',
            collectionId: 'domain_id',
            _id: 'id'
        })
        l['user'] = 'artu-hnrq'

        console.log(l)
    }
}


main()