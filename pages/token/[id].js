import FullPost from '@components/FullPost' // Post component
import Layout from '@components/Layout' // Layout
import { useState, useEffect } from 'react' // React state management
import { getPostByID } from '@data/functions' // Post collection helper
import styles from '@styles/pages/Home.module.scss' // Component styles
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    const [post, setPost] = useState() // Posts array

    /**
     * Collects post using query id
     */
    const collectPost = async () => {
        if (typeof router.query.id != 'undefined') {
            const post = await getPostByID(router.query.id)
            setPost(post)
        }
    }

    useEffect(collectPost, [router.query.id])

    return (
        <Layout>
            {post ? (
                // If posts array contains > 0 posts
                <>
                    {/*{post.id}*/}
                    <FullPost
                        key={post.id}
                        id={post.id}
                        creatorAddress={post.creator.id}
                        ownerAddress={post.owner.id}
                        createdAtTimestamp={post.createdAtTimestamp}
                        mimeType={post.metadata.mimeType}
                        contentURI={post.contentURI}
                        name={post.metadata.name}
                        description={post.metadata.description}
                    />
                </>
            ) : (
                <div className={styles.loading}>
                    <h3>Loading...</h3>
                </div>
            )}
        </Layout>
    )
}
