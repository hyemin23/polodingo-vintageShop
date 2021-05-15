// npm build -> npm start로 실행해서 확인해야함
// 404이외의 모든 에러 처리

function Error({ statusCode }) {
  return (
    <>
      <h2>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h2>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
