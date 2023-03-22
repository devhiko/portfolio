import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>navbar here</div>

      <div>{children}</div>

      <div>footer here</div>
    </div>
  );
};
