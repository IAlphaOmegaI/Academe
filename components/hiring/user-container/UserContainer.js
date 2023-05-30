import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

import UserCard from "../user-card/UserCard";
import CompanyCard from "../company-card/CompanyCard";
import UserSlider from "../user-slider/UserSlider";

import styles from "./UserContainer.style";

const UserContainer = (props) => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    try {
      const userCollection = collection(db, props.request);
      const snapshot = await getDocs(userCollection);
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsersData(users);
    } catch (error) {
      console.error("Error retrieving collection: ", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      {props.request === "user" ? (
        <View>
          <View style={styles.employees}>
            <Text style={styles.employeesText}>Employees of the Month!</Text>
            <Text style={styles.employeesSubText}>
              Get to know the Employees of{" "}
              {new Date().toLocaleDateString("default", { month: "long" })}
            </Text>
            <UserSlider data={usersData.slice(0, 3)} />
          </View>
          {usersData.reverse().map((user, index) => (
            <UserCard key={user.id} user={user} />
          ))}
        </View>
      ) : props.request === "company" ? (
        usersData.map((company, index) => (
          <CompanyCard company={company} key={company.id} />
        ))
      ) : null}
    </View>
  );
};

export default UserContainer;
