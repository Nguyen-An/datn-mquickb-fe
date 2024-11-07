"use client";
import { useEffect, useState } from "react";
// import "./sidebar.scss";
import { usePathname, useRouter } from "next/navigation";
import SideBarItem from "./sideBarItem";

interface MenuItem {
  icon: string;
  title: string;
  active: boolean;
  key: string;
  permissions?: string[];
}

const SideBar = () => {

  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    // const token = localStorage?.getItem("token");
    // const user = token ? jwtDecode(token) : null;
    // setUserInfo(user);
    // setLoading(false);
  }, []);

  const [menu, setMenu] = useState<MenuItem[]>(
    [
      {
        icon: "icon-home",
        title: 'home',
        active: false,
        key: "dashboard",
        // permissions: [PERMISSIONS.SYSTEM_ADMIN, PERMISSIONS.COMPANY_ADMIN]
      },
      {
        icon: "icon-user",
        title: 'user',
        active: false,
        key: "user",
        // permissions: [PERMISSIONS.SYSTEM_ADMIN, PERMISSIONS.COMPANY_ADMIN]
      },
      {
        icon: "icon-doc",
        title: 'document_management',
        active: false,
        key: "document",
        // permissions: [PERMISSIONS.SYSTEM_ADMIN, PERMISSIONS.COMPANY_ADMIN]
      },
      {
        icon: "icon-company",
        title:'order_management',
        active: false,
        key: "order",
        // permissions: [PERMISSIONS.SYSTEM_ADMIN]
      },
      {
        icon: "icon-assistant-menu",
        title: "menu_management",
        active: false,
        key: "menu",
      },
      {
        icon: "icon-model",
        title: "table_management",
        active: false,
        key: "table",
        // permissions: [PERMISSIONS.SYSTEM_ADMIN]
      },
      {
        icon: "icon-chat",
        title: "chat_gpt",
        active: false,
        key: "chat",
      },
    ]
  );

  const setActive = (item: {
    icon: string;
    title: string;
    active: boolean;
    key: string;
  }) => {
    const updatedMenu = menu.map((element) => ({
      ...element,
      active: element.key === item.key,
    }));
    setMenu(updatedMenu);
  };

  useEffect(() => {
    const pathParts = pathname.split('/');
    const currentPath = pathParts[pathParts.length - 1];
    const item = menu.find((element) => element.key === currentPath);
    const chatItem = menu.find((element) => element.key === "chat");
    setActive(item || chatItem || menu[5]);
  }, [pathname]);



  const handleClickItemMenu = (item: any) => {
    setActive(item)
    router.push(`/${item.key}`)
  }

  return (
    <>
      <div className="sideBar px-[6px] pb-6 pt-[6px] m-0 flex justify-between flex-col fixed w-[100px] h-screen top-0 left-0 bg-blue-primary">
        <ul>
          {menu.map((item, index) => (
          //   (!item.permissions || item.permissions.includes(userInfo?.role_id)) && !loading ?
          //     <SideBarItem
          //       title={item.title}
          //       icon={item.icon}
          //       active={item.active}
          //       link={item.key}
          //       key={index}
          //       onClick={() => { handleClickItemMenu(item) }}
          //     ></SideBarItem>
          //     : null
            // )
            <SideBarItem
                title={item.title}
                icon={item.icon}
                active={item.active}
                link={item.key}
                key={index}
                onClick={() => { handleClickItemMenu(item) }}
              ></SideBarItem>)
          )}
        </ul>
        {/* <Avatar size={58} /> */}
      </div>
    </>
  );
}

export default SideBar;
