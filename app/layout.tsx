import { Analytics } from '@vercel/analytics/react' ;
import "./globals.css";

export const metadata = {
    title: "UMSG Home",
    description: "UMSG Website",
    icons: {
        icon: ["/favicon.ico", "/favicon-32x32.png", "/favicon-16x16.png"],
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
    },
    manifest: "/site.webmanifest",
    other: {
        "msapplication-TileColor": "#da532c",
        "theme-color": "#ffffff",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="overscroll-y-none">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
