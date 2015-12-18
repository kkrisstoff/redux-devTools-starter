import React from 'react';
//import { createStore as initialCreateStore, compose } from 'redux';
import { createDevTools } from 'redux-devtools';
// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';



// let finalCreateStore
// console.log(require('redux-devtools'))
// if (__DEV__) {
//   finalCreateStore = compose(
//     require('redux-devtools').devTools(),
//     require('redux-devtools').persistState(
//       window.location.href.match(/[?&]debug_session=([^&]+)\b/)
//     )    
//   )(createStore);
// }


export function renderDevTools(store) {
  if (__DEV__) {
    const DevTools = createDevTools(
      // Monitors are individually adjustable with props.
      // Consult their repositories to learn about those props.
      // Here, we put LogMonitor inside a DockMonitor.
      <DockMonitor toggleVisibilityKey='ctrl-h'
                   changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
      </DockMonitor>
    );

    return DevTools;
  }
  return null;
}