import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy, FileDownload } from "../../utils";
import { toast } from "sonner";

const IconDetailsModal = ({ title, description, Icon, setShowModal }) => {
  const [copied, setCopied] = useState(false);

  if (copied) {
    toast.success("Copied to Clipboard!");
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadSvg = (iconSvgContent, title) => {
    // Create a blob from the SVG content
    const blob = new Blob([iconSvgContent], {
      type: "image/svg+xml;charset=utf-8",
    });

    // Create a URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and click it to start the download
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", `${title}.svg`); // Set the filename for the downloaded file
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Release the object URL after triggering the download
    URL.revokeObjectURL(url);
  };
  return (
    <div className=" bg-[#1E293B] w-3/4 absolute left-1/2 top-1/2 border border-opacity-50 border-white -translate-y-1/2 -translate-x-1/2 rounded-lg">
      <div className="container mx-auto p-3">
        <div className="flex justify-between">
          <p className="font-semibold">{title}</p>
          <p onClick={() => setShowModal(null)} className="cursor-pointer">
            Close
          </p>
        </div>
        <div className="h-0.5 w-full bg-[#0B1120] my-1 opacity-50" />
        <div className="flex gap-4">
          <p onClick={() => downloadSvg(description, title)}>
            <FileDownload />
          </p>
          <p className="cursor-pointer" onClick={handleCopy}>
            <Copy />
          </p>
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={docco}
          customStyle={{
            borderRadius: "8px",
            marginTop: "16px",
          }}
        >
          {description}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default IconDetailsModal;
