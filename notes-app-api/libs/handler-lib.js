export default function handler(lambda) {
  return function (event, context) {
    return Promise.resolve()
      .then(() => lambda(event, context))
      .then((responseBody) => {
        console.log("lambda completed successfully");
        return [200, responseBody];
      })
      .catch((e) => {
        console.error(e);
        return [500, { error: e.message }];
      })
      .then(([statusCode, body]) => ({
        statusCode,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-COntrol-Allow-Credentials": true,
        },
        body: JSON.stringify(body),
      }));
  };
}
