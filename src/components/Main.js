import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import me from '../images/me.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main">
            <img src={me} alt="Katie walking down a path in the Royal National Park" />
          </span> */}
          <p>
            Update in progress...
          </p>
          {close}
        </article>
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <div>
            <h2> Wonder Tracker </h2>
            <h5>Outcomes Tracker for Graduate students </h5>
            <p>Wonder Tracker is an application to assist our student outcomes manager in tracking her students from different cohorts and their journey toward employment. The intended user is a huge Wonder Woman fan so another student and I came up with the idea to create Wonder Tracker. The tech stack is Ruby on Rails/Postgresql back end and React/Javascript front end. This project was an opportunity to tighten up my React skills and work in a paired programming environment before working on my own personal interest projects once the course ended.
            </p>
            <a
            target='_blank'
            rel='noreferrer noopener'
            href="https://wonder-tracker-client.herokuapp.com/">
            Open App
            </a>

            <br/>
            <br/>
          <div>
          <h2> Gahoot </h2>
          <h5>a Kahoot clone </h5>
            <p>The objective of this project was to create a clone of the trivia application Kahoot.  I worked in a group of 4 to create the MVP within a week and especially enjoyed working with my team mates on this project.  The tech stack used here was HTML/CSS, React/Javascript, Ruby on Rails, Postgresql, Heroku and Cloudinary.
            </p>
            <a
            target='_blank'
            rel='noreferrer noopener'
            href="https://gahoot-client.herokuapp.com/">
            Open App
            </a>
          <br/>
          <br/>
          </div>
          <h2> BigAsk </h2>
          <h5> BookMark Organiser </h5>
            <p>The objective of this project was to create a web application using the tools we have learnt by week 5 of the SEI course (HTML, CSS, Ruby, JQuery, Rails, SQL, Postgress, ActiveRecord, Bcrypt, Bootstrap, Heroku). I created a bookmark organiser application called 'BigAsk' to categorise and sort bookmarks for users and display them in a visually appealing way.
            </p>
            <a
            target='_blank'
            rel='noreferrer noopener'
            href="https://big-ask.herokuapp.com/login">
            Open App
            </a>
          <br/>
          <br/>
          </div>
          <div>
          <h2> Tic Tac Toe </h2>
          <h5> aka Noughts and Crosses </h5>
            <p>The objective of this project was to create the game Tic Tac Toe using HTML, CSS, JavaScript and JQuery, and deploy the game online using GitHub.
            </p>
            <a
            target='_blank'
            rel='noreferrer noopener'
            href="https://katiezoe.github.io/Tic-Tac-Toe/">
            Open App
            </a>
          <br/>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
