export function textFieldValidation(name) {
  const letters = /^[A-Za-ząćęłńóśźżĄĘŁŃÓŚŹŻ]+$/;
  if (name.match(letters)) {
    return true;
  } else {
    alert(
      "Chyba kot Ci przebiegł po klawiaturze :) \nimiona nie zawierają liczb, ani znaków specjalnych\nProszę podaj imię ponownie "
    );
    return false;
  }
}
