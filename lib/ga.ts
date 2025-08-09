"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function GoogleAnalyticsInit() {
  useEffect(() => {
    const GA_KEY = process.env.GA_KEY;

    if (!GA_KEY) {
      console.error("Google Analytics key not provided.");
      return;
    }

    ReactGA.initialize(GA_KEY);
    ReactGA.send("pageview");
  });

  return null;
}
