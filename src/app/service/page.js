"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  MdOutlinePhotoCameraBack,
  MdFormatBold,
  MdOutlineFormatItalic,
} from "react-icons/md";

const Editor = () => {
  const editorRef = useRef(null);
  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const handleBoldClick = () => {
    executeCommand("bold");
  };

  const handleItalicClick = () => {
    executeCommand("italic");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPreviewImageUrl(imageUrl);
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    executeCommand("insertHTML", imgElement.outerHTML);
  };

  const executeCommand = (command, value = null) => {
    if (typeof document !== "undefined" && document.execCommand) {
      document.execCommand(command, false, value);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      editorRef.current.contentEditable = true;
    }
  }, []);

  return (
    <div>
      <div className="flex ">
        <button className="text-[30px]" onClick={handleBoldClick}>
          <MdFormatBold />
        </button>
        <button className="text-[30px]" onClick={handleItalicClick}>
          <MdOutlineFormatItalic />
        </button>
        <div className="flex items-center ">
          <label for="dropzone-file">
            <div className="text-[30px]">
              <MdOutlinePhotoCameraBack />
            </div>
            <input
              id="dropzone-file"
              type="file"
              onChange={handleImageUpload}
              class="hidden"
            />
          </label>
        </div>

        {/* <input type="file"/> */}
      </div>
      <div contentEditable ref={editorRef} className="border h-10">
        
      </div>

      <div className="w-[100px] h-[100px]">
        {previewImageUrl && (
          <div>
            <h3>Image Preview:</h3>
            <img src={previewImageUrl} alt="Preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
