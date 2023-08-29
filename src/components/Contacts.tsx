import { UserButton } from "@/components/UsersButton";
import {
  Code,
  Group,
  Navbar,
  Stack,
  Title,
  createStyles,
  rem,
} from "@mantine/core";

import { SetFakeUsers } from "@/services/chat/SetFakeUsers";
import { Err } from "@/services/utils/Err";
import { useAppStore } from "@/store/useAppStore";
import Router from "next/router";
import { useEffect } from "react";
import { useRandomPeople } from "./hooks/useRandomPeople";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

type Props = {
  height: number;
  width: number;
};

export function Contacts({ height, width }: Props) {
  const {
    data: fakeUsersRetrieved,
    error: fetchFakeUserError,
    isLoading,
  } = useRandomPeople();

  const fakeUsers = useAppStore((s) => s.fakeUsers);

  useEffect(() => {
    if (fakeUsersRetrieved && fakeUsersRetrieved?.length !== fakeUsers.length)
      SetFakeUsers(fakeUsersRetrieved);
  }, [fakeUsers.length, fakeUsersRetrieved]);

  const { classes } = useStyles();

  if (fetchFakeUserError) {
    // TODO: An emergent window for erroring to the user
    Err(fetchFakeUserError);
  }

  return (
    <>
      <Stack>
        <Navbar
          height={height}
          width={{ sm: width }}
          p="md"
          className={classes.navbar}
        >
          <Navbar.Section className={classes.header}>
            <Group position="apart">
              <Title>Chats</Title>
              <Code sx={{ fontWeight: 700 }}>v1.0</Code>
            </Group>
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            {fakeUsers &&
              fakeUsers.map((user, i) => {
                return (
                  <UserButton
                    key={i}
                    image={user.picture.thumbnail}
                    name={`${user.name.first} ${user.name.last}`}
                    email={`${user.email}`}
                    onClick={() => Router.push(`/chat/${user.email}`)}
                  />
                );
              })}
          </Navbar.Section>
        </Navbar>
      </Stack>
    </>
  );
}
