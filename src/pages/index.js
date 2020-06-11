import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Start Contributing</>,
    imageUrl: 'img/btc.svg',
    description: (
      <>
      The Bitcoin Core project operates an open contributor model where 
      anyone is welcome to contribute towards development in the form of
      peer review, testing and patches.
      </>
    ),
  },
  {
    title: <>Where to begin</>,
    imageUrl: 'img/b-logo.svg',
    description: (
      <>
        Join the discussion by subscribing to the bitcoin-dev{" "}
        <Link href="https://github.com/anoop-b/BIPS_website">Mailing list </Link>
        to get started.
      </>
    ),
  },
  {
    title: <>Contribute</>,
    imageUrl: 'img/contribute.svg',
    description: (
      <>
        Want to help make changes to the website? This{" "}
        <Link href="https://github.com/anoop-b/BIPS_website">Project</Link> is
        open source. Help us improve it.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

          <div className={classnames('col col--5')}>
            <img className={styles.heroImg} src="img/status.svg" />
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc0')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
