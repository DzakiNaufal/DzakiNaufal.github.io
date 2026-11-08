import React from 'react';

const iconMap = {
  Python: '/icons/python.svg',
  JavaScript: '/icons/javascript.svg',
  React: '/icons/react.svg',
  Flask: '/icons/flask.svg',
  Vite: '/icons/vite.svg',
  'HTML5 & CSS3': '/icons/html5.svg',
  'Linux Terminal': '/icons/linux.svg',
  'Git & GitHub': '/icons/git.svg',
  NumPy: '/icons/numpy.svg',
  Pandas: '/icons/pandas.svg',
  Jupyter: '/icons/jupyter.svg',
};

export default function TechIcon({ name, className = 'tech-svg-icon' }) {
  const iconPath = iconMap[name];

  if (!iconPath) {
    return (
      <span className={className} aria-hidden="true">
        ◈
      </span>
    );
  }

  const extraClass = name === 'Flask' ? 'tech-icon-flask' : '';

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      className={`${className} ${extraClass}`.trim()}
      width="18"
      height="18"
      loading="lazy"
    />
  );
}
