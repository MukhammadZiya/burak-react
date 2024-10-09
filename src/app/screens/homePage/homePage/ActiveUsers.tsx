import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../../components/divider";

const activeUsers = [
  { productName: "Martin", imagePath: "/img/martin.webp" },
  { productName: "Justin", imagePath: "/img/justin.webp" },
  { productName: "Rose", imagePath: "/img/rose.webp" },
  { productName: "Nusret", imagePath: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Fresh Menu</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className={"member-nickname"}>
                              {ele.productName}
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data"> Active Users are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
