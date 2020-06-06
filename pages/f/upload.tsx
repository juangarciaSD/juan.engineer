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

// class File {
//   _id: string
//   downloadLink: string
//   imagePath: string
//   constructor(_id, downloadLink, imagePath) {
//     this._id = _id;
//     this.downloadLink = downloadLink;
//     this.imagePath = imagePath
//   }
// }

// let fileConverter = {
//   toFirestore: function(file) {
//       return {
//           _id: file._id,
//           downloadLink: file.downloadLink,
//           imagePath: file.imagePath
//           }
//   },
//   fromFirestore: function(snapshot, options){
//       const data = snapshot.data(options);
//       return new File(data._id, data.downloadLink, data.imagePath)
//   }
// }

const Upload = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [userAuthenticated, setUserAuth] = useState(false)

  //current user
  let [userEmail, setUserEmail] = useState('')
  let [userData, setUserData] = useState({})
 
  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("The user is logged in");
        getUserData(user)
        setUserEmail(user.email)
        setUserAuth(true)
      } else {
        setUserEmail('')
        setUserData({})
        setUserAuth(false)
        console.log("The user is not logged in");
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  const getUserData = async(user: firebase.User) => {
    setUserEmail(user.email)
    firebase.firestore().collection('user').doc(user.email).get().then(doc => {
      setUserData(JSON.stringify(doc.data()))
    })
  }

  const auth = async() => {
    await login(email, password).then(auth => {
      firebase.firestore().collection('users').doc(auth.user.email).get().then(doc => {
        setUserData(JSON.stringify(doc.data()))
      })
    })
  }

  const createUser = async() => {
    await create(email, password).then(auth => {
      firebase.firestore().collection('users').doc(auth.user.email).get().then(doc => {
        setUserData(JSON.stringify(doc.data()))
      })
    })
  }

  const upload = () => {
    const uploader = document.getElementById("uploader");
    const inputFile = document.getElementById("inputFile");
    inputFile.click()

    inputFile.addEventListener("change", (e: HTMLInputEvent) => {
      var file = e.target.files[0];

      const storage = firebase.storage();
      const ref = storage.ref(userEmail).child(file.name);

      const task = ref.put(file)

      task.on("state_changed", (snapshot) => {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //@ts-ignore
        uploader.value = percentage
      },
      function error(err) {
        console.log("Error:", err)
      },
      async function complete() {
        //@ts-ignore
        uploader.value = 0
        let downloadLink = ""
        let generatedId = ""
        generatedId = genId()
        await firebase.firestore().collection('public').doc(generatedId).get().then(doc => {
          if(doc && doc.exists) {
            generatedId = genId()
          }
        })
        await task.snapshot.ref.getDownloadURL().then(url => {
          downloadLink = url
        })
        const userData = {
          email: userEmail,
          files: [{
            _id: generatedId,
            downloadURL: downloadLink,
            imagePath: 'soon'
          }]
        }
        //upload file and object to firebase
        await firebase.firestore().collection('public').doc(generatedId).set({files: userData.files})
        await firebase.firestore().collection('users').doc(userEmail).set(userData)
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
    <Uploader id="uploader" value="0" max="100"></Uploader>
    <ModalContainer display={userAuthenticated}>
    <AuthContainer>
      <InputBox>
          <h1 style={{color: "#fff"}}>Login/Sign Up</h1>
          <Input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
          <div style={{textAlign: "center", display: "flex"}}>
            <AuthButton marginR="10px" onClick={auth}>Login</AuthButton>
            <AuthButton marginL="10px" onClick={createUser}>Create</AuthButton>
          </div>
      </InputBox>
    </AuthContainer>
    </ModalContainer>
    </Container>
    </>
  )
}

export default Upload