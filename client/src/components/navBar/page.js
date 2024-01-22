'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
export default function App() {
  return (
          <Navbar position="static">
            <NavbarBrand className="gap-2">
              <Link href="#">
                  <Image className="sitelogo" src="/bookingapp.png" width={100} height={75} alt="Booking App Logo" />
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="#">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page">
                  About us
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Find hotel
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="/login" passHref>
                    <Button as="a" color="primary" variant="flat">
                      login
                    </Button>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/register" passHref>
                    <Button as="a" color="primary" variant="flat">
                      Register
                    </Button>
                  </Link>
                </NavbarItem>
            </NavbarContent>
          </Navbar>
  );
}
