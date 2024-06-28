import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";

const PageNotFound = (props) => {
  return (
    <article id="pageNotFound">
      <Appear animate show={props.entered}>
        <h1>404 Error: Page Not Found</h1>
        <Paragraph>
          Oops! It looks like the page you were seeking is not Available.
        </Paragraph>
      </Appear>
    </article>
  );
};

export default PageNotFound;
