import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const handleClipboard = (textCopy) => {
  navigator.clipboard.writeText(textCopy).then(
    () => {
      Toastify({
        text: "Script copiado al portapapeles",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    },
    () => {
      console.log("error");
      Toastify({
        text: "Error al copiar el script al portapapeles",
        className: "info",
        style: {
          background: "linear-gradient(to right, #ff0000, #ff0000)",
        },
      }).showToast();
    }
  );
};
