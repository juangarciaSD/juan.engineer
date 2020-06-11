import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import firebase from 'firebase'


const FileViewer = () => {
    const router = useRouter()
    let { id } = router.query

    const getFile = async() => {
        let imageView = document.getElementById("imageView")
        //@ts-ignore
        await firebase.firestore().collection('public').doc(id).get().then(doc => {
            //@ts-ignore
            imageView.src = doc.data().imagePath
            console.log(doc.data())
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