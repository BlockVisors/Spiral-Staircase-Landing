"use client";
import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";

type Props = {};
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function NewsLetter({}: Props) {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={totalCounts}
          run={run}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      {/* <div className="w-full h-70% p-5 md:p-6 space-y-5 bg-white shadow-md rounded-xl md:max-w-[600px]"> */}
      <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
        {/* Header and description */}
        <div className="pb-2 space-y-6">
           <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Subscribe to The Spiral Staircase Newsletter!
          </h2>
          
        </div>
        <div className="pb-2 space-y-6">
          
          <p className="text-gray-600">
            Receive notifications of our events and developments. Stay informed on membership packages and offerings. 
          </p>
        </div>
        <div className="pb-2 space-y-6">
          
          <p className="text-gray-600 mb-6">
         We welcome you to join our community. You will receive a monthly email from me, ensuring a
            spam-free experience.
          </p>
        </div>
        {/* Formik */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={requiredSchema}
          onSubmit={async (values, { resetForm }) => {
            setButtonDisabled(true);
            try {
              const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values?.email,
                }),
              });
              const datas = await response.json();
              if (datas.status >= 400) {
                setStatus(datas.status);
                setMessage(
                  "Error joining the newsletter. You can directly contact us at info@spiralstaircase.com"
                );
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }

              setStatus(201);
              setMessage("Thank you for subscribing to The Spiral Staircase 👻.");
              setShowConfetti(true);
              setRun(true);
              setTimeout(() => {
                setTotalCounts(0);
                setMessage("");
                resetForm();
                setButtonDisabled(false);
              }, 4000);
              setTotalCounts(400);
            } catch (error) {
              setStatus(500);
              setMessage(
                "Error joining the newsletter. You can directly contact us at info@spiralstaircase.com"
              );
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
            }
          }}
        >
          <Form>
            <div className="flex items-center space-x-2 space-y-10 mb-8">
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-white rounded-md outline-none grow text-black"
                placeholder="Enter your email"
                autoComplete="off"
              />
              {/* <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button> */}
            </div>
            <div className="flex flex-col items-center justify-center">
              {/* <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email"
                autoComplete="off"
              /> */}
             <button className="rounded-md bg-venus py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
}