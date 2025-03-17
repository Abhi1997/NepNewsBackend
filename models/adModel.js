// models/adModel.js
const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    placement: {
      type: String,
      enum: ["top", "sidebar", "bottom", "front"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // adsManager
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
