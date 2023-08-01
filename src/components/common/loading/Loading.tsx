import "./loading.css";

const LoadingContainer = () => {
  return (
    <div className="my_eclipse">
      <div className="progress">
        <div>
          {/* <FaSpinner size="3x" /> */}
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
const Loading = LoadingContainer;
export default Loading;
