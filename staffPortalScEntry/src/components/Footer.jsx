import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Footer(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://www.sunbeaminfo.com/">
      Sunbeam
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
    );
}

export default Footer;

// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-light text-center py-3 mt-auto" style={{textAlign:"center"}} >
//       <p className="mb-0 text-muted"   >
//         ©{" "}
//         <a
//           href="https://www.sunbeaminfo.com/"
//           className="text-decoration-none text-secondary"
//         >
//           Sunbeam
//         </a>{" "}
//         {new Date().getFullYear()}.
//       </p>
//     </footer>
//   );
// }

// export default Footer;
