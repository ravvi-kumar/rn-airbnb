import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Page = () => {
  const { isSignedIn, signOut } = useAuth();
  return (
    <View>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;
