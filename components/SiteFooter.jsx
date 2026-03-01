export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p className="footer-copy">© {new Date().getFullYear()} DroneSurveyCR</p>
        <p className="footer-note">High-accuracy aerial surveying using lidar and photogrammetry.</p>
      </div>
    </footer>
  );
}
