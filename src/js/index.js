'use strict'

// object-fit and object-position polyfill
// =============================================================//
import objectFitImages from 'object-fit-images';
// =============================================================//


// svg-sprite polyfill
// =============================================================//
import svg4everybody from 'svg4everybody';
// =============================================================//

objectFitImages();
svg4everybody();
// polyfill
// =============================================================//
import './lib/polyfills';
// =============================================================//

import './common/main';
import './common/modal';
import './common/menu';
import './common/work';
import './common/paralax';
import './common/paralax-scroll';
import './common/works-slider';
import './common/skills';
import './common/map';
import './common/fixed-aside';
