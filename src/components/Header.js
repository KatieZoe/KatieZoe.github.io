import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fas fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Katie Lugton</h1>
        <p>Junior Web Developer</p>
        <ul className="icons">
          <li>
            <a
              href="mailto:klugton@hotmail.com"
              className="icon fa-inbox"
            >
              <span className="label">email</span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href="https://github.com/KatieZoe"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href="https://www.linkedin.com/in/katielugton/"
              className="icon fab fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        <p>
      </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
