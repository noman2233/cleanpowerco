"use client";
import Navbar from "../Navbar/Navbar";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";

const WebLayout = ({ children }) => {
 

  return (
    <div  >
      <AnnouncementBar />
      <Navbar />
      <SideMenu/>
      {children}
      <Footer />
    </div>
  );
};
export default WebLayout;
