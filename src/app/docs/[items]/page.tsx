interface paramsProps{
  params:{
    items: string;
  }
}
export default function Page({params}:paramsProps){
  const { items } = params;
  return (
    <>
      {
        items
      }
    </>
  );
}