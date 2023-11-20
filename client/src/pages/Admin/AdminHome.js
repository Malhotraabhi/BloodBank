import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to our Blood Bank! We are dedicated to saving lives by
            providing a critical and essential service in our community. Our
            mission is to ensure a safe and ample supply of blood for those in
            need. Our state-of-the-art facilities and highly trained staff work
            tirelessly to collect, store, and distribute life-saving blood and
            blood products. Whether it's for emergency situations, surgeries,
            medical conditions, or ongoing treatments, we're here to make sure
            that every drop of blood counts. Your generous blood donations and
            support play a vital role in making a positive impact on the lives
            of countless individuals. Join us in this noble cause and be a part
            of our mission to give the gift of life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
