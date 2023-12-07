function SiteBar(props) {
  return (
    <div className="m-10">
      <img src={props.el.img} className="border-2 border-white" />
      <h4 className="text-xl mt-3 font-bold underline">{props.el.name}</h4>
      <p>
        <a href={props.el.site} className="underline" target="_blank">
          посмотреть сайт
        </a>
      </p>
      <p className="text-xl mt-3 font-bold underline">Описание:</p>
      <p>{props.el.description}</p>
      <p className="text-xl mt-3 font-bold underline">Cтэк:</p>
      <p>{props.el.stack}</p>
      {props.el.frontend ? (
        <p>
          <a href={props.el.frontend} className="underline" target="_blank">
            посмореть репозиторий frontend
          </a>
        </p>
      ) : (
        ""
      )}
      {props.el.backend ? (
        <p>
          <a href={props.el.backend} className="underline" target="_blank">
            посмореть репозиторий backend
          </a>
          <p>
            Backend сайта выложен на Render.com и работает не стабильно,
            подгрузку данных придется немного подождать)))
          </p>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SiteBar;
