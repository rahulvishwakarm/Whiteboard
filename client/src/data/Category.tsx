import { DiscordOutlined, GithubOutlined, TwitterOutlined } from "@ant-design/icons";
import { AddPhotoAlternateIcon, SendToMobileOutlinedIcon, DrawOutlinedIcon, FolderOpenIcon, GroupsIcon, HelpOutlineIcon, RestoreIcon, SaveAltIcon } from "../Icons/Icons";

const category_data = [
    {
        name: "openFolder",
        label:"Open",
        shortCut:"Ctrl+O",
        action:"openFolderitem",
        icon: FolderOpenIcon,
    },
    {
        name: "saveAs",
        label:"Save to...",
        shortCut:"",
        action: "saveAsitem",
        icon: SaveAltIcon,
    },
    {
        name: "exportImage",
        label:"Export",
        shortCut:"Ctrl+Shift+E",
        action:"exportImageitem",
        icon: AddPhotoAlternateIcon,
    },
    {
        name: "liveCollaboration",
        label:"Live Collobration...",
        shortCut:"",
        action:"liveCollaborationitem",
        icon: GroupsIcon,
    },
    {
        name: "help",
        label:"Help",
        shortCut:"?",
        action:"helpitem",
        icon: HelpOutlineIcon,
    },
    {
        name: "resetCanvas",
        label:"Reset the canvas",
        shortCut:"",
        action:"resetCanvasitem",
        icon: RestoreIcon,
    }
]

const category_data_socials = [
    {
        name: "excalDram",
        label:"ExcalDraw+",
        action:"excalDramitem",
        icon: DrawOutlinedIcon,
    },
    {
        name: "github",
        label:"GitHub",
        action: "githubitem",
        icon: GithubOutlined,
    },
    {
        name: "twitter",
        label:"Follow Us",
        action:"twitteritem",
        icon: TwitterOutlined,
    },
    {
        name: "discord",
        label:"Discord chat",
        action:"discorditem",
        icon: DiscordOutlined,
    },
    {
        name: "signUp",
        label:"Sign Up",
        action:"signUpitem",
        icon: SendToMobileOutlinedIcon,
    }
]

export {category_data, category_data_socials};