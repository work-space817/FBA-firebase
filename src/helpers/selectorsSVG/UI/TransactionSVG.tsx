interface Props {
  id: string;
}

const TransactionSVG = ({ id }: Props) => {
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
          width="1rem"
          height="1rem"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
export default TransactionSVG;
