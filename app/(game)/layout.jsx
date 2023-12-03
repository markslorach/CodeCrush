import { PlayerProvider } from "../hooks/usePlayer";

export default function GameLayout({ children }) {
  return (
    <PlayerProvider>
      <main className="mx-5 sm:mx-10">{children}</main>
    </PlayerProvider>
  );
}
