interface Props {
  id: string;
}

const TransactionSVG = ({ id }: Props) => {
  switch (id) {
    case "IncomeTransaction":
      return (
        <svg
          width="17"
          height="19"
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
    case "OutcomeTransaction":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          fill="none"
        >
          <rect
            id="backgroundrect"
            width="100%"
            height="100%"
            x="0"
            y="0"
            fill="none"
            stroke="none"
          />

          <g className="currentLayer">
            <title>Layer 1</title>
            <path
              d="M0.28767199016571054,7.296878132572175 C-0.09994500983428944,7.690278132572175 -0.09525600983428961,8.323428132572174 0.2981519901657106,8.711048132572174 C0.6915519901657108,9.098688132572175 1.3247019901657104,9.093988132572175 1.7123219901657105,8.700578132572174 L7.0036619901657104,3.3302781325721744 V17.001388132572174 C7.0036619901657104,17.553688132572173 7.451381990165711,18.001388132572174 8.00366199016571,18.001388132572174 C8.55595199016571,18.001388132572174 9.00366199016571,17.553688132572173 9.00366199016571,17.001388132572174 V3.336768132572174 L14.28856199016571,8.700578132572174 C14.676261990165711,9.093988132572175 15.309361990165712,9.098688132572175 15.702761990165712,8.711048132572174 C16.09616199016571,8.323428132572174 16.10086199016571,7.690278132572175 15.713261990165712,7.296878132572175 L8.89087199016571,0.37268813257217426 C8.401261990165711,-0.1242288674278259 7.59967199016571,-0.12422986742782594 7.110061990165711,0.37268813257217426 L0.28767199016571054,7.296878132572175 z"
              fill="#eb1a1a"
              transform="rotate(-180 8,9) "
              fill-opacity="1"
            />
          </g>
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
export default TransactionSVG;
