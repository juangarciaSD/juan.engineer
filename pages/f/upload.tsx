import React from 'react'
import { Helmet } from 'react-helmet'
import '../../public/lib/firebase'
import {
  MainContainer,
  Container,
  Profile,
  Name, 
  Position,
  GetFile,
  Uploader
} from '../../public/components/ui'
import SocialLink from '../../public/components/SocialLink'


const Upload = () => {
  
  const upload = () => {
    let uploader = document.getElementById("uploader");
    let inputFile = document.getElementById("inputFile");
    inputFile.click()

    inputFile.addEventListener("change", (e) => {
      //@ts-ignore
      var file = e.target.files[0];
      //@ts-ignore
      const storage = firebase.storage();
      let storageRef = storage.ref('me').child(file.name)

      //upload file
      let task = storageRef.put(file)

      task.on('state_changed', (snapshot) => {
        //@ts-ignore
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        uploader.value = percentage
      },
      function error(err) {
        console.log("There was an error", err)
      }, 
      function complete() {
        console.log('provide the new link for the image')
      })
      
    })
  }

  return(
    <>
    <Helmet>
      <style>{`
          body {
            padding: 0;
            margin: 0;
            overflow: hidden;
            font-family: 'Rubik', sans-serif;
          }

          a {
            padding: 5px 8px;
          }
        `}
      </style>
    </Helmet>
    <MainContainer />
    <Container>
      <Profile src="https://firebasestorage.googleapis.com/v0/b/tech-me-main.appspot.com/o/profile.jpg?alt=media&token=98b761eb-a169-4b2f-8c61-5cc8b26f541f"></Profile>
      <Name>Upload</Name>
      <Position>A terrible image upload service</Position>
    <input type="file" id="inputFile" hidden={true} accept="image/*, video/*, audio/*" />
    <GetFile onClick={upload}>Click here to upload</GetFile>
    <Uploader id="uploader"></Uploader>
    </Container>
    </>
  )
}

export default Upload