import React from 'react';

import EventEmitter from './EventEmitters';

function useEventListener<T extends (...params: any) => void>(
  event: string,
  listener: T,
  deps: ReadonlyArray<any>,
) {
  React.useEffect(() => {
    EventEmitter.addListener(event, listener);
    return () => {
      EventEmitter.removeListener(event, listener);
    };
  }, deps);
}

export function makeEventNotifier<P>(name: string) {
  return {
    name: name,
    notify: (param: P) => {
      EventEmitter.notify(name, param);
    },
    useEventListener: (
      listener: (param: P) => void,
      deps: ReadonlyArray<any>,
    ) => useEventListener(name, listener, deps),
  };
}
