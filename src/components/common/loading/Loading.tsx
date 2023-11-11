import "./loading.css";

const LoadingContainer = () => {
  return (
    <div className="my_eclipse">
      <div className="progress">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <div className="spinner-border text-dark" role="status"></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingContainer;
