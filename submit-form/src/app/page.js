import Image from "next/image";
import MyForm from "./components/MyForm/MyForm";
import MyHeading from "./MyHeading/MyHeading";
export default function Home() {
  return (
    <div className="container mx-auto">
        <MyHeading/>
        <MyForm />
    </div>
  );
}
