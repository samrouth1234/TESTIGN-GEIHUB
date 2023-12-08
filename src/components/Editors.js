import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import axios from "axios";

const UPLOAD_SINGLE_FILE_API = `http://localhost:8080/api/v1/files/uploaded-single`;

const Editors = () => {
  const [data, setData] = useState("");
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setData(data);
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(UPLOAD_SINGLE_FILE_API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        const imageUrl = response.data.location;
        const editor = editorData.replace(
          /<img[^>]+>/,
          `<img src="${imageUrl} />`
        );
        setEditorData(editor);
        return imageUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomButtonClick = () => {
    const editor = window.editor;
    const selection = editor.model.document.selection;
    const ranges = selection.getRanges();

    if (ranges.length > 0) {
      const selectedText = ranges[0].getSelectedText();
      const newText = `{${selectedText}}`;
      editor.model.change((writer) => {
        writer.insertText(newText, ranges[0]);
      });
    } else {
      const position = selection.getFirstPosition();
      editor.model.change((writer) => {
        writer.insertText("}", position);
        writer.insertText("{", position);
      });
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center">
        <div className=" rounded-xl border w-[900px]">
          <CKEditor
            onReady={(editor) => {
              window.editor = editor;
              editor.plugins.get("TextTransformation").isEnabled = false;
              editor.plugins.get("FileRepository").createUploadAdapter = (
                loader
              ) => {
                return {
                  upload: async () => {
                    const file = await loader.file;
                    const uploadedFileUrl = await handleFileUpload(file);
                    return {
                      default: uploadedFileUrl,
                    };
                  },
                };
              };

              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );

              const customButton = document.createElement("button");
              customButton.innerHTML = "{ }";
              customButton.className = "ck-button";
              customButton.addEventListener("click", handleCustomButtonClick);
              editor.ui.view.toolbar.element.appendChild(customButton);
            }}
            onChange={handleEditorChange}
            editor={DecoupledEditor}
            config={{
              placeholder: "Text here...",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Editors;
