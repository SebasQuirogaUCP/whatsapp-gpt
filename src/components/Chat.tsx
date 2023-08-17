import { RandomUser } from "@/data/RandomUserType";
import { Avatar, Group, Text, createStyles, rem } from "@mantine/core";
import Router from "next/router";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
  },
}));

type Props = {
  user: Partial<RandomUser>;
};

export const Chat = ({ user }: Props) => {
  const { classes } = useStyles();
  return (
    <div>
      <Group onClick={() => Router.push("/chat")}>
        <Avatar
          src={user.picture?.thumbnail}
          alt={user.name?.first}
          radius="xl"
        />
        <div>
          <Text size="sm">{user.name?.first}</Text>
          {/* <Text size="xs" color="dimmed">
            {user.dob.date}
          </Text> */}
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {/* {body} */}
      </Text>
    </div>
  );
};
