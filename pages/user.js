import Link from "next/link";

const UserPage = () => {
  return (
    <div className="body">
      <div className="nav-account">
        <Link href="/">
          <button>
            <img src="./close.png" height="14px" />
          </button>
        </Link>
        <img clasName="google-img" src="./google1.jpg" width="70px" />
        <div></div>
      </div>
      <div className="account">
        <div className="user">
          <div className="profile-user">
            <img src="./camera1.png" height="20px" />
          </div>
          <div className="desc-user">
            <h5>Eggy Yuliandika</h5>
            <p>eggyyuliandika@gmail.com</p>
          </div>
          <p className="primarydesc-user">99+</p>
        </div>
        <h5 className="desc-account">Kelola Akun Google Anda</h5>
      </div>
      <div className="user-next">
        <div className="profile-user">
          <img src="./camera1.png" height="20px" />
        </div>
        <div className="desc-user">
          <h5>Eggy Yuliandika</h5>
          <p>eggyyuliandika@gmail.com</p>
        </div>
        <p className="primarydesc-user">99+</p>
      </div>
      <div className="user-next">
        <div className="profile-user">
          <img src="./camera1.png" height="20px" />
        </div>
        <div className="desc-user">
          <h5>Eggy Yuliandika</h5>
          <p>eggyyuliandika@gmail.com</p>
        </div>
        <p className="primarydesc-user">54</p>
      </div>
      <div className="user-next">
        <div className="profile-user">
          <img src="./camera1.png" height="20px" />
        </div>
        <div className="desc-user">
          <h5>Eggy Yuliandika</h5>
          <p>eggyyuliandika@gmail.com</p>
        </div>
        <p className="primarydesc-user">39</p>
      </div>
      <div className="user-add">
        <button>
          <img src="./adduser.png" height="20px" />
        </button>
        <p>Tambahkan akun lainnya</p>
      </div>
      <div className="user-add">
        <button>
          <img src="./usersetting.png" height="20px" />
        </button>
        <p>Kelola akun di perangkat ini</p>
      </div>
      <div className="end-user">
        <p>Kebijakan Privasi</p>
        <p>.</p>
        <p>Persyaratan Layanan</p>
      </div>
    </div>
  );
};

export default UserPage;
