import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../features/auth/authSlice";
import { fetchUser } from "../features/auth/authSlice";
import Loading from "./Loading";
const Profile = () => {
    const dispatch = useDispatch();
    const userQuery = useSelector(userSelector);
    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);
    return userQuery.user ? (
      <Layout>
        <div>Profile</div>
      </Layout>
    ) : (
      <Loading />
    );
}

export default Profile