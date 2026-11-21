// Tarea 2: API de autenticación - ReportCasa
// Estado: 20% - Solo estructura base y login simulado
// Pendiente para Sprint 2: validación real, encriptar contraseña, token

const AuthAPI = {
  // POST /api/registro - 20% (solo guarda en local, sin validar bien)
  registro: function(correo, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push({ correo: correo, password: password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return { ok: true, mensaje: 'Usuario registrado - versión 20%' };
  },

  // POST /api/login - 20% (solo busca en local, sin token real)
  login: function(correo, password) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const encontrado = usuarios.find(u => u.correo === correo && u.password === password);
    if (encontrado) {
      return { ok: true, mensaje: 'Login correcto - versión 20%' };
    } else {
      return { ok: false, mensaje: 'Correo o contraseña incorrectos' };
    }
  }
};

// TODO Sprint 2 (80% restante):
// - Encriptar contraseña
// - Generar token JWT
// - Validar correo con formato correcto
