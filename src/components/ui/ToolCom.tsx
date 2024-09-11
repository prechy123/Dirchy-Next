import Link from "next/link";
import React from "react";

interface ToolComProps {
  name: string;
  description: string;
}

const ToolCom = ({ name, description }: ToolComProps) => {
  return (
    <Link
      href={`/tool/${name}`}
      className=" shadow-lg p-3 bg-slate-600/25 h-[160px] flex justify-around flex-col rounded"
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default ToolCom;
