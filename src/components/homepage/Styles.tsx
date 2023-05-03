import { Select } from "antd";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  > h6 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #5964ff;
    margin: 0 auto;
    text-align: center;
  }
  > h3 {
    text-align: center;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 16px auto 32px auto;
  }
`;

export const SliderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #1d2939;
  border-radius: 32px;
  gap: 16px;
  margin: 0 auto;
  padding: 8px;
  width: fit-content;
  a {
    display: block;
    transition: all 0.2s ease-in;
    cursor: pointer;
    padding: 7px 15px;
    font-family: var(--inter);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    border-radius: 32px;
    border: 1px solid transparent;
    :hover,
    &.active {
      background: white;
      color: black;
    }
    &.active {
      border-color: #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;

export const FaqWrapper = styled.div`
  border-top: 2px solid #101828;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  > div {
    cursor: pointer;
    padding: 40px 0;
    border-bottom: 2px solid #101828;
    filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
  }
  .question {
    font-family: var(--inter);
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #101828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    + p {
      margin-top: 16px;
    }
  }
`;

export const ContentWrapper = styled.div`
  transition: all 0.2s ease-in;
  padding: 0 60px;
  background: transparent;
  @media (min-width: 1280px) {
    padding: 0 120px;
  }
  > div,
  > section,
  > nav {
    max-width: 1280px;
    margin: 0 auto;
  }
  &.nav-is-scrolling {
    background: white;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
      drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    > nav {
      transition: all 0.2s ease-in;
      padding: 8px 0 !important;
    }
  }
`;

export const RoundBoxShadow = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  > svg {
    border-radius: 50%;
    box-shadow: 0 0 0 8px #e8eaff;
  }
`;

export const CountryInput = styled(Select)`
  &.ant-select {
    .ant-select-selector {
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      padding: 0 42px 0 14px;
      height: 44px;
      .ant-select-selection-placeholder {
        line-height: 44px;
      }
      .ant-select-selection-search {
        display: flex;
        gap: 4px;
        > input {
          height: 44px;
        }
      }
      .ant-select-selection-item {
        display: flex;
        gap: 4px;
        align-items: center;
        padding-inline-end: 0px;
      }
      .ant-select-dropdown {
        padding: 0;
        .ant-select-item-option-content {
          display: flex;
          align-items: center;
          gap: 10px;
          > img {
            border-radius: 50%;
            height: 20px;
            max-width: 20px;
            object-fit: cover;
          }
        }

        .ant-input-affix-wrapper {
          border: none;
          box-shadow: none;
          line-height: 32px;
          border-bottom: 1px solid #d0d7e2;
          margin-bottom: 4px;
          input {
            cursor: text;
          }
          .ant-input-prefix {
            margin-inline-end: 10px;
          }
        }
      }
    }
    &.ant-select:hover {
      .ant-select-selector {
        bprder-color: #d0d5dd;
      }
    }
  }
`;
