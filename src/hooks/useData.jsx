import React from "react";
import data from "../data";

const useData = (args) => {
  console.log(args);
  // args will be an array of data collections. E.g. Welding, About, enroll, etc...

  const asObject = args.reduce((acc, collection) => {
    if (data[collection]) {
      return { ...acc, [collection]: data[collection] };
    }
    return { ...acc };
  }, {});

  return !args ? data : asObject;
};

export default useData;
