import { useAppStore } from "@/store";  // Ensure correct capitalization
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { getColor } from "@/lib/utils";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Avatar, AvatarImage } from "@/components/ui/avatar"; // Ensure this component exists

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppStore();  // Ensure store is correctly set up
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false); // Fixed default value (should be boolean)
  const [selectedColor, setSelectedColor] = useState(0); // Fixed spelling of "setSelectedColor"

  const saveChanges = async () => {
    // Implement save logic here
  };

  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        <div>
          <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
        </div>

        <div className="grid grid-cols-2">
          <div
            className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
              {image ? (
                <AvatarImage
                  src={image}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase h-32 w-32 md:w-48 md:h-48 border-[1px] text-5xl flex items-center justify-center rounded-full ${getColor(selectedColor)}`}
                >
                  {firstName ? firstName.charAt(0) : userInfo?.email?.charAt(0)}
                </div>
              )}
            </Avatar>

            {hovered && (
              <div className="absolute bottom-2 right-2 bg-black/50 p-2 rounded-full">
                {image ? <FaTrash className="text-white" /> : <FaPlus className="text-white" />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
