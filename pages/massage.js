import Link from "next/link";

const MassagePage = () => {
  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <button>
            <img src="./back.png" height="20px" />
          </button>
        </Link>
        <div>
          <button>
            <img src="./arsip.png" height="20px" />
          </button>
          <button>
            <img src="./trash.png" height="20px" />
          </button>
          <button>
            <img src="./email.png" height="20px" />
          </button>
          <button>
            <img src="./list.png" height="20px" />
          </button>
        </div>
      </div>
      <div className="navbar-desc">
        <div>
          <p className="primarydesc-navbar">
            ylndka_, kami sudah memudahkan untuk kembali ke Instagram
            <span>Kotak Masuk</span>
          </p>
        </div>
        <img src="./star.png" height="20px" />
      </div>
      <div className="content-desc">
        <p className="i-user">I</p>
        <div className="content-desc-user">
          <h4>
            Instagram
            <span className="date-user">2 hari yang lalu</span>
          </h4>
          <p className="line-to">
            kepada saya
            <span>
              <img src="./arrow.png" height="10px" />
            </span>
          </p>
        </div>
        <div className="button-user">
          <button>
            <img src="./undo.png" height="20px" />
          </button>
          <button>
            <img src="./list.png" height="20px" />
          </button>
        </div>
      </div>
      <div className="icon">
        <img src="./instagram.png" height="20px" />
        <p> | </p>
        <img src="./logo instagram.png" width="auto" height="20px" />
      </div>
      <div className="desc">
        <p>Halo ylndka_,</p>
        <p>
          Tampaknya Anda mengalami masalah saat masuk Instagram. Kami dapat
          membantu Anda kembali ke akun Anda.
        </p>
        <div className="container-desc">
          <p>Masuk sebagai ylndka_</p>
        </div>
      </div>
      <div className="desc-2">
        <p>
          Anda juga dapat mengatur <span>ulang kata sandi Instagram Anda.</span>
        </p>
        <p className="primary-desc2">
          Tidak ingin kami mengirimi Anda email seperti ini?
        </p>
      </div>
      <div className="end">
        <p>from</p>
        <h6>FACEBOOK</h6>
        <p>
          © Instagram. Facebook Inc., 1601 Willow Road, Menlo Park, CA 94025
        </p>
        <p className="desc-end">
          Pesan ini dikirimkan ke
          <span>eggyyuliandika@gmail.com</span>
          dan ditujukan untuk ylndka_. Bukan akun Anda?
          <span>Hapus email Anda</span>
          dari akun ini.
        </p>
      </div>
      <div className="flex-end">
        <div>
          <img src="./undo.png" height="18px" />
          <p className="flex-end-desc">Balas</p>
        </div>
        <div>
          <img src="./undo.png" height="18px" />
          <p className="flex-end-desc1">Balas ke semua</p>
        </div>
        <div>
          <img src="./undo.png" height="18px" />
          <p className="flex-end-desc">Teruskan</p>
        </div>
      </div>
    </div>
  );
};

export default MassagePage;
