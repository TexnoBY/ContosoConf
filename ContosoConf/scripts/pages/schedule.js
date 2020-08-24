import { LocalStarStorage } from "../LocalStarStorage.js";
import { ScheduleList } from "../ScheduleList.js";


const element = document.getElementById("schedule");
const localStarStorage = new LocalStarStorage(localStorage);
const scheduleLst = new ScheduleList(element, localStarStorage);
scheduleLst.startDownload();
