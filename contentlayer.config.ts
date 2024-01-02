import {
    defineDocumentType,
    defineNestedType,
    makeSource
} from '@contentlayer/source-files'


const Highlight = defineNestedType(() => ({
    name: 'Highlight',
    fields: {
        _id: { type: 'string', required: true },
        text: { type: 'string', required: true },
        note: { type: 'string' },
        created_at: { type: 'date', required: true },
        updated_at: { type: 'date', required: true },
    }
}))


const Reference = defineDocumentType(() => ({
    name: 'Reference',
    filePathPattern: `**/*.md`,
    fields: {
        _id: { type: 'number', required: true },
        link: { type: 'string', required: true },
        title: { type: 'string', required: true },
        excerpt: { type: 'markdown', },
        note: { type: 'string' },
        user: { type: 'string', required: true },
        cover: { type: 'string', },
        tags: { type: 'list', of: { type: 'string' }, },
        important: { type: 'boolean', },
        created_at: { type: 'date', required: true },
        updated_at: { type: 'date', required: true },
        highlights: { type: 'list', of: Highlight },
        domain: { type: 'string', required: true },
    }
}))


export default makeSource({
    contentDirPath: process.env.CONTENT_DIR || 'content',
    documentTypes: [
        Reference,
    ],
    markdown: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})