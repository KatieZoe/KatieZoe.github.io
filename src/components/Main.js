import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
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
            <img src={me} alt="funny" />
          </span>
          <p>
          Hi, I'm Katie and I'm very excited to be a Junior Software Developer!
          <br/>
          <br/>
          I was previously working in the legal industry for over 8 years and reached a point in my career where the service I provided was evolving. I noticed aspects of my role being replaced with programs and more and more red tape giving me less automony to problem solve and forward think. I spent time traveling and pursuing other interests alongside my regular job in order to feel into what might be the best way forward for me. I spent time in Australia and overseas learning, traveling and teaching Pilates - becoming more self aware, growing up .. all the fun stuff.
          <br/>
          <br/>
          I eventually realised that software development - in its essence, was exactly what I had always felt a passion for! <br/>Pilates - hacking and understanding the anatomy to improve my own user experience.
          <br/>Legal - organising and supporting individuals in the judicial system, understanding situational needs and their impacts on desigining and implementing seemless processes. The importance of risk management in both pursuits. It just made sense and intuitively felt right. I see coding as learning to read and write but in a language that has a greater impact in supporting people and society.
          <br/>
          <br/>
          I began my journey learning code in 2020. I moved close to University, completed a bridging course and started a computer science degree. Once covid lockdowns hit I knew I would benefit from going down the bootcamp route first, with face to face learning and a stronger teaching experience. I completed my General Assembly Software Engineering Immersive course in June 2021 receiving the Han Shan award for knowing clearly what was really going on and came out of it with 10x more confidence to further teach myself.
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
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>



        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h3> Email me! klugton@hotmail.com </h3>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/katielugton/"
                className="icon fab fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/KatieZoePink"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KatieZoe"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
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
