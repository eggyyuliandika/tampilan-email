import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className="box-search">
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
        <input placeholder="Telusuri dalam email"></input>
        <button>
          <Link href="user">
            <img className="box-search-icon" src="./profile.png" />
          </Link>
        </button>
      </div>
      <h4 className="label-utama">UTAMA</h4>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Lintang from Dewaweb</p>
          <p className="desc-massage-box">e-Voucher 50% untuk INTECH FEST</p>
          <p className="subdesc-massage-box">
            Dewaweb sebagai sponsor INTECH F...
          </p>
        </div>
        <div className="time-massage-box">
          <p>17.50</p>
          <button>
            <img
              className="time-massage-box-star-icon"
              src="./star.png"
              height="18px"
            />
          </button>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Lintang from Dewaweb</p>
          <p className="desc-massage-box">e-Voucher 50% untuk INTECH FEST</p>
          <p className="subdesc-massage-box">
            Dewaweb sebagai sponsor INTECH F...
          </p>
        </div>
        <div className="time-massage-box">
          <p>17.50</p>
          <button>
            <img
              className="time-massage-box-star-icon"
              src="./star.png"
              height="18px"
            />
          </button>
        </div>
      </div>
      <div className="box-promosi">
        <img className="box-promosi-tag-icon" src="./tag.png" />
        <div>
          <h3>Promosi</h3>
          <h4>Promosi Pilihan</h4>
          <p>Grab, Adobe Creative Cloud for Photograpers,...</p>
        </div>
        <div className="notif-box-promosi">
          <p>44 baru</p>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Lintang from Dewaweb</p>
          <p className="desc-massage-box">e-Voucher 50% untuk INTECH FEST</p>
          <p className="subdesc-massage-box">
            Dewaweb sebagai sponsor INTECH F...
          </p>
        </div>
        <div className="time-massage-box">
          <p>17.50</p>
          <button>
            <img
              className="time-massage-box-star-icon"
              src="./star.png"
              height="18px"
            />
          </button>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Lintang from Dewaweb</p>
          <p className="desc-massage-box">e-Voucher 50% untuk INTECH FEST</p>
          <p className="subdesc-massage-box">
            Dewaweb sebagai sponsor INTECH F...
          </p>
        </div>
        <div className="time-massage-box">
          <p>17.50</p>
          <button>
            <img
              className="time-massage-box-star-icon"
              src="./star.png"
              height="18px"
            />
          </button>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Asisten Google</p>
          <p className="desc-massage-box">
            Eggy, dapatkan yang terbaru dari Goo...
          </p>
          <p className="subdesc-massage-box">
            Tetap up-to-date dengan fitur-fitur ter...
          </p>
        </div>
        <div className="time-massage-box">
          <p>6 Okt</p>
          <button>
            <img className="time-massage-box-star-icon" src="./star.png" />
          </button>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Asisten Google</p>
          <p className="desc-massage-box">
            Eggy, dapatkan yang terbaru dari Goo...
          </p>
          <p className="subdesc-massage-box">
            Tetap up-to-date dengan fitur-fitur ter...
          </p>
        </div>
        <div className="time-massage-box">
          <p>6 Okt</p>
          <button>
            <img className="time-massage-box-star-icon" src="./star.png" />
          </button>
        </div>
      </div>
      <div className="massage-box">
        <img className="massage-box-profile-icon" src="./profile.png" />
        <div>
          <p className="heading-massage-box">Asisten Google</p>
          <p className="desc-massage-box">
            Eggy, dapatkan yang terbaru dari Goo...
          </p>
          <p className="subdesc-massage-box">
            Tetap up-to-date dengan fitur-fitur ter...
          </p>
        </div>
        <div className="time-massage-box">
          <p>6 Okt</p>
          <button>
            <img className="time-massage-box-star-icon" src="./star.png" />
          </button>
        </div>
      </div>
      <Link href="massage">
        <div className="massage-box">
          <img className="massage-box-profile-icon" src="./profile.png" />
          <div>
            <p className="heading-massage-box">Instagram</p>
            <p className="desc-massage-box">
              ylndka_, kami sudah memudahkan u...
            </p>
            <p className="subdesc-massage-box">
              Halo ylndka_, Tampaknya Anda men...
            </p>
          </div>
          <div className="time-massage-box">
            <p>26 Sep</p>
            <button>
              <img src="./star.png" className="time-massage-box-star-icon" />
            </button>
          </div>
        </div>
      </Link>
      <Link href="add">
        <div className="display-button-add">
          <button className="button-add">
            <img src="./plus.png" height="40px" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
