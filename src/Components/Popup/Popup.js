import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal, Box, Typography } from "@mui/material";
import "./Popup.css";

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 750);
  }, []);
  return (
    <div className="modal">
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "75%",
            minWidth: "200px",
            maxWidth: "330px",
            height: {
              xs: "auto",
              sm: "280px",
            },
            background: "var(--color-white)",
            textAlign: "center",
            padding: {
              xs: "30px 25px 45px 25px",
              sm: "30px 25px",
            },
            outline: "none",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
            borderRadius: "5px",
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="close-modal"
            onClick={() => handleClose()}
          />
          <div style={{ paddingTop: "20px" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: {
                  xs: "16px",
                  sm: "20px",
                },
              }}
            >
              Welcome to our shop!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                fontFamily: "Playfair Display, serif",
                lineHeight: "30px",
                fontSize: {
                  xs: "13px",
                  sm: "16px",
                },
              }}
            >
              Here you will find the latest products and special offers. Get
              inspired and enjoy your shopping experience today.
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

