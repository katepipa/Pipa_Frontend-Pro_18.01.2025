import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#">Main page</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
