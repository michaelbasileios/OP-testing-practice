import "./styles.css";

function capitalize(string) {
  if (string.length === 0) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalize };
