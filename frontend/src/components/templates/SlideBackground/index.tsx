import React, { useContext, useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme/theme";
import { getUserById } from "../../../services/services";
import { setThemeColour } from "../../utils/mapperFunction";
import { UserContext } from "../../utils/context";

interface SlideProps {
  title: string;
  children?: JSX.Element;
}

const SlideBackground: React.FC<SlideProps> = ({
  title,
  children,
}: SlideProps) => {
  const { userId } = useContext(UserContext);
  const [bgcolor, setColor] = useState("");
  useEffect(() => {
    getUserById(userId).then((res) => {
      setColor(setThemeColour(res.themeColor));
    });
  }, []);
  const TitleBox = {
    height: "4.125rem",
    width: "12.0625rem",
    position: "relative",
    left: "30.1875rem",
    display: "flex",
    background: `${bgcolor}`,
    justifyContent: "center",
  };
  const classes = makeStyles(() => ({
    main: {
      height: "23.6875rem",
      width: "42.25rem",
    },

    titleTypography: {
      color: theme.palette.structural[50],
      position: "relative",
      top: "1.3125rem",
      height: "1.375rem",
    },
  }));

  const styles = classes();
  return (
    <Card className={styles.main} square={true} data-testid="slide">
      <Box sx={TitleBox} data-testid="slideTitleBox">
        <Typography
          variant="caption"
          className={styles.titleTypography}
          data-testid="slideTitle"
        >
          {" "}
          {title}{" "}
        </Typography>
      </Box>
      {children}
    </Card>
  );
};

export default SlideBackground;
