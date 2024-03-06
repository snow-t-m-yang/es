import { useTranslations } from "next-intl";
import { partners1, partners2, partners3, partners4, partners5, partners6 } from "../../public/partners";
import Image, { StaticImageData } from "next/image";

type Tpartner = {
  id: string;
  src: StaticImageData;
  alt: string;
};

const partners: Tpartner[] = [
  {
    id: crypto.randomUUID(),
    src: partners1,
    alt: "partners1", 
  },
  {
    id: crypto.randomUUID(),
    src: partners2,
    alt: "partners2", 
  },
  {
    id: crypto.randomUUID(),
    src: partners3,
    alt: "partners3", 
  },
  {
    id: crypto.randomUUID(),
    src: partners4,
    alt: "partners4", 
  },
  {
    id: crypto.randomUUID(),
    src: partners5,
    alt: "partners5", 
  },
  {
    id: crypto.randomUUID(),
    src: partners6,
    alt: "partners6", 
  },

]

type Props = {};
export default function Partners({}: Props) {
  const t = useTranslations("Partners");
  return (
    <section className="max-w-2xl w-screen mx-auto space-y-9 transition-all duration-200 md:px-0">
      <h2 className="text-2xl font-bold text-center">{t("title")}</h2>
      <div className="">
        <ul className="grid xs:grid-cols-3 gap-y-5 marker:place-content-center place-items-center">
          {partners.map((partner: Tpartner) => {
            return (
              <li key={partner.id} className="relative">
                <Image src={partner.src} alt={partner.alt}/>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
