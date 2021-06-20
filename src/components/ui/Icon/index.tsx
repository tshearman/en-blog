import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faFilePdf, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faCodeBranch,
  faUnlockAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

/* add any additional icon to the library */
library.add(
  faFile,
  faFilePdf,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faCodeBranch,
  faUnlockAlt,
  faLinkedinIn,
  faGithub
);

interface Props {
  name: string;
  library: string;
}

const Icon: React.FC<Props> = ({ name, library }) => (
  <FontAwesomeIcon icon={[library as IconPrefix, name as IconName]} />
);

export default Icon;
