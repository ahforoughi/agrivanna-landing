import { initBotId } from "botid/client/core";

/**
 * Vercel BotID: an invisible bot check on the free-trial form. Runs in the
 * browser before the form posts; /api/trial verifies it with checkBotId().
 * Nothing is shown to visitors.
 */
initBotId({
  protect: [{ path: "/api/trial", method: "POST" }],
});
