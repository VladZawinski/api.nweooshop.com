import mongoose from "mongoose";

export type StateDocument = mongoose.Document & {
  name: string;
};

const stateSchema = new mongoose.Schema<StateDocument>(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, _id: false }
);

const State = mongoose.model<StateDocument>("State", stateSchema);

export default State;
