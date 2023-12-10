import { useState } from "react";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button
        className="button button-primary"
        onClick={() => setGreeting(randomMessage())}
      >
        Nuevo saludo
      </button>
      <p>
        Hay otras directivas <code>client:</code> para explorar. Cada una envía
        el JavaScript al cliente en un momento diferente. Por ejemplo,
        <code>client:visible</code> sólo enviará el JavaScript del componente
        cuando sea visible en la página.
      </p>
    </div>
  );
}
