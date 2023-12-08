import React from 'react'

export default function page() {
  return (
    <div className="flex justify-center m-auto">
      <video
        controls
        controlsList="nodownload"
        autoPlay
        muted
        className="w-[800px] h-auto"
      >
        <source
          src="http://139.59.252.233:8000/videos-streaming/ronaldo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
