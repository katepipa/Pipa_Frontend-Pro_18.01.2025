import "./Header.css";

export function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <h2>My React App</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
