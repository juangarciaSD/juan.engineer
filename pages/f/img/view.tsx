import { Helmet } from 'react-helmet'

const FileViewer = () => {

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
                width: 1000px;
                max-height: 800px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `}</style>
            </Helmet>
            <img src="https://firebasestorage.googleapis.com/v0/b/juan.engineer/o/me%2Fme-background.jpg?alt=media&token=74b7fa63-6c0c-468c-85dd-c19692f18f27" />
        </>
    )
}

export default FileViewer