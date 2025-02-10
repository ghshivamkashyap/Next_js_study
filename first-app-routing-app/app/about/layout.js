import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" bg-green-500 ">
          <div>Layout for about Page</div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default AboutLayout;
