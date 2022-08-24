import React, { useEffect, useRef } from "react";

/**
 * @param func Function to be executed after initial render
 * @param deps If present, effect will only activate if the values in the list change.
 */
const useDidMountEffect = (
  func: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMountEffect;
