"use client";

import { Button } from "@/components/button";
import CenteredContainer from "@/containers/centered";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <CenteredContainer>
      <h2>Oops! Possibly a Connection Error!</h2>
      {/* Attempt to recover by trying to re-render */}
      <Button label="Try again" onClick={reset} />
    </CenteredContainer>
  );
}
