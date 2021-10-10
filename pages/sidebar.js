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
          <li className="semua-kotak-masuk">
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Semua kotak masuk
            </a>
          </li>
          <li className="utama">
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Utama
              <p>99+</p>
            </a>
          </li>
          <li className="sosial">
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Sosial
            </a>
          </li>
          <li className="promosi">
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Promosi
            </a>
          </li>
          <h5 className="semua-label">SEMUA LABEL</h5>
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
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Penting
              <p>80</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Terkirim
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Terjadwal
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Kotak keluar
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Draf
              <p>1</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Semua email
              <p>99+</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Spam
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Sampah
            </a>
          </li>
          <h6 className="semua-label">GOOGLE APP</h6>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Kalender
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Kontak
            </a>
          </li>
          <li className="setelan">
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Setelan
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Bantuan &#38; masukan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarPage;
