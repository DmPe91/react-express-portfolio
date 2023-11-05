function Header() {
  return (
    <header className="bg-slate-800 flex flex-row border-b-4 border-white ">
      <div className="basis-1/4 ">
        <img
          className="rounded-full w-64 h-72 m-10 border-4 border-white"
          src="../../avatar4.jpg"
        />
      </div>
      <div className="basis-3/4 text-white lg:ml-20">
        <div>
          <h1 className="text-7xl mt-10 font-semibold">
            Перешеин Дмитрий Игоревич
          </h1>
          <h2 className="text-xl mt-3 font-bold underline">
            Frontend-developer
          </h2>
        </div>
        <div className="flex flex-row mt-32  w-11/12 justify-between border-t-2 border-white text-center">
          <div>
            <p className="text-xl">Адрес</p>
            <p className="mt-1">Киров, ул.Капитана Дорофеева</p>
          </div>
          <div className="">
            <p className="text-xl">Телефон</p>
            <p className="mt-1">7-900-525-84-61</p>
          </div>
          <div className="">
            <p className="text-xl">Почта</p>
            <p className="mt-1">dmper67@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
