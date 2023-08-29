import { Chat } from "@/components/Chat";
import { useAppStore } from "@/store/useAppStore";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const email = router.query.email as string;
  console.log("email: ", email);

  // GET all important things from user
  const fakeUser = useAppStore((s) => s.fakeUsers).find(
    (u) => email === u.email
  );

  return (
    <>
      {fakeUser && (
        <Chat
          picture={fakeUser.picture.thumbnail}
          name={fakeUser.name.first}
          message={"Testing Message"}
        />
      )}
    </>
  );
}
