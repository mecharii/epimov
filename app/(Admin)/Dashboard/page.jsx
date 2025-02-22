"use client";
import { auth } from "@/utils/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Admin from "../components/Admin";

export const dynamic = "force-dynamic";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid !== "LNGaISa5TQab23Oi8dmkncTfDRt2") {
        setIsAdmin(false);
        router.push("/");
      } else {
        setIsAdmin(true);
      }
    });
  });

  return <>{isAdmin && <Admin />}</>;
};

export default AdminPage;
