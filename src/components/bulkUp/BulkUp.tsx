import * as React from "react";
import {
  Container,
  Box,
  Fade,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  TextField,
} from "@mui/material";
import styled from "styled-components";

const Result = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  margin-top: 50px;
  border-top: 1px solid #d7d7d7;
  padding-top: 20px;
`;

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

function BulkUp() {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <>
      <div className="main-container">
        <Container>
          <Box sx={{ height: "100%", textAlign: "center" }}>
            <Box sx={{ display: "block" }}>
              <Fade in={true}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom color="black" component="div">
                      벌크업 튜토리얼
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <div style={{ display: "inline-grid" }}>
                      <TextField
                        variant="filled"
                        color="success"
                        focused
                        id="outlined-number"
                        label="사용중량"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        variant="filled"
                        color="success"
                        focused
                        id="outlined-number"
                        label="반복횟수"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <Result>
                      <Typography marginRight={2} color="black">
                        당신의 1RM은{" "}
                      </Typography>
                      <TextField
                        label="계산결과"
                        color="secondary"
                        focused
                        disabled
                        size="small"
                        style={{ width: "150px" }}
                      />
                      <Typography marginLeft={2} color="black">
                        입니다.
                      </Typography>
                    </Result>
                  </CardContent>
                  <CardActions style={{ alignContent: "center" }}>
                    <Button variant="outlined" color="success" size="small">
                      확인
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      정정
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default BulkUp;
