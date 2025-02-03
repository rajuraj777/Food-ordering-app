import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="error-wrap">
        <div className="err-card">
         <div className="error-message">Oops! Something went wrong.</div>
         <div className="error-description-1">
            {err.status}:{err.statusText}
         </div>
         <div className="error-description-2">{err.error.message}</div>
         <button id="err-btn" aria-label="error-btn">
            <a href="/" className="return-button">
               Return to Home Page
            </a>
         </button>
        </div>
      </div>
    </>
  );
};
export default Error;
