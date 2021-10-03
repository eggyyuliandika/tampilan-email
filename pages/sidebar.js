import Link from "next/link";

const SidebarPage = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i id="btn">
          <img src="./menu.png" height="20px" />
        </i>
        <i id="cancel">
          <img src="./cancel.png" height="20px" />
        </i>
      </label>
      <div className="sidebar">
        <header>Gmail</header>
        <ul>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Semua kotak masuk
            </a>
          </li>

          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Kotak masuk
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Berbintang
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Ditunda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarPage;
