import { useTranslation } from 'react-i18next';

export function AboutSection() {
  const { t } = useTranslation('common');
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="grid-2 align-center">
          <div className="left-frame">
            <img
              data-aos="fade-right"
              data-aos-offset={200}
              data-aos-delay={60}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              src="images/about.png"
              alt=""
            />
          </div>
          <div className="contents">
            <div
              className="title"
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-delay={70}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
            >
              <span>{t('about.title')}</span>
              <h2>{t('about.subtitle')}</h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-delay={80}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
              className="tbb-1"
            >
              {t('about.description')}
            </p>
            <div
              className="cta"
              data-aos="fade-up"
              data-aos-offset={200}
              data-aos-delay={100}
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
            >
              <a href="#">
                <button>{t('about.find-out-more')}</button>
              </a>
              <a href="#">
                <div className="call">
                  <div className="ico">
                    <i className="uil uil-outgoing-call" />
                  </div>
                  <div>
                    <span>{t('about.have-any-questions')}</span>
                    <p>{t('about.number')}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
