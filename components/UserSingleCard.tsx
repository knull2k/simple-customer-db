import React, { useState } from "react";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  credit_card_num: number;
  credit_card_type: string;
  color: string;
};

// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

const UserSingleCard = ({ user }: { user: User }) => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-7 w-full overflow-hidden text-white rounded-lg"
          style={{ backgroundColor: user.color }}
        >
          {/* <Image
            priority
            src={user.color}
            alt="my-user"
            layout="fill"
            objectFit="cover"
            className={cn(
              "cursor-pointer group-hover:opacity-75 duration-700 ease-in-out",
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            )}
            onLoadingComplete={() => setIsLoading(false)}
          /> */}
        </div>

        <h3 className="mt-4 text-xl text-gray-300 font-bold">
          {user.first_name} {user.last_name}
        </h3>
        <p className="mt-2 text-sm font-medium text-gray-400">{user.email}</p>
        <p className="mt-1 text-sm font-medium text-gray-400">{user.phone}</p>
        <p className="mt-1 text-sm font-medium text-gray-400">
          {user.credit_card_num}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-400">
          {user.credit_card_type}
        </p>
      </div>
    </>
  );
};

export default UserSingleCard;
