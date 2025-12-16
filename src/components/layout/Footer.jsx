export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container py-4 small text-muted">
        © {new Date().getFullYear()} John Doe
      </div>
    </footer>
  );
}