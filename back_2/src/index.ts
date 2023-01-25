import app from "./app";

const start = async () => {
  app.listen(5100, (): void => console.log("listening on port 5100"));
};

start();
