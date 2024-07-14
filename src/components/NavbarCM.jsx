import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { IoLogoGameControllerB } from "react-icons/io";

function NavbarCM() {



    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const menuItems = [
        "Games",
        "Store",
        "About Us",
        "Contact",
      ];

  return <>
        <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand > 
          <IoLogoGameControllerB size={40} className="text-yellow-700"/>
          <p className="font-bold text-inherit text-yellow-700">PluGeek</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <IoLogoGameControllerB size={40} className="text-yellow-700"/>
          <p className="font-bold text-inherit text-yellow-700">PluGeek</p>
        </NavbarBrand>
{menuItems.map((menu, index) => (
                <NavbarItem key={index}>
                <Link color="foreground" href="#">
                  {menu}
                </Link>
              </NavbarItem>
    ))}
       
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button as={Link} color="primary" href="#" variant="flat">
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem >
        <Dropdown>
            <DropdownTrigger>
            <Avatar isBordered radius="sm" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/golden-gaming-logo-esports-design-template-afc25edd053b480c109341785f2ace1e_screen.jpg?ts=1698302201" />
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem >Profile</DropdownItem>
                <DropdownItem >Library</DropdownItem>
                <DropdownItem >Settings</DropdownItem>
                <DropdownItem >Log out</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </>
}

export default NavbarCM;
