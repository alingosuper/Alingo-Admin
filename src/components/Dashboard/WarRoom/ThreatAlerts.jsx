import React from 'react';

const ThreatAlerts = () => {
  const alerts = [
    { type: "Unauthorized Login Attempt", amount: "IP: 192.168.1.1", time: "18:35 ago", color: "#ff4444" },
    { type: "High Value Transaction", amount: "Rs. 1,000,000", time: "18:38 ago", color: "#D4AF37" },
  ];

  return (
    <div style={ledgerContainerStyle}>
      <header style={{color:'#D4AF37', fontSize:'12px', letterSpacing:'1px', marginBottom:'10px'}}>THREAT ALERTS (2) ⋮⚠️</header>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {alerts.map(t => (
          <div key={t.amount} style={transBoxStyle}>
             <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px'}}>
                <span style={{color:t.color}}>{t.type}</span>
                <span style={{color:'#D4AF37'}}>{t.amount}</span>
             </div>
             <div style={{fontSize:'8px', color:'#444'}}>{t.time} | LIVE FEED</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ledgerContainerStyle = { background: '#0a0a0a', padding: '15px', borderRadius: '15px', border: '1px solid #1a1a1a', display:'flex', flexDirection:'column' };
const transBoxStyle = { background: '#111', padding: '8px', borderRadius: '8px', borderLeft: '3px solid #D4AF3744' };

export default ThreatAlerts;
