import React from "react";

interface IDotProps {
  big?: boolean;
}

const Dot: React.FC<IDotProps> = ({ big }) => {
  return (
    <>
      <span
        className={`inline-block relative mb-0.5 mr-2 ${
          big ? "h-2 w-2" : "h-1 w-1 mx-2"
        }`}
      >
        <span className=" absolute h-full w-full rounded-full bg-white"></span>
      </span>
    </>
  );
};

export default Dot;
