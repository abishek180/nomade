import Page from "@/components/page";
import Footer from "@/components/footer";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import ImageScroll from "@/components/imagescroll";
import { ImLocation } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";


function Contact() {
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },

    enableReinitialize: true,

    validateOnChange: false,

    validationSchema: yup.object().shape({
      firstname: yup.string().required("Required"),
      lastname: yup.string().required("Required"),
      email: yup.string().required("Must be a valid email address"),
    }),

    onSubmit: async (e) => {
      console.log(e);

      emailjs
        .send(
          "service_qd6cmqg",
          "template_b7i3evk",
          {
            firstname: e.firstname,
            lastname: e.lastname,
            email: e.email,
          },
          "6t6iLK760DTrIj2Fk"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setMessage(
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-[#E5B250] text-center">
                    Thanks for getting in touch. Our team will contact you
                    within 48 hours.
                  </span>
                </div>
              );
            }
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <Page>
      <div className="max-w-screen-xl mx-auto px-[16px]">
        <div className="flex flex-col lg:flex lg:flex-row gap-20 bg-[#fff] dark:bg-black py-20">
          <div className="flex flex-col justify-between items-center">
            <form
              class="flex flex-col"
              action={"submit"}
              onSubmit={formik.handleSubmit}
            >
              <div class="mb-6 flex gap-2">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-first-name"
                  >
                    {" "}
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[3px] py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    YOUR
                    NAME
                    placeholder=""
                    value={formik.values.firstname}
                    onChange={(e) => {
                      console.log(e.target.value);
                      formik.setFieldValue("firstname", e.target.value);
                    }}
                  />
                  {formik.errors.firstname && (
                    <p className="text-[red] text-[14px] mb-[6px]">
                      {formik.errors.firstname}
                    </p>
                  )}
                </div>
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-last-name"
                  >
                    {" "}
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[3px] py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name"
                    type="text"
                    YOUR
                    NAME
                    placeholder=""
                    value={formik.values.lastname}
                    onChange={(e) => {
                      console.log(e.target.value);
                      formik.setFieldValue("lastname", e.target.value);
                    }}
                  />
                  {formik.errors.lastname && (
                    <p className="text-[red] text-[14px] mb-[6px]">
                      {formik.errors.lastname}
                    </p>
                  )}
                </div>
              </div>
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-email"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[3px] py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-email"
                    type="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={(e) => {
                      console.log(e.target.value);
                      formik.setFieldValue("email", e.target.value);
                    }}
                  />
                  {formik.errors.email && (
                    <p className="text-[red] text-[14px] mb-[6px]">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-message"
                  >
                    Message
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[3px] py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-message"
                    type="text"
                    placeholder=""
                    value={formik.values.message}
                    onChange={(e) => {
                      console.log(e.target.value);
                      formik.setFieldValue("message", e.target.value);
                    }}
                  />
                  {formik.errors.message && (
                    <p className="text-[red] text-[14px] mb-[6px]">
                      {formik.errors.message}
                    </p>
                  )}
                </div>
              </div>
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-details"
                  >
                    Additional Details
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[3px] py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-details"
                    type="text"
                    placeholder=""
                    value={formik.values.details}
                    onChange={(e) => {
                      console.log(e.target.value);
                      formik.setFieldValue("details", e.target.value);
                    }}
                  />
                  {formik.errors.details && (
                    <p className="text-[red] text-[14px] mb-[6px]">
                      {formik.errors.details}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="px-[64px] py-[17px] bg-[#E5B250] rounded-[5px] text-[20px] font-bold text-[#FFFFFF] w-full hover:bg-[#F87B50]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-5">{message}</div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col gap-10">
              <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-semibold dark:text-white">
                Contact Information
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <ImLocation />
                </span>
                #7th Street, abc , Mauritania North West Africa 425680{" "}
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <LuPhone />
                </span>
                41165116
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <IoMdMail />
                </span>
                mail@dvjnv
              </p>
            </div>
            <div>
              <div className="w-auto lg:w-[600px]">
                <p className="pb-3 text-[#080C2E] dark:text-[#fff] text-[20px]">
                  Trusted by
                </p>
                <ImageScroll />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}

export default Contact;
