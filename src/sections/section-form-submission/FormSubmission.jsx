import React from "react";
import style from "./formsubmission.module.css";
import theme from "@/app/theme";

import SubmitGif from "../../../public/submit-gif.gif";
import SuccessGif from "../../../public/success-gif.gif";
import FailureGif from "../../../public/failure-gif.gif";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function FormSubmission(props) {
  return (
    <div
      style={{ backgroundColor: theme.submittingBlack }}
      className={style.container}
    >
      {props.submitted ? (
        <button
          className={style.closeButton}
          style={{ color: theme.white }}
          onClick={props.clearState}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      ) : (
        ""
      )}
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
                <a
                  style={{ color: theme.white }}
                  className={style.errorEmail}
                  href={"mailto:info@necti.io"}
                >
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

export default FormSubmission;
