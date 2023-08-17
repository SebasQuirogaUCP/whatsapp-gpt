import { useViewportSize } from "@mantine/hooks";

export default function Home() {
  const { height } = useViewportSize();

  return (
    <>
      <p>Select your Chat</p>
    </>
  );
}
