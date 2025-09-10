"use client";
import {Button, Input} from "@heroui/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Eye} from "phosphor-react";
import React, {useState} from "react";

export const FormExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters or less"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be at least 6 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .min(6, "Must be at least 6 characters")
        //validate confirmPassword phải giống password
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Username"
        value={formik.values.username}
        onValueChange={(value) => formik.setFieldValue("username", value)}
        //!!: tức là nó trả về true nếu giá trị là trusy, khác rống, null, undefined
        //!1: trả về false nếu giá trị là falsy, rỗng, null, undefined
        isInvalid={!!(formik.touched.username && formik.errors.username)}
        errorMessage={formik.errors.username}
        onBlur={() => formik.setFieldTouched("username", true)}
      />
      <Input
        label="Password"
        value={formik.values.password}
        onValueChange={(value) => formik.setFieldValue("password", value)}
        isInvalid={!!(formik.touched.password && formik.errors.password)}
        errorMessage={formik.errors.password}
        onBlur={() => formik.setFieldTouched("password", true)}
        type={showPassword ? "text" : "password"}
        endContent={<Eye onClick={() => setShowPassword(!showPassword)} />}
      />
      <Input
        label="Confirm"
        value={formik.values.confirmPassword}
        onValueChange={(value) =>
          formik.setFieldValue("confirmPassword", value)
        }
        isInvalid={
          !!(formik.touched.confirmPassword && formik.errors.confirmPassword)
        }
        errorMessage={formik.errors.confirmPassword}
        onBlur={() => formik.setFieldTouched("confirmPassword", true)}
        type={showPassword ? "text" : "password"}
        endContent={<Eye onClick={() => setShowPassword(!showPassword)} />}
      />
      <Button
        color="primary"
        isDisabled={!formik.isValid}
        onPress={() => formik.submitForm()}
        isLoading={formik.isSubmitting}
      >
        Submit
      </Button>
    </div>
  );
};
