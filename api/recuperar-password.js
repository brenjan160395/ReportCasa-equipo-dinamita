// Tarea T-03b: Recuperar la contraseña - ReportCasa
// Estado: Parcial: pantalla simulada, 2h de 8 (25%)
// Destino: Pasa al Sprint 3 con 6h (07/12/2026 al 18/12/2026)
// Nota: Esto es SIMULADO. No manda correo de verdad todavía.

function solicitarRecuperacion(correo) {
  // 1. Si no escribió correo, no se puede
  if (!correo) {
    return { ok: false, mensaje: 'Escribe tu correo para recuperar tu contraseña' };
  }

  // 2. Revisa que el correo tenga @ (regla básica de T-03a)
  if (!correo.includes('@')) {
    return { ok: false, mensaje: 'Ese correo no es válido, debe tener @' };
  }

  // 3. SIMULADO: Aquí en el Sprint 3 se mandará el correo de verdad
  // Ahorita solo simulamos que ya se mandó
  return {
    ok: true,
    mensaje: 'SIMULADO: Si el correo existe, te mandamos un enlace para cambiar tu contraseña. Revisa tu bandeja.'
  };
}

// Ejemplo de uso:
// solicitarRecuperacion('gustavo@gmail.com') -> { ok: true, mensaje: 'SIMULADO...' }
// solicitarRecuperacion('gustavo') -> { ok: false }
