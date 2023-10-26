import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      {/* state 1 */}
      <h1>Stop kau mencuri hatiku {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("red")}
      >red</button>

    {/* state 2 */}
    <h1>Hati-hati ada yang menyakiti {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("yellow")}
      >yellow</button>

{/* state 3 */}
<h1>Jalanlah jika sudah sejalan {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("green")}
      >green</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

export default Apa;