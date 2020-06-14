import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter, NextRouter } from 'next/router'
import firebase from 'firebase'

// export const getStaticProps = async() => {
//     const fileItems: Object[] = []
//     const doc = await firebase.firestore().collection("public").get().then(snapshot => {
//         snapshot.docs.map(doc => {
//             return fileItems.push(doc.data())
//         })
//     })

//     return {
//         props: {
//             fileItems
//         }
//     }
// }

const FileViewer = () => {
    let router = useRouter()
    let queryId = router.query.id
    console.log("Query", queryId)
    const [imagePath, setPath] = useState()
    useEffect(() => {
        console.log("This is useEffect", queryId)
    }, [])
    if(queryId != undefined) {
        firebase.firestore().collection('public').doc(queryId.toString()).get().then(doc => {
            setPath(doc.data().imagePath)
        })
    }
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