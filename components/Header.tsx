import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18nextConfig from '../next-i18next.config';

type Props = {
  onToggleLanguageClick: (val: string) => {};
  currentLocale: string;
  showMenu: boolean;
  setShowMenu: () => { val: string };
};

const SUPPORTED_LANGUAGES = [
  {
    code: 'de',
    label: 'Deutsch',
  },
  {
    code: 'en',
    label: 'English',
  },
];

export function Header() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const [showMenu, setShowMenu] = useState(false);

  const currentLocale = router.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <header>
      <div className="top">
        <div className="container">
          <div className="flex">
            <p>
              <i className="uil uil-map-marker" /> {t('header.location')}
            </p>
            <p>
              <i className="uil uil-outgoing-call" />
              <a href={`tel:${t('header.number')}`}>{t('header.number')}</a>
            </p>
            <p>
              <i className="uil uil-clock" /> {t('header.time')}
            </p>
            <p>
              <i className="uil uil-envelope" />
              <a href={`mailto:${t('header.email')}`}>{t('header.email')}</a>
            </p>
          </div>
          <div className="social">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100032847801899"
            >
              <i className="uil uil-facebook-f" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_ervin_begic_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <i className="uil uil-instagram" />
            </a>
            <a style={{ display: 'none' }} href="#">
              <i className="uil uil-linkedin" />
            </a>
            <div className="lang">
              <div className="select">
                <label htmlFor="lan">{t('header.select-lang')}</label>
                <select
                  name="lang"
                  id="lang"
                  onChange={(e) => onToggleLanguageClick(e.target.value)}
                >
                  {SUPPORTED_LANGUAGES.map((l) => (
                    <option selected={currentLocale == l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>
                <i className="uil uil-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img loading="lazy" src="images/logo.png" alt="" />
          </a>
        </div>
        <div className={showMenu ? 'links active' : 'links'}>
          <a href="#" onClick={() => setShowMenu((pre) => !pre)}>
            {t('header.home')}
          </a>
          <a href="#about" onClick={() => setShowMenu((pre) => !pre)}>
            {t('header.about-us')}
          </a>
          <a href="#service" onClick={() => setShowMenu((pre) => !pre)}>
            {t('header.services')}
          </a>
          <a href="#trainers" onClick={() => setShowMenu((pre) => !pre)}>
            {t('header.trainers')}
          </a>
        </div>
        <div className="m-flex">
          <a href="#contact" onClick={() => setShowMenu((pre) => !pre)}>
            <button className="empty">{t('header.contact-us')}</button>
          </a>
          <i
            className={
              showMenu
                ? 'uil uil-align-center-alt menu uil-multiply'
                : 'uil uil-align-center-alt menu'
            }
            onClick={() => setShowMenu((pre) => !pre)}
          />
        </div>
      </div>
    </header>
  );
}
