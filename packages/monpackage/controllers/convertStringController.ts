import latinize from "latinize";
import { ControllerType } from "../interfaces";

const convertStringController: ControllerType = {};

convertStringController.convert = async (req, res) => {
  const string = req.body.string as string;

  res.send(latinize(string));
};

export { convertStringController };
