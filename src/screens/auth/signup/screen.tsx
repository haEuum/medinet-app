import React from "react";
import StepContainer from "src/components/steps";
import Index from "src/components/common/topAppBar";
import Layout from "src/components/common/layout";

const SignUp = () => {
    return (
        <Layout>
            <Index/>
            <StepContainer/>
        </Layout>
    );
};

export default SignUp;
