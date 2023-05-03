import Slider from "react-slick";
import styled from "styled-components";

export const CustomSlider = styled(Slider)`
  &.slick-slider {
    width: 100%;
    flex-direction: column;
    display: flex;
    gap: 48px;
    .slick-list {
      order: 1;
      .slick-track {
        display: flex;
        align-items: center;
        .slick-slide {
          opacity: 0.5;
          transform: scale(0.94);
          transition: all 0.5s ease-in;
          > div {
            margin: 0 28px;
            > div {
              display: flex !important;
              justify-content: center;
              align-items: center;
            }
          }
          &.slick-active {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    ul.slick-dots {
      display: flex !important;
      justify-content: center;
      background: #1d2939;
      border-radius: 32px;
      column-gap: 16px;
      row-gap: 8px;
      margin: 0 auto;
      padding: 8px;
      flex-wrap: wrap;
      width: fit-content;
      position: relative;
      order: 0;
      bottom: 0;
      @media (min-width: 1280px) {
        flex-wrap: nowrap;
      }
      li {
        width: fit-content;
        height: fit-content;
        font-family: var(--inter);
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        border-radius: 32px;
        margin: 0;
        > div {
          padding: 8px 16px;
          white-space: nowrap;
        }
        :hover,
        &.slick-active {
          color: black;
        }
        :hover {
          background: #d0d5dd;
        }
        &.slick-active {
          background: white;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        }
      }
    }
  }
`;

export const CustomTestimonialSlider = styled(Slider)`
  .slick-dots {
    bottom: -54px;
    li {
      margin: 0 3px;
      button:before {
        font-size: 12px;
        color: #667085;
      }
      &.slick-active {
        button:before {
          color: #5964ff;
        }
      }
    }
  }
`;
