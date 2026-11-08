import React, { useState, useRef, useEffect } from 'react';

// Hill Cipher 2x2 Engine
const K = [
  [7, 8],
  [11, 11],
];
const K_INV = [
  [25, 22],
  [1, 23],
];

function textToNums(text) {
  return text.split('').map((c) => c.charCodeAt(0) - 65);
}

function numsToText(nums) {
  return nums.map((n) => String.fromCharCode((((n % 26) + 26) % 26) + 65)).join('');
}

function encryptHill(plaintext) {
  const nums = textToNums(plaintext);
  const cipherNums = [];
  const blocks = [];

  for (let i = 0; i < nums.length; i += 2) {
    const p1 = nums[i];
    const p2 = nums[i + 1];
    const c1 = (((K[0][0] * p1 + K[0][1] * p2) % 26) + 26) % 26;
    const c2 = (((K[1][0] * p1 + K[1][1] * p2) % 26) + 26) % 26;
    cipherNums.push(c1, c2);
    blocks.push(`[${plaintext[i]}${plaintext[i + 1]}]`);
  }

  const cipherText = numsToText(cipherNums);

  // Decryption verification
  const decNums = [];
  for (let i = 0; i < cipherNums.length; i += 2) {
    const c1 = cipherNums[i];
    const c2 = cipherNums[i + 1];
    const d1 = (((K_INV[0][0] * c1 + K_INV[0][1] * c2) % 26) + 26) % 26;
    const d2 = (((K_INV[1][0] * c1 + K_INV[1][1] * c2) % 26) + 26) % 26;
    decNums.push(d1, d2);
  }
  const decryptedText = numsToText(decNums);

  return {
    blocks: blocks.join(' '),
    cipherText,
    decryptedText,
  };
}

