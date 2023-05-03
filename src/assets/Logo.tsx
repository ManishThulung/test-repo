import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="176"
      height="48"
      viewBox="0 0 176 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3723 23.4766C35.3223 21.5099 32.8756 20.7666 30.909 21.8166C29.669 22.4766 28.919 23.6899 28.7923 24.9933C28.4656 27.6699 26.8856 30.1466 24.329 31.5133C20.1556 33.7399 14.9657 32.1633 12.739 27.9899C10.5123 23.8166 12.0923 18.6299 16.2623 16.3999C18.8156 15.0366 21.7557 15.1033 24.1557 16.3199C24.199 16.3399 24.2456 16.3599 24.289 16.3833C24.3056 16.3933 24.3223 16.3999 24.3356 16.4066C25.4523 16.9399 26.7956 16.9566 27.969 16.3299C29.9323 15.2833 30.6723 12.8399 29.6256 10.8799C29.2156 10.1099 28.589 9.52992 27.8656 9.16992V9.16326C23.1856 6.77326 17.4556 6.62992 12.4656 9.29326C4.36565 13.6166 1.30565 23.6866 5.62898 31.7866C9.95232 39.8833 20.0223 42.9466 28.1223 38.6233C32.9923 36.0233 36.0323 31.3399 36.749 26.2599C36.9523 25.3499 36.849 24.3666 36.3756 23.4799L36.3723 23.4766Z"
        fill="#5964FF"
      />
      <path
        d="M36.0852 8.73332C34.1919 9.74332 33.0519 11.6167 32.8852 13.61C32.6652 15.67 31.4685 17.5833 29.5085 18.63C27.6985 19.5967 25.6352 19.61 23.8919 18.85C22.0885 17.6633 19.7085 17.4733 17.6719 18.56C14.7052 20.1433 13.5819 23.8333 15.1652 26.8033C16.7485 29.77 20.4385 30.89 23.4085 29.3067C25.3185 28.2867 26.4619 26.3867 26.6085 24.3733C26.8652 22.37 28.0519 20.5167 29.9719 19.4933C31.9352 18.4467 34.1952 18.5167 36.0285 19.48L36.0452 19.46C37.7852 20.4033 39.9452 20.4833 41.8219 19.4833C44.7885 17.9 45.9119 14.21 44.3285 11.2433C42.7452 8.27332 39.0519 7.15332 36.0852 8.73665V8.73332Z"
        fill="#5964FF"
      />
      <path
        d="M57.6951 18.6937C58.8243 16.6491 60.3981 15.055 62.4196 13.9114C64.4382 12.7708 66.7311 12.199 69.2897 12.199C72.4259 12.199 75.1115 13.0278 77.3467 14.6825C79.579 16.3401 81.0748 18.5984 81.8257 21.4602H74.7477C74.2221 20.357 73.4741 19.5138 72.5067 18.9391C71.5393 18.3616 70.4419 18.0728 69.2117 18.0728C67.2278 18.0728 65.6222 18.763 64.392 20.1433C63.1618 21.5237 62.5467 23.369 62.5467 25.6764C62.5467 27.9837 63.1618 29.8291 64.392 31.2094C65.6222 32.5898 67.2278 33.28 69.2117 33.28C70.4419 33.28 71.5393 32.9912 72.5067 32.4136C73.4741 31.8361 74.2192 30.9957 74.7477 29.8926H81.8257C81.072 32.7544 79.579 35.0069 77.3467 36.6501C75.1115 38.2932 72.4259 39.1162 69.2897 39.1162C66.7311 39.1162 64.4382 38.5445 62.4196 37.4038C60.3981 36.2631 58.8243 34.6748 57.6951 32.6418C56.566 30.6088 56 28.287 56 25.6764C56 23.0658 56.566 20.7382 57.6951 18.6937Z"
        fill="#5964FF"
      />
      <path
        d="M85.7244 22.7019C86.5388 21.0703 87.6506 19.817 89.057 18.9362C90.4633 18.0583 92.0314 17.6194 93.7612 17.6194C95.2426 17.6194 96.5422 17.9197 97.6569 18.5233C98.7744 19.1268 99.6321 19.9152 100.236 20.8942V17.9197H106.673V38.9256H100.236V35.9512C99.609 36.9302 98.7369 37.7214 97.6193 38.3221C96.5017 38.9256 95.2022 39.226 93.7237 39.226C92.017 39.226 90.4604 38.7812 89.057 37.8889C87.6506 36.9995 86.5417 35.7317 85.7244 34.0857C84.9072 32.4425 84.5 30.5394 84.5 28.3822C84.5 26.2251 84.9072 24.3306 85.7244 22.6961V22.7019ZM98.9015 24.6223C98.0092 23.6953 96.9262 23.2304 95.6441 23.2304C94.3619 23.2304 93.2789 23.6896 92.3866 24.605C91.4943 25.5204 91.0495 26.7824 91.0495 28.388C91.0495 29.9936 91.4943 31.2672 92.3866 32.2086C93.2761 33.15 94.3619 33.6207 95.6441 33.6207C96.9262 33.6207 98.0092 33.1558 98.9015 32.2288C99.7909 31.3018 100.239 30.0341 100.239 28.4256C100.239 26.8171 99.7938 25.5522 98.9015 24.6223Z"
        fill="#5964FF"
      />
      <path
        d="M117.779 11.0701V38.9288H111.342V11.0701H117.779Z"
        fill="#5964FF"
      />
      <path
        d="M122.916 14.7404C122.2 14.0762 121.845 13.2532 121.845 12.2742C121.845 11.2952 122.203 10.4347 122.916 9.77046C123.632 9.10627 124.553 8.77417 125.683 8.77417C126.812 8.77417 127.695 9.10627 128.412 9.77046C129.128 10.4347 129.483 11.2692 129.483 12.2742C129.483 13.2792 129.125 14.0762 128.412 14.7404C127.695 15.4046 126.786 15.7367 125.683 15.7367C124.579 15.7367 123.632 15.4046 122.916 14.7404ZM128.882 17.9228V38.9287H122.445V17.9228H128.882Z"
        fill="#5964FF"
      />
      <path
        d="M139.989 11.0701V38.9288H133.552V11.0701H139.989Z"
        fill="#5964FF"
      />
      <path
        d="M145.127 14.7404C144.41 14.0762 144.055 13.2532 144.055 12.2742C144.055 11.2952 144.413 10.4347 145.127 9.77046C145.843 9.10627 146.764 8.77417 147.893 8.77417C149.022 8.77417 149.906 9.10627 150.622 9.77046C151.338 10.4347 151.693 11.2692 151.693 12.2742C151.693 13.2792 151.335 14.0762 150.622 14.7404C149.906 15.4046 148.996 15.7367 147.893 15.7367C146.79 15.7367 145.843 15.4046 145.127 14.7404ZM151.093 17.9228V38.9287H144.656V17.9228H151.093Z"
        fill="#5964FF"
      />
      <path
        d="M159.458 37.453C157.815 36.5751 156.522 35.3189 155.58 33.6873C154.639 32.0557 154.168 30.1498 154.168 27.9637C154.168 25.7776 154.644 23.9034 155.597 22.2603C156.55 20.6171 157.856 19.3551 159.513 18.4772C161.171 17.5993 163.028 17.1604 165.084 17.1604C167.14 17.1604 169 17.5993 170.654 18.4772C172.312 19.3551 173.614 20.6171 174.57 22.2603C175.523 23.9034 176 25.8065 176 27.9637C176 30.1209 175.518 32.024 174.55 33.6671C173.583 35.3103 172.266 36.5723 170.597 37.4502C168.928 38.328 167.065 38.767 165.006 38.767C162.947 38.767 161.096 38.328 159.453 37.4502L159.458 37.453ZM168.154 31.8449C169.02 30.941 169.453 29.6502 169.453 27.9666C169.453 26.283 169.032 24.9921 168.191 24.0883C167.351 23.1844 166.314 22.7339 165.084 22.7339C163.854 22.7339 162.788 23.1786 161.959 24.0709C161.13 24.9633 160.718 26.2599 160.718 27.9666C160.718 29.6733 161.125 30.941 161.942 31.8449C162.756 32.7488 163.779 33.1993 165.009 33.1993C166.239 33.1993 167.287 32.7488 168.154 31.8449Z"
        fill="#5964FF"
      />
    </svg>
  );
};

export default Logo;