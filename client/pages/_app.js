if (typeof window !== "undefined") {
  require("../loader");
  require("bootstrap");
  require("bootstrap/dist/css/bootstrap.min.css");
  require("../assets/js/bootstrap.min.js");
  require("../styles/globals.css");
  require("../assets/css/style.css");
  require("../assets/css/map.css");
  require("../assets/js/bootstrap.min.js");
  require("react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css");
}
// boostrap
//Datatable Modules
import DataTable from "datatables.net";
import Datatable4 from "datatables.net-bs4";
import AppProvider from "../vertoComponents/api/AppContext"

//fontawesome
import "../assets/plugins/fontawesome/css/all.css";
import "../assets/plugins/fontawesome/css/all.min.css";
import "../assets/plugins/fontawesome/css/fontawesome.min.css";
import "react-select2-wrapper/css/select2.css";
import "react-datepicker/dist/react-datepicker.css";

//style
require("../assets/plugins/slimscroll/jquery.slimscroll.min.js");
import "../assets/plugins/datatables/datatables.min.css";
import "../assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css";

//fullcalendar
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import { AuthContextProvider } from "../store/authStore";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <AuthContextProvider>
      {/* <AppProvider>
      </AppProvider> */}
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
