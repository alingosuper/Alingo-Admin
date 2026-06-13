
import React, { useState, useEffect } from 'react';
import { initializeMasterShield } from '@alingo/core-security/master_shield';

const WarRoom = () => {
  const [serviceStatus, setServiceStatus] = useState({});

  useEffect(() => {
    // سیکیورٹی شیلڈ کو انیشلائز کریں
    initializeMasterShield((service, status) => {
      setServiceStatus(prev => ({ ...prev, [service]: status }));
    });
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">🛡️ Alingo WarRoom - لائیو مانیٹرنگ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(serviceStatus).map(([service, status]) => (
          <div key={service} className={`p-4 rounded-lg border ${status === 'OK' ? 'border-green-500 bg-green-900/20' : 'border-red-500 bg-red-900/20'}`}>
            <h2 className="text-xl font-semibold">{service}</h2>
            <p className="mt-2">سٹیٹس: 
              <span className={`ml-2 px-2 py-1 rounded ${status === 'OK' ? 'bg-green-500' : 'bg-red-500'}`}>
                {status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarRoom;
