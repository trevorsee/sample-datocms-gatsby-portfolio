import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Carousel from 'nuka-carousel'
import KeyHandler, { KEYDOWN } from 'react-key-handler'
import Img from 'gatsby-image'

import baseStyles from '../styles/base'
import '../assets/fonts/1706-EOCCJS.css'
import {
  Arrow,
  LeftArrow,
  RightArrow,
  Hello,
  Counter,
  HoverBox,
  GreyBg,
  BlurBg,
  CaptionTitle,
  Caption,
  HoverBoxMobile,
  MobileClose,
  MobileInfo,
  MobileState,
} from '../styles/slider'

class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      stackIndex: 0,
      stackTotal: 1,
      slideIndex: 0,
      slideTotal: 1,
      windowWidth: 0,
      windowHeight: 0,
      showLeftArrow: false,
      showRightArrow: false,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  }

  render() {
    const { children, data } = this.props

    const rightClick = () => {
      const current =
        this[`stack${this.state.stackIndex}`].state.currentSlide + 1
      const total = this[`stack${this.state.stackIndex}`].state.slideCount
      const stackCount = this._stacks.state.slideCount
      if (current == total && this[`stack${this.state.stackIndex + 1}`]) {
        this[`stack${this.state.stackIndex + 1}`].goToSlide(0)
        this._stacks.nextSlide()
      } else {
        this[`stack${this.state.stackIndex}`].nextSlide()
      }
    }
    const leftClick = () => {
      const current =
        this[`stack${this.state.stackIndex}`].state.currentSlide + 1
      if (current == 1 && this[`stack${this.state.stackIndex - 1}`]) {
        this[`stack${this.state.stackIndex - 1}`].goToSlide(
          this[`stack${this.state.stackIndex - 1}`].state.slideCount
        )
        this._stacks.previousSlide()
      } else {
        this[`stack${this.state.stackIndex}`].previousSlide()
      }
    }
    const rightSlide = e => {
      e.preventDefault()
      this._stacks.nextSlide()
    }
    const leftSlide = e => {
      e.preventDefault()
      this._stacks.previousSlide()
    }
    const downSlide = e => {
      e.preventDefault()
      this[`stack${this.state.stackIndex}`].nextSlide()
    }
    const upSlide = e => {
      e.preventDefault()
      this[`stack${this.state.stackIndex}`].previousSlide()
    }

    const handleMousePos = e => {
      var x = e.clientX / this.state.windowWidth

      if (this.state.showLeftArrow && x > 0.25) {
        this.setState({ showLeftArrow: false })
      }

      if (this.state.showRightArrow && x < 0.75) {
        this.setState({ showRightArrow: false })
      }

      if (!this.state.showLeftArrow && x < 0.25) {
        this.setState({ showLeftArrow: true })
      }

      if (!this.state.showRightArrow && x > 0.75) {
        this.setState({ showRightArrow: true })
      }
    }

    const loadedImage = () => {
      var event = document.createEvent('HTMLEvents')
      event.initEvent('resize', true, false)
      window.dispatchEvent(event)
    }

    baseStyles()

    return (
      <div>
        <p>{}</p>
        <p>{this.state.showRightArrow}</p>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsAbout.seoMetaTags}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </HelmetDatoCms>

        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="ArrowUp"
          onKeyHandle={upSlide}
        />
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="ArrowRight"
          onKeyHandle={rightSlide}
        />
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="ArrowDown"
          onKeyHandle={downSlide}
        />
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="ArrowLeft"
          onKeyHandle={leftSlide}
        />

        {console.log(this.state)}

        <div
          onMouseMove={handleMousePos}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {this.state.stackIndex == 0 &&
            this.state.slideIndex == 0 && <Hello>Hello.</Hello>}
          <Carousel
            ref={c => (this._stacks = c)}
            cellSpacing={0}
            speed={500}
            easing="easeCubicOut"
            dragging
            afterSlide={stackIndex =>
              this.setState({
                stackIndex,
                stackTotal: this._stacks.state.slideCount - 1,
                slideIndex: this[`stack${stackIndex}`].state.currentSlide,
                slideTotal: this[`stack${stackIndex}`].state.slideCount - 1,
              })
            }
            renderBottomCenterControls={() => <div />}
            renderCenterRightControls={() =>
              !this.state.showRightArrow &&
              this.state.stackIndex == this.state.stackTotal &&
              this.state.slideIndex == this.state.slideTotal ? null : (
                <RightArrow
                  show={this.state.showRightArrow}
                  onClick={() => rightClick()}
                />
              )
            }
            renderCenterLeftControls={() =>
              this.state.stackIndex == 0 &&
              this.state.slideIndex == 0 ? null : (
                <LeftArrow
                  show={this.state.showLeftArrow}
                  onClick={() => leftClick()}
                />
              )
            }
          >
            {data.allDatoCmsProject.edges.map(({ node: stack }, i) => (
              <Carousel
                ref={c => (this[`stack${i}`] = c)}
                key={stack.id}
                afterSlide={slideIndex => this.setState({ slideIndex })}
                vertical
                dragging
                cellSpacing={0}
                speed={500}
                easing="easeCubicOut"
                renderTopRightControls={({ currentSlide, slideCount }) => (
                  <Counter>
                    {currentSlide + 1} / {slideCount}
                  </Counter>
                )}
                renderBottomCenterControls={() => <div />}
                renderCenterRightControls={() => <div />}
                renderCenterLeftControls={() => <div />}
              >
                {stack.slides.map(
                  (
                    { id, title, description, image, focalX, focalY },
                    index
                  ) => (
                    <div
                      style={{
                        height: '100vh',
                        width: '100vw',
                        position: 'relative',
                      }}
                      key={id}
                    >
                      <Img
                        onLoad={loadedImage}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                        }}
                        imgStyle={{
                          objectPosition: `${focalX}% ${focalY}%`,
                          pointerEvents: 'none',
                        }}
                        position="absolute"
                        alt={title}
                        sizes={image.sizes}
                      />
                      <HoverBox>
                        <CaptionTitle className="hover-hide">
                          {title}
                        </CaptionTitle>
                        <CaptionTitle hide className="hover-show">
                          {title}
                        </CaptionTitle>
                        <Caption className="hover-show">{description}</Caption>
                        <GreyBg className="hover-show" />
                        <BlurBg
                          className="hover-show"
                          style={{ position: 'absolute' }}
                          imgStyle={{
                            objectPosition: `${focalX}% ${focalY}%`,
                          }}
                          scale
                          sizes={image.sizes}
                        />
                        <BlurBg
                          className="hover-show"
                          style={{ position: 'absolute' }}
                          imgStyle={{
                            objectPosition: `${focalX}% ${focalY}%`,
                          }}
                          sizes={image.sizes}
                        />
                      </HoverBox>
                      <MobileInfo htmlFor={i + '-' + index}>
                        Project Info
                      </MobileInfo>
                      <MobileState
                        id={i + '-' + index}
                        type="checkbox"
                        style={{ display: 'none' }}
                      />
                      <HoverBoxMobile>
                        <CaptionTitle hide>{title}</CaptionTitle>
                        <Caption space>{description}</Caption>
                        <GreyBg />
                        <BlurBg
                          style={{ position: 'absolute' }}
                          scale
                          sizes={image.sizes}
                        />
                        <BlurBg
                          style={{ position: 'absolute' }}
                          sizes={image.sizes}
                        />
                        <MobileClose htmlFor={i + '-' + index}>
                          close
                        </MobileClose>
                      </HoverBoxMobile>
                    </div>
                  )
                )}
              </Carousel>
            ))}
          </Carousel>
        </div>
        <div>{children()}</div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsProject(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slides {
            id
            title
            description
            focalX
            focalY
            image {
              id
              sizes {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      }
    }
  }
`
