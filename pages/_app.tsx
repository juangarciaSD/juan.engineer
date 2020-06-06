import NextApp from 'next/app'
import React from 'react'
import firebase from 'firebase'
import { ThemeProvider } from 'styled-components'
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css'
import '../public/lib/firebase'
const theme = {
  primary: 'green',
}
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    // interface Global {
    //   [key: string]: any;
    // } 
    // (globalThis as Global).core = Core;
    interface Global {
      [key: string]: any;
    }
    (globalThis as Global).firebase = firebase;
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}