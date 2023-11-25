import { useTranslations } from "next-intl";

const Intro = () => {
  
  const t = useTranslations("Intro")
  return (
    <div className="py-20 px-7 md:px-0 transition-all duration-200 max-w-2xl mx-auto space-y-5">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      <p>
        {t('description')}
      </p>
    </div>
  );
}

export default Intro