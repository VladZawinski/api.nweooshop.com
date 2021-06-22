import { Request, Response } from "express";
import State from "../models/State";
import City from "../models/City";
/**
 * @route /api/states
 * @method GET
 * @description fetch states
 */

export const index = async (req: Request, res: Response) => {
  await State.find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ success: false, data: "Error while fetching states" });
    });
};

/**
 * @route /api/cities/:stateId
 * @method GET
 * @description fetch cities that belong to state
 */

export const fetchCities = async (req: Request, res: Response) => {
  const { stateId } = req.params as any;
  await City.find({ state_id: stateId })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ success: false, data: "Error while fetching states" });
    });
};
