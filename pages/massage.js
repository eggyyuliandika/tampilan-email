import Link from "next/link";

const MassagePage = () => {
  return (
    <div>
      <div className="navbar-massage">
        <Link href="/">
          <button>
            <img className="navbar-massage-icon" src="./back.png" />
          </button>
        </Link>
        <div></div>
        <button>
          <img className="navbar-massage-icon" src="./arsip.png" />
        </button>
        <button>
          <img className="navbar-massage-icon" src="./trash.png" />
        </button>
        <button>
          <img className="navbar-massage-icon" src="./email.png" />
        </button>
        <button>
          <img className="navbar-massage-icon" src="./list.png" />
        </button>
      </div>
      <div className="content-massage">
        <div>
          <p className="desc-content-massage">
            ylndka_, kami sudah memudahkan untuk kembali ke Instagram
            <span>Kotak Masuk</span>
          </p>
        </div>
        <img className="content-massage-star-icon" src="./star.png" />
      </div>
      <div className="content-massage-sender">
        <p className="content-massage-profile-sender">I</p>
        <div>
          <h3>
            Instagram
            <span className="content-massage-date-sender">26 Sep</span>
          </h3>
          <p className="content-massage-to-me">
            kepada saya
            <span>
              <img
                className="content-massage-to-me-arrow-icon"
                src="./arrow.png"
              />
            </span>
          </p>
        </div>
        <button>
          <img src="./undo.png" height="20px" />
        </button>
        <button>
          <img src="./list.png" height="20px" />
        </button>
      </div>
      <div className="heading-content-massage">
        <img className="heading-content-massage-logo" src="./instagram.png" />
        <p> | </p>
        <img
          className="heading-content-massage-instagram"
          src="./logo instagram.png"
        />
      </div>
      <div className="subdesc-content-massage">
        <p>Halo ylndka_,</p>
        <p>
          Tampaknya Anda mengalami masalah saat masuk Instagram. Kami dapat
          membantu Anda kembali ke akun Anda.
        </p>
        <div className="subdesc-box-content-massage">
          <p>Masuk sebagai ylndka_</p>
        </div>
      </div>
      <div className="primarydesc-content-massage">
        <p>
          Anda juga dapat mengatur <span>ulang kata sandi Instagram Anda.</span>
        </p>
        <p className="primary-desc2-content-massage">
          Tidak ingin kami mengirimi Anda email seperti ini?
        </p>
      </div>
      <div className="descend-content-massage">
        <p>from</p>
        <h6>FACEBOOK</h6>
        <p>
          © Instagram. Facebook Inc., 1601 Willow Road, Menlo Park, CA 94025
        </p>
        <p className="subdescend-content-massage">
          Pesan ini dikirimkan ke
          <span>eggyyuliandika@gmail.com</span>
          dan ditujukan untuk ylndka_. Bukan akun Anda?
          <span>Hapus email Anda</span>
          dari akun ini.
        </p>
      </div>
      <div className="flex-end-content-massage">
        <div className="flex-end-box-content-massage">
          <img src="./undo.png" height="18px" />
          <p className="flex-end-box-desc-content-massage">Balas</p>
        </div>
        <div className="flex-end-box-content-massage">
          <img src="./undo.png" height="18px" />
          <p className="flex-end-box-desc1-content-massage">Balas ke semua</p>
        </div>
        <div className="flex-end-box-content-massage">
          <img src="./undo.png" height="18px" />
          <p className="flex-end-box-desc-content-massage">Teruskan</p>
        </div>
      </div>
    </div>
  );
};

export default MassagePage;
