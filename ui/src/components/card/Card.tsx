import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";

import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import "./card.css";
import RadioPix from "../radio/Radio";

export default function CardPix() {
  return (
    <Card
      sx={{
        width: "320px",
        boxShadow: "none",
        border: "1px solid #E5E5E5",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <CardContent>
        <Typography>1x de R$ 30.500,00</Typography>
        <Typography
          sx={{
            color: "#03D69D",
            fontWeight: "bold",
          }}
        >
          Ganhe 3% de Cashback
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <RadioGroup>
            <FormControlLabel value="" control={<RadioPix />} label="" />
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  );
}
