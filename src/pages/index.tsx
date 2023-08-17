import { Chat } from "@/components/Chat";
import { Contacts } from "@/components/Contacts";
import { HeaderMiddle } from "@/components/HeaderMiddle";
import { AppShell, Header, Navbar } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Home() {
  const { height } = useViewportSize();

  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={height} p="xs">
            <Contacts height={height - 150} width={300} />
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <HeaderMiddle
              links={[
                { link: "/", label: "How it works" },
                { link: "/", label: "Contribute" },
              ]}
            />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Chat />
      </AppShell>
    </>
  );
}
