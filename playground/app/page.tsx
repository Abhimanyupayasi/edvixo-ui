import Image from "next/image";
import {HelloWorld, StepsProduct, TestCompo} from 'edvixo-ui';


export default function Home() {
  return (
   <div>
   <TestCompo/>
   <h1 className="text-red-500">Hello World</h1>
   <StepsProduct   data={[]}  title={"Steps to get started"}   baseUrl={""}
   />
   <HelloWorld/>
   </div>
  );
}
