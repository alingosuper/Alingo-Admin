import React, { useState } from 'react';

const WalletManagement = () => {
  const transactions = [
    { id: 'TRX-9901', entity: 'Elite Mart', type: 'Payout', amount: '-PKR 15,000', method: 'Bank Transfer', status: 'Success' },
    { id: 'TRX-9902', user: 'Zubair Khan', type: 'Refund', amount: '+PKR 450', method: 'AlinGo Wallet', status: 'Processing' },
    { id: 'TRX-9903', entity: 'System Fee', type: 'Commission', amount: '+PKR 125,400', method: 'Auto-Debit', status: 'Success' },
  ];

  return (
    <div style={container}>
      {/* 💳 Wealth Overview - High Contrast & Light */}
      <div style={headerGrid}>
        <div style={vaultCard}>
          <div style={label}>TOTAL VAULT BALANCE</div>
          <div style={vaultValue}>PKR 8,450,000</div>
          <div style={glowLine}></div>
        </div>
        <div style={statsBox}>
          <div style={miniStat}>PENDING PAYOUTS: <span style={{color:'#D4AF37'}}>24</span></div>
          <div style={miniStat}>TODAY'S VOLUME: <span style={{color:'#44ff44'}}>PKR 450K</span></div>
        </div>
      </div>

      {/* 📊 Transaction Ledger */}
      <div style={ledgerWrapper}>
        <div style={ledgerHeader}>
          <span style={goldText}>FINANCIAL LEDGER (AES-ENCRYPTED)</span>
          <div style={{display:'flex', gap:'10px'}}>
             <button style={actionBtn}>RECONCILE ALL</button>
             <button style={actionBtn}>GENERATE REPORT</button>
          </div>
        </div>

        <table style={table}>
          <thead>
            <tr style={thRow}>
              <th style={th}>TRANSACTION ID</th>
              <th style={th}>ENTITY / USER</th>
              <th style={th}>TYPE</th>
              <th style={th}>AMOUNT</th>
              <th style={th}>METHOD</th>
              <th style={th}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(trx => (
              <tr key={trx.id} style={tr}>
                <td style={td}><code style={{color: '#888'}}>{trx.id}</code></td>
                <td style={td}><b style={{color: '#fff'}}>{trx.entity || trx.user}</b></td>
                <td style={td}><span style={typeTag(trx.type)}>{trx.type}</span></td>
                <td style={td}><b style={{color: trx.amount.startsWith('+') ? '#44ff44' : '#ff4444'}}>{trx.amount}</b></td>
                <td style={td} style={{fontSize: '10px'}}>{trx.method}</td>
                <td style={td}>
                  <span style={statusBadge(trx.status)}>{trx.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔐 Security Protocol Note */}
      <div style={securityFooter}>
        <div style={shieldIcon}>🔒</div>
        <div style={{fontSize: '10px', color: '#666'}}>
          ALL TRANSACTIONS ARE SIGNED WITH <b>SHA-256</b>. UNAUTHORIZED ADJUSTMENTS ARE BLOCKED BY TEZRO-VAULT-PROTOCOL.
        </div>
      </div>
    </div>
  );
};

// 💅 Elite Financial Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '25px', height: '100%' };
const headerGrid = { display: 'flex', gap: '20px', flexWrap: 'wrap' };
const vaultCard = { flex: 2, minWidth: '300px', background: 'linear-gradient(135deg, #0a0a0a 0%, #000 100%)', border: '1px solid #D4AF3744', padding: '25px', borderRadius: '20px', position: 'relative', overflow: 'hidden' };
const label = { fontSize: '11px', color: '#D4AF37', letterSpacing: '2px', marginBottom: '10px' };
const vaultValue = { fontSize: '32px', fontWeight: 'bold', color: '#fff', textShadow: '0 0 20px rgba(212,175,55,0.2)' };
const glowLine = { position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', opacity: 0.5 };
const statsBox = { flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '10px' };
const miniStat = { background: '#050505', border: '1px solid #1a1a1a', padding: '15px', borderRadius: '15px', fontSize: '12px', color: '#888' };
const ledgerWrapper = { background: '#050505', borderRadius: '20px', border: '1px solid #D4AF3722', overflow: 'hidden', flex: 1 };
const ledgerHeader = { padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #D4AF3722' };
const goldText = { color: '#D4AF37', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' };
const actionBtn = { background: '#111', border: '1px solid #333', color: '#D4AF37', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '10px', fontWeight: 'bold' };
const table = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const thRow = { background: '#0a0a0a' };
const th = { padding: '15px', fontSize: '10px', color: '#555', letterSpacing: '1px' };
const tr = { borderBottom: '1px solid #111' };
const td = { padding: '15px', fontSize: '12px', color: '#aaa' };
const typeTag = (t) => ({ background: '#111', border: '1px solid #333', padding: '2px 8px', borderRadius: '4px', fontSize: '9px', color: '#fff' });
const statusBadge = (s) => ({ color: s === 'Success' ? '#44ff44' : '#ffaa00', fontSize: '11px', fontWeight: 'bold' });
const securityFooter = { display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(212,175,55,0.03)', borderRadius: '12px', border: '1px dashed #333' };
const shieldIcon = { fontSize: '20px' };

export default WalletManagement;
