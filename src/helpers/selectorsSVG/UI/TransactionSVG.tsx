import { memo } from "react";

interface Props {
  id: string;
}

const TransactionSVG = memo(({ id }: Props) => {
  switch (id) {
    case "Income transaction":
      return (
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.28401 8.29549C0.896393 8.68889 0.901082 9.32204 1.29449 9.70966C1.68789 10.0973 2.32104 10.0926 2.70866 9.69919L8 4.32889V18C8 18.5523 8.44772 19 9 19C9.55229 19 10 18.5523 10 18V4.33538L15.2849 9.69919C15.6726 10.0926 16.3057 10.0973 16.6991 9.70966C17.0925 9.32204 17.0972 8.68889 16.7096 8.29549L9.88721 1.3713C9.3976 0.874383 8.59601 0.874382 8.1064 1.3713L1.28401 8.29549Z"
            fill="#53BB53"
          />
        </svg>
      );
    case "Outcome transaction":
      return (
        <svg
          width="1rem"
          height="1rem"
          viewBox="0 0 17 19"
          transform="rotate(180)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.28401 8.29549C0.896393 8.68889 0.901082 9.32204 1.29449 9.70966C1.68789 10.0973 2.32104 10.0926 2.70866 9.69919L8 4.32889V18C8 18.5523 8.44772 19 9 19C9.55229 19 10 18.5523 10 18V4.33538L15.2849 9.69919C15.6726 10.0926 16.3057 10.0973 16.6991 9.70966C17.0925 9.32204 17.0972 8.68889 16.7096 8.29549L9.88721 1.3713C9.3976 0.874383 8.59601 0.874382 8.1064 1.3713L1.28401 8.29549Z"
            fill="#eb1a1a"
          />
        </svg>
      );
    case "Delete":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      );
    case "Information":
      return (
        <svg
          fill="none"
          height="1.2rem"
          width="1.2rem"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
            stroke="#000000"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z"
            fill="#000000"
          />
          <path
            d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z"
            fill="#000000"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
});
export default TransactionSVG;
