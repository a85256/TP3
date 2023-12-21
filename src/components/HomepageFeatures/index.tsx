import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Reparação automóvel',
    Svg: require('@site/static/img/undraw_automobile_repair_ywci.svg').default,
    description: (
      <>
        Na Oficina dos Zés, temos o melhor serviço automóvel a nível global.
        
      </>
    ),
  },
  {
    title: 'Foco no trabalho',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        Na Oficina dos Zés, os nossos objetivos são claros. Dedicamo-nos
        ao trabalho e ao cliente e não descansamos enquanto não terminamos o nosso trabalho enquanto
        os clientes não tiverem satisfeitos
        
      </>
    ),
  },
  {
    title: 'Ambiente de trabalho relaxado',
    Svg: require('@site/static/img/undraw_relaxation_re_ohkx.svg').default,
    description: (
      <>
        Na Oficina dos Zés temos um ambiente de trabalho relaxadíssimo,
        por isso não precisa de se preocupar com algo que faça de errado ou com chatices
        em contexto de trabalho
        
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
