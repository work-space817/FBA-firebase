interface Props {
  id: string;
  children?: React.ReactNode;
}

const GoalSVG = ({ id }: Props) => {
  switch (id) {
    case "Edit":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-pencil-fill "
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      );
    case "Empty":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      );
    case "Entertainment":
      return (
        <svg
          width="32"
          height="23"
          viewBox="0 0 32 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.352 10.8424C29.0182 4.81201 27.0107 1.59334 24.0329 0.714155C23.407 0.530549 22.7577 0.438822 22.1054 0.441845C21.2432 0.441845 20.4923 0.651894 19.698 0.874522C18.7408 1.14306 17.6535 1.44807 16.068 1.44807C14.4826 1.44807 13.3946 1.14369 12.4356 0.875151C11.6406 0.651894 10.8904 0.441845 10.0307 0.441845C9.35614 0.439506 8.68456 0.530941 8.0352 0.713526C5.07313 1.58894 3.06696 4.80635 1.71359 10.8387C0.258336 17.3301 0.974643 21.4286 3.72227 22.3794C4.0989 22.5122 4.49518 22.5807 4.89452 22.582C6.77679 22.582 8.28613 21.0141 9.31751 19.7306C10.4828 18.2778 11.8469 17.5408 16.068 17.5408C19.8382 17.5408 21.3985 18.052 22.7462 19.7306C23.5933 20.7858 24.3939 21.5242 25.1926 21.9889C26.2548 22.6065 27.3164 22.7436 28.3471 22.3895C29.9709 21.8355 30.9017 20.3708 31.1142 18.0351C31.2759 16.244 31.0268 13.8913 30.352 10.8424ZM13.0493 10.5041H11.0369V12.5166C11.0369 12.7834 10.9309 13.0394 10.7422 13.2281C10.5535 13.4168 10.2975 13.5228 10.0307 13.5228C9.76381 13.5228 9.50787 13.4168 9.31916 13.2281C9.13046 13.0394 9.02445 12.7834 9.02445 12.5166V10.5041H7.012C6.74513 10.5041 6.48919 10.3981 6.30049 10.2094C6.11178 10.0207 6.00577 9.76474 6.00577 9.49787C6.00577 9.23101 6.11178 8.97507 6.30049 8.78637C6.48919 8.59766 6.74513 8.49165 7.012 8.49165H9.02445V6.4792C9.02445 6.21233 9.13046 5.95639 9.31916 5.76769C9.50787 5.57899 9.76381 5.47297 10.0307 5.47297C10.2975 5.47297 10.5535 5.57899 10.7422 5.76769C10.9309 5.95639 11.0369 6.21233 11.0369 6.4792V8.49165H13.0493C13.3162 8.49165 13.5722 8.59766 13.7609 8.78637C13.9496 8.97507 14.0556 9.23101 14.0556 9.49787C14.0556 9.76474 13.9496 10.0207 13.7609 10.2094C13.5722 10.3981 13.3162 10.5041 13.0493 10.5041ZM18.332 10.7557C18.0833 10.7557 17.8401 10.6819 17.6332 10.5437C17.4264 10.4055 17.2652 10.209 17.17 9.97921C17.0748 9.74938 17.0499 9.49648 17.0984 9.25249C17.147 9.00851 17.2667 8.78439 17.4426 8.60849C17.6186 8.43258 17.8427 8.31279 18.0867 8.26426C18.3306 8.21573 18.5835 8.24064 18.8134 8.33584C19.0432 8.43104 19.2396 8.59225 19.3778 8.79909C19.5161 9.00593 19.5898 9.24911 19.5898 9.49787C19.5898 9.83146 19.4573 10.1514 19.2214 10.3873C18.9855 10.6231 18.6656 10.7557 18.332 10.7557ZM21.0992 13.5228C20.8503 13.5228 20.607 13.4489 20.4 13.3106C20.1931 13.1722 20.0319 12.9756 19.9368 12.7456C19.8417 12.5156 19.817 12.2625 19.8658 12.0185C19.9146 11.7744 20.0347 11.5503 20.2109 11.3745C20.3871 11.1987 20.6115 11.0792 20.8557 11.031C21.0999 10.9828 21.3529 11.0082 21.5827 11.1039C21.8124 11.1995 22.0087 11.3612 22.1465 11.5685C22.2843 11.7758 22.3576 12.0192 22.3569 12.2681C22.3561 12.6012 22.2232 12.9203 21.9874 13.1555C21.7516 13.3907 21.4322 13.5228 21.0992 13.5228ZM21.0992 7.98854C20.8504 7.98854 20.6072 7.91477 20.4004 7.77656C20.1935 7.63836 20.0323 7.44192 19.9371 7.21209C19.8419 6.98226 19.817 6.72936 19.8655 6.48537C19.9141 6.24139 20.0339 6.01727 20.2098 5.84137C20.3857 5.66546 20.6098 5.54567 20.8538 5.49714C21.0978 5.44861 21.3507 5.47352 21.5805 5.56872C21.8103 5.66391 22.0068 5.82513 22.145 6.03197C22.2832 6.23881 22.3569 6.48199 22.3569 6.73075C22.3569 7.06434 22.2244 7.38426 21.9885 7.62014C21.7527 7.85602 21.4327 7.98854 21.0992 7.98854ZM23.8663 10.7557C23.6175 10.7557 23.3743 10.6819 23.1675 10.5437C22.9606 10.4055 22.7994 10.209 22.7042 9.97921C22.609 9.74938 22.5841 9.49648 22.6327 9.25249C22.6812 9.00851 22.801 8.78439 22.9769 8.60849C23.1528 8.43258 23.3769 8.31279 23.6209 8.26426C23.8649 8.21573 24.1178 8.24064 24.3476 8.33584C24.5774 8.43104 24.7739 8.59225 24.9121 8.79909C25.0503 9.00593 25.1241 9.24911 25.1241 9.49787C25.1241 9.83146 24.9915 10.1514 24.7557 10.3873C24.5198 10.6231 24.1999 10.7557 23.8663 10.7557Z"
            fill="url(#paint0_linear_2011_6198)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2011_6198"
              x1="16.0693"
              y1="0.441772"
              x2="16.0693"
              y2="22.582"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#22B04A" />
              <stop offset="1" stop-color="#1E9540" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Holidays":
      return (
        <svg
          width="31"
          height="26"
          viewBox="0 0 31 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 0.195923C14.8 0.195923 14.5666 0.66259 14.1 1.12926L0.566646 23.2959C0.333313 23.5293 0.333313 23.9959 0.333313 24.2293C0.333313 25.3959 1.26665 25.8626 1.96665 25.8626H29.0333C29.9666 25.8626 30.6666 25.3959 30.6666 24.2293C30.6666 23.7626 30.6666 23.7626 30.4333 23.2959L17.1333 1.12926C16.6666 0.66259 16.2 0.195923 15.5 0.195923ZM15.5 3.69592L23.2 16.5293H21.3333L17.8333 13.0293L15.5 16.5293L13.1666 13.0293L9.66665 16.5293H7.56665L15.5 3.69592Z"
            fill="url(#paint0_linear_2011_6148)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2011_6148"
              x1="15.5"
              y1="0.195923"
              x2="15.5"
              y2="25.8626"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7CB4F9" />
              <stop offset="1" stopColor="#6DA2E4" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Renovation":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5126 17.8952L18.5935 12.9677V9.31422C18.5942 9.20318 18.5729 9.0931 18.5309 8.9903C18.4889 8.8875 18.427 8.794 18.3488 8.71516L9.91133 0.277656C9.83289 0.198573 9.73957 0.135802 9.63675 0.0929664C9.53393 0.0501303 9.42365 0.0280762 9.31226 0.0280762C9.20088 0.0280762 9.0906 0.0501303 8.98778 0.0929664C8.88496 0.135802 8.79164 0.198573 8.7132 0.277656L1.11945 7.87141C1.04037 7.94984 0.977599 8.04316 0.934763 8.14598C0.891927 8.2488 0.869873 8.35908 0.869873 8.47047C0.869873 8.58185 0.891927 8.69214 0.934763 8.79496C0.977599 8.89777 1.04037 8.99109 1.11945 9.06953L9.55695 17.507C9.63579 17.5852 9.72929 17.6471 9.83209 17.6891C9.93489 17.7311 10.045 17.7524 10.156 17.7517H13.8179L18.737 22.6792C19.3702 23.3125 20.2292 23.6683 21.1248 23.6683C22.0204 23.6683 22.8793 23.3125 23.5126 22.6792C24.1459 22.0459 24.5016 21.187 24.5016 20.2914C24.5016 19.3958 24.1459 18.5369 23.5126 17.9036V17.8952ZM4.24977 7.12891L6.18195 9.06953L7.38008 7.87141L5.43945 5.93922L6.78101 4.59766L10.4007 8.22578L11.5988 7.02766L7.9707 3.40797L9.31226 2.06641L14.8726 7.62672L8.46851 14.0308L2.9082 8.47047L4.24977 7.12891ZM22.3145 21.4727C21.9983 21.787 21.5706 21.9634 21.1248 21.9634C20.6789 21.9634 20.2512 21.787 19.9351 21.4727L14.7629 16.3089C14.5831 16.1853 14.3788 16.1018 14.1638 16.0642H10.502L9.6582 15.2205L16.0623 8.81641L16.906 9.66016V13.322C16.9069 13.5434 16.9948 13.7555 17.1507 13.9127L22.3145 19.0933C22.6287 19.4095 22.8052 19.8372 22.8052 20.283C22.8052 20.7288 22.6287 21.1565 22.3145 21.4727Z"
            fill="url(#paint0_linear_2011_6193)"
          />
          <path
            d="M22.3145 21.4727C21.9983 21.787 21.5706 21.9634 21.1248 21.9634C20.6789 21.9634 20.2512 21.787 19.9351 21.4727L14.7629 16.3089C14.5831 16.1853 14.3788 16.1018 14.1638 16.0642H10.502L9.6582 15.2205L16.0623 8.81641L16.906 9.66016V13.322C16.9069 13.5434 16.9948 13.7555 17.1507 13.9127L22.3145 19.0933C22.6287 19.4095 22.8052 19.8372 22.8052 20.283C22.8052 20.7288 22.6287 21.1565 22.3145 21.4727Z"
            fill="url(#paint1_linear_2011_6193)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2011_6193"
              x1="12.6858"
              y1="0.0280762"
              x2="12.6858"
              y2="23.6683"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA764" />
              <stop offset="1" stop-color="#F17F29" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2011_6193"
              x1="12.6858"
              y1="0.0280762"
              x2="12.6858"
              y2="23.6683"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA764" />
              <stop offset="1" stop-color="#F17F29" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
export default GoalSVG;
