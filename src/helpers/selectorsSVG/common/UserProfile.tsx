import { memo } from "react";

interface ISelectCategoriesProps {
  id: string;
}

const UserProfile = memo(({ id }: ISelectCategoriesProps) => {
  switch (id) {
    case "UserPhoto":
      return (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2011_6218"
            // style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18.153" cy="18.2526" r="17.5292" fill="#FFC145" />
          </mask>
          <g mask="url(#mask0_2011_6218)">
            <circle cx="18.153" cy="18.2526" r="17.5292" fill="#FFC145" />
            <path
              d="M28.9857 37.8702V34.2894C28.9857 32.39 28.415 30.5684 27.3993 29.2253C26.3835 27.8822 25.0058 27.1277 23.5693 27.1277H12.7365C11.3 27.1277 9.92227 27.8822 8.9065 29.2253C7.89072 30.5684 7.32007 32.39 7.32007 34.2894V37.8702"
              fill="#197BBD"
            />
            <path
              d="M18.1515 21.7105C21.1429 21.7105 23.5679 19.2855 23.5679 16.2941C23.5679 13.3027 21.1429 10.8777 18.1515 10.8777C15.1601 10.8777 12.7351 13.3027 12.7351 16.2941C12.7351 19.2855 15.1601 21.7105 18.1515 21.7105Z"
              fill="white"
            />
          </g>
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
        >
          <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z" />
        </svg>
      );
  }
});
export default UserProfile;
