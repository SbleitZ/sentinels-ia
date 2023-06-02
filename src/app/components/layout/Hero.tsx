export default function Hero({children}:{children: JSX.Element[] | JSX.Element | string}){
  return (
    <div className="pt-24">
      {children}
    </div>
  );
}