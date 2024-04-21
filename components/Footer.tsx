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
            </div>
          </div>
          <div className="link-block">
            <h3>{t('footer.contact')}</h3>
            <div className="urls">
              <a href={`tel:${t('footer.number')}`}>
                <i className="uil uil-outgoing-call" />
                <div>
                  <p>{t('footer.number')}</p>
                </div>
              </a>
              <a href={`mailto:${t('footer.email')}`}>
                <i className="uil uil-envelope" /> {t('footer.email')}
              </a>
              <p>
                <i className="uil uil-map-marker" /> {t('footer.address')}
              </p>
              <a style={{ display: 'none' }} href="#">
                <i className="uil uil-link-alt" />
                website.com
              </a>
            </div>
          </div>
          <div style={{ display: 'none' }} className="link-block">
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
