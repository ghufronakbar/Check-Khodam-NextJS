import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    toast({
        title: "Halaman tidak tersedia",
        status: "error",
      });
      router.push(`/`);  
  })
  
  return null
}
