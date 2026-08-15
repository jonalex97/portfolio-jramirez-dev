import { useEffect, useState } from 'react';

// GoatCounter (cuenta jramirez-dev): registra la visita y lee el total público.
// El script count.js se carga en index.html con no_onload — aquí se dispara
// goatcounter.count() a mano para controlar cuándo cuenta.
const SITE = 'https://jramirez-dev.goatcounter.com';

// Una visita = una sesión de pestaña: sessionStorage sobrevive a recargas
// (no re-cuenta F5) pero muere al cerrar la pestaña, así que salir y volver
// a entrar sí suma una visita nueva.
const SESSION_FLAG = 'visita-contada';

// count.js se carga async: puede no estar listo cuando monta React.
function contarCuandoCargue(intentos = 20) {
  if (window.goatcounter?.count) {
    window.goatcounter.count({ path: location.pathname });
  } else if (intentos > 0) {
    setTimeout(() => contarCuandoCargue(intentos - 1), 250);
  }
}

export function useVisitCounter() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    // La bandera se marca antes de contar para no duplicar si el efecto
    // se re-ejecuta (StrictMode en dev) o el usuario recarga a mitad de carga.
    if (!sessionStorage.getItem(SESSION_FLAG)) {
      sessionStorage.setItem(SESSION_FLAG, '1');
      contarCuandoCargue();
    }

    // Total del sitio (path especial TOTAL). Requiere la opción de settings
    // "Allow adding visitor counts on your website" activada en GoatCounter.
    // count llega como texto con separador de miles, ej: "1 234".
    fetch(`${SITE}/counter/TOTAL.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const total = parseInt(String(data?.count ?? '').replace(/\D/g, ''), 10);
        setVisits(Number.isNaN(total) ? null : total);
      })
      .catch(() => setVisits(null)); // adblock o servicio caído: el sitio sigue normal
  }, []);

  return visits;
}
