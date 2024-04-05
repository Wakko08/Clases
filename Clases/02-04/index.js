const MontoPrevisto = 1;

const ordenesEfectivas = 11;

const diaDelMes = 3;

function proyectarCapacidad() {
  if (ordenesEfectivas > MontoPrevisto) {
    console.log("Debes de incremntear la capacidad");
  } else if (ordenesEfectivas < MontoPrevisto) {
    console.log("reducir la capacidad");
  } else if (ordenesEfectivas == MontoPrevisto) {
    console.log("estas bien con las ordenes");
  }
}

function ParOIpar() {
  if (diaDelMes % 2 === 0) {
    console.log("Manana es dia Par Debemos incrementar");
  } else {
    console.log("Manana es Dia Impar, Debemos reducir");
  }
}

proyectarCapacidad();
ParOIpar();
