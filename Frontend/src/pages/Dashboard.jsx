import FeatureButton from "../components/FeatureButton";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiTreePalm } from "react-icons/pi";
import { TbYinYang } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import {
  MdHealthAndSafety,
  MdHistory,
  MdOutlineKeyboardVoice,
} from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import QuickSymptom from "../components/QuickSymptom";
import DoshaBalance from "../components/DoshBalance";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  const features = [
    {
      name: "Root Cause Analysis",
      icon: IoSearch,
      href: "/root-cause-analysis",
    },
    { name: "Wellness Tips", icon: FaRegHeart, href: "/wellness-tips" },
    {
      name: "Seasonal Precautions",
      icon: PiTreePalm,
      href: "/seasonal-precautions",
    },
    { name: "Ayurvedic Dosha", icon: TbYinYang },
    { name: "Health Parameters", icon: VscSettings },
    { name: "Explore Remedies", icon: MdHealthAndSafety, href: "/remedies" },
    { name: "Symptom Analysis", icon: MdOutlineKeyboardVoice },
    { name: "History", icon: MdHistory },
    { name: "Help/Support", icon: IoIosHelpCircleOutline },
  ];

  return (
    <>
      <div className="grid grid-cols-9 h-screen m-8">
        <div className="col-span-6 mr-4">
          <div className="grid grid-cols-4 gap-2">
            {features.map((feature, index) => (
              <FeatureButton
                key={index}
                name={feature.name}
                Icon={feature.icon}
                href={feature.href}
              />
            ))}
          </div>
          <div>
            <DoshaBalance />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
        <div className="ml-20 mr-16 col-span-3">
          <QuickSymptom />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
