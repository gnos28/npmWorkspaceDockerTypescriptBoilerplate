import app from "./app";

const start = async () => {
  app.listen(5000, (): void => console.log("listening on port 5000"));
};

start();
