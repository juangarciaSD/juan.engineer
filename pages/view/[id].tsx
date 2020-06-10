import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import firebase from 'firebase'


const FileViewer = () => {
    const router = useRouter()

    useEffect(() => {
        const queryId = router.query.id
        getFile(queryId)
    }, []);

    const getFile = async(id: string | string[]) => {
        const imageView = document.getElementById('imageView')
        //@ts-ignore
        await firebase.firestore().collection("public").doc(id).get().then(doc => {
            //@ts-ignore
            imageView.src = doc.data().imagePath
        })
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