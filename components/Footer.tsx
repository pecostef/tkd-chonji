import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer>
      <div className="container">
        <div className="grid3">
          <div className="about">
            <div className="logo">
              <img src="images/logo.png" alt="" />
            </div>
            <p>{t('footer.description')}</p>
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
            <p>{t('footer.newsletter-des')}</p>
            <form className="subsribe">
              <input type="text" placeholder="example@example.com" />
              <button>{t('footer.subscribe')}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copy">{t('footer.copyright')}</div>
    </footer>
  );
}
