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

stateSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});

const State = mongoose.model<StateDocument>("State", stateSchema);

export default State;
