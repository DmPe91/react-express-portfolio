function Education() {
  return (
    <div>
      <div className=" bg-slate-900 flex flex-row border-b-4 border-white text-white">
        <div className="m-10">
          <h3 className="text-5xl font-semibold">Образование</h3>
          <p className="text-2xl font-semibold">Где получаю знания?</p>
        </div>
        <div>
          <ul className="m-10">
            <li className="mt-10 ">
              <div>
                <p>18 мая 2022г.</p>
                <p className="text-2xl font-semibold">
                  FreeCodeCamp - JavaScript Algorithms and Data Structures
                </p>
                <p>
                  <a href="https://www.freecodecamp.org/certification/dmp91/javascript-algorithms-and-data-structures">
                    посмотреть сертификат
                  </a>
                </p>
                <p>
                  В 2022 году "загорелся" сменить профессиональный род
                  деятельности и увлекся программированием.После
                  самостоятельного изучения основ HTML/CSS, выбор пал на
                  JavaScript
                </p>
              </div>
            </li>
            <li className="mt-10 ">
              <div>
                <p>10 января 2023г.</p>
                <p className="text-2xl font-semibold">
                  FreeCodeCamp - Frontend Development Libraries
                </p>
                <p>
                  <a href="https://www.freecodecamp.org/certification/dmp91/front-end-development-libraries">
                    посмотреть сертификат
                  </a>
                </p>
                <p>
                  После изучения "чистого" JavaScript, захотело углубится еще
                  глубже во Frontend и все что с ним связано{" "}
                </p>
              </div>
            </li>
            <li className="mt-10 ">
              <div>
                <p>2023 по настоящее время</p>
                <p className="text-2xl font-semibold">Самообразование</p>
                <p>
                  Я провожу большую часть свободного времени, изучая тонкости
                  Web-технологий,углубился в backend, создаваю приложения,читаю
                  соответсвующую литературу.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Education;
