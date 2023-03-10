import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import MaintenanceDesktop from "./Maintenance.desktop";
import MaintenanceMobile from "./Maintenance.mobile";

const Maintenance = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return <MaintenanceDesktop />;

  if (!isDesktop) return <MaintenanceMobile />;

  return <></>;
};

export default Maintenance;
