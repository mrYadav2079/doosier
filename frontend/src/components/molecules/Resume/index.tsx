import API from "../../../services/API";
import {
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import dossierLogo from "../../../assets/images/logos/logoDossierLogo.png";
import resumeProfilePic from "../../../assets/icons/resumeProfilePic.png";
import phoneIcon from "../../../assets/icons/phone.svg";
import mail from "../../../assets/icons/mail.svg";
import location from "../../../assets/icons/location.svg";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme/theme";
import { getSocialLogoSrc } from "../../utils/mapperFunction";
import { UserContext } from "../../utils/context";

const userSocialMediaLinks = [
  { name: "indeed", link: "dossier/indeed.com" },
  { name: "glassdoor", link: "dossier/glassdoor.com" },
  { name: "twitter", link: "dossier/twitter.com" },
];

export interface ResumeProps {
  personalDetails?: {
    name: string;
    phone: string;
    email: string;
    address: string;
    imageSrc: string;
    portfolioLink: string;
    presonalDescription: string;
  };
  educationDestails?: {
    collegeName: string;
    courseName: string;
    courseSpan: string;
  }[];
  workExperience?: {
    companyName: string;
    role: string;
    jobSpan: string;
    jobDescription: string;
  }[];
  certifications?: string[];
  accomplishments?: string[];
  awards?: string[];
  socialMediaLinks?: {
    name: string;
    link: string;
  }[];
}

const classes = makeStyles(() => ({
  personalIconsStyles: {
    minWidth: "0",
    marginRight: "12px",
  },
  personalListItemStyles: {
    marginTop: "8px",
    padding: "0",
  },
}));

const Resume: React.FC<ResumeProps> = ({
  socialMediaLinks = userSocialMediaLinks,
}) => {
  const [userData, setUserData] = useState({
    id: "",
    userName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    address: "",
    age: 0,
    otp: 7900,
    designation: "",
    imageSrc: "",
    portfolioLink: "",
    presonalDescription: "",
    workExp: [
      {
        companyName: "",
        jobDescription: "",
        jobSpan: "",
        role: "",
      },
    ],
    certifications: [
      {
        id: 0,
        Image: "",
        name: "",
      },
    ],
    userAccomplishments: [],
    awardsData: [],
    resumes: [],
    slideScreens: [],
  });
  const [educationDetails, setEducationDetails] = useState({
    id:"",
    details:[
      {
        "collegeName":"",
        "degree":"",
        "endDate":"",
        "image":"",
        "startDate":""
      }
    ]
  });
  const [experinenceDetails,setExperinenceDetails] = useState({
    id:"",
    details:[""]
  })
  const [loading, setLoading] = useState<boolean>(true);
  const styles = classes();
  const { userId } = useContext(UserContext);

  useEffect(() => {
    const retrieveEducationData = async () => {
      try {
        const response = await API.get(`education/${userId}`);
        setEducationDetails(response.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    const retrieveUserData = async () => {
      try {
        const response = await API.get(`users/${userId}`);
        setUserData(response.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    const retriveUserExperience = async () => {
      try {
        const response = await API.get(`experience/${userId}`);
        setExperinenceDetails(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    retrieveUserData();
    retrieveEducationData();
    retriveUserExperience();
    setLoading(false);
  }, []);
  if(loading){
    return <h2 data-testid="loading">loading</h2>
  }
  return (
    <Grid
      sx={{
        padding: "32px",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
        width: "871px",
      }}
    >
      <Grid sx={{ display: "flex" }}>
        <img style={{ marginLeft: "auto" }} src={dossierLogo} />
      </Grid>
      <Stack direction={"row"} sx={{ marginTop: "12px" }}>
        <Grid>
          <img style={{ marginTop: "4px" }} src={resumeProfilePic}></img>
        </Grid>
        <Stack direction={"column"} marginLeft="22px">
          <Typography variant="title">{userData.userName}</Typography>
          <Grid marginTop="8px">
            <ListItem className={styles.personalListItemStyles}>
              <ListItemIcon className={styles.personalIconsStyles}>
                <img src={mail} />
              </ListItemIcon>
              <Typography variant="caption3">{userData.email}</Typography>
            </ListItem>
            <ListItem className={styles.personalListItemStyles}>
              <ListItemIcon className={styles.personalIconsStyles}>
                <img src={phoneIcon} />
              </ListItemIcon>
              <Typography variant="caption3">{userData.phoneNumber}</Typography>
            </ListItem>
            <ListItem className={styles.personalListItemStyles}>
              <ListItemIcon className={styles.personalIconsStyles}>
                <img src={location} />
              </ListItemIcon>
              <Typography variant="caption3">{userData.address}</Typography>
            </ListItem>
          </Grid>
        </Stack>
      </Stack>
      <Grid
        sx={{
          height: "78px",
          padding: "24px",
          display: "inline-flex",
          background: theme.palette.structural[300],
          marginTop: "33px",
          marginBottom: "6px",
        }}
      >
        <Typography variant="subtitle2" sx={{ marginRight: "30px" }}>
          {"Click on the link to visit my portfolio"}
        </Typography>
        <Typography variant="subtitle2" sx={{ marginRight: "24px" }}>
          -
        </Typography>
        <Typography variant="subtitle2">
          <Link href={userData.portfolioLink}>DOSSIER</Link>
        </Typography>
      </Grid>
      <Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography variant="subtitle1">Personal Details</Typography>
          <Typography
            variant="caption3"
            sx={{ display: "block", marginTop: "12px", color: theme.palette.text.primary}}
          >
            {userData.presonalDescription}
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography variant="subtitle1">Educational Details</Typography>
          {educationDetails.details.map((edu: any, index: number) => {
            return (
              <Grid
                sx={{ display: "block", marginTop: "12px" }}
                key={`educationDetails${index}`}
              >
                <Typography sx={{ display: "block", color: theme.palette.text.primary }} variant="caption3">
                  {`${edu.degree} from ${edu.collegeName}, USA`}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography variant="subtitle1">Work Experience</Typography>
          {
            experinenceDetails.details.map((experience,index) => {
              return(
                <Grid
                sx={{ display: "block", marginTop: "12px" }}
                key={`workExperienceDetails${index}`}
              >
                <Typography sx={{ display: "block", color: theme.palette.text.primary }} variant="caption3">
                  {experience}
                </Typography>

              </Grid>
              )
            })
          }
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography sx={{ marginBottom: "12px" }} variant="subtitle1">
            Certifications
          </Typography>
          {userData.certifications.map((certification, index) => {
            return (
              <Typography
                key={`certification${index}`}
                variant="caption3"
                sx={{ display: "block", color: theme.palette.text.primary }}
              >
                {certification.name}
              </Typography>
            );
          })}
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography sx={{ marginBottom: "12px" }} variant="subtitle1">
            Accomplishments
          </Typography>
          {userData.userAccomplishments.map((accomplishment, index) => {
            return (
              <Typography
                key={`accomplishment${index}`}
                variant="caption3"
                sx={{ display: "block" ,color: theme.palette.text.primary}}
              >
                {accomplishment}
              </Typography>
            );
          })}
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography sx={{ marginBottom: "12px" }} variant="subtitle1">
            Awards
          </Typography>
          {userData.awardsData.map((award, index) => {
            return (
              <Typography
                key={`award${index}`}
                variant="caption3"
                sx={{ display: "block" ,color: theme.palette.text.primary}}
              >
                {award}
              </Typography>
            );
          })}
        </Grid>
        <Grid sx={{ marginTop: "32px" }}>
          <Typography variant="subtitle1">Social Media Links</Typography>
          <Grid sx={{ display: "flex", marginTop: "12px" }}>
            {socialMediaLinks.map((socialMedia, index) => {
              return (
                <Link href={socialMedia.link}>
                  <Grid
                    key={`socialMediaLinks${index}`}
                    sx={{
                      marginRight: "24px",
                      height: "63px",
                      width: "63px",
                      borderRadius: "63px",
                      backgroundColor: theme.palette.structural[300],
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ width: "32px" }}
                      src={getSocialLogoSrc(socialMedia.name)}
                    ></img>
                  </Grid>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
