import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      <div className="heading-user">
        <Link href="/">
          <button>
            <img className="heading-user-close-icon" src="./close.png" />
          </button>
        </Link>
        <img src="./google1.jpg" className="heading-user-google-image" />
        <div></div>
      </div>
      <div>
        <div className="account-user">
          <div className="account-user-profile">
            <img src="./camera1.png" />
          </div>
          <div>
            <h3>Eggy Yuliandika</h3>
            <p className="account-user-desc">eggyyuliandika@gmail.com</p>
          </div>
          <p className="account-user-notification">99+</p>
        </div>
        <h5 className="account-user-box-setting">Kelola Akun Google Anda</h5>
      </div>
      <div className="account-user-next">
        <div className="account-user-profile">
          <img src="./camera1.png" height="20px" />
        </div>
        <div>
          <h3>Eggy Yuliandika</h3>
          <p className="account-user-desc">eggyyuliandika@gmail.com</p>
        </div>
        <p className="account-user-notification">99+</p>
      </div>
      <div className="account-user">
        <div className="account-user-profile">
          <img src="./camera1.png" height="20px" />
        </div>
        <div>
          <h3>Eggy Yuliandika</h3>
          <p className="account-user-desc">eggyyuliandika@gmail.com</p>
        </div>
        <p className="account-user-notification">99+</p>
      </div>
      <div className="account-user">
        <div className="account-user-profile">
          <img src="./camera1.png" />
        </div>
        <div>
          <h3>Eggy Yuliandika</h3>
          <p className="account-user-desc">eggyyuliandika@gmail.com</p>
        </div>
        <p className="account-user-notification">99+</p>
      </div>
      <div className="account-user-button">
        <button>
          <img className="account-user-button-icon" src="./adduser.png" />
        </button>
        <p className="account-user-button-desc">Tambahkan akun lainnya</p>
      </div>
      <div className="account-user-button">
        <button>
          <img className="account-user-button-icon" src="./usersetting.png" />
        </button>
        <p className="account-user-button-desc">Kelola akun di perangkat ini</p>
      </div>
      <div className="account-user-flex-end">
        <p>Kebijakan Privasi</p>
        <p>.</p>
        <p>Persyaratan Layanan</p>
      </div>
    </div>
  );
};

export default UserPage;
