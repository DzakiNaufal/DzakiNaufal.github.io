import React from 'react';

export default function TechIcon({ name, className = 'tech-svg-icon' }) {
  const iconProps = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  switch (name) {
    case 'Python':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M11.91 2c-3.1 0-4.9.42-4.9 2.45v1.85h4.9v.62H5.16C2.6 6.92 2 8.7 2 11.83c0 3.03.88 4.9 3.16 4.9h1.85v-2.46c0-2.07 1.8-3.08 3.7-3.08h4.92c1.9 0 3.1-1.2 3.1-3.08V4.45C18.73 2.42 16.9 2 11.91 2zm-1.85 1.54a.92.92 0 1 1 0 1.85.92.92 0 0 1 0-1.85zM18.84 7.27h-1.85v2.46c0 2.07-1.8 3.08-3.7 3.08H8.37c-1.9 0-3.1 1.2-3.1 3.08v3.66c0 2.03 1.83 2.45 6.82 2.45 3.1 0 4.9-.42 4.9-2.45v-1.85h-4.9v-.62h6.75c2.56 0 3.16-1.78 3.16-4.91 0-3.03-.88-4.9-3.16-4.9zm-4.93 11.74a.92.92 0 1 1 0 1.85.92.92 0 0 1 0-1.85z" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm12.5 14.5c1.8 0 2.5-.9 2.5-2.2v-3.8h-1.8v3.7c0 .6-.2.9-.7.9-.5 0-.8-.3-.8-.8v-2.4H13v2.5c0 1.5.9 2.1 2.5 2.1zm-6.2 0c1.7 0 2.7-.9 2.7-2.3 0-1.5-.9-2.1-2.2-2.6l-.6-.2c-.6-.2-.9-.5-.9-.9 0-.4.3-.7.8-.7.5 0 .8.2 1.1.7l1.3-.9c-.6-.9-1.4-1.2-2.4-1.2-1.5 0-2.5.9-2.5 2.2 0 1.4.8 2 2.1 2.5l.6.2c.7.3 1 .5 1 1 0 .5-.4.8-1 .8-.7 0-1.1-.4-1.4-1l-1.3.8c.6 1.1 1.5 1.6 2.8 1.6z" />
        </svg>
      );

    case 'React':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case 'Vite':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M19.95 2.27 12.39 16.7 4.26 2.27h3.42l4.7 8.78 4.52-8.78h3.05zM12.39 16.7l-1.25 5.03 2.47-3.23-1.22-1.8z" />
        </svg>
      );

    case 'HTML5':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M4 2.5 5.64 21l6.36 1.8 6.36-1.8L20 2.5H4zm13.1 5.3-1.6 1.8H9.3l.2 2.2h5.8l-.5 5.4-2.8.8-2.8-.8-.2-2.1H7.2l.3 3.7 4.5 1.2 4.5-1.2 1-11H7.8l-.2-2h10.4l-.9 2z" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M4 2.5 5.64 21l6.36 1.8 6.36-1.8L20 2.5H4zm12.9 5.3h-8.8l.2 2.2h8.4l-.7 7.7-4 1.1-4-1.1-.3-3.1h1.8l.1 1.7 2.4.6 2.4-.6.3-3.2H7.6l-.5-5.3h10l-.2 2z" />
        </svg>
      );

    case 'Linux':
    case 'Linux Terminal':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="m8 9 3 3-3 3" />
          <path d="M13 15h4" />
        </svg>
      );

    case 'Git':
    case 'Git & GitHub':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <path d="M21.6 10.9 13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.1 4.5l3.7 3.7c.9-.3 1.9 0 2.6.7.7.7 1 1.7.7 2.6l3.6 3.6c.9-.3 1.9 0 2.6.7.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.7-.7-.9-1.7-.7-2.6l-3.3-3.3v4.6c.3.2.6.6.7 1 .4 1-.1 2.2-1.1 2.6-1 .4-2.2-.1-2.6-1.1-.4-1 .1-2.2 1.1-2.6.3-.1.6-.2.9-.2V8.9c-.3 0-.6-.1-.9-.2-.7-.7-.9-1.7-.7-2.6L6.2 8.3c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l2.1-2.1-3 3c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.8.8-2.1 0-2.9z" />
        </svg>
      );

    case 'NumPy':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4" />
          <path d="M6.5 10v4" />
          <path d="M17.5 10v4" />
          <path d="M10 17.5h4" />
        </svg>
      );

    case 'Pandas':
      return (
        <svg {...iconProps} fill="currentColor" stroke="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="3.5" height="16" rx="1" />
          <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
          <rect x="16.5" y="12" width="3.5" height="8" rx="1" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="18.25" cy="8" r="1.5" />
        </svg>
      );

    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
