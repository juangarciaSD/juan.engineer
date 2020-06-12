import { useEffect, useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import firebase from 'firebase'

const FileViewer = ({ imagePath }) => {
    return (
        <>
            <Head>
            <title>View File - juan.engineer</title>
                <style>{`
            body {
                margin: 0px;
                background: #0e0e0e;
                justify-content: center;
            }
            
            img {
                -webkit-user-select: none;
                position: absolute;
                cursor: zoom-in;
                max-width: 1000px;
                max-height: 100vh;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            `}</style>
            </Head>
            <img src={imagePath} />
        </>
    )
}

export async function getStaticPaths() {
    const doc = await firebase.firestore().collection("public").get()
    
    const paths = doc.docs.map((post) => ({
        params: { id: post.id }
    }))

    return {paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) =>  {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const doc = await firebase.firestore().collection("public").doc(params.id.toString()).get()
    const imagePath = doc.data().imagePath

    // Pass post data to the page via props
    return { props: { imagePath } }
}

export default FileViewer