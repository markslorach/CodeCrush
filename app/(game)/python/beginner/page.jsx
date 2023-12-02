import React from "react";

export default function Beginner() {
  return (
    <div className="flex flex-col gap-4">
      <div className="form-control bg-[#1c375c] rounded-lg py-1 px-2">
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-white/50"
            defaultChecked
          />
        </label>
      </div>
      <div className="form-control bg-[#1c375c] rounded-lg py-1 px-2">
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-white/50"
          />
        </label>
      </div>
      <div className="form-control bg-[#1c375c] rounded-lg py-1 px-2">
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-white/50"
          />
        </label>
      </div>
    </div>
  );
}
