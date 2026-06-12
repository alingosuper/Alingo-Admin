import React from 'react';

const QuickStatus = () => {
  return (
    <div style={{ background: '#111', padding: '15px', borderRadius: '15px', border: '1px solid #D4AF3744' }}>
      <header style={{color:'#D4AF37', marginBottom:'10px'}}>Security Status</header>
      <div style={{display:'flex', flexDirection:'column', gap:'5px', color:'#ccc', fontSize:'12px'}}>
         <div>✅ App Check: <span style={{color:'#44ff44'}}>Active</span></div>
         <div>📄 Rules Version: <span style={{color:'#fff'}}>2.0 Enforced</span></div>
         <div>✅ Anti-Fraud Systems: <span style={{color:'#44ff44'}}>LIVE</span></div>
      </div>
    </div>
  );
};

export default QuickStatus;
