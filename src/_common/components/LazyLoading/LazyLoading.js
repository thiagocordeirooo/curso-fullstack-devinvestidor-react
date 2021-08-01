import React, { Suspense } from "react";

export default function LazyLoading(Component) {
  return (props) => (
    <Suspense fallback={<span>Loading...</span>}>
      <Component {...props} />
    </Suspense>
  );
}
