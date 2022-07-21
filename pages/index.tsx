import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import UserSingleCard from "../components/UserSingleCard";

// User properties from supabase
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

// pass images props
export default function MyGallery({ users }: { users: User[] }) {
  return (
    <div className="bg-gray-900 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl font-bold mb-2">Customer Data</h1>
          <p className="text-gray-400 mb-14">
            Using Next.js & API Gateway (Supabase)
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* map each user from supabase based on users props to the UserSingleCard component  */}
          {users?.map((user) => (
            <UserSingleCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const mySupabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  // query from supabase
  const { data } = await mySupabaseAdmin.from("users").select("*").order("id");

  return {
    props: {
      users: data,
    }, // will be passed to the page component as props
  };
}
