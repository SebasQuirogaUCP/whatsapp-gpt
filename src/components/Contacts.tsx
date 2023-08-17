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
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from "@tabler/icons-react";

import { Err } from "@/services/utils/Err";
import { LinksGroup } from "./NavBarLinkGroup";
import { useRandomPeople } from "./hooks/useRandomPeople";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

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
    data: fakeUsers,
    error: fetchFakeUserError,
    isLoading,
  } = useRandomPeople(5);

  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

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
                  />
                );
              })}
          </Navbar.Section>
        </Navbar>
      </Stack>
    </>
  );
}
