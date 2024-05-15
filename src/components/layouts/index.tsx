import Logo from "@/assets/navbar-logo.png";
import Icons from "@/components/icons";
import { styles } from "@/styles/root/index.css";
import { AppShell, Burger, Container, Image, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCallback } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { isArray } from "remeda";

type SidebarItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
};

export default function MainLayout() {
  const [isOpened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();
  const sideBarContents: SidebarItem[] = [
    {
      href: "/introduction",
      label: "Introduction",
      icon: <Icons.HomePage />,
    },
    {
      href: "/answers",
      label: "Answers",
      icon: <Icons.Answers />,
      children: [
        {
          href: "/answers/exam",
          label: "Exam",
        },
        {
          href: '/answers/quests',
          label: 'Quests',
        },
        {
          href: "/answers/boxed-lunches",
          label: "Boxed lunches",
        },
        {
          href: "/answers/midnight-trivia-quiz",
          label: "Midnight trivia quiz",
        },
      ],
    },
    {
      href: "/social-links",
      label: "Social links",
      icon: <Icons.SocialLinks />,
    },
  ];

  //#region Functions
  const renderTree = useCallback(
    (item: SidebarItem) => {
      const hasChildren = isArray(item?.children);
      const isMatched = item.href === pathname;
      const isChildActive = item.children?.some(
        (child) => child.href === pathname,
      );
      return (
        <NavLink
          key={`navbar-item-${item.label}`}
          to={hasChildren ? "#" : item.href}
          component={Link}
          variant={hasChildren ? "filled" : "light"}
          active={isMatched || isChildActive}
          defaultOpened={isMatched || isChildActive}
          label={item.label}
          leftSection={item.icon}
        >
          {hasChildren && item.children?.map(renderTree)}
        </NavLink>
      );
    },
    [pathname],
  );
  //#endregion

  //#region Effects
  //#endregion

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{
        width: 250,
        breakpoint: "lg",
        collapsed: {
          mobile: !isOpened,
        },
      }}
    >
      <AppShell.Header px="md" className={styles.logoContainer}>
        <Image src={Logo} alt="p4g-guide-logo" className={styles.logo} />
        <Burger
          aria-label="Toggle sidebar"
          opened={isOpened}
          onClick={toggle}
          hiddenFrom="lg"
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {sideBarContents.map(renderTree)}
      </AppShell.Navbar>

      <AppShell.Main>
        <Container fluid>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}