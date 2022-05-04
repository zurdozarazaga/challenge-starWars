import React from "react";
import { Helmet } from "react-helmet";

const LayoutHelmet = ({ title, description }) => {
  return (
    <Helmet>
      {title && <title>{`Weather Service | ${title}`}</title>}
      {description && <meta name="description" content={description} />}
      
    </Helmet>
  );
};

export default LayoutHelmet;