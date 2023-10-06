export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <span>Copyright © {year} benjamin-benoit</span>
    </div>
  );
}
