export function MotifPucukRebung({ position = 'top', className = "" }: { position?: 'top' | 'bottom', className?: string }) {
  const transform = position === 'bottom' ? 'scale(1, -1)' : '';
  return (
    <svg width="100%" height="32" className={`block ${className} text-amber-400`} style={{ transform }}>
      <defs>
        <pattern id="pucuk-rebung-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M16 0 L32 32 L0 32 Z" fill="currentColor" />
          <path d="M16 8 L24 32 L8 32 Z" fill="rgba(6, 78, 59, 1)" />
          <path d="M16 16 L20 32 L12 32 Z" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="32" fill="url(#pucuk-rebung-pattern)" />
    </svg>
  );
}

export function BungaSimetri({ className = "" }: { className?: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className={`${className} text-amber-500 drop-shadow-md`} fill="currentColor">
      <path d="M32 0 C32 16, 48 32, 64 32 C48 32, 32 48, 32 64 C32 48, 16 32, 0 32 C16 32, 32 16, 32 0 Z" />
      <circle cx="32" cy="32" r="8" fill="rgba(2, 44, 34, 1)" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

export function MotifTenunBackground({ opacity = "0.15", className = "" }: { opacity?: string, className?: string }) {
  return (
    <div 
      className={`absolute inset-0 z-0 pointer-events-none mix-blend-overlay ${className}`}
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L40 1.41V0h-1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

export function SudutUkiran({ position, className = "" }: { position: 'tl' | 'tr' | 'bl' | 'br', className?: string }) {
  let rotation = "";
  if (position === 'tr') rotation = "rotate-90";
  if (position === 'br') rotation = "rotate-180";
  if (position === 'bl') rotation = "-rotate-90";

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className={`absolute ${className} ${rotation} text-amber-500 pointer-events-none drop-shadow-md z-10`} fill="currentColor">
      <path d="M0 0 L48 0 C48 26.5 26.5 48 0 48 Z" fillOpacity="0.4"/>
      <path d="M0 0 L32 0 C32 17.6 17.6 32 0 32 Z" />
      <path d="M0 0 L16 0 C16 8.8 8.8 16 0 16 Z" fill="rgba(2, 44, 34, 1)"/>
    </svg>
  );
}
