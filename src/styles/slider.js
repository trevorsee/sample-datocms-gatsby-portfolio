import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { keyframes } from 'styled-components'

export const Arrow = styled.div`
  width: 25vw;
  height: 80vh;
  * {
    opacity: 0;
    transition: opacity 0.25s;
  }
  &:hover * {
    opacity: 1;
  }
`

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  background-repeat: no-repeat;
  left: 2rem;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-position: left center;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMzkgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMS43MTg0MTA2LDE4IEwzNCwxOCBMMzQsMjIgTDEyLjEzMjY3OSwyMiBMMjIuMjU3Njc5LDMyLjEyNSBMMTkuNzk2OTQ3NCwzNC41ODU3MzE2IEw3LjQ2NDgxMzIzLDIyLjI1MzU5NzQgTDcuNDYyMjY1MTEsMjIuMjU2MTQ1NSBMNSwxOS43OTY5NDc0IEw1LjAwNDA4MTYzLDE5Ljc5Mjg2NTggTDUuMDAxMTg2MzIsMTkuNzg5OTcwNSBMNi40NDI5NjExLDE4LjM1Mzk4NjMgTDE5Ljc5Njk0NzQsNSBMMjIuMjU3Njc5LDcuNDYwNzMxNiBMMTEuNzE4NDEwNiwxOCBaIE0xMCwxOS43MTg0MTA2IEw5LjkyNTU0NDgzLDE5Ljc5Mjg2NTggTDEwLDE5Ljg2NzMyMSBMMTAsMTkuNzE4NDEwNiBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICAgICAgPGZpbHRlciB4PSItMjUuOSUiIHk9Ii0yNS40JSIgd2lkdGg9IjE1MS43JSIgaGVpZ2h0PSIxNTAuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTIpIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
  transform: translateZ(0) translateY(-50%);
  transition: transform 0.25s ease-out;
  backface-visibility: hidden;
  :focus,
  :hover {
    transform: scale(1.025) translateY(-50%);
  }
`

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-repeat: no-repeat;
  right: 2rem;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-position: right center;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMzkgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZSBDb3B5IDU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTIuNDYwNzMxNiwxOCBMMzQuNzQyMzIxLDE4IEwzNC43NDIzMjEsMjIgTDEyLjg3NSwyMiBMMjMsMzIuMTI1IEwyMC41MzkyNjg0LDM0LjU4NTczMTYgTDguMjA3MTM0MiwyMi4yNTM1OTc0IEw4LjIwNDU4NjA4LDIyLjI1NjE0NTUgTDUuNzQyMzIwOTcsMTkuNzk2OTQ3NCBMNS43NDY0MDI2LDE5Ljc5Mjg2NTggTDUuNzQzNTA3MjksMTkuNzg5OTcwNSBMNy4xODUyODIwNywxOC4zNTM5ODYzIEwyMC41MzkyNjg0LDUgTDIzLDcuNDYwNzMxNiBMMTIuNDYwNzMxNiwxOCBaIE0xMC43NDIzMjEsMTkuNzE4NDEwNiBMMTAuNjY3ODY1OCwxOS43OTI4NjU4IEwxMC43NDIzMjEsMTkuODY3MzIxIEwxMC43NDIzMjEsMTkuNzE4NDEwNiBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICAgICAgPGZpbHRlciB4PSItMjUuOSUiIHk9Ii0yNS40JSIgd2lkdGg9IjE1MS43JSIgaGVpZ2h0PSIxNTAuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0yIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHktNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMjQyMzIxLCAxOS43OTI4NjYpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTIwLjI0MjMyMSwgLTE5Ljc5Mjg2NikgIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTIpIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
  transform: translateZ(0) translateY(-50%);
  transition: transform 0.25s ease-out;
  backface-visibility: hidden;
  :focus,
  :hover {
    transform: scale(1.025) translateY(-50%);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Hello = styled.h1`
  position: absolute;
  font-weight: 900;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 25vw;
  letter-spacing: -0.02em;
  line-height: 1;
  pointer-events: none;
  @media (min-width: 40em) {
    font-size: 15vw;
  }
`

export const Counter = styled.div`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  margin: 2rem;
`

export const HoverBox = styled.div`
  transform: translateY(-100%);
  z-index: 4;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  line-height: 1.25;
  height: 7.5rem;
  right: 0;
  bottom: -100%;
  left: 0;
  display: none;

  .hover-hide,
  .hover-show {
    transition: opacity 0.15s ease-in;
  }
  .hover-show {
    opacity: 0;
  }
  &:hover {
    height: auto;
    .hover-hide {
      opacity: 0;
    }
    .hover-show {
      opacity: 1;
    }
  }

  @media (min-width: 40em) {
    display: block;
  }
`

export const GreyBg = styled.div`
  background-color: #d8d8d8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const BlurBg = styled(Img)`
  object-fit: cover;
  object-position: 50% 100%;
  filter: blur(15px);
  width: 100%;
  position: absolute;
  height: 100vh;
  right: 0;
  bottom: 0;
  left: 0;
  transform: ${props => (props.scale ? 'scale(1.1)' : '')};
`

export const CaptionTitle = styled.h2`
  letter-spacing: 0.05em;
  bottom: ${props => (props.hide ? '' : '2rem')};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100%;
  font-size: 1rem;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0.5rem;
  margin-left: 0;
  position: ${props => (props.hide ? 'relative' : 'absolute')};
  font-weight: 700;
  @media (min-width: 40em) {
    width: 50%;
  }
  @media (min-width: 52em) {
    width: 33%;
  }
`

export const Caption = styled.h2`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 100%;
  font-size: 1rem;
  margin: 0;
  margin-bottom: ${props => (props.space ? '1rem' : '0')};
  position: relative;
  @media (min-width: 40em) {
    width: 50%;
  }
  @media (min-width: 52em) {
    width: 33%;
  }
`

export const HoverBoxMobile = styled.div`
  transform: translateY(-100%);
  z-index: 4;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  line-height: 1.25;
  right: 0;
  bottom: -100%;
  left: 0;

  @media (min-width: 40em) {
    display: none;
  }
`

export const MobileClose = styled.label`
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-size: 1rem;
  color: #ffffff;
  position: relative;
  text-decoration: none;
  font-weight: 700;
`

export const MobileInfo = styled.label`
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 4;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  position: absolute;
  text-decoration: none;
  font-weight: 700;
  bottom: 0;
  display: block;

  @media (min-width: 40em) {
    display: none;
  }
`

export const MobileState = styled.input`
  + * {
    opacity: 0;
    visibility: hidden;
  }
  &:checked + * {
    opacity: 1;
    visibility: visible;
  }
`

export const MobileCloseBox = styled.label`
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
