import { Box, Container, Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../../css/order.css"

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISH ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className="order-user-img">
                <img
                  src="/icons/default-user.svg"
                  className="order-user-avatar"
                  alt=""
                />
              </div>
              <div className="order-user-img">
                <img src="/icons/user-badge.svg" />
              </div>
              <span className="order-user-name">WWW</span>
              <span className="order-user-prof">USER</span>
            </Box>
            <div className="liner"></div>
            <div className="order-user-address">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <LocationOnIcon />
              </div>
              <div className="spec-address-txt">Do not exist</div>
            </div>
          </Box>

          {/* Add margin to the second box */}
          <Box className={"order-info-box"} sx={{ marginTop: 2 }}> {/* Adjust the margin value as needed */}
            <Box>
              <input
                type="text"
                name="CardNumber"
                placeholder="Card number : **** 4090 2002 749"
                className="card-inout"
              />
            </Box>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="text"
                name="cardPeriod"
                placeholder="07/24"
                className="card-half-input"
              />
              <input
                type="text"
                name="cardCVV"
                placeholder="CVV: 010"
                className="card-half-input"
              />
            </div>
            <input
              type="text"
              name="cardCreator"
              placeholder="Justin Roberton"
              className="card-input"
            />
            <div className="card-box">
              <img src="/icons/western-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/visa-card.svg" alt="" />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
