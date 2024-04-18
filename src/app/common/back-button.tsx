"use client";

import React from "react";
import { Button } from "~/components/ui/button";

export default function BackButton() {
  return (
    <div className="p-2">
      <Button
        onClick={() =>
          window.history.length > 1 ? window.history.back() : window.close()
        }
        className="text-primary-foreground"
      >
        Back
      </Button>
    </div>
  );
}
