import { Box, Tooltip, Typography } from "@mui/material";

const TypographyWithIcon = ({
  text,
  icon,
  fontSize,
  color,
  fontfamily,
  fontWeight,
  tooltip,
  ...rest
}) => {
  return (
    <Typography {...rest} component="div">
      <Tooltip title={tooltip} arrow>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {icon}
          <Box sx={{ ml: 1 }} fontWeight={fontWeight} fontSize={fontSize}>
            {text}
          </Box>
        </Box>
      </Tooltip>
    </Typography>
  );
};

export default TypographyWithIcon;
