import React from "react";

import { RQueryProvider } from "./query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <RQueryProvider>{children}</RQueryProvider>;
}
