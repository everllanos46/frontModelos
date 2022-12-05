import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { ResponsivePie } from "@nivo/pie";
import { CardActionArea, CardActions } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import logo from "../../assets/logo.png";
import Map from "./map";

function Dashboard({ buscador, info }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openTweet, setOpenTweet] = useState(null);
  const [ubication, setUbication] = useState(null);

  const closeOpenDialog = (state, tweet) => {
    setOpenTweet(tweet);
    setOpenDialog(state);
  };

  const ubicationTweetSelected = (tweetUbication) => {
    setUbication(tweetUbication.bounding_box.coordinates);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ width: "100%", maxHeight: "700px", flexDirection: "row" }}
      >
        {info !== null && info?.length > 0 ? (
          <Grid container>
            <Grid
              mt={1}
              ml={1}
              item
              xs={4}
              style={{
                maxHeight: "700px",
                overflow: "scroll",
                width: "100px",
                maxWidth: "380px",
              }}
            >
              {info.length > 0 &&
                info.map((item) => (
                  <>
                    { (
                      <Card variant="outlined" style={{ width: "345px" }}>
                        <CardActionArea
                          onClick={() => {
                            closeOpenDialog(true, item);
                          }}
                        >
                          <CardContent>
                            <Grid cointainer>
                              <Grid item>
                                <Avatar
                                  alt="Remy Sharp"
                                  style={{ width: "15%" }}
                                  src={item.user.profile_image_url}
                                />
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    marginLeft: "21%",
                                    marginTop: "-10%",
                                  }}
                                  color="text.secondary"
                                >
                                  @{item.user.screen_name}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Typography mt={3} variant="body2">
                              {item.text}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            disabled={item.place === null}
                            size="small"
                            color="primary"
                            onClick={() => ubicationTweetSelected(item.place)}
                          >
                            Ubicación
                          </Button>
                        </CardActions>
                      </Card>
                    )}
                  </>
                ))}
            </Grid>
            {/* <Grid item xs={1}>
            <Divider
              orientation="vertical"
              style={{ height: "100%" }}
              flexItem
            />
          </Grid> */}
            {/* <Grid
              item
              xs={8}
              style={{
                height: "300px",
                marginLeft: "36%",
                marginTop: info.length > 0 ? "10%" : "1%",
              }}
            >
              <ResponsivePie
                data={[
                  {
                    id: "Buenos",
                    label: "Buenos",
                    value: 4,
                    color: "hsl(39, 70%, 50%)",
                  },
                  {
                    id: "Malos",
                    label: "Malos",
                    value: 1,
                    color: "hsl(110, 70%, 50%)",
                  },
                ]}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                enableArcLinkLabels={false}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
              />
            </Grid> */}
            <div
              style={{
                height: "10%",
                marginTop: "24%",
                marginLeft: "-30%",
              }}
            >
              <Map posiciones={ubication} />
            </div>
          </Grid>
        ) : (
          <Grid container>
            <Grid item style={{ marginTop: "6%", marginLeft: "39%" }}>
              <img src={logo} width="280" height="280" />
            </Grid>
          </Grid>
        )}
      </Box>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        open={openDialog}
        onClose={() => closeOpenDialog(false)}
        fullWidth
        maxWidth="xs"
        style={{ height: "700px" }}
      >
        <DialogContent>
          {openTweet !== null && (
            <>
              <Grid cointainer>
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    style={{ width: "15%", height: "10%" }}
                    src={openTweet?.user.profile_image_url}
                  />
                  <Typography
                    sx={{
                      fontSize: 14,
                      marginLeft: "17%",
                      marginTop: "-14%",
                    }}
                    color="text.secondary"
                  >
                    @{openTweet?.user.screen_name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      marginLeft: "17%",
                      marginTop: "0%",
                    }}
                    color="black"
                  >
                    <b>Seguidores: {openTweet?.user.followers_count}</b>
                  </Typography>
                </Grid>
              </Grid>
              <Typography mt={5} variant="body2">
                {openTweet?.text}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  marginTop: "5%",
                }}
                color="black"
              >
                <b>Me gusta: {openTweet?.favorite_count}</b> <b style={{marginLeft: "5%"}}>Retweets: {openTweet?.retweet_count}</b>
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dashboard;
