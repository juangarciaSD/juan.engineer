import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter, NextRouter } from 'next/router'
import firebase from 'firebase'

const FileViewer = () => {
    let router = useRouter()
    let queryId = router.query.id
    let [imagePath, setPath] = useState('')
    const getImage = () => {
        //@ts-ignore
        firebase.firestore().collection("public").doc(queryId).get().then(doc => {
            setPath(doc.data().imagePath)
            console.log(doc.data())
        })
    }

    useEffect(() => {
        getImage()
        router.events.off("routeChangeStart", getImage)
    }, [])
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

export default FileViewer