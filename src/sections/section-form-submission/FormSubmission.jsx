import React from "react";
import style from "./formsubmission.module.css";
import theme from "@/app/theme";

import SubmitGif from "../../../public/submit-gif.gif";
import SuccessGif from "../../../public/success-gif.gif";
import FailureGif from "../../../public/failure-gif.gif";
import Image from "next/image";

function FormSubmission(props) {
  return (
    <div
      style={{ backgroundColor: theme.submittingBlack }}
      className={style.container}
    >
      <div className={style.spinnerContainer}>
        {props.submitted ? (
          props.successState ? (
            <div className={style.innerContainer}>
              {/* Success state with text */}
              <Image src={SuccessGif} alt="Success" width={100} height={100} />
              <p style={{ color: theme.white }} className={style.alertText}>
                Submission successful! <br /> We will contact you within 24-48
                hours!
              </p>
            </div>
          ) : (
            <div className={style.innerContainer}>
              {/* Failure state with text */}
              <Image src={FailureGif} alt="Failure" width={100} height={100} />
              <p style={{ color: theme.white }} className={style.alertText}>
                Submission failed! <br /> Please try again or contact us at{" "}
                <a className={style.errorEmail} href={"mailto:info@necti.io"}>
                  info@necti.io
                </a>
                .
              </p>
            </div>
          )
        ) : (
          <div>
            {/* Submitting state */}
            <Image src={SubmitGif} alt="Submitting" width={100} height={100} />
            {/* Optionally, you can add text here if needed */}
          </div>
        )}
      </div>
    </div>
  );
}

// {props.submitted ? (
//   <div>
//     <Image
//       src={props.successState ? SuccessGif : FailureGif}
//       alt={props.submitted ? "Successful" : "Failure"}
//       width={100}
//       height={100}
//     />
//   </div>
// ) : (
//   <Image
//     src={SubmitGif}
//     alt={props.submitted ? "Submitted" : "Submitting"}
//     width={100}
//     height={100}
//   />
// )}
export default FormSubmission;
