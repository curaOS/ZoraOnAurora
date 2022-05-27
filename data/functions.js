import axios from 'axios' // Requests
import client from 'data' // GraphQL requests
import { ZORA_MEDIA_BY_ID } from '@data/queries' // GraphQL Queries

/**
 * Collect Zora media post by ID
 * @param {Number} id post number
 * @returns {Object} containing Zora media details
 */
export const getPostByID = async (id) => {
    // Collect post
    let post = await client.request(ZORA_MEDIA_BY_ID(id))

    post = post.media

    if (post == null) return

    console.log('POST: ', post)

    // Collect post metadata
    const metadata = await axios.get(checkIpfsUrl(post.metadataURI))

    post.metadata = metadata.data

    console.log('METADATA: ', metadata)

    // Only show Zora posts
    if (post.metadata.version !== 'zora-20210101') {
        return undefined
    }

    // If text media, collect post content
    if (metadata.data.mimeType.startsWith('text')) {
        const text = await axios.get(post.contentURI)
        post.contentURI = text.data
    }

    post.contentURI = checkIpfsUrl(post.contentURI)

    // Return post
    return post
}

const checkIpfsUrl = (url) =>
    url && String(url).startsWith('ipfs://')
        ? String(url).replace('ipfs://', 'https://ipfs.io/ipfs/')
        : url
