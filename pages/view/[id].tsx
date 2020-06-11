import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import firebase from 'firebase'


const FileViewer = () => {
    const [imageSrc, setSrc] = useState('')
    const router = useRouter()
    let { id } = router.query

    //@ts-ignore
    if(id != undefined) {
        firebase.firestore().collection('public').doc(id.toString()).get().then(doc => {
            setSrc(doc.data().imagePath)
        })
    }

    return (
        <>
            <Helmet>
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
            </Helmet>
            <img src={imageSrc} />
        </>
    )
}

export default FileViewer