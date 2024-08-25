import { AdsClickIcon, ArrowRightAltIcon, BackHandIcon, ChangeHistoryIcon, Crop169Icon, DrawIcon, HorizontalRuleIcon, ImageSearchIcon, LockOpenIcon, PanoramaFishEyeIcon, TextFieldsIcon } from '../Icons/Icons'

const tool_data = [
    {   
        name:"lock",
        action:"lockitem",
        icon:LockOpenIcon,
    },
    {
        name:"hand",
        action:"handitem",
        icon:BackHandIcon,
    },
    {
        name:"select",
        action:"selectitem",
        icon:AdsClickIcon,
    },
    {
        name:"rectangle",
        action:"rectangleitem",
        icon:Crop169Icon,
    },
    {
        name:"triangle",
        action:"triangleitem",
        icon:ChangeHistoryIcon,
    },
    {
        name:"circle",
        action:"circleitem",
        icon:PanoramaFishEyeIcon,
    },
    {
        name:"leftarrow",
        action:"leftarrowitem",
        icon:ArrowRightAltIcon,
    },
    {
        name:"line",
        action:"lineitem",
        icon:HorizontalRuleIcon,
    },
    {
        name:"draw",
        action:"drawitem",
        icon:DrawIcon,
    },
    {
        name:"image",
        action:"imageitem",
        icon:ImageSearchIcon,
    },
    {
        name:"inserttext",
        action:"inserttextitem",
        icon:TextFieldsIcon,
    }
]


export {tool_data};