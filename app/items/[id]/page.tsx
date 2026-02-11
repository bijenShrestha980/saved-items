"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    // Try to open the app
    window.location.href = `saveditemsapp://item/${id}`;

    // Fallback to store after delay (optional)
    const timeout = setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.yourcompany.saveditemsapp";
    }, 1500);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Opening item…</h1>
      <p>If nothing happens, install the app to view this item.</p>
      <a href={`saveditemsapp://item/${id}`}>Open app</a>
    </main>
  );
}
