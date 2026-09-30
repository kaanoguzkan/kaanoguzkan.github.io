// The command palette is lazy-loaded. If the user clicks the navbar button before its
// chunk has arrived, remember the request so the palette opens as soon as it mounts.
export const OPEN_PALETTE_EVENT = 'open-command-palette';

let pending = false;

export function requestOpenPalette() {
  pending = true;
  window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
}

export function consumePendingOpen() {
  const wasPending = pending;
  pending = false;
  return wasPending;
}
