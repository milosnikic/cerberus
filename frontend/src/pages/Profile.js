import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/profile/Header";
import Content from "components/profile/Content";
import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();

  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <Content params={params} />
      </main>
      <DefaultFooter />
    </>
  );
}
