export default function Contact(){
  return (
    <section>
      <h2>Contacto</h2>
      <p>Si deseas adquirir SentinelIA y proteger tu hogar o negocio, visita nuestra página web en 
        <a href="https://www.sentinel.ia">www.sentinel.ia</a>
        o contáctanos utilizando el formulario a continuación. Nuestro equipo estará encantado de brindarte más información y ayudarte a encontrar la solución de seguridad perfecta para ti.</p>
      <form>
        <input type="text" placeholder="Nombre" required/>
        <input type="email" placeholder="Correo electrónico" required/>
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}