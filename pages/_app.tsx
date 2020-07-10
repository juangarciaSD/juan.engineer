import React from 'react'
import firebase from 'firebase'
import Tippy from 'tippy.js'
import '../public/lib/firebase'
import '../public/components/ui'

function MeApp({ Component, pageProps }) {
  globalThis.firebase = firebase
  const production = process.env.NODE_ENV === "production"
  return <Component {...pageProps} />
}

export default MeApp