import Link from "next/link";

const AddPage = () => {
  return (
    <div>
      <div className="navbar-add">
        <Link href="/">
          <button>
            <img src="./back.png" height="30px" />
          </button>
        </Link>

        <p className="desc-navbar-add">Tulis</p>
        <button>
          <img src="./list.png" height="24px" />
        </button>
        <button>
          <img src="./send.png" height="24px" />
        </button>
        <button>
          <img src="./list.png" height="24px" />
        </button>
      </div>
      <div className="box-add">
        <p>Dari</p>
        <p>eggyyuliandika@gmail.com</p>
        <button>
          <img src="./arrow.png" height="20px" />
        </button>
      </div>
      <div className="box-add">
        <p>Kepada</p>
        <input></input>
        <button>
          <img src="./arrow.png" height="20px" />
        </button>
      </div>
      <div className="box-add">
        <input placeholder="Subjek"></input>
        <p></p>
        <button></button>
      </div>
      <input className="box-write-add" placeholder="Tulis email"></input>
    </div>
  );
};

export default AddPage;
