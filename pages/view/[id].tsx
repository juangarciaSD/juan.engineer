import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import firebase from 'firebase'

const FileViewer = ({ imgLocation }) => {
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
            <img src={imgLocation} />
            
        </>
    )
}

FileViewer.getInitialProps = async() => {
    let router = useRouter()
    let queryId = router.query.id
    let imgPath;
    console.log(queryId)
    //@ts-ignore
    await firebase.firestore().collection('public').doc(queryId).get().then(doc => {
        return imgPath = doc.data().imagePath
    })

    return  { imgLocation: imgPath }
}

export default FileViewer