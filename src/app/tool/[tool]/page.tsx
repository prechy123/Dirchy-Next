"use client";

import MultipleInputTool from "@/components/tool/MultipleInputTool";
import SingleInputTool from "@/components/tool/SingleInputTool";
import { useParams } from "next/navigation";

const ToolPage = () => {
  const { tool } = useParams();
  const toolName = Array.isArray(tool)
    ? tool.map(decodeURIComponent).join(", ") // Handle array case, join the decoded values
    : tool;

  return (
    <div className=" h-screen container mx-6">
      {toolName === "PDF Merger" ? (
        <MultipleInputTool toolName={toolName} />
      ) : (
        <SingleInputTool toolName={toolName} />
      )}
    </div>
  );
};

export default ToolPage;
