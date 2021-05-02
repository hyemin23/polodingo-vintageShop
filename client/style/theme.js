import { defaultConfig } from "next/dist/next-server/server/config-shared";

const deviceSize = {
    mobile: "500px",
    tablet: "992px",
    laptop: "1200px"
};

const device = {
    mobile: `screen and (max-width: ${deviceSize.mobile})`,
    tablet: `screen and (max-width: ${deviceSize.tablet})`,
    laptop: `screen and (max-width: ${deviceSize.laptop})`,
};

const devices = {
    device
};

const mobileMaxWidth = "500";
export const isMobile = `@media only screen and (max-width:${mobileMaxWidth}px)`;

export default devices;

