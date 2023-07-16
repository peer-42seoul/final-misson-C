import { Backdrop, CircularProgress } from "@mui/material";
import BasicModal from "./BasicModal";

const LoadingBackdrop: React.FC<{
  isLoading: boolean;
  hasError: boolean;
  setHasError: (status: boolean) => void;
}> = (props) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.isLoading}
      >
        {" "}
        <CircularProgress color="inherit" />
      </Backdrop>
      <BasicModal
        title="Something went wrong"
        open={props.hasError}
        setOpen={props.setHasError}
      />
    </div>
  );
};

export default LoadingBackdrop;
