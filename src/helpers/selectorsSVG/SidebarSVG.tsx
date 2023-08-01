interface Props {
  id: string;
}

const SidebarSVG = ({ id }: Props) => {
  switch (id) {
    case "cloud":
      return (
        <svg
          fill="#000000"
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 297 297"
        >
          <path
            d="M297,136.323c0-26.571-19.465-48.683-44.885-52.821c-4.065-17.137-19.496-29.921-37.857-29.921
	c-11.905,0-23.075,5.484-30.393,14.63c-9.301,0.275-17.778,3.846-24.338,9.564c-9.537-6.058-20.836-9.581-32.946-9.581
	c-26.92,0-50.84,17.866-58.805,43.182c-14.73,6.543-25.134,19.856-28.007,35.564C17.169,151.124,0,170.982,0,194.775
	c0,26.823,21.822,48.645,48.645,48.645h142.882c31.535,0,57.598-23.811,61.195-54.395C277.841,184.633,297,162.68,297,136.323z
	 M191.526,224.065H48.645c-16.151,0-29.29-13.139-29.29-29.29s13.139-29.291,29.29-29.291c5.344,0,9.677-4.333,9.677-9.677
	c0-12.834,8.214-24.057,20.441-27.926c3.3-1.045,5.791-3.773,6.532-7.154c4.216-19.224,21.578-33.177,41.286-33.177
	c23.313,0,42.28,18.966,42.28,42.28c0,0.311-0.012,0.619-0.023,0.928l-0.014,0.422c-0.094,3.045,1.25,5.956,3.63,7.857
	c2.38,1.902,5.518,2.574,8.464,1.811c3.444-0.89,7.013-1.341,10.609-1.341c23.314,0,42.28,18.966,42.28,42.279
	C233.806,205.098,214.84,224.065,191.526,224.065z M251.915,169.429c-5.738-28.084-30.635-49.277-60.389-49.277
	c-1.352,0-2.704,0.044-4.05,0.132c-1.728-11.068-6.413-21.17-13.218-29.47c3.09-2.056,6.79-3.264,10.773-3.264
	c0.812,0,1.643,0.056,2.543,0.172c3.907,0.504,7.719-1.41,9.656-4.835c3.471-6.138,9.996-9.951,17.027-9.951
	c10.779,0,19.548,8.769,19.548,19.548c0,5.344,4.333,9.677,9.677,9.677c18.837,0,34.162,15.325,34.162,34.162
	C277.645,152.251,266.687,165.665,251.915,169.429z"
          />
        </svg>
      );
    case "overview":
      return (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" transform="translate(0.986343)" />
          <path
            d="M23.35 8H8.62271C7.71897 8 6.98634 8.7835 6.98634 9.75V20.25C6.98634 21.2165 7.71897 22 8.62271 22H23.35C24.2537 22 24.9863 21.2165 24.9863 20.25V9.75C24.9863 8.7835 24.2537 8 23.35 8Z"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.98634 13H24.9863"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "transactions":
      return (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" transform="translate(0.986343)" />
          <path
            d="M12.1774 9.28638H24.5567"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1774 14.9999H24.5567"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1774 20.7134H24.5567"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.41637 9.2865H7.42493"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.41613 14.9999H7.42469"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.41613 20.7134H7.42469"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "statistic":
      return (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.4445 23.5415L7.4445 6.45776"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.4443 23.5413L24.528 23.5413"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2809 16.6341C13.5086 14.5994 15.1065 13.436 16.9083 11.8206L18.0265 16.2009L22.8993 12.0935"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "settings":
      return (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" transform="translate(0.986343)" />
          <path
            d="M15.9866 17.3153C17.2651 17.3153 18.3015 16.2789 18.3015 15.0004C18.3015 13.7219 17.2651 12.6854 15.9866 12.6854C14.7081 12.6854 13.6717 13.7219 13.6717 15.0004C13.6717 16.2789 14.7081 17.3153 15.9866 17.3153Z"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6966 17.3151C21.5939 17.5478 21.5632 17.806 21.6086 18.0563C21.654 18.3066 21.7733 18.5376 21.9512 18.7195L21.9975 18.7658C22.141 18.9091 22.2548 19.0793 22.3325 19.2667C22.4102 19.454 22.4501 19.6549 22.4501 19.8577C22.4501 20.0605 22.4102 20.2613 22.3325 20.4487C22.2548 20.636 22.141 20.8062 21.9975 20.9495C21.8542 21.093 21.684 21.2069 21.4966 21.2845C21.3093 21.3622 21.1085 21.4022 20.9056 21.4022C20.7028 21.4022 20.502 21.3622 20.3147 21.2845C20.1273 21.2069 19.9571 21.093 19.8138 20.9495L19.7675 20.9032C19.5856 20.7254 19.3546 20.606 19.1043 20.5606C18.854 20.5152 18.5958 20.5459 18.3631 20.6486C18.1348 20.7464 17.9402 20.9088 17.8031 21.1159C17.666 21.3229 17.5924 21.5655 17.5914 21.8138V21.945C17.5914 22.3543 17.4288 22.7468 17.1394 23.0362C16.85 23.3257 16.4574 23.4883 16.0481 23.4883C15.6388 23.4883 15.2463 23.3257 14.9569 23.0362C14.6675 22.7468 14.5049 22.3543 14.5049 21.945V21.8755C14.4989 21.6201 14.4162 21.3724 14.2676 21.1646C14.119 20.9568 13.9113 20.7985 13.6715 20.7103C13.4387 20.6076 13.1806 20.577 12.9302 20.6224C12.6799 20.6677 12.4489 20.7871 12.2671 20.965L12.2208 21.0113C12.0775 21.1548 11.9073 21.2686 11.7199 21.3463C11.5325 21.4239 11.3317 21.4639 11.1289 21.4639C10.9261 21.4639 10.7253 21.4239 10.5379 21.3463C10.3506 21.2686 10.1804 21.1548 10.037 21.0113C9.89355 20.8679 9.77972 20.6977 9.70205 20.5104C9.62439 20.323 9.58441 20.1222 9.58441 19.9194C9.58441 19.7166 9.62439 19.5158 9.70205 19.3284C9.77972 19.1411 9.89355 18.9709 10.037 18.8275L10.0833 18.7812C10.2612 18.5994 10.3806 18.3684 10.4259 18.1181C10.4713 17.8677 10.4407 17.6096 10.338 17.3768C10.2402 17.1486 10.0777 16.954 9.87072 16.8169C9.6637 16.6798 9.4211 16.6062 9.1728 16.6052H9.04162C8.63231 16.6052 8.23977 16.4426 7.95035 16.1532C7.66093 15.8637 7.49833 15.4712 7.49833 15.0619C7.49833 14.6526 7.66093 14.2601 7.95035 13.9706C8.23977 13.6812 8.63231 13.5186 9.04162 13.5186H9.11106C9.36647 13.5126 9.61418 13.43 9.82198 13.2813C10.0298 13.1327 10.1881 12.925 10.2762 12.6852C10.379 12.4525 10.4096 12.1943 10.3642 11.944C10.3188 11.6937 10.1995 11.4627 10.0216 11.2808L9.97531 11.2345C9.83182 11.0912 9.71799 10.921 9.64032 10.7337C9.56266 10.5463 9.52268 10.3455 9.52268 10.1427C9.52268 9.93986 9.56266 9.73903 9.64032 9.55168C9.71799 9.36433 9.83182 9.19412 9.97531 9.05079C10.1186 8.9073 10.2888 8.79347 10.4762 8.71581C10.6635 8.63814 10.8644 8.59817 11.0672 8.59817C11.27 8.59817 11.4708 8.63814 11.6582 8.71581C11.8455 8.79347 12.0157 8.9073 12.1591 9.05079L12.2054 9.09709C12.3872 9.27498 12.6182 9.39432 12.8685 9.43971C13.1188 9.48509 13.377 9.45445 13.6097 9.35173H13.6715C13.8997 9.25392 14.0944 9.0915 14.2315 8.88448C14.3686 8.67745 14.4421 8.43486 14.4431 8.18655V8.05537C14.4431 7.64607 14.6057 7.25353 14.8951 6.9641C15.1846 6.67468 15.5771 6.51208 15.9864 6.51208C16.3957 6.51208 16.7883 6.67468 17.0777 6.9641C17.3671 7.25353 17.5297 7.64607 17.5297 8.05537V8.12482C17.5307 8.37313 17.6043 8.61572 17.7414 8.82275C17.8785 9.02977 18.0731 9.19219 18.3013 9.29C18.5341 9.39272 18.7923 9.42336 19.0426 9.37797C19.2929 9.33259 19.5239 9.21325 19.7057 9.03536L19.752 8.98906C19.8954 8.84557 20.0656 8.73174 20.2529 8.65408C20.4403 8.57641 20.6411 8.53644 20.8439 8.53644C21.0467 8.53644 21.2475 8.57641 21.4349 8.65408C21.6222 8.73174 21.7925 8.84557 21.9358 8.98906C22.0793 9.13239 22.1931 9.3026 22.2708 9.48995C22.3484 9.6773 22.3884 9.87813 22.3884 10.0809C22.3884 10.2837 22.3484 10.4846 22.2708 10.6719C22.1931 10.8593 22.0793 11.0295 21.9358 11.1728L21.8895 11.2191C21.7116 11.401 21.5923 11.632 21.5469 11.8823C21.5015 12.1326 21.5321 12.3908 21.6348 12.6235V12.6852C21.7327 12.9135 21.8951 13.1081 22.1021 13.2452C22.3091 13.3823 22.5517 13.4559 22.8 13.4569H22.9312C23.3405 13.4569 23.7331 13.6195 24.0225 13.9089C24.3119 14.1983 24.4745 14.5909 24.4745 15.0002C24.4745 15.4095 24.3119 15.802 24.0225 16.0914C23.7331 16.3809 23.3405 16.5435 22.9312 16.5435H22.8618C22.6135 16.5444 22.3709 16.618 22.1638 16.7551C21.9568 16.8922 21.7944 17.0869 21.6966 17.3151V17.3151Z"
            stroke="#00000080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};

export default SidebarSVG;
