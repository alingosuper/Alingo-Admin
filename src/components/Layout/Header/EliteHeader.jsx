import React from 'react';

const EliteHeader = () => {
  const stats = [
    { title: "Total Vault Balance (PKR)", value: "3,555,595" },
    { title: "Intl. Transfers (24h)", value: "2,170" },
    { title: "Utility Bills", value: "2,908" },
    { title: "Bookings", value: "3,226" },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
      {stats.map(s => (
        <div key={s.title} style={{ background: '#0a0a0a', padding: '15px', borderRadius: '12px', border: '1px solid #D4AF3744', textAlign: 'center' }}>
          <div style={{ color: '#888', fontSize: '10px', textTransform: 'uppercase' }}>{s.title}</div>
          <div style={{ color: '#D4AF37', fontSize: '18px', fontWeight: 'bold' }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
};

export default EliteHeader;
