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
              <i className="uil uil-outgoing-call" /> {t('header.number')}
            </p>
            <p>
              <i className="uil uil-clock" /> {t('header.time')}
            </p>
          </div>
          <div className="social">
            <a href="#">
              <i className="uil uil-facebook-f" />
            </a>
            <a href="#">
              <i className="uil uil-instagram" />
            </a>
            <a href="#">
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
                  <option selected={currentLocale == 'en'} value="en">
                    {t('header.english')}
                  </option>
                  <option selected={currentLocale == 'de'} value="de">
                    {t('header.german')}
                  </option>
                  <option selected={currentLocale == 'fr'} value="fr">
                    {t('header.french')}
                  </option>
                  <option selected={currentLocale == 'it'} value="it">
                    {t('header.italian')}
                  </option>
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
