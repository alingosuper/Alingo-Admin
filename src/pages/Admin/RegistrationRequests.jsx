import React from 'react';

const RegistrationRequests = () => {
  const requests = [
    { id: 1, name: "Ahmed Khan", type: "Premium", status: "Pending", date: "2026-04-01", location: "Lahore" },
    { id: 2, name: "Sara Ali", type: "Standard", status: "Pending", date: "2026-03-31", location: "Karachi" },
    { id: 3, name: "AlinGo Node-09", type: "System", status: "Active", date: "2026-04-02", location: "Islamabad" },
  ];

  return (
    <div style={{ padding: '20px', animation: 'fadeIn 0.6s ease-out', background: '#000', minHeight: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
         <div style={badgeStyle}>AI LIVE MONITORING</div>
         <h1 style={{ color: '#D4AF37', fontWeight: '300', margin: 0, fontSize: '24px', letterSpacing: '1px' }}>رجسٹریشن کنٹرول سینٹر</h1>
      </div>

      <div style={tableContainer}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#aaa' }}>
          <thead>
            <tr style={{ background: '#0a0a0a', color: '#D4AF37', textAlign: 'right' }}>
              <th style={thStyle}>ACTION</th>
              <th style={thStyle}>STATUS</th>
              <th style={thStyle}>LOCATION</th>
              <th style={thStyle}>TYPE</th>
              <th style={thStyle}>USER / NODE</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req.id} style={trStyle}>
                <td style={tdStyle}>
                  <button className="shiny-gold-btn" style={actionBtnStyle}>VERIFY AI</button>
                </td>
                <td style={tdStyle}><span style={{color: '#44ff44', fontSize: '10px'}}>● {req.status}</span></td>
                <td style={tdStyle}>{req.location}</td>
                <td style={tdStyle}><span style={{color: req.type === 'Premium' ? '#D4AF37' : '#888', fontWeight: 'bold'}}>{req.type}</span></td>
                <td style={tdStyle}><b style={{color: '#fff'}}>{req.name}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableContainer = { background: '#050505', borderRadius: '20px', border: '1px solid #D4AF3722', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' };
const thStyle = { padding: '20px', fontSize: '12px', borderBottom: '1px solid #D4AF3722', letterSpacing: '2px' };
const tdStyle = { padding: '20px', fontSize: '13px', borderBottom: '1px solid #111' };
const trStyle = { transition: '0.3s', cursor: 'default', textAlign: 'right' };
const badgeStyle = { background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid #D4AF3744', padding: '5px 15px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold' };
const actionBtnStyle = {
  background: 'linear-gradient(135deg, #D4AF37 0%, #8B7355 100%)', border: 'none', color: '#000',
  padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '10px',
  boxShadow: '0 5px 15px rgba(212,175,55,0.2)', transition: '0.3s'
};

export default RegistrationRequests;
