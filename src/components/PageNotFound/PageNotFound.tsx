import PageNotFoundStyled from "./PageNotFoundStyled";

const PageNotFound = () => {
  return (
    <PageNotFoundStyled className="container">
      <h2 className="main-title">404 Page not found</h2>
      <img src="/images/notfound.png" alt="Red nexus" />
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
