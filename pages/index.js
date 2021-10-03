import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div>
      <form>
        <div>
          <label for="check">
            <button id="btn">
              <img className="form-iconmenu" src="./menu.png" />
            </button>
          </label>
          <span>Telusuri dalam email</span>
        </div>
        <button>
          <Link href="user">
            <img className="form-iconprofile" src="./profile.png" />
          </Link>
        </button>
      </form>
      <h5 className="desc-utama">UTAMA</h5>
      <input type="checkbox" id="check" />
      <label for="check">
        <i id="btn">
          <img src="./menu.png" height="20px" />
        </i>
      </label>
      <div className="sidebar">
        <header>Gmail</header>
        <ul>
          <li>
            <a href="#">
              <i>
                <img src="./star.png" height="20px" />
              </i>
              Semua kotak masuk
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Utama
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Sosial
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Promosi
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
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Penting
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
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="./menu.png" height="20px" />
              </i>
              Semua email
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
        </ul>
      </div>

      <div className="navvv">
        <img src="./tag.png" height="20px" />
        <div className="navvv1">
          <h4>Promosi</h4>
          <h5>Promosi Pilihan</h5>
          <p>Grab, Adobe Creative Cloud for Photograpers,...</p>
        </div>
        <div className="notif-massage-promosi">
          <p>44 baru</p>
        </div>
      </div>
      <Link href="massage">
        <div className="massage">
          <img src="./profile.png" height="42px" />
          <div className="desc-massage">
            <h5 className="username">Instagram</h5>
            <p className="primarydesc-massage">
              ylndka_, kami sudah memudahkan u...
            </p>
            <p>Halo ylndka_, Tampaknya Anda men...</p>
          </div>
          <div className="subdesc-massage">
            <p>26 Sep</p>
            <button>
              <img src="./star.png" height="18px" />
            </button>
          </div>
        </div>
      </Link>
      <div className="massage">
        <img src="./profile.png" height="42px" />
        <div className="desc-massage">
          <h5 className="username"> Spotify</h5>
          <p className="primarydesc-massage">
            Kesempatan terakhir dapatkan 3 bul...
          </p>
          <p>Kerja dari rumah atau dari pantai den...</p>
        </div>
        <div className="subdesc-massage">
          <p>19 Sep</p>
          <button>
            <img src="./star.png" height="18px" />
          </button>
        </div>
      </div>
      <div className="massage">
        <img src="./profile.png" height="42px" />
        <div className="desc-massage">
          <h5 className="username">Instagram</h5>
          <p className="primarydesc-massage">
            ylndka_, kami sudah memudahkan u...
          </p>
          <p>Halo ylndka_, Tampaknya Anda men...</p>
        </div>
        <div className="subdesc-massage">
          <p>15 Sep</p>
          <button>
            <img src="./star.png" height="18px" />
          </button>
        </div>
      </div>
      <div className="massage-sosial">
        <img src="./user.png" height="30px" />
        <div className="desc-massage-sosial">
          <h5>Sosial</h5>
          <p>kadekpebrianix di Instagram, F...</p>
        </div>
        <div className="notif-massage-sosial">
          <p>29 baru</p>
        </div>
      </div>
      <div className="massage">
        <img src="./profile.png" height="42px" />
        <div className="desc-massage">
          <h5 className="username">Instagram</h5>
          <p className="primarydesc-massage">
            ylndka_, kami sudah memudahkan u...
          </p>
          <p>Halo ylndka_, Tampaknya Anda men...</p>
        </div>
        <div className="subdesc-massage">
          <p>7 Sep</p>
          <button>
            <img src="./star.png" height="18px" />
          </button>
        </div>
      </div>
      <div className="massage">
        <img src="./profile.png" height="42px" />
        <div className="desc-massage">
          <h5 className="username">Instagram</h5>
          <p className="primarydesc-massage">
            ylndka_, kami sudah memudahkan u...
          </p>
          <p>Halo ylndka_, Tampaknya Anda men...</p>
        </div>
        <div className="subdesc-massage">
          <p>5 Mei</p>
          <button>
            <img src="./star.png" height="18px" />
          </button>
        </div>
      </div>
      <div className="massage">
        <img src="./profile.png" height="42px" />
        <div className="desc-massage">
          <h5 className="username">Instagram</h5>
          <p className="primarydesc-massage">
            ylndka_, kami sudah memudahkan u...
          </p>
          <p>Halo ylndka_, Tampaknya Anda men...</p>
        </div>
        <div className="subdesc-massage">
          <p>1 Sep</p>
          <button>
            <img src="./star.png" height="18px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
