import { Chat } from "@/components/Chat";
import { SendMessage } from "@/services/chat/SendMessage";
import { useAppStore } from "@/store/useAppStore";
import { Stack, Textarea } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconSend } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

type Conversation = {
  picture: string | undefined;
  name: string | undefined;
  message: string;
};

export default function Page() {
  const router = useRouter();

  const { height } = useViewportSize();

  const ref = useRef<HTMLTextAreaElement>(null);

  const email = router.query.email as string;

  const fakeUser = useAppStore((s) => s.fakeUsers).find(
    (u) => email === u.email
  );

  // const usa = useHotkeys([["shift+enter", () => onSendMessage()]]);

  const [conversation, setConversation] = useState<Conversation[]>([]);

  useEffect(() => {
    setConversation([
      {
        message: "Hello There",
        name: fakeUser?.name.first,
        picture: fakeUser?.picture.thumbnail,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fakeUser]);

  const onSendMessage = async () => {
    if (ref.current) {
      const message = ref.current.value;
      setConversation([...conversation, { message, name: "You", picture: "" }]);
      SendMessage(message);
    }
  };

  return (
    <>
      {fakeUser && (
        <>
          <Stack h={height - 170}>
            {conversation.length > 0 &&
              conversation.map((c, i) => {
                return (
                  <Chat
                    key={i}
                    picture={c.picture}
                    name={c.name}
                    message={c.message}
                  />
                );
              })}
          </Stack>
          <Textarea
            id={"user-message-text-area"}
            ref={ref}
            placeholder="Write a message"
            rightSection={<IconSend size={16} onClick={onSendMessage} />}
          />
        </>
      )}
    </>
  );
}
