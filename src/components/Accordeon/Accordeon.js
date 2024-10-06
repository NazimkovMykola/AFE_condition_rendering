import { useState } from "react";

const Accordeon = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div className="acc">
      <div className="acc__header">
        <h1>HTML</h1>
        <div>
          {isExpand ? (
            <span
              onClick={() => {
                setIsExpand(false);
              }}
            >
              -
            </span>
          ) : (
            <span
              onClick={() => {
                setIsExpand(true);
              }}
            >
              +
            </span>
          )}
        </div>
      </div>
      {isExpand && (
        <p>
          This HTML file is a template. If you open it directly in the browser,
          you will see an empty page. You can add webfonts, meta tags, or
          analytics to this file. The build step will place the bundled scripts
          into the tag. To begin the development, run `npm start` or `yarn
          start`. To create a production bundle, use `npm run build` or `yarn
          build`
        </p>
      )}
    </div>
  );
};

export default Accordeon;
