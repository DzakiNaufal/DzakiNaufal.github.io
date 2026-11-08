import React, { useState, useEffect } from 'react';

export default function ClockTile() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card col-span-4 clock-tile">
      <div className="clock-top">
        <span className="kicker">Waktu &amp; Lokasi</span>
        <span className="badge badge-status">
          <span className="status-indicator"></span>
          Live
        </span>
      </div>

      <div className="clock-display">
        <span className="clock-digits font-mono">{time || '00:00:00'}</span>
        <span className="clock-zone font-mono">WIB · UTC+7 (Jakarta, ID)</span>
      </div>

      <div className="clock-footer-info">
        <span className="clock-status-dot" aria-hidden="true"></span>
        <p className="clock-status-text">
          Aktif berkarya &amp; terbuka untuk kolaborasi
        </p>
      </div>
    </div>
  );
}
