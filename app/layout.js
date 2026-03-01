import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: {
    default: "DroneSurveyCR",
    template: "%s | DroneSurveyCR"
  },
  description: "High-accuracy aerial surveying using lidar and photogrammetry."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
