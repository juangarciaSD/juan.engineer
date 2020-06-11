import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import firebase from 'firebase'


const FileViewer = () => {
    let router = useRouter()
    let [imgLocation, setImgLocation] = useState('')

    useEffect(() => {
        getFile()
    });

    const getFile = async() => {
        let queryId = router.query.id
        console.log(queryId)
        //@ts-ignore
        await firebase.firestore().collection('public').doc(queryId).get().then(doc => {
            setImgLocation(doc.data().imagePath)
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
            <img src={imgLocation} />
        </>
    )
}

export default FileViewer