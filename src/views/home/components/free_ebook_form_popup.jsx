import React from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function FreeEbookFormPopUp() {
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data", fullName, email, mobileNumber);


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography
                        className="responsive__fontsize18"
                        sx={{
                            fontWeight: "600",
                            lineHeight: "21px",
                            color: "secondary.secondary_600",
                            textTransform: "uppercase",
                        }}
                    >
                        INNER EYE
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "300",
                            color: "secondary.secondary_600",
                            mt: "7px",
                        }}
                        className="responsive__fontsize14"
                    >
                        Request For Free Ebook
                    </Typography>
                </Box>

                <Box mt="1rem" sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField id="full-name" label="Full Name" variant="outlined" size="small" margin="dense" value={fullName}
                        onChange={(e) => setFullName(e.target.value)} />

                    <TextField fullWidth type="tel" id="mobile-number" label="Mobile Number" variant="outlined" size="small" margin="dense" value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)} />

                    <TextField fullWidth type="email" id="email" label="Email" variant="outlined" size="small" margin="dense" value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <Button type="submit" variant="contained" sx={{ backgroundColor: "secondary.main", color: "white" }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </>
    );
}

export default FreeEbookFormPopUp;