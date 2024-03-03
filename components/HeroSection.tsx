import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <main>
      <div className="container">
        <div className="content">
          <div
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <span>{t('home.subtitle')}</span>
            <h1>{t('home.title')}</h1>
            <p>{t('home.description')}</p>
            <form className="subsribe">
              <input type="text" placeholder="example@example.com" />
              <button>{t('home.subscribe')}</button>
            </form>
          </div>
          <div className="info">
            <div data-text="9k">
              <p>{t('home.info-value-1')}</p>
              <span>{t('home.info-title-1')}</span>
            </div>
            <div data-text={'04'}>
              <p>{t('home.info-value-1')}</p>
              <span>{t('home.info-title-1')}</span>
            </div>
            <div data-text="8k">
              <p>{t('home.info-value-1')}</p>
              <span>{t('home.info-title-1')}</span>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            className="flag"
            data-aos="fade-up"
            data-aos-offset={100}
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
            src="images/flag.png"
            alt=""
          />
          <img
            className="group"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
            src="images/group.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
