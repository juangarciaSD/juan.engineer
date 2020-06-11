import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import firebase from 'firebase'


const FileViewer = () => {
    const router = useRouter()

    useEffect(() => {
        getFile()
    });

    const getFile = async() => {
        const queryId = await router.query.id
        const imageView = document.getElementById('imageView')
        while(imageView != undefined || null) {
            firebase.firestore().collection("public").doc(queryId).get().then(doc => {
                
                imageView.src = doc.data().imagePath
            })
        }
    }

    return (
        <>
            <title>View File - juan.engineer</title>
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
            <img id="imageView" />
        </>
    )
}

export default FileViewer