import "@/config/env";
import { PORT } from "@/config/env";
import { createApp } from "./app";

(async () => {
  const app = createApp();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
