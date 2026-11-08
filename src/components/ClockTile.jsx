import React, { useState, useEffect } from 'react';

export default function ClockTile() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to WIB (UTC+7)
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
        <span className="kicker">Workstation · Live</span>
        <span className="badge badge-status">
          <span className="status-indicator"></span>
          Online
        </span>
      </div>

      <div className="clock-display">
        <span className="clock-digits font-mono">{time || '00:00:00'}</span>
        <span className="clock-zone font-mono">WIB · UTC+7</span>
      </div>

      <div className="clock-specs">
        <div className="spec-row">
          <span className="spec-label">Sistem Operasi</span>
          <span className="spec-value font-mono">Linux (aarch64)</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Runtime</span>
          <span className="spec-value font-mono">Node 22 · Python 3.14</span>
        </div>
      </div>
    </div>
  );
}
