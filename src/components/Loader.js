import spinner from "./spinner.gif";

const Loader = ({dynamicText}) => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>{dynamicText}</h1>
    </div>
  );
};
export default Loader;
