export default function Footer(){
  //reserva tu producto
  return (
    <footer className="pt-20 w-full bg-backgroundL dark:bg-backgroundD">
      <div className="footer-links flex md:text-left text-center md:justify-around flex-wrap md:flex-row flex-col gap-4">
        <div className="footer-section">
            <h3 className="dark:text-textD text-textL font-bold">Explora</h3>
            <ul className="lista-footer">
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#features">Características</a></li>
                <li><a href="#pricing">Planes y precios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3 className="dark:text-textD text-textL font-bold">Recursos</h3>
            <ul className="lista-footer">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
                <li><a href="#">Guía de instalación</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3 className="dark:text-textD text-textL font-bold">Soporte</h3>
            <ul className="lista-footer">
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Contacto de soporte</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3 className="dark:text-textD text-textL font-bold">Legal</h3>
            <ul className="lista-footer">
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Términos de uso</a></li>
                <li><a href="#">Aviso legal</a></li>
            </ul>
        </div>
    </div>
    <p className="text-center dark:text-textD text-textL pt-4">&copy; 2023 SentinelIA. Todos los derechos reservados.</p>
    </footer>
  );
}