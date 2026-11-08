import React from 'react';
import { content } from '../data/content';

export default function AboutSection({ lang }) {
  const t = content[lang].about;

  return (
    <section className="about-split-section" id="about">
      <div className="about-split-grid">
        {/* Left Column: Guiding Statement */}
        <div className="about-left-col">
          <span className="kicker">{t.kicker}</span>
          <h2 className="about-quote">{t.quote}</h2>
        </div>

        {/* Right Column: Genuine Human Narrative */}
        <div className="about-right-col">
          <div className="about-prose">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
