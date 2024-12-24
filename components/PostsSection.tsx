import { useTranslation } from 'react-i18next';

export function PostsSection() {
  const { t } = useTranslation('common');
  return (
    <section className="posts" id="posts">
      <div className="container">
        <div
          className="title center"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-delay={50}
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <span>{t('header.posts')}</span>
        </div>
        <iframe
          src="https://widget.tagembed.com/2144475"
          style={{ width: '100%', height: '600px', border: 'none' }}
        ></iframe>
      </div>
    </section>
  );
}
