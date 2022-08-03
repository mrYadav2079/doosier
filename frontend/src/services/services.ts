import { webAuth } from "./webAuth";
import {
  experienceDetalis,
  educationDetalis,
  prefilledUserData,
  portfolioUrlData,
} from "./../components/utils/userData";
import { Icon } from "../components/utils/mapperFunction";
import API from "./API";
import { EducationUniversityDetails } from "../components/organisms/EducationDetails";
import { CertificateDetails } from "../components/organisms/Certifications";
import { ItemDataType } from "../components/molecules/slider";

export async function getEducationDetails(id: number) {
  const educationDetails = await API.get(`/education/${id}`);
  return educationDetails.data;
}
export async function upDateEducationDetails(
  item: EducationUniversityDetails,
  load: any,
  education: any,
  userId: number
) {
  education.forEach((t: any, index: number) => {
    if (index == item.id) {
      t.image = item.image;
      t.collegeName = item.collegeName;
      t.degree = item.degree;
      t.startDate = item.startDate;
      t.endDate = item.endDate;
    }
  });
  const data = {
    id: userId,
    details: education,
  };
  await API.put(`/education/${userId}`, data);
  load();
}

export async function savePublishData(
  publishedTypes: string[],
  userId: string,
  fileName: string
) {
  getUserById(userId).then(async (res) => {
    const resumes: any = [];
    publishedTypes.forEach((type: string, index) => {
      const resume = {
        id: 0,
        img: "assets/images/PortfolioImage1.svg",
        title: fileName,
        edited: "Edited 45 min ago",
      };
      resume.id = index + 1;
      resume.title = resume.title.concat(`.${type}`);
      resumes.push(resume);
    });
    res.resumes = resumes;
    await API.put(`/users/${userId}`, res);
  });
}

export async function getExperienceDetail(id: number) {
  const experienceData = await API.get(`experience/${id}`);
  return experienceData.data;
}
export async function addAwardsData(chipSelectedData: any, id: number) {
  let userData: any;
  await API.get(`users/${id}`).then((res: any) => {
    userData = res.data;
  });
  userData.awardsData = chipSelectedData;
  if (userData.slideScreens.includes("Awards") === false) {
    userData.slideScreens.push("Awards");
  }
  await API.put(`users/${id}`, userData);
}

export const getAwardsData = async (id: number) => {
  const awards = await API.get(`users/${id}`);
  return awards.data.awardsData;
};

export const getScreensData = async (id: number) => {
  const slideScreens = await API.get(`users/${id}`);
  return slideScreens.data.slideScreens;
};
export async function getAllStakeHolderIcons() {
  const iconData = await API.get(`stakeholder`);
  return iconData.data;
}

export async function updatePositionByOne(data: Icon) {
  const newData = {
    id: data.id,
    name: data.name,
    description: data.description,
    isColored: data.isColored,
    position: data.position + 1,
  };
  await API.put(`stakeholder/${data.id}`, newData);
}

export async function addStakeholderData(data: Icon) {
  await API.post(`stakeholder`, data);
}

export async function updateIconColor(data: Icon) {
  const newData = {
    id: data.id,
    name: data.name,
    description: data.description,
    isColored: !data.isColored,
    position: data.position,
  };
  await API.put(`stakeholder/${data.id}`, newData);
}

export async function updateNewIconChange(data: Icon) {
  await API.put(`stakeholder/${data.id}`, data);
}

export async function getUserById(id: string) {
  const userData = await API.get(`users/${id}`);
  return userData.data;
}

export async function updatePersonalDetalis(
  key: string,
  value: any,
  data: any
) {
  data[key.toLowerCase()] = value;
  await API.put(`users/${data.id}`, data);
}

export async function createNewUserInDb(id: any, userData: any) {
  const newUserData: any = prefilledUserData;
  newUserData["id"] = id;
  newUserData["email"] = userData.email;
  newUserData["userName"] = userData.firstName + " " + userData.lastName;
  await API.post(`users`, newUserData).catch((err) => {
    console.log(err);
  });
}
export async function addEducationDetalisToUser(id: any) {
  const userEducationDetalis: any = educationDetalis;
  userEducationDetalis["id"] = id;
  await API.post(`education`, userEducationDetalis).catch(
    (err) => {
      console.log(err);
    }
  );
}
export async function addExperinceDetalisToUser(id: any) {
  const userExperienceDetalis: any = experienceDetalis;
  userExperienceDetalis["id"] = id;
  await API.post(`experience`, userExperienceDetalis).catch(
    (err) => {
      console.log(err);
    }
  );
}
export async function addPortfolioUrlToUser(id: any) {
  const userPortfolioUrlData: any = portfolioUrlData;
  userPortfolioUrlData["id"] = id;
  await API.post(`portfolios`, userPortfolioUrlData).catch(
    (err) => {
      console.log(err);
    }
  );
}
export async function signUpUser(
  userData: any,
  setSigin: any,
  setError: any,
  setUserId: any
) {
  webAuth.signup(userData, function (err, result) {
    if (err) {
      setError(true);
    }
    if (!err) {
      setSigin(true);
      setError(false);
      setUserId(result.Id);
      createNewUserInDb(result.Id, userData);
      addEducationDetalisToUser(result.Id);
      addExperinceDetalisToUser(result.Id);
      addPortfolioUrlToUser(result.Id);
      return result._id;
    }
  });
}
export async function getUserUsingAccessToken(url: any, setUserId: any) {
  webAuth.parseHash({ hash: url.hash }, function (err, authResult) {
    if (err) {
      return console.log(err);
    }
    webAuth.client.userInfo(
      authResult?.accessToken || "",
      async function (_err, user) {
        const id = user.sub.split("|")[1];
        setUserId(id);
        console.log(id);
        const userData = await getUserById(id);
        updatePersonalDetalis("profileimage", user.picture, userData);
      }
    );
  });
}

export async function getCertificationDetails(id: number) {
  const data =  await API.get(`/users/${id}`);
  console.log(data);
  return data;
}
export async function updateCertificateDetails(
  item: CertificateDetails,
  load: any,
  id: string
) {
  getUserById(id).then(async (res: any) => {
    res.certifications.forEach((t: any) => {
      if (t.id == item.id) {
        t.Image = item.Image;
        t.name = item.name;
      }
    });
    await API.put(`/users/${id}`, res);
    load();
  });
}

export const updateSlideImage = async (
  dataUrl: any,
  id: number,
  userId: string
) => {
  getUserById(userId).then((res) => {
    res.sliderContents[id].img = dataUrl;
    API.put(`users/${userId}`, res);
  });
};

export const UpdateNewSlide = async (userId: string) => {
  getUserById(userId).then((res) => {
    const item: ItemDataType = {
      id: 11,
      title: "7.Awards",
      img: "https://i.ibb.co/vc2vZ2Q/Screen-12-1.png",
    };
    res.sliderContents.push(item);
    API.put(`users/${userId}`, res);
  });
};
