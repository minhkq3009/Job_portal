import React from "react";
import PhotoUpload from "./PhotoUpload";

const SquarePhotoUpload = React.memo(function SquarePhotoUpload(props) {
  return (
    <div className="[&_.border-dashed]:aspect-square [&_.border-dashed]:flex [&_.border-dashed]:items-center [&_.border-dashed]:justify-center [&_.border-dashed]:h-[240px] [&_.border-dashed]:w-[240px] [&_img]:aspect-square [&_img]:object-cover [&_img]:h-[240px] [&_img]:w-[240px] [&_.space-y-3]:w-full">
      <PhotoUpload {...props} />
    </div>
  );
});

export default SquarePhotoUpload;