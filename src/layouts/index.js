import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Carousel from "nuka-carousel";
import KeyHandler, { KEYDOWN } from "react-key-handler";
import Img from "gatsby-image";

import baseStyles from '../styles/base'
import "../assets/fonts/1706-EOCCJS.css"
import { Arrow, LeftArrow, RightArrow, Hello, Counter, HoverBox, GreyBg, BlurBg, CaptionTitle, Caption, HoverBoxMobile, MobileClose, MobileInfo, MobileState } from '../styles/slider'

const settingsHorizontal = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const settingsVertical = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true
};

const handleArrows = function(e) {
  e.preventDefault();
  switch (event.key) {
    case "ArrowUp": {
      console.log("up");
      break;
    }
    case "ArrowRight": {
      console.log("right");
      break;
    }
    case "ArrowDown": {
      console.log("Down");
      break;
    }
    case "ArrowLeft": {
      console.log("left");
      break;
    }
    default: {
      console.log("Invalid choice");
      break;
    }
  }
};

class TemplateWrapper extends React.Component {

  constructor() {
    super()
    this.state = {
      stackIndex: 0,
      stackTotal: 1,
      slideIndex: 0,
      slideTotal: 1
    }
  }

  componentDidMount() {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    const { children, data } = this.props

    const rightClick = () => {
      const current = this[`stack${this.state.stackIndex}`].state.currentSlide + 1
      const total = this[`stack${this.state.stackIndex}`].state.slideCount
      const stackCount = this._stacks.state.slideCount
      if ( current == total && this[`stack${this.state.stackIndex + 1}`] ) {
        this[`stack${this.state.stackIndex + 1}`].goToSlide(0)
        this._stacks.nextSlide()
      } else {
        this[`stack${this.state.stackIndex}`].nextSlide()
      }
    }
    const leftClick = () => {
      const current = this[`stack${this.state.stackIndex}`].state.currentSlide + 1
      if ( current == 1 && this[`stack${this.state.stackIndex - 1}`] ) {
        this[`stack${this.state.stackIndex - 1}`].goToSlide(this[`stack${this.state.stackIndex - 1}`].state.slideCount)
        this._stacks.previousSlide()
      } else {
        this[`stack${this.state.stackIndex}`].previousSlide()
      }
    }
    const rightSlide = (e) => {
      e.preventDefault()
      this._stacks.nextSlide();
    }
    const leftSlide = (e) => {
      e.preventDefault()
      this._stacks.previousSlide();
    }
    const downSlide = (e) => {
      e.preventDefault()
      this[`stack${this.state.stackIndex}`].nextSlide();
    }
    const upSlide = (e) => {
      e.preventDefault()
      this[`stack${this.state.stackIndex}`].previousSlide();
    }

    baseStyles()

    return (
    <div>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        title={data.datoCmsSite.globalSeo.fallbackSeo.title}
      >
        <title>{data.datoCmsSite.siteName}</title>
        <meta name="description" content={data.datoCmsSite.globalSeo.fallbackSeo.description} />
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

      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: -1 }}>
        { this.state.stackIndex == 0 && this.state.slideIndex == 0 &&
          <Hello>Hello.</Hello>
        }
        <Carousel
          ref={(c) => this._stacks = c}
          cellSpacing={0}
          speed={500}
          easing="easeCubicOut"
          afterSlide={stackIndex => this.setState({
            stackIndex,
            stackTotal: this._stacks.state.slideCount - 1,
            slideIndex: this[`stack${stackIndex}`].state.currentSlide,
            slideTotal: this[`stack${stackIndex}`].state.slideCount - 1,
          })}
          renderBottomCenterControls={() => <div />}
          renderCenterRightControls={() => this.state.stackIndex == this.state.stackTotal && this.state.slideIndex == this.state.slideTotal ? null : <Arrow><RightArrow onClick={() => rightClick() } /></Arrow> }
          renderCenterLeftControls={() => this.state.stackIndex == 0 && this.state.slideIndex == 0 ? null : <Arrow><LeftArrow onClick={() => leftClick() } /></Arrow> }
        >
          {data.allDatoCmsProject.edges.map(({ node: stack }, i) => (
            <Carousel
              ref={(c) => this[`stack${i}`] = c}
              key={stack.id}
              afterSlide={slideIndex => this.setState({ slideIndex })}
              vertical
              cellSpacing={0}
              speed={500}
              easing="easeCubicOut"
              renderTopRightControls={({ currentSlide, slideCount }) => (
                <Counter>{currentSlide + 1} / {slideCount}</Counter>
              )}
              renderBottomCenterControls={() => <div />}
              renderCenterRightControls={() => <div />}
              renderCenterLeftControls={() => <div />}
            >
              {stack.slides.map(({ id, title, description, image }, index) => (
                <div style={{ height: "100vh", width: "100vw", position: "relative" }} key={id}>
                  <Img
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%"
                      }}
                    alt={title}
                    sizes={image.sizes}
                  />
                  <HoverBox>
                    <CaptionTitle className="hover-hide">{title}</CaptionTitle>
                    <CaptionTitle hide className="hover-show">{title}</CaptionTitle>
                    <Caption className="hover-show">{description}</Caption>
                    <GreyBg className="hover-show" />
                    <BlurBg className="hover-show" scale src={image.url} />
                    <BlurBg className="hover-show" src={image.url} />
                  </HoverBox>
                  <MobileInfo htmlFor={i + '-' + index}>Project Info</MobileInfo>
                  <MobileState id={i + '-' + index} type="checkbox" style={{display: 'none'}} />
                  <HoverBoxMobile>
                    <CaptionTitle hide>{title}</CaptionTitle>
                    <Caption space>{description}</Caption>
                    <GreyBg />
                    <BlurBg scale src={image.url} />
                    <BlurBg src={image.url} />
                    <MobileClose htmlFor={i + '-' + index}>close</MobileClose>
                  </HoverBoxMobile>
                </div>
              ))}
            </Carousel>
          ))}
        </Carousel>
      </div>
      <div>
        {children()}
      </div>
    </div>
  )};
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
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
`;
