import { useState } from "react";
import { Icons } from "../../../libs/icon";
import IconDetailsModal from "../../common/IconDetailsModal";

const IconFamilies = ({ search }) => {
  const [showModal, setShowModal] = useState(null);
  const filteredIcons = Icons.filter((itemObj) =>
    itemObj.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border-t border-t-white border-opacity-20 rounded-tl-md rounded-tr-md py-10">
      <div className="container mx-auto">
        <p className="text-lg font-semibold tracking-wide">Icon Families</p>
        <div className="flex items-center mt-1 flex-wrap gap-[17px]">
          {filteredIcons.length > 0 ? (
            <>
              {filteredIcons.map((itemObj) => {
                return (
                  <div
                    key={itemObj.id}
                    className="text-center hover:border border-[#35B2E9] duration-300 transition-all bg-[#1E293B] cursor-pointer p-4 size-28 justify-center rounded-lg flex flex-col items-center group"
                    onClick={() =>
                      setShowModal({
                        title: itemObj.name,
                        content: itemObj.description,
                        icon: itemObj.icon,
                      })
                    }
                  >
                    <itemObj.icon />
                    <span>{itemObj.name}</span>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="text-center w-full text-xl font-semibold tracking-wide opacity-100">
              Oops! Woohooo!! We don't have that icons
            </p>
          )}
        </div>
      </div>
      {showModal && (
        <IconDetailsModal
          title={showModal.title}
          description={showModal.content}
          Icon={showModal.icon}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default IconFamilies;
