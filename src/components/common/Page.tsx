import * as React from "react";

type PageProps = {
  children: any;
};

export const Page = (props: PageProps) => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{props.children}</div>
  );
};
