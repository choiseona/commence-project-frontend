import { Fragment } from "react";

export const cls = (...classname: string[]) => {
  return classname.join(" ");
};

export const formatContent = (content: string) =>
  content.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
