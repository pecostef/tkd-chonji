'use client';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { sendEmail } from 'utils/send-email';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactSection() {
  const { t } = useTranslation('common');

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fild">
              <input
                required
                type="text"
                id="name"
                placeholder=" "
                {...register('name', { required: true })}
              />
              <label htmlFor="fname">{t('contract.fname')}</label>
            </div>
            <div className="row">
              <div className="fild">
                <input
                  required
                  type="email"
                  id="email"
                  placeholder=" "
                  {...register('email', { required: true })}
                />
                <label htmlFor="email">{t('contract.email')}</label>
              </div>
              <div className="fild">
                <input
                  required
                  type="text"
                  id="phone"
                  placeholder=" "
                  {...register('phone', { required: true })}
                />
                <label htmlFor="phone">{t('contract.phone')}</label>
              </div>
            </div>
            <textarea
              required
              placeholder={t('contract.msg')}
              defaultValue={''}
              {...register('message', { required: false })}
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
