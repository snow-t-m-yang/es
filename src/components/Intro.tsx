import { useTranslations } from "next-intl";
import { MultiLineText } from "./multi-line-text";

const Intro = () => {
  const t = useTranslations("Intro");
  
  return (
    <div className="max-w-2xl mx-auto space-y-5 transition-all duration-200 px-7 md:px-0">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <MultiLineText text={t('description')}/>
    </div>
  );
};

export default Intro;
