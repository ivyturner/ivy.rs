//import { currentEnv } from "~/lib/utils";

import {
  ANALYTICS,
  ANALYTICS_SOURCE,
} from "astro:env/server";

import Config from "~/site.config";
const a = Config.settings.analytics; 

function enableAnalytics(): boolean {
  // if (currentEnv().dev === true) return false;
  if (ANALYTICS) return ANALYTICS;
  if (a.enabled)
    return a.enabled;
  return false;
}

function analyticsSource() {
  const result = () => {
    if (enableAnalytics() === false) return null;
    if (ANALYTICS_SOURCE) return ANALYTICS_SOURCE;
    if (a.source)
      return a.source;
    return null;
  };
  if (result() === "none") return null;
  return result();
}

export { analyticsSource };