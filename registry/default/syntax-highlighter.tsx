import localFont from "next/font/local";


export interface SyntaxHighlighterProps {
	children: React.ReactNode;
	className?: string;
	palette?: "night-owl" | "light-owl"|"default";
}



const myHighlighterFont = localFont({
    src: "./syntax-highlighter.woff2",
    display: "swap",
    variable: "--font-syntax-highlighter",
	});

    const myNightOwlFont = localFont({
        src: "./syntax-highlighter-night-owl.woff2",
        display: "swap",
        variable: "--font-syntax-highlighter-night-owl",
    });

    const myLightOwlFont = localFont({
        src: "./syntax-highlighter-light-owl.woff2",
        display: "swap",
        variable: "--font-syntax-highlighter-light-owl",
    });

export function SyntaxHighlighter({ children, className, palette="default" }: SyntaxHighlighterProps) {

    const myFont = palette === "default" ? myHighlighterFont : palette === "night-owl" ? myNightOwlFont : myLightOwlFont;




	return (
		<pre
			className={`${myFont.className} syntax-highlighter ${className || ""}`}
			style={{
				fontSize: "16px",
				lineHeight: "1.5",
				fontWeight: "400",
				fontStyle: "normal",
				fontVariant: "normal",
			}}
		>
			{children}
		</pre>
	);
}
