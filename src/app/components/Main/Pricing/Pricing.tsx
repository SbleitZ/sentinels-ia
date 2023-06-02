import { dataPlans } from "@/utils/data";
import { FcApproval } from "react-icons/fc"
export default function Pricing(){
  return (
    <section id="pricing">
      <h2>Planes y precios</h2>
      <p>Ofrecemos diferentes planes adaptados a tus necesidades. Puedes elegir entre nuestros planes básico, estándar y premium, cada uno diseñado para brindarte la mejor protección posible.</p>

      <div className="pricing-table flex flex-wrap justify-around">
        {
          dataPlans.map((plan,i) => 
          <div key={i} className="plan flex flex-col">
            <h3>Plan {plan.plan} </h3>
            <p className="price">${plan.price}/mes</p>
            <ul className="flex flex-col">
              {
                plan.beneficios.map((beneficio,i) => 
                <li className="flex items-center gap-2" key={i}>
                  <FcApproval/>
                  <span>{beneficio}</span>
                </li>)
              }
            </ul>
            <a href="#contact" className="btn">Adquirir ahora</a>
          </div>)

        }
      </div>
    </section>
  );
}