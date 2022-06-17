/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import './Page/Page';
import './Text/Text';
import './Container/Container';
import './ExperienceFragment/ExperienceFragment';
import './BananaButton/bananaButton';
import TestReactComponent from './TestReactComponent/TestReactComponent';
import BananaCard from './BananaCard/BananaCard';
import BananaCardList from './BananaCardList/BananaCardList';
import {MapTo} from '@adobe/aem-react-editable-components';


import {
    ContainerV1, ContainerV1IsEmptyFn,
    TabsV1, TabsV1IsEmptyFn,
    AccordionV1,AccordionV1IsEmptyFn,
    CarouselV1,CarouselV1IsEmptyFn
} from '@adobe/aem-core-components-react-spa';

import {
    TitleV2,TitleV2IsEmptyFn,
    BreadCrumbV2,BreadCrumbV2IsEmptyFn,
    ButtonV1,ButtonV1IsEmptyFn,
    ImageV2,ImageV2IsEmptyFn,
    LanguageNavigationV1,
    NavigationV1,
    TeaserV1,TeaserV1IsEmptyFn,
    DownloadV1,DownloadV1IsEmptyFn,
    SeparatorV1,SeparatorV1IsEmptyFn,
    ListV2,ListV2IsEmptyFn
} from '@adobe/aem-core-components-react-base';

MapTo('bananaReact/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('bananaReact/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('bananaReact/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo('bananaReact/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('bananaReact/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('bananaReact/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo('bananaReact/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo('bananaReact/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});

MapTo('bananaReact/components/navigation')(NavigationV1);
MapTo('bananaReact/components/languagenavigation')(LanguageNavigationV1);

MapTo('bananaReact/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo('bananaReact/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo('bananaReact/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo('bananaReact/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});
MapTo('bananaReact/components/bananaTestComp')(TestReactComponent);

MapTo('bananaReact/components/bananaCard')(BananaCard,{emptyLabel: 'Banana Card',isEmpty: function (props){
    console.log("Empptyy ",props);
    return !props.text;
}})

MapTo('bananaReact/components/bananaCardList')(BananaCardList,{
    emptyLabel : 'Banana Card List',
    isEmpty: function (props) {
        return !props || !props.bananaCardList;
    }
});