import React, { useState } from 'react';

const ReportsAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState('24H');

  const metrics = [
    { label: 'GROSS REVENUE', value: 'PKR 1.2M', growth: '+12%', color: '#D4AF37' },
    { label: 'USER ACQUISITION', value: '850', growth: '+5%', color: '#44ff44' },
    { label: 'SYSTEM UPTIME', value: '99.99%', growth: 'Stable', color: '#00ccff' },
  ];

  return (
    <div style={container}>
      {/* 📅 Period Selector - Instant Filter */}
      <div style={filterHeader}>
        <div style={reportTitle}>SYSTEM ANALYTICS REPORT</div>
        <div style={tabGroup}>
          {['24H', '7D', '30D', '1Y'].map(t => (
            <button key={t} onClick={() => setTimeFrame(t)} style={tabStyle(timeFrame === t)}>{t}</button>
          ))}
        </div>
      </div>

      {/* 📈 Key Performance Indicators (KPIs) */}
      <div style={kpiGrid}>
        {metrics.map((m, i) => (
          <div key={i} style={kpiCard}>
            <div style={{fontSize: '10px', color: '#555', letterSpacing: '1px'}}>{m.label}</div>
            <div style={{fontSize: '24px', fontWeight: 'bold', color: m.color, margin: '10px 0'}}>{m.value}</div>
            <div style={{fontSize: '10px', color: m.growth.startsWith('+') ? '#44ff44' : '#888'}}>
              {m.growth} vs previous period
            </div>
          </div>
        ))}
      </div>

      {/* 📊 Visual Data Representation (Lightweight CSS Graphs) */}
      <div style={graphSection}>
        <div style={graphHeader}>REVENUE TRENDS (SECURE FEED)</div>
        <div style={barContainer}>
          {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
            <div key={i} style={barWrapper}>
              <div style={barStyle(h)}></div>
              <span style={{fontSize: '8px', color: '#333', marginTop: '5px'}}>D0{i+1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📥 Secure Export Unit */}
      <div style={exportSection}>
        <div style={{fontSize: '11px', color: '#888'}}>
          * ALL REPORTS ARE DIGITALLY SIGNED. UNAUTHORIZED EXPORTS ARE LOGGED.
        </div>
        <div style={{display:'flex', gap: '10px'}}>
          <button style={pdfBtn}>DOWNLOAD PDF</button>
          <button style={csvBtn}>DOWNLOAD EXCEL</button>
        </div>
      </div>
    </div>
  );
};

// 💅 High-Performance Analytics Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const filterHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '15px 20px', borderRadius: '15px', border: '1px solid #D4AF3722' };
const reportTitle = { fontSize: '12px', fontWeight: 'bold', color: '#D4AF37', letterSpacing: '1px' };
const tabGroup = { display: 'flex', gap: '5px', background: '#111', padding: '3px', borderRadius: '8px' };
const tabStyle = (active) => ({ background: active ? '#D4AF37' : 'transparent', color: active ? '#000' : '#888', border: 'none', padding: '5px 12px', borderRadius: '6px', fontSize: '9px', fontWeight: 'bold', cursor: 'pointer' });
const kpiGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' };
const kpiCard = { background: '#050505', border: '1px solid #1a1a1a', padding: '20px', borderRadius: '15px', textAlign: 'center' };
const graphSection = { flex: 1, background: '#050505', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column' };
const graphHeader = { fontSize: '10px', color: '#444', marginBottom: '30px', textAlign: 'center', letterSpacing: '2px' };
const barContainer = { flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '20px' };
const barWrapper = { display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 };
const barStyle = (h) => ({ width: '30%', height: h + '%', background: 'linear-gradient(to top, #D4AF37 0%, #1a1a1a 100%)', borderRadius: '4px 4px 0 0', transition: '0.5s ease', boxShadow: '0 0 15px rgba(212,175,55,0.1)' });
const exportSection = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: '#050505', borderRadius: '12px', border: '1px solid #111' };
const pdfBtn = { background: '#ff444422', color: '#ff4444', border: '1px solid #ff444444', padding: '8px 15px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' };
const csvBtn = { background: '#D4AF3722', color: '#D4AF37', border: '1px solid #D4AF3744', padding: '8px 15px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' };

export default ReportsAnalytics;
