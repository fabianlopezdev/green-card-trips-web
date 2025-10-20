import type { Context } from "@netlify/edge-functions";

export default async (_request: Request, context: Context) => {
  try {
    const countryCode = context.geo?.country?.code || "UNKNOWN";

    // Check if country cookie already exists
    const existingCountry = context.cookies.get("user_country");

    // Set cookie if it doesn't exist
    if (!existingCountry) {
      context.cookies.set({
        name: "user_country",
        value: countryCode,
        path: "/",
        httpOnly: false, // Needs to be readable by JavaScript
        secure: true,
        sameSite: "Lax",
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      });
    }

    // Explicitly pass through to the origin
    return context.next();
  } catch (error) {
    // On error, pass through without setting cookie
    console.error("[Geolocation Edge Function] Error:", error);
    return context.next();
  }
};
