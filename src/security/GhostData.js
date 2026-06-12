import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "../firebase";

const rtdb = getDatabase(app);

export const startGhostMonitoring = (userId) => {
  try {
    const statusRef = ref(rtdb, 'admin_logs/' + userId);
    set(statusRef, {
      last_active: Date.now(),
      status: "online",
      role: "global_admin"
    });
    console.log("🕵️ Ghost Monitoring: Active");
  } catch (error) {
    console.error("Ghost Data Error:", error);
  }
};
