export function parseUserAgent(ua = "") {
  const lower = ua.toLowerCase();

  // Device type
  let type = "desktop";
  if (
    lower.includes("mobi") ||
    lower.includes("android") ||
    lower.includes("iphone")
  ) {
    type = "mobile";
  } else if (lower.includes("ipad") || lower.includes("tablet")) {
    type = "tablet";
  }

  // OS
  let os = "unknown";
  if (lower.includes("windows")) os = "Windows";
  else if (lower.includes("mac")) os = "MacOS";
  else if (lower.includes("android")) os = "Android";
  else if (lower.includes("iphone") || lower.includes("ipad")) os = "iOS";
  else if (lower.includes("linux")) os = "Linux";

  // Browser
  let browser = "unknown";
  if (lower.includes("chrome") && !lower.includes("edg")) browser = "Chrome";
  else if (lower.includes("safari") && !lower.includes("chrome"))
    browser = "Safari";
  else if (lower.includes("firefox")) browser = "Firefox";
  else if (lower.includes("edg")) browser = "Edge";

  return { type, os, browser };
}
