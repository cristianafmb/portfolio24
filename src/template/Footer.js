
export function Footer({ title = "" }) {
  return (
    <footer>
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
       
      </a>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-uppercase">{title}</p>
      </a>
    </footer>
  );
}
