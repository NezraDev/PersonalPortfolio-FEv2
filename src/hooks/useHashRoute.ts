import { useCallback, useEffect, useState } from "react";

function parseHash(): string {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "home";
}

/**
 * Minimal client-side router based on the URL hash (e.g. #/experience).
 * Avoids adding a routing library dependency while still giving each nav
 * item its own real, bookmarkable/back-button-friendly URL.
 */
export function useHashRoute() {
  const [route, setRoute] = useState<string>(parseHash);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((id: string) => {
    window.location.hash = `/${id}`;
  }, []);

  return { route, navigate };
}
