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
          <span className="image main">
            <img src={me} alt="Katie walking down a path in the Royal National Park" />
          </span>
          <p>
          Hi, I'm Katie and I'm very excited to be a Junior Software Developer!
          <br/>
          <br/>
          I was previously working in the legal industry for over 8 years and reached a point in my career where the service I provided was evolving. I noticed aspects of my role being replaced with programs and more and more red tape giving me less automony to problem solve and forward think. I spent time traveling and pursuing other interests alongside my regular job in order to feel into what might be the best way forward for me. I spent time in Australia and overseas learning, traveling and teaching pilates.
          <br/>
          <br/>
          It didn't take me long to realise that software development was the perfect fit for me. Aligning with my own personal passions for how things work, software development correlates with my strong interest in pilates. In biohacking the body and focusing on the rehabilitation of the focused muscle groups and its functions, in constantly refining an approach and the limitless potential of this longstanding passion of mine. I realised the similarities not only in my personal interests but in my previous career.
          <br/>
          <br/>
          As a legal assistant, within the first 2 years I was already delving into the paralegal space and following the processes autonomously as extra work on top of my role. I loved to learn the cogs of the judicial system and understanding situational needs and their impacts on desigining and implementing seemless processes with the solicitors I supported. I found great fulfillment in both of these pursuits and the ambiguity of these integral systems. I see coding as learning to read and write but in a language that has a greater impact in supporting people and society.
          <br/>
          <br/>
          I began my journey learning code in 2020. I moved close to University, completed a bridging course and started a computer science degree. Once covid lockdowns hit I knew I would benefit from going down the bootcamp route first, with face to face learning and a stronger teaching experience. I completed my General Assembly Software Engineering Immersive course in June 2021 receiving the 'Han Shan Award for Seeing Clearly What's Really Going On' and have come out of it with much more confidence to further educate myself in this field.
          <br/>
          <br/>
          I would still like to complete a computer science degree to understand industry standards and have a holistic understanding of the tech industry, but for now I am looking to grow the fundamental knowledge I do have in the real world of software development.
          <br/>
          <br/>
          Thank you for taking the time to read about my journey and get to know me a little more. As time progresses I will endeavour to dazzle you with my ability and this will be a distant memory but for now it's what you should know about me and my commitment to becoming an incredible software developer.
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
            <button> Open App </button>
            <br/>
            <br/>
          <div>
          <h2> Gahoot </h2>
          <h5>a Kahoot clone </h5>
            <p>The objective of this project was to create a clone of the trivia application Kahoot.  I worked in a group of 4 to create the MVP within a week and especially enjoyed working with my team mates on this project.  The tech stack used here was HTML/CSS, React/Javascript, Ruby on Rails, Postgresql, Heroku and Cloudinary.
            </p>
          <button> Open App </button>
          <br/>
          <br/>
          </div>
          <h2> BigAsk </h2>
          <h5> BookMark Organiser </h5>
            <p>The objective of this project was to create a web application using the tools we have learnt by week 5 of the SEI course (HTML, CSS, Ruby, JQuery, Rails, SQL, Postgress, ActiveRecord, Bcrypt, Bootstrap, Heroku). I created a bookmark organiser application called 'BigAsk' to categorise and sort bookmarks for users and display them in a visually appealing way.
            </p>
          <button> Open App </button>
          <br/>
          <br/>
          </div>
          <div>
          <h2> Tic Tac Toe </h2>
          <h5> aka Noughts and Crosses </h5>
            <p>The objective of this project was to create the game Tic Tac Toe using HTML, CSS, JavaScript and JQuery, and deploy the game online using GitHub.
            </p>
          <button> Open App </button>
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
