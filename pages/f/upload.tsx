import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import firebase from 'firebase'
import { login, create } from '../../public/lib/auth'
import { genId } from '../../public/lib/genId'
import '../../public/lib/firebase'
import {
  MainContainer,
  Container,
  Profile,
  Name, 
  Position,
  GetFile,
  Uploader,
  ModalContainer,
  AuthContainer,
  InputBox,
  Input,
  AuthButton
} from '../../public/components/ui'
import SocialLink from '../../public/components/SocialLink'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

const Upload = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [userAuthenticated, setUserAuth] = useState(false)
  let [userData, setUserData] = useState({})

  const auth = () => {
    
  }

  const upload = () => {
    const uploader = document.getElementById("uploader");
    const inputFile = document.getElementById("inputFile");
    inputFile.click()

    inputFile.addEventListener("change", (e: HTMLInputEvent) => {
      var file = e.target.files[0];

      const storage = firebase.storage();
      const ref = storage.ref(userData.email).child(file.name);

    })
  }

  // let publicImagesId = firebase.firestore().collection('public');

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user) {
  //       setUserAuth(true)
  //     } else {
  //       setUserAuth(false)
  //       setUserData({})
  //     }
  //   })
  // })

  // const auth = async () => {
  //   await login(email, password).then(auth => {
  //     firebase.firestore().collection('users').doc(auth.user.email).get().then(doc => {
        
  //     })
  //     setUserAuth(true)
  //   }).catch(err => {
  //     if(err.code === "auth/user-not-found") {
  //       let createdUser = create(email, password)
  //       setUserAuth(true)
  //     }
  //   })
    
  // }

  // const upload = () => {
  //   if(userData === {} || firebase.auth().currentUser === null) {
  //     setUserAuth(false)
  //   }

  //   let uploader = document.getElementById("uploader");
  //   let inputFile = document.getElementById("inputFile");
  //   inputFile.click()

  //   inputFile.addEventListener("change", (e) => {
  //     //@ts-ignore
  //     var file = e.target.files[0];
  //     //@ts-ignore
  //     const storage = firebase.storage();
  //     //@ts-ignore
  //     let storageRef = storage.ref(userData.email).child(file.name)

  //     //upload
  //     let task = storageRef.put(file)
  //     //@ts-ignore
  //     task.on('state_changed', (snapshot) => {
  //       let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       //@ts-ignore
  //       uploader.value = percentage
  //     },
  //     function error(err) {
  //       console.log("There was an error", err)
  //     }, 
  //     function complete() {
  //     console.log(task.snapshot.metadata)
  //     task.snapshot.ref.getDownloadURL().then(url => {
  //       let fileId = genId()
  //       let checkId = publicImagesId.doc(fileId).get().then(doc => {
  //         if(doc && doc.exists) {
  //           fileId = genId()
  //         }
  //         return fileId
  //       })
  //       let fileObject = {
  //         files: [{
  //           id: fileId,
  //           downloadURL: url,
  //           imageURL: 'soon'
  //         }]
  //       }

  //       firebase.firestore().collection('public').doc(fileId).set(fileObject)
  //       //@ts-ignore
  //       firebase.firestore().collection('users').doc(userData.email).update(fileObject)
  //     })
  //     })
      
  //   })
  // }

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
    <Uploader id="uploader" value="0" max="100"></Uploader>
    <ModalContainer display={userAuthenticated}>
    <AuthContainer>
      <InputBox>
          <h1 style={{color: "#fff"}}>Login/Sign Up</h1>
          <Input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
          <AuthButton onClick={auth}>Login/Sign Up</AuthButton>
      </InputBox>
    </AuthContainer>
    </ModalContainer>
    </Container>
    </>
  )
}

export default Upload