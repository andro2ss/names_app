import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export function drawItem() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return Item;
}
