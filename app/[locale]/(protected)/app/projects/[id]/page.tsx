import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import ProgressBlock from "@/components/blocks/progress-block";
import { Link } from '@/i18n/routing';

import { meets, tasks, messagesData, activityList, teamData, files } from "./data"
import Image from "next/image";
import DashboardDropdown from "@/components/dashboard-dropdown";

import TaskItem from "@/components/project/task-item";
import MessageListItem from "@/components/project/message-list-item";
import ActivityItem from "@/components/project/activity";
import TeamTable from "@/components/project/team-table";
import NotesCalendar from "@/components/project/notes-calendar";
import { getProjectById } from "../data";
import { Alert } from "@/components/ui/alert";

const SinglePage = async ({ params: { id } }: { params: { id: string }; }) => {
    const project = await getProjectById(id)
    if (!project) return <Alert color="destructive"> project id is not valid</Alert>
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-12 gap-5">

               



            </div>
           
           
        </div>
    )
}

export default SinglePage