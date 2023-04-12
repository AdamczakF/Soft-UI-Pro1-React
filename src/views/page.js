import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Soft UI Pro1</title>
        <meta property="og:title" content="Soft UI Pro1" />
      </Helmet>
      <Header></Header>
      <div className="page-hero">
        <div className="page-container1">
          <div className="page-card">
            <h1 className="page-text">Uh Oh! </h1>
            <h1 className="page-text1 HeadingOne">Error 404!</h1>
            <span className="page-text2">
              We looked really hard for the resource you requested, but it
              appears that it doesn&apos;t exist anymore :(
            </span>
            <div className="page-container2">
              <div className="page-container3">
                <a
                  href="mailto:contact@filipadamvczak.com?subject=Link Shortening 404 Error"
                  className="page-link"
                >
                  <PrimaryPinkButton
                    button="contact us"
                    className="page-component1"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <a
                href="https://filipadamczak.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link1"
              >
                <OutlineGrayButton
                  button="Continue Onwards"
                  className="page-component2"
                ></OutlineGrayButton>
              </a>
            </div>
            <div className="page-container4">
              <img
                alt="image"
                src="/playground_assets/logo%20compressed-200h.png"
                className="page-image"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="page-image1"
      />
    </div>
  )
}

export default Page
