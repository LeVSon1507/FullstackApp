import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    maxPeople: {
      type: Number,
      require: true,
    },
    desc: {
      type: String,
      default: false,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: [{ type: Date }],
      },
    ],
  },
  { timestamps: true }
);

[
  { number: 101, unavailableDates: [] },
  { number: 102, unavailableDates: [] },
  { number: 103, unavailableDates: [] },
  { number: 104, unavailableDates: [] },
  { number: 105, unavailableDates: [] },
  { number: 106, unavailableDates: [] },
  { number: 107, unavailableDates: [] },
];

export default mongoose.model("Room", RoomSchema);
