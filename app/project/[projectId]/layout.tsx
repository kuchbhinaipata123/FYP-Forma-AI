import type { Viewport } from "next";

// The canvas has its own pinch-zoom; stop the browser zooming the whole page instead.
export const viewport: Viewport = { maximumScale: 1, userScalable: false };

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
