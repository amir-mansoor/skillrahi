export default function LoadingOverlay({
  visible = true,
  message = "Loading...",
  allowPointerEvents = false,
}) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* translucent backdrop keeps background visible */}
      <div
        className={`absolute inset-0 ${
          allowPointerEvents ? "pointer-events-none" : "pointer-events-auto"
        }`}
        aria-hidden
      >
        <div className="w-full h-full bg-black/40 backdrop-blur-sm" />
      </div>

      {/* content panel (spinner + message) */}
      <div className="relative z-10 flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/6 border border-white/10 shadow-2xl">
        <div className="w-12 h-12 rounded-full border-4 border-white/80 border-t-transparent animate-spin" />
        {message && (
          <div className="text-sm font-medium text-white/90">{message}</div>
        )}
      </div>
    </div>
  );
}
