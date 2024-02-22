'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import { FaHotel } from "react-icons/fa6";
export default function App() {
  return (
          <Navbar className="bg-zinc-50" position="static">
            <NavbarBrand className="gap-2">
              <Link href="#">
                  <FaHotel className="color-blue-500" />
                  <p className="text-blue font-bold">BookNstay</p>
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="/admin">
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
                    <Button className="bg-blue-500 text-white" as="a" color="primary" variant="flat">
                      login
                    </Button>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link href="/register" passHref>
                    <Button className="bg-blue-500 text-white" as="a" color="primary" variant="flat">
                      Register
                    </Button>
                  </Link>
                </NavbarItem>
            </NavbarContent>
          </Navbar>
  );
}
