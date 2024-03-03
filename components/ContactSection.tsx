import { useTranslation } from 'react-i18next';

export function ContactSection() {
  const { t } = useTranslation('common');

  return (
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
              defaultValue={''}
            />
            <button>
              {t('contract.get-in-touch')}{' '}
              <i className="uil uil-arrow-up-right" />
            </button>
          </form>

          <iframe
            className="fix"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0225013987597!2d7.621760055253484!3d47.56735061662905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9de449c6139%3A0xdbf0bc378d34af17!2sZu%20den%20drei%20Linden%2080%2C%204058%20Basel!5e0!3m2!1sen!2sch!4v1708796378403!5m2!1sen!2sch"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
