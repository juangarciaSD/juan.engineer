import NextApp from 'next/app'
import React from 'react'
import '../public/lib/firebase'

function MeApp({ Component, pageProps }) {
  process.env.NODE_ENV === "production"
  return <Component {...pageProps} />
}
export default MeApp