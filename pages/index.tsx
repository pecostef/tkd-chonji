import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import i18nextConfig from "../next-i18next.config";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const [showMenu,setShowMenu] = useState(false);
  
  const currentLocale = router.locale ?? i18nextConfig.i18n.defaultLocale;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
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
                      <option selected={currentLocale == 'en'} value="en">{t('header.english')}</option>
                      <option selected={currentLocale == 'de'}  value="de">{t('header.german')}</option>
                      <option selected={currentLocale == 'es'}  value="es">{t('header.spanish')}</option>
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
            <div className={showMenu ? "links active" : "links"}>
              <a href="#" onClick={() => setShowMenu(pre => !pre)}>{t('header.home')}</a>
              <a href="#about" onClick={() => setShowMenu(pre => !pre)}>{t('header.about-us')}</a>
              <a href="#service" onClick={() => setShowMenu(pre => !pre)}>{t('header.services')}</a>
              <a href="#trainers" onClick={() => setShowMenu(pre => !pre)}>{t('header.trainers')}</a>
            </div>
            <div className="m-flex">
              <a href="#contact" onClick={() => setShowMenu(pre => !pre)}>
                <button className="empty">{t('header.contact-us')}</button>
              </a>
              <i className={showMenu ? "uil uil-align-center-alt menu uil-multiply" :"uil uil-align-center-alt menu"} onClick={() => setShowMenu(pre => !pre)} />
            </div>
          </div>
        </header>
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
                <p>
                  {t('home.description')}
                </p>
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
                <div data-text={"04"}>
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
                <h2>
                {t('service.subtitle')}
                </h2>
              </div>
              <p>
              {t('service.description')}
              </p>
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
                  <p>
                  {t('service.card-1.subtitle')}
                  </p>
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
                  <p>
                  {t('service.card-2.subtitle')}
                  </p>
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
                  <p>
                  {t('service.card-3.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section
          id="contact"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-delay={50}
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <div className="container">
            <div className="title center">
              <span>{t('contract.title')}</span>
              <h2>{t('contract.subtitle')}</h2>
            </div>
            <div className="form-grid">
              <form action="#" method="post">
                <div className="fild">
                  <input
                    type="text"
                    id="name"
                    name="fname"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="fname">{t('contract.fname')}</label>
                </div>
                <div className="row">
                  <div className="fild">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email">{t('contract.email')}</label>
                  </div>
                  <div className="fild">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="phone">{t('contract.phone')}</label>
                  </div>
                </div>
                <textarea
                  name="msg"
                  placeholder={t('contract.msg')}
                  defaultValue={""}
                />
                <button>
                  {t('contract.get-in-touch')} <i className="uil uil-arrow-up-right" />
                </button>
              </form>
              <iframe
                className="fix"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.609394589191!2d-111.89919115650909!3d60.00425837664958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53c9893d9e37d711%3A0xb4eeca3eadeeda0f!2sWood%20Buffalo%20Inn!5e0!3m2!1sen!2sbd!4v1708411032381!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="grid3">
              <div className="about">
                <div className="logo">
                  <img src="images/logo.png" alt="" />
                </div>
                <p>
                  {t('footer.description')}
                </p>
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
              <div className="link-block">
                <h3>{t('footer.contact')}</h3>
                <div className="urls">
                  <a href="#">
                    <i className="uil uil-outgoing-call" />
                    <div>
                      <p>
                        +000 000 000 (uk) <br />
                        +987 654 3210 (us)
                      </p>
                    </div>
                  </a>
                  <a href="#">
                    <i className="uil uil-envelope" /> info@email.ba
                  </a>
                  <p>
                    <i className="uil uil-map-marker" /> {t('footer.address')}
                  </p>
                  <a href="#">
                    <i className="uil uil-link-alt" />
                    website.com
                  </a>
                </div>
              </div>
              <div className="link-block">
                <h3>{t('footer.newsletter')}</h3>
                <p>
                {t('footer.newsletter-des')}
                </p>
                <form className="subsribe">
                  <input type="text" placeholder="example@example.com" />
                  <button>{t('footer.subscribe')}</button>
                </form>
              </div>
            </div>
          </div>
          <div className="copy">{t('footer.copyright')}</div>
        </footer>
      </div>
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Homepage;
