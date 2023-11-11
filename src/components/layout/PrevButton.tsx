import { IconButton } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function PrevButton() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pb-2">
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <Outlet />
    </>
  );
}
