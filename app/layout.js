export const metadata = {
  title: "DroneSurveyCR",
  description: "DroneSurveyCR static site"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
