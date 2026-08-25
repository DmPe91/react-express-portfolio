import useScrollAnimation from "../hooks/useScrollAnimation";

function Description() {
  const ref = useScrollAnimation();

  return (
    <section id="description" className="bg-slate-900  border-b-4 border-white">
      <div
        ref={ref}
        className="text-white max-w-7xl ml-auto mr-auto scroll-animate"
      >
        <div className="p-10">
          <h2 className="text-3xl md:text-5xl font-semibold">Знакомство</h2>
          <p className="mt-2 text-xl md:text-2xl font-semibold">
            Опыт, подход к работе и чем могу быть полезен
          </p>
        </div>
        <div className="text-xl p-8">
          <p>
            Более 3 лет коммерческого опыта, 90+ успешно реализованных проектов:
            от корпоративных порталов и каталогов до высоконагруженных
            интернет-магазинов и сложных веб-сервисов. Сочетаю глубокую
            экспертизу в CMS-разработке с владением современным
            JavaScript-стеком. Специализируюсь на полном цикле создания
            продуктов: от проектирования UI и Pixel Perfect верстки до написания
            кастомных модулей и реализации нестандартной бизнес-логики.
          </p>
          <p>
            Работаю удалённо, веду несколько проектов параллельно, соблюдаю
            сроки.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
