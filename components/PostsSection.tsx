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
        <div
          className="elfsight-app-0e618d0e-5173-4b72-9138-f5ba2d7d3067"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
