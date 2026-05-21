import type { JSX } from 'react';

export const AboutBlock = (): JSX.Element => {
  return (
    <div className="block about-block">
      <h2 className="about-title">About:</h2>
      <div>
        <em>
          Nastya. <br />
          Human, frontend developer.
        </em>
        <br />
        <br />
        Student of{' '}
        <a href="https://rs.school/courses/reactjs">
          The Rolling Scopes School React Course.
        </a>
      </div>
    </div>
  );
};
