import { useTranslation } from 'react-i18next';

export function ServiceSection() {
  const { t } = useTranslation('common');

  return (
    <section className="bg" id="service">
      <div className="container">
        <div
          className="grid-2 adj align-center"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-delay={50}
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <div className="title">
            <span>{t('service.title')}</span>
            <h2>{t('service.subtitle')}</h2>
          </div>
          <p>{t('service.description')}</p>
        </div>
        <div className="cards">
          <div
            className="card"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame">
              <img src="images/1.jpg" alt="" />
            </div>
            <div className="body">
              <span>
                <i className="uil uil-clock" /> {t('service.card-1.time')}
              </span>
              <h3>{t('service.card-1.title')}</h3>
              <p>{t('service.card-1.subtitle')}</p>
            </div>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame">
              <img src="images/2.jpg" alt="" />
            </div>
            <div className="body">
              <span>
                <i className="uil uil-clock" /> {t('service.card-2.time')}
              </span>
              <h3>{t('service.card-2.title')}</h3>
              <p>{t('service.card-2.subtitle')}</p>
            </div>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame">
              <img src="images/3.jpg" alt="" />
            </div>
            <div className="body">
              <span>
                <i className="uil uil-clock" /> {t('service.card-3.time')}
              </span>
              <h3>{t('service.card-3.title')}</h3>
              <p>{t('service.card-3.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
