import mongoose from "mongoose";

export type CityDocument = mongoose.Document & {
  state_id: string;
  name: string;
};

const CitySchema = new mongoose.Schema<CityDocument>(
  {
    state_id: {
      type: Number,
    },
    name: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, _id: false }
);

const City = mongoose.model<CityDocument>("City", CitySchema);

export default City;
