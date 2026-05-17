import type { JSX } from 'react';

export const AboutBlock = (): JSX.Element => {
  return (
    <div className="block about-block">
      <h2 className="about-title">About:</h2>
      <div>
        <blockquote>
          <em>
            Зажечь огни Земли, разжечь их по сторонам, <br />
            Пока наш огонь горит, не страшно идти туда,
            <br />
            Где мраморны облака, где в грудь проникает смех,
            <br />
            И на вопрос «Как дела?», отвечу, что лучше всех.
            <br />
            Зажечь огни Земли, зажечь их по городам,
            <br />
            Ударит Царство Теней — я обернусь фениксом.
            <br />
            Ликуй, царица ночь, пускай страсть по сердцам,
            <br />
            И если уйду во тьму, что делать — я знаю сам, всё знаю сам!
            <br />
          </em>
        </blockquote>
        &copy;
        <cite>
          {' '}
          <a href="https://www.youtube.com/watch?v=eV7Spwn37Vc">
            -Bearwolf- (Phoenix)
          </a>
        </cite>{' '}
        <br />
        <br />
        <a href="https://rs.school/courses/reactjs">RSS React</a>
      </div>
    </div>
  );
};
