import { tools } from "@/app/tools";
import { Metadata } from "next";

interface Params {
  params: {
    tool: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tool } = params;

  const currentTool = tools.find((t) => t.name === tool);

  return {
    title: `Batch Tools - ${tool.replace(/-/g, " ")}`,
    description: currentTool?.description,
    keywords: `${tool}, batch tools, Convert document format, background removal, qr code generator, video transcriber, pdf merger, html to pdf, pdf to jpg, json to csv`,
    openGraph: {
      title: `Batch Tools - ${tool.replace(/-/g, " ")}`,
      description: currentTool?.description,
      url: `https://batchtools.site/tool/${tool}`,
      type: "website",
      siteName: "Batch Tools",
      images: [
        {
          url: currentTool?.ogImage ? currentTool.ogImage : "https://i.ibb.co/8dQRNWp/home.png",
          width: 1200,
          height: 630,
          alt: "Batch Tools Home Page",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Batch Tools - ${tool.replace(/-/g, " ")}`,
      description: currentTool?.description,
      images: [currentTool?.ogImage ? currentTool.ogImage : "https://i.ibb.co/8dQRNWp/home.png"],
    },
    robots: {
      index: true,
      follow: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
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
