import {
  Avatar,
  Group,
  Text,
  UnstyledButton,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

type Props = {
  picture: string | undefined;
  name: string | undefined;
  message: string | undefined;
};

export function Chat({ message, name, picture }: Props) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar src={picture} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {message}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
