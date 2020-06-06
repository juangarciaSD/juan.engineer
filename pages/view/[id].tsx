import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
        await firebase.firestore().collection('public').doc(queryId).get().then(doc => {
            setImgLocation(doc.data().imagePath)
        })
    }

    return (
        <>
            <Helmet>
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
            </Helmet>
            <img src={imgLocation} />
            
        </>
    )
}

export default FileViewer