import { tools } from "@/app/tools";
import { Metadata } from "next";

interface Params {
  params: {
    tool: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tool } = params;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const toolName: string = decodeURIComponent(tool);
  const currentTool = tools.find((t) => t.name === toolName);

  return {
    title: `Batch Tools - ${toolName.replace(/-/g, ' ')}`,
    description: currentTool?.description,
    keywords:
    `${toolName}, file converter, image resizer, video downloader, background remover, all-in-one app`,
  };
}

function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default ToolLayout;
