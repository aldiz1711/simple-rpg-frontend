import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../assets/img1.png";

import Link from "../components/link/link";
import CirclePicture from "../components/circle_picture/circle_picture";
import ProfileName from "../components/profile_name/profile_name";
import ExpBar from "../components/exp_bar/exp_bar";

export default function Home() {
  const currentExp = 150; // Replace with your actual experience values
  const maxExp = 300;

  return (
    <section id="home ">
      <div>
        <h1 className="">Home</h1>
        <Link route="/" name="Home" icon={faHouse} />
        <CirclePicture src={Avatar} alt="Profile Picture" />
        <ProfileName name="Rubeus" />
        <ExpBar currentExp={currentExp} maxExp={maxExp} />
      </div>
    </section>
  );
}
