import { initBotId } from "botid/client/core";

/**
 * Vercel BotID: an invisible bot check on the free-trial form and the launch
 * party sign up's confirmation email. Runs in the browser before the form posts;
 * /api/trial and /api/launch verify it with checkBotId().
 * Nothing is shown to visitors.
 */
initBotId({
  protect: [
    { path: "/api/trial", method: "POST" },
    { path: "/api/launch", method: "POST" },
  ],
});
