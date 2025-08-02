import * as React from "react";
import { SyntaxHighlighter } from "@/registry/default/syntax-highlighter";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8 bg-black text-white">
      <SyntaxHighlighter
      >
        {`const a =()=> 10`}
			</SyntaxHighlighter>
		</div>
	);
}
