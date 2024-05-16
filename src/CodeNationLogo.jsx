import codeNationLogo from "./assets/codeNationLogo.png";

/**
 * Renders an <img> of the Code Nation logo (it's a png file)
 * @returns JSX.Element
 */
export default function CodeNationLogo() {
  return (
    <img
      src="https://codenation.org/wp-content/uploads/2021/08/CN_Logo_Teal-08-e1629151817603.png"
      className="logo"
    />
  );
}
