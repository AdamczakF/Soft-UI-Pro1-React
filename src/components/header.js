import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <a
            href="https://filipadamczak.com"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link Large"
          >
            Filip Adamczak
          </a>
          <span>{props.text}</span>
          <div className="header-container1">
            <div className="header-container2">
              <a
                href="mailto:contact@filipadamczak.com?subject=Link Shortening Service"
                className="header-link1"
              >
                <PrimaryPinkButton
                  button="Contact"
                  className="header-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu">
            <Link to="/" className="header-navlink1 Large">
              Home
            </Link>
            <span className="header-text1 Large">Profile</span>
            <span className="header-text2 Large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  text: 'ERROR 404 - NOT FOUND',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
