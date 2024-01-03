import { type Reference } from '../.contentlayer/generated/types.js'
import { allReferences } from '../.contentlayer/generated/index.mjs'

export function getLatest() {
    const latest_reference = allReferences.sort((a: Reference, b: Reference) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })[0]
    return latest_reference
}

export function getLatestProcessedDatetime() {
    const latest_reference = getLatest()
    return new Date(latest_reference.created_at)
}