// components/custom-editor.js
"use client";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import { useState } from "react";

const editorConfiguration = {
  toolbar: [
    // "heading",
    // "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    // "|",
    // "outdent",
    // "indent",
    // "|",
    // "imageUpload",
    // "blockQuote",
    // "insertTable",
    // "mediaEmbed",
    // "undo",
    // "redo",
  ],
};

// function CustomEditor(props) {
//   return (
//     <CKEditor
//       editor={Editor}
//       config={editorConfiguration }
//       data={props.initialData}
//       onChange={(event, editor) => {
//         const data = editor.getData();
//         console.log({ event, editor, data });
//       }}
//     />
//   );
// }

function CustomEditor(props) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (file) => {
    // Perform the necessary steps to upload the image
    // For example, using FormData and an API endpoint
    // Once the image is uploaded, set the preview URL
    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    
  };

  return (
    <div>
      <CKEditor
        editor={Editor}
        config={{
          ...editorConfiguration,
          placeholder: "Enter text here...", // Replace with your desired placeholder text
        }}
        data={props.initialData}
        onReady={(editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return {
              upload: async () => {
                const file = await loader.file;
                handleImageUpload(file);
                return new Promise((resolve, reject) => {
                  // Placeholder implementation
                  setTimeout(() => {
                    resolve({ default: URL.createObjectURL(file) });
                  }, 2000);
                });
              },
            };
          };
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

export default CustomEditor;
