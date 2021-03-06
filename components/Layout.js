import Head from 'next/head' // HTML Head
import Header from '@components/Header' // Header component
import styles from '@styles/pages/Layout.module.scss' // Component styles

export default function Layout({ children }, isProfile) {
    return (
        <div>
            {/* Meta */}
            <Meta isProfile={isProfile} />

            {/* Header */}
            <Header />

            {/* Content container */}
            <div className={styles.container}>{children}</div>
        </div>
    )
}

// Meta
function Meta({ isProfile }) {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Cura Gallery</title>
            <meta name="title" content="Cura Gallery" />
            <meta
                name="description"
                content="Open protocols demand open access. Community-operated interface to ZoraOS."
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://cura.run/" />
            <meta property="og:title" content="Cura Gallery" />
            <meta
                property="og:description"
                content="Open protocols demand open access. Community-operated interface to ZoraOS."
            />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://cura.run/" />
            <meta property="twitter:title" content="Cura Gallery" />
            <meta
                property="twitter:description"
                content="Open protocols demand open access. Community-operated interface to ZoraOS."
            />

            {!isProfile ? (
                // If not profile page, display default meta
                <>
                    <meta
                        property="og:image"
                        content="https://cura.run/meta.png"
                    />
                    <meta
                        property="twitter:image"
                        content="https://cura.run/meta.png"
                    />
                </>
            ) : null}
        </Head>
    )
}
