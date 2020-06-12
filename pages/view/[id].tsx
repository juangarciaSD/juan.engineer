import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter, Router } from 'next/router'
import firebase from 'firebase'


const FileViewer = ({ imageData }) => {
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
            <img src={imageData.imagePath} />
        </>
    )
}

export async function getStaticPaths() {
    const doc = await firebase.firestore().collection("public").get()
    
    const paths = doc.docs.map((post) => ({
        params: { id: post.id }
    }))

    return {paths, fallback: true }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const doc = await firebase.firestore().collection("public").doc(params.id).get()
    const imageData = doc.data()

    // Pass post data to the page via props
    return { props: { imageData } }
}

export default FileViewer