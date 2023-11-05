'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from '@/lib/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        'relative text-md',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      {/* <p className="sr-only">{t('local')}</p> */}
      <select
        className="bg-transparent appearance-none"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {['en', 'zh'].map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </select>
    </label>
  );
}
