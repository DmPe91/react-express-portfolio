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
            от корпоративных сайтов и лендингов до сложных интернет-магазинов с
            интеграциями. Специализируюсь на полном цикле веб-разработки: от
            Pixel Perfect вёрстки по макетам Figma до создания кастомных модулей
            и интеграции с внешними сервисами (CRM, платёжные системы, API).
          </p>
          <p>
            Глубокая экспертиза в CMS-разработке: WordPress (кастомные темы,
            ACF, WooCommerce), Drupal 9/10 (модули, миграции), 1С-Битрикс
            (сертифицированный разработчик, 2026). Уверенно работаю с PHP,
            JavaScript, MySQL, REST API.
          </p>
          <p>
            Работаю удалённо, соблюдаю сроки, довожу задачи до результата. Готов
            к full-time занятости.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
