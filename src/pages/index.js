import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
// import { ShaderComponent } from '../components/ShaderComponent'
import { GettingStartedCards } from '../components/GettingStartedCards'

export default function Home() {
  return (
    <>
      {/* <ShaderComponent /> */}
      <div>
        {/* <HomepageLogo className={styles.logoText} /> */}
        <h2 className={styles.headerSubtitle}>Create What's Missing</h2>
      </div>
      <main className={styles.layout}>
        <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>Getting Started</p>
          </div>
          <GettingStartedCards />
        </div>
      </main>
    </>
  )
}