export default function InteractiveTerminal() {
  const initialLogs = [
    {
      cmd: 'python3 kriptografi.py -t "TEKNIK"',
      banner: '=== Program Hill Cipher 2x2 (NumPy Engine) ===',
      lines: [
        'Plaintext : TEKNIK (Panjang genap: 6 karakter)',
        'Matriks K : [[7, 8], [11, 11]] (det=15 mod 26)',
        'Blok Teks : [TE] [KN] [IK] → Vektor angka mod 26',
        'Enkripsi  : C = np.dot(K, block) % 26 → [G, E, L, H, R, F]',
        'Dekripsi  : det_inv = 7 → K_inv = [[25, 22], [1, 23]]',
      ],
      result: 'Ciphertext: "JTSTGQ" ➔ Dekripsi: "TEKNIK" (Lossless)',
    },
  ];

  const [logs, setLogs] = useState(initialLogs);
  const [customText, setCustomText] = useState('');
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const runSimulation = (scenario) => {
    let newEntry;
    if (scenario === 'rahasia') {
      newEntry = {
        cmd: 'python3 kriptografi.py -t "RAHASIA"',
        banner: '=== Program Hill Cipher 2x2 (NumPy Engine) ===',
        lines: [
          'Plaintext : RAHASIA (7 huruf ganjil → auto-pad "X" → RAHASIAX)',
          'Matriks K : [[7, 8], [11, 11]] (det=15 mod 26)',
          'Blok Teks : [RA] [HA] [SI] [AX] → 4 pasang vektor blok',
          'Dekripsi  : det_inv = 7 → K_inv valid',
        ],
        result: 'Ciphertext: "ZUXCSYEF" ➔ Dekripsi: "RAHASIAX"',
      };
    } else if (scenario === 'singular') {
      newEntry = {
        cmd: 'python3 kriptografi.py --key-check "[[2,4],[1,2]]"',
        banner: '=== Evaluasi Integritas Matriks Kunci ===',
        lines: [
          'Input Matriks K : [[2, 4], [1, 2]]',
          'Hitung det(K)   : (2*2) - (4*1) = 0',
          'Validasi Invers : gcd(0, 26) = 26 != 1 (Matriks Singular)',
        ],
        result: 'ValueError: Determinan tidak memiliki invers modulo 26!',
      };
    } else {
      newEntry = {
        cmd: 'python3 kriptografi.py -t "TEKNIK"',
        banner: '=== Program Hill Cipher 2x2 (NumPy Engine) ===',
        lines: [
          'Plaintext : TEKNIK (Panjang genap: 6 karakter)',
          'Matriks K : [[7, 8], [11, 11]] (det=15 mod 26)',
          'Blok Teks : [TE] [KN] [IK] → Vektor angka mod 26',
          'Enkripsi  : C = np.dot(K, block) % 26 → [G, E, L, H, R, F]',
          'Dekripsi  : det_inv = 7 → K_inv = [[25, 22], [1, 23]]',
        ],
        result: 'Ciphertext: "JTSTGQ" ➔ Dekripsi: "TEKNIK" (Lossless)',
      };
    }

    setLogs((prev) => [...prev.slice(-2), newEntry]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    let sanitized = customText.toUpperCase().replace(/[^A-Z]/g, '');
    if (!sanitized) return;

    if (sanitized.length > 14) {
      sanitized = sanitized.slice(0, 14);
    }

    let padded = sanitized;
    let hadPadding = false;
    if (padded.length % 2 !== 0) {
      padded += 'X';
      hadPadding = true;
    }

    const res = encryptHill(padded);

    const newEntry = {
      cmd: `python3 kriptografi.py -t "${sanitized}"`,
      banner: '=== Program Hill Cipher 2x2 (NumPy Engine) ===',
      lines: [
        `Plaintext : ${sanitized} ${hadPadding ? '(Ganjil → auto-pad "X" → ' + padded + ')' : '(Panjang genap: ' + sanitized.length + ' karakter)'}`,
        'Matriks K : [[7, 8], [11, 11]] (det=15 mod 26)',
        `Blok Teks : ${res.blocks} → Vektor numerik mod 26`,
        `Enkripsi  : C = (K · P) mod 26`,
      ],
      result: `Ciphertext: "${res.cipherText}" ➔ Dekripsi: "${res.decryptedText}" (Lossless)`,
    };

    setLogs((prev) => [...prev.slice(-2), newEntry]);
    setCustomText('');
  };

  const clearTerminal = () => {
    setLogs(initialLogs);
    setCustomText('');
  };

  return (
    <div className="terminal-preview" aria-label="Simulasi Terminal Interaktif">
      <div className="terminal-bar">
        <div className="terminal-bar-left">
          <span className="terminal-dot red" aria-hidden="true"></span>
          <span className="terminal-dot yellow" aria-hidden="true"></span>
          <span className="terminal-dot green" aria-hidden="true"></span>
          <span className="terminal-title">cli-sandbox · hill-cipher.py</span>
        </div>
        <div className="terminal-actions-quick">
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('teknik')}
            title="Enkripsi teks TEKNIK"
          >
            "TEKNIK"
          </button>
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('rahasia')}
            title="Enkripsi teks ganjil dengan padding X"
          >
            Padding "X"
          </button>
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('singular')}
            title="Uji penanganan matriks kunci singular"
          >
            Uji Singular
          </button>
          <button
            type="button"
            className="term-quick-btn term-clear-btn"
            onClick={clearTerminal}
            title="Reset Terminal"
          >
            ⟲
          </button>
        </div>
      </div>

      <div
        className="terminal-content"
        ref={terminalBodyRef}
        role="region"
        aria-live="polite"
      >
        {logs.map((entry, idx) => (
          <div key={idx} className="terminal-log-block">
            <div className="term-cmd-line">
              <span className="term-prompt" aria-hidden="true">$</span>
              <span className="term-cmd">{entry.cmd}</span>
            </div>
            <div className="term-dim">{entry.banner}</div>
            {entry.lines.map((line, lIdx) => (
              <div key={lIdx} className="term-input-line">
                › {line}
              </div>
            ))}
            <div className="term-res">
              ✔ {entry.result}
            </div>
          </div>
        ))}

        {/* Interactive CLI Input Line */}
        <form onSubmit={handleCustomSubmit} className="term-active-line">
          <span className="term-prompt" aria-hidden="true">$</span>
          <span className="term-cmd-prefix">python3 kriptografi.py -t</span>
          <input
            type="text"
            className="term-cli-input"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="ketik kata (contoh: KODERAHASIA)..."
            maxLength={14}
            aria-label="Ketik teks untuk dienkripsi"
          />
          <button
            type="submit"
            className="term-run-btn"
            title="Tekan Enter untuk mengenkripsi"
          >
            ↵
          </button>
        </form>
      </div>
    </div>
  );
}
