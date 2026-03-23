"use client";
import React from "react";
import styles from "./contact.module.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import * as Yup from "yup";
import { Formik } from "formik";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComponent from "../inputComponent/InputComponent";
import { website_email, website_phone ,contact_para} from "../data";

const Contact = () => {
  // ✅ Validation Schema
  const SignInSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Numbers only")
      .min(7, "At least 7 digits")
      .max(15, "Too long")
      .required("Required"),
    subject: Yup.string(),
    message: Yup.string().required("Required"),
  });

  const handleSubmitForm = (values, { resetForm, setSubmitting }) => {
    const { email, username, number, message, subject } = values;

    emailjs
      .send(
        "service_wu1qfte",
        "template_d4e8nji",
        {
          from_name: username,
          from_email: email,
          subject: subject,
          phone: number, // Make sure this matches your EmailJS template
          message: message,
        },
        "8uZ-MXEwIJo5TW-0O"
      )
      .then(
        (result) => {
          resetForm();
          setSubmitting(false); // ✅ Reset submitting state
          toast.success("Email Sent Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          setSubmitting(false); // ✅ Reset submitting state on error too
          toast.error("Email not sent. Please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Left Info Side */}
          <div className={styles.contactInfo}>
            <h4 className={styles.contactSubtitle}>Contact Us</h4>
            <h1 className={styles.contactTitle}>
              Get in touch with us
            </h1>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaPhone className={styles.icon_contact} />
                </div>
                <div>
                  <h3>Phone Number</h3>
                  <p className={styles.contactForm_para}>{website_phone}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaMailBulk className={styles.icon_contact} />
                </div>
                <div>
                  <h3>E-Mail</h3>
                  <a
                    href={`mailto:${website_email}`}
                    // className={styles.emailLink}
                    // className={styles.contactForm_para}
                  >
                    <p className={styles.contactForm_para}>{website_email}</p>
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <FaLocationDot className={styles.icon_contact} />
                </div>
                <div>
                  <h3>Address</h3>
                  <p className={styles.contactForm_para}>{website_phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className={styles.contactForm}>
            <p className={styles.Form_para}>
              Fill out the form below to connect with me. I'll get back to you
              soon to discuss your project or answer any questions.
            </p>

            <Formik
              initialValues={{
                email: "",
                username: "",
                number: "",
                subject: "",
                message: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={handleSubmitForm}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  {" "}
                  {/* ✅ Wrap in form for better accessibility */}
                  <div className={styles.formRow}>
                    <InputComponent
                      label="Name"
                      placeholder="Enter your first name"
                      value={values.username}
                      onChangeText={handleChange("username")}
                      error={
                        touched.username && errors.username
                          ? errors.username
                          : ""
                      }
                      type="text"
                      onBlur={handleBlur("username")}
                    />
                    <InputComponent
                      label="Email"
                      placeholder="Enter email address"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      error={touched.email && errors.email ? errors.email : ""}
                      type="email"
                      onBlur={handleBlur("email")}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <InputComponent
                      label="Subject"
                      placeholder="Enter Your Subject"
                      value={values.subject}
                      onChangeText={handleChange("subject")}
                      type="text"
                      error={
                        touched.subject && errors.subject ? errors.subject : ""
                      }
                      onBlur={handleBlur("subject")}
                    />

                    <InputComponent
                      label="Phone Number"
                      placeholder="Enter Your Phone Number"
                      value={values.number}
                      onChangeText={handleChange("number")}
                      error={
                        touched.number && errors.number ? errors.number : ""
                      }
                      type="tel" // ✅ Better for phone numbers
                      onBlur={handleBlur("number")}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <InputComponent
                      isMultiline
                      label="Enter your message"
                      placeholder="Enter Your Message"
                      value={values.message}
                      onChangeText={handleChange("message")}
                      error={
                        touched.message && errors.message ? errors.message : ""
                      }
                      onBlur={handleBlur("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.button_contact}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
