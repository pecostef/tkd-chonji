import { useTranslation } from 'react-i18next';

export function TrainersSection() {
  const { t } = useTranslation('common');

  return (
    <section id="trainers">
      <div className="container">
        <div
          className="title center"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-delay={50}
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <span>{t('trainer.title')}</span>
          <h2>{t('trainer.subtitle')}</h2>
        </div>
        <div className="cards">
          <div
            className="card-2"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame-1">
              <img src="images/taekwondo-nobkg-3.png" alt="" />
            </div>
            <div className="body">
              <div>
                <h3>{t('trainer.frame-1.title')}</h3>
                <p>{t('trainer.frame-1.subtitle')}</p>
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
              </div>
            </div>
          </div>
          <div
            style={{ display: 'none' }}
            className="card-2"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame-1">
              <img src="images/taekwondo-nobkg-6.png" alt="" />
            </div>
            <div className="body">
              <div>
                <h3>{t('trainer.frame-2.title')}</h3>
                <p>{t('trainer.frame-2.subtitle')}</p>
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
              </div>
            </div>
          </div>
          <div
            className="card-2"
            data-aos="fade-up"
            data-aos-offset={200}
            data-aos-delay={70}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
          >
            <div className="frame-1">
              <img src="images/Ervin.png" alt="" />
            </div>
            <div className="body">
              <div>
                <h3>{t('trainer.frame-3.title')}</h3>
                <p>{t('trainer.frame-3.subtitle')}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
