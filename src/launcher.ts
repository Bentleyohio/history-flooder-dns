import { eduSites } from "./sites.js";
import { setStatus } from "./ui.js";

export async function launchTabs(count: number, method: string): Promise<void> {
  try {
    // Splash
    setStatus("Made by Bentley...", "#1e40af");

    await new Promise(res => setTimeout(res, 2000));

    if (method === "normal") {
      setStatus("Opening tabs...", "#16a34a");

      for (let i = 0; i < count; i++) {
        const url = eduSites[i % eduSites.length];
        window.open(url, "_blank");
      }

    } else if (method === "waves") {
      setStatus("Opening in waves...", "#16a34a");

      const waveSize = 5;
      let opened = 0;

      while (opened < count) {
        for (let i = 0; i < waveSize && opened < count; i++) {
          const url = eduSites[opened % eduSites.length];
          window.open(url, "_blank");
          opened++;
        }

        await new Promise(res => setTimeout(res, 300)); // delay between waves
      }
    }

    setStatus("Ready", "#1e3a8a");

  } catch (err) {
    setStatus("Something went wrong", "#dc2626");
  }
}
