import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";
import LeftMenu from "./common/leftMenu/LeftMenu";
import ScreenStack from "./common/screen-stack/ScreenStack";

//user-settings screen
import AcademicInstitution from "./user-settings/academic-institution/AcademicInstitution";
import User from "./user-settings/user/User";
import Institution from "./user-settings/institution/Institution";
import UserHeader from "./user-settings/user-header/UserHeader";
import MainSelector from "./user-settings/main-selector/MainSelector";
import ImagePickerComponent from "./user-settings/image-picker/ImagePicker";
import UserFooter from "./user-settings/user-footer/UserFooter";

//hiring
import UserContainer from "./hiring/user-container/UserContainer";

export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  LeftMenu,
  AcademicInstitution,
  User,
  Institution,
  UserHeader,
  MainSelector,
  ScreenStack,
  ImagePickerComponent,
  UserContainer,
  UserFooter,
};
